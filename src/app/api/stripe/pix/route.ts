import { NextResponse } from "next/server";
import { getStripeServer, STRIPE_CONFIG } from "@/lib/stripe/config";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { plan = "annual", userId, userEmail } = body;

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
        { error: "A integração com a Stripe não está configurada no servidor. Defina STRIPE_SECRET_KEY." },
        { status: 503 }
      );
    }

    try {
      const paymentIntent = await stripe.paymentIntents.create({
        amount: selectedPlan.priceInCents,
        currency: "brl",
        payment_method_types: ["pix"],
        payment_method_data: {
          type: "pix"
        },
        confirm: true,
        description: selectedPlan.name,
        metadata: {
          userId,
          userEmail,
          plan: selectedPlan.id,
          paymentMethod: "pix"
        }
      });

      const pixAction = paymentIntent.next_action?.pix_display_qr_code;

      if (!pixAction?.data) {
        return NextResponse.json(
          { error: "Não foi possível gerar os dados do QR Code Pix na Stripe." },
          { status: 500 }
        );
      }

      return NextResponse.json({
        paymentIntentId: paymentIntent.id,
        qrCodeUrl: pixAction.image_url_png || pixAction.image_url_svg,
        qrCodeData: pixAction.data,
        expiresAt: pixAction.expires_at,
        planName: selectedPlan.name,
        priceFormatted: selectedPlan.priceFormatted
      });
    } catch (stripeError) {
      const errMsg = stripeError instanceof Error ? stripeError.message : "Erro na criação do Pix";
      if (errMsg.toLowerCase().includes("pix is invalid") || errMsg.toLowerCase().includes("activated in your dashboard")) {
        return NextResponse.json(
          {
            error: "O método Pix ainda não foi ativado no painel da Stripe. Para ativar: acesse https://dashboard.stripe.com/settings/payment_methods e ative o Pix na seção de métodos de pagamento."
          },
          { status: 400 }
        );
      }
      return NextResponse.json({ error: errMsg }, { status: 500 });
    }
  } catch (error) {
    const message = error instanceof Error ? error.message : "Erro inesperado ao gerar Pix";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
