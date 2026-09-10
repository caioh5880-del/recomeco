import Stripe from "stripe";

export const STRIPE_CONFIG = {
  monthly: {
    id: "monthly",
    name: "Recomeço Plus — Mensal",
    priceInCents: 990,
    priceFormatted: "R$ 9,90",
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
    discountBadge: "Economize 25%",
    description: "Melhor valor com 25% de desconto anual"
  }
};

export function getStripeServer(): Stripe | null {
  const secretKey = process.env.STRIPE_SECRET_KEY;
  if (!secretKey) {
    return null;
  }
  return new Stripe(secretKey);
}
