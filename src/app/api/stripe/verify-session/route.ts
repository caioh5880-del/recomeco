import { NextResponse } from "next/server";
import { getStripeServer } from "@/lib/stripe/config";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { sessionId } = body;

    if (!sessionId) {
      return NextResponse.json({ error: "Identificador da sessão ausente." }, { status: 400 });
    }

    const stripe = getStripeServer();

    if (!stripe) {
      return NextResponse.json({
        verified: true,
        simulated: true,
        plan: "monthly"
      });
    }

    const session = await stripe.checkout.sessions.retrieve(sessionId);

    const isPaid = session.payment_status === "paid" || session.status === "complete";

    if (!isPaid) {
      return NextResponse.json(
        { verified: false, status: session.payment_status },
        { status: 400 }
      );
    }

    return NextResponse.json({
      verified: true,
      plan: session.metadata?.plan || "monthly",
      userId: session.metadata?.userId || session.client_reference_id,
      email: session.customer_email
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Erro ao verificar sessão da Stripe";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
