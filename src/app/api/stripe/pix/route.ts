import { NextResponse } from "next/server";
import { STRIPE_CONFIG } from "@/lib/stripe/config";
import { PIX_CONFIG, generatePixEmv } from "@/lib/pix/nubank";

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
    const amountInReais = selectedPlan.priceInCents / 100;

    const qrCodeData = generatePixEmv({
      key: PIX_CONFIG.key,
      name: PIX_CONFIG.name,
      city: PIX_CONFIG.city,
      amount: amountInReais,
      txId: plan === "monthly" ? "PLUSMENSAL" : "PLUSANUAL"
    });

    const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(
      qrCodeData
    )}`;

    const messageText = `Olá! Acabei de fazer o Pix de ${selectedPlan.priceFormatted} para assinar o ${selectedPlan.name} do Recomeço Plus.\n\nMeu e-mail cadastrado na conta é: ${userEmail}\n\nSegue o comprovante em anexo para ativação!`;
    const whatsappUrl = `https://wa.me/${PIX_CONFIG.whatsappNumber}?text=${encodeURIComponent(
      messageText
    )}`;

    return NextResponse.json({
      planName: selectedPlan.name,
      priceFormatted: selectedPlan.priceFormatted,
      amount: amountInReais,
      qrCodeData,
      rawKey: PIX_CONFIG.key,
      merchantName: PIX_CONFIG.name,
      bankName: PIX_CONFIG.bank,
      qrCodeUrl,
      whatsappUrl,
      userEmail
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Erro inesperado ao gerar Pix";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

