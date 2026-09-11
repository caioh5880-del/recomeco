import { NextResponse } from "next/server";
import { getStripeServer, STRIPE_CONFIG } from "@/lib/stripe/config";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { plan = "annual", paymentMethod = "card", userId, userEmail } = body;

    if (!userId || !userEmail) {
      return NextResponse.json(
        { error: "É necessário estar conectado com sua conta para assinar o Plus." },
        { status: 400 }
      );
    }

    const selectedPlan = plan === "monthly" ? STRIPE_CONFIG.monthly : STRIPE_CONFIG.annual;
    const stripe = getStripeServer();

    if (!stripe) {
      return NextResponse.json(
        { error: "A integração com a Stripe não está configurada no servidor. Defina STRIPE_SECRET_KEY no painel de ambiente." },
        { status: 503 }
      );
    }

    const origin = request.headers.get("origin") || "https://recomeco-three.vercel.app";
    const paymentTypes: ("card" | "pix")[] = paymentMethod === "pix" ? ["pix"] : ["card"];

    const session = await stripe.checkout.sessions.create({
      payment_method_types: paymentTypes,
      line_items: [
        {
          price_data: {
            currency: "brl",
            product_data: {
              name: `${selectedPlan.name} (${paymentMethod === "pix" ? "Pix" : "Cartão"})`,
              description: selectedPlan.description,
              images: ["https://recomeco-three.vercel.app/icon.png"]
            },
            unit_amount: selectedPlan.priceInCents
          },
          quantity: 1
        }
      ],
      mode: "payment",
      customer_email: userEmail,
      client_reference_id: userId,
      metadata: {
        userId,
        userEmail,
        plan: selectedPlan.id,
        paymentMethod
      },
      success_url: `${origin}/?plus_success=true&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/?plus_canceled=true`
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Erro ao gerar checkout da Stripe";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
