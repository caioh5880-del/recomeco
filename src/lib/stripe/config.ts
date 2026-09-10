import Stripe from "stripe";

export const STRIPE_CONFIG = {
  monthly: {
    id: "monthly",
    name: "Recomeço Plus — Mensal",
    priceInCents: 1668,
    priceFormatted: "R$ 16,68",
    interval: "mês",
    description: "Acesso total a todas as trilhas e recursos exclusivos"
  },
  annual: {
    id: "annual",
    name: "Recomeço Plus — Anual",
    priceInCents: 8990,
    priceFormatted: "R$ 89,90",
    interval: "ano",
    monthlyEquivalent: "R$ 7,49/mês",
    discountBadge: "Economize 55%",
    description: "Melhor valor com 55% de desconto anual"
  }
};

export function getStripeServer(): Stripe | null {
  const secretKey = process.env.STRIPE_SECRET_KEY;
  if (!secretKey) {
    return null;
  }
  return new Stripe(secretKey);
}
