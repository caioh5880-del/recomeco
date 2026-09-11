import { NextResponse } from "next/server";
import { getStripeServer } from "@/lib/stripe/config";
import { createClient } from "@supabase/supabase-js";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { paymentIntentId } = body;

    if (!paymentIntentId || typeof paymentIntentId !== "string") {
      return NextResponse.json(
        { verified: false, error: "Identificador do pagamento ausente." },
        { status: 400 }
      );
    }

    const stripe = getStripeServer();

    if (!stripe) {
      return NextResponse.json(
        { verified: false, error: "Serviço Stripe indisponível." },
        { status: 503 }
      );
    }

    const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId);

    const isPaid = paymentIntent.status === "succeeded";

    if (!isPaid) {
      return NextResponse.json({
        verified: false,
        status: paymentIntent.status
      });
    }

    const userId = paymentIntent.metadata?.userId;
    const plan = paymentIntent.metadata?.plan || "annual";

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
      status: paymentIntent.status,
      plan,
      userId
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Erro ao consultar status do Pix";
    return NextResponse.json({ verified: false, error: message }, { status: 500 });
  }
}
