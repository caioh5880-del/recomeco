import { NextResponse } from "next/server";
import { getStripeServer } from "@/lib/stripe/config";

export async function POST(request: Request) {
  const stripe = getStripeServer();
  if (!stripe) {
    return NextResponse.json({ received: true, simulated: true });
  }

  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
  const signature = request.headers.get("stripe-signature");

  let event;

  try {
    const rawBody = await request.text();
    if (webhookSecret && signature) {
      event = stripe.webhooks.constructEvent(rawBody, signature, webhookSecret);
    } else {
      event = JSON.parse(rawBody);
    }
  } catch (err) {
    const message = err instanceof Error ? err.message : "Webhook signature verification failed";
    return NextResponse.json({ error: message }, { status: 400 });
  }

  switch (event.type) {
    case "checkout.session.completed": {
      const session = event.data.object;
      break;
    }
    default:
      break;
  }

  return NextResponse.json({ received: true });
}
