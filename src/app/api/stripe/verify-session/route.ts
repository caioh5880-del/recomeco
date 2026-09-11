import { NextResponse } from "next/server";
import { getStripeServer } from "@/lib/stripe/config";
import { createClient } from "@supabase/supabase-js";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { sessionId } = body;

    if (!sessionId || typeof sessionId !== "string") {
      return NextResponse.json(
        { verified: false, error: "Identificador da sessão ausente ou inválido." },
        { status: 400 }
      );
    }

    const stripe = getStripeServer();

    if (!stripe) {
      return NextResponse.json(
        {
          verified: false,
          error: "Serviço de pagamentos da Stripe não configurado no servidor."
        },
        { status: 503 }
      );
    }

    const session = await stripe.checkout.sessions.retrieve(sessionId);

    const isPaid = session.payment_status === "paid";

    if (!isPaid) {
      return NextResponse.json(
        {
          verified: false,
          paymentStatus: session.payment_status,
          status: session.status,
          error: "Pagamento ainda não confirmado pela Stripe."
        },
        { status: 402 }
      );
    }

    const userId = session.metadata?.userId || session.client_reference_id;
    const plan = session.metadata?.plan || "monthly";

    if (userId && process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY) {
      try {
        const supabaseAdmin = createClient(
          process.env.NEXT_PUBLIC_SUPABASE_URL,
          process.env.SUPABASE_SERVICE_ROLE_KEY
        );
        await supabaseAdmin.from("user_spiritual_stats").upsert({
          user_id: userId,
          is_plus_subscriber: true,
          updated_at: new Date().toISOString()
        });
      } catch {
      }
    }

    return NextResponse.json({
      verified: true,
      plan,
      userId,
      email: session.customer_email || session.customer_details?.email
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Erro ao verificar sessão da Stripe";
    return NextResponse.json({ verified: false, error: message }, { status: 500 });
  }
}
