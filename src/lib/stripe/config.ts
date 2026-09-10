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
    priceInCents: 18615,
    priceFormatted: "R$ 186,15",
    interval: "ano",
    monthlyEquivalent: "R$ 15,51/mês",
    discountBadge: "Economize 7%",
    description: "Melhor valor com 7% de desconto anual"
  }
};

export function getStripeServer(): Stripe | null {
  const secretKey = process.env.STRIPE_SECRET_KEY;
  if (!secretKey) {
    return null;
  }
  return new Stripe(secretKey);
}
