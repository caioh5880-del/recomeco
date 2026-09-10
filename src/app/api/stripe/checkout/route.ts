import { NextResponse } from "next/server";
import { getStripeServer, STRIPE_CONFIG } from "@/lib/stripe/config";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { plan = "monthly", userId, userEmail } = body;

    if (!userId || !userEmail) {
      return NextResponse.json(
        { error: "É necessário estar conectado com uma conta para assinar o Plus." },
        { status: 400 }
      );
    }

    const selectedPlan = plan === "annual" ? STRIPE_CONFIG.annual : STRIPE_CONFIG.monthly;
    const stripe = getStripeServer();

    if (!stripe) {
      return NextResponse.json({
        simulated: true,
        message: "Stripe em modo demonstração. Adicione STRIPE_SECRET_KEY para pagamentos reais.",
        plan: selectedPlan.id
      });
    }

    const origin = request.headers.get("origin") || "https://recomeco-three.vercel.app";

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card", "pix"],
      line_items: [
        {
          price_data: {
            currency: "brl",
            product_data: {
              name: selectedPlan.name,
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
        plan: selectedPlan.id
      },
      success_url: `${origin}/?plus_success=true&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/?plus_canceled=true`
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Erro ao gerar sessão de checkout";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
