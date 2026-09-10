export interface PlusBenefitItem {
  id: string;
  icon: string;
  title: string;
  shortDesc: string;
  details: string;
  tag: string;
}

export const PLUS_BENEFITS: PlusBenefitItem[] = [
  {
    id: "trails",
    icon: "Compass",
    title: "Trilhas Marianas Avançadas (30, 60 e 90 Dias)",
    shortDesc: "Jornadas completas de formação, penitência e intimidade com Deus.",
    details: "Acesso integral à preparação da Consagração Total de São Luís de Montfort (33 dias), além das trilhas avançadas de 60 e 90 dias com leituras meditadas e propósitos diários.",
    tag: "Exclusivo Plus"
  },
  {
    id: "battle_plan",
    icon: "Shield",
    title: "Plano Diário de Combate às Tentações",
    shortDesc: "Antídotos espirituais imediatos para os 7 pecados capitais.",
    details: "Roteiros detalhados para os momentos de maior vulnerabilidade, com orações de socorro espiritual, passagens bíblicas fortificantes e passos de restauração da graça.",
    tag: "Espiritualidade"
  },
  {
    id: "audio_rosary",
    icon: "Headphones",
    title: "Áudios e Meditações Contemplativas do Santo Rosário",
    shortDesc: "Reze o terço com introduções oracionais profundas.",
    details: "Gravações e meditações guiadas para cada um dos 20 mistérios (Gozosos, Luminosos, Dolorosos e Gloriosos) para você rezar em casa, no trânsito ou no trabalho.",
    tag: "Devoção Mariana"
  },
  {
    id: "patristic_library",
    icon: "BookMarked",
    title: "Biblioteca de Formação dos Santos e Doutores",
    shortDesc: "Comentários espirituais de Santo Agostinho, Santa Teresa e São João da Cruz.",
    details: "Seleções temáticas sobre oração mental, mortificação dos sentidos, virtudes marianas e pureza de coração, extraídas diretamente da tradição bimilenar da Igreja.",
    tag: "Formação Sólida"
  },
  {
    id: "stats_full",
    icon: "BarChart3",
    title: "Métricas Espirituais e Histórico Completo",
    shortDesc: "Acompanhamento detalhado da sua perseverança na oração.",
    details: "Visualize gráficos de dias em combate, orações mais rezadas, evolução nas trilhas e relatórios mensais para levar à sua confissão e direção espiritual.",
    tag: "Acompanhamento"
  },
  {
    id: "seal_pilgrim",
    icon: "Crown",
    title: "Selo Dourado de Peregrino e Apoio à Missão",
    shortDesc: "Destaque no seu perfil e apoio financeiro direto à evangelização.",
    details: "Sua assinatura mantém a infraestrutura do app no ar, 100% livre de anúncios seculares, e garante o acesso gratuito aos conteúdos essenciais para milhares de jovens.",
    tag: "Apoio Católico"
  }
];

export const PLUS_FAQS = [
  {
    question: "Como funciona a assinatura?",
    answer: "Você pode assinar no plano mensal (R$ 16,68/mês) ou no plano anual com 55% de desconto (R$ 89,90/ano). A assinatura libera imediatamente todos os recursos Plus no seu perfil conectado."
  },
  {
    question: "Quais formas de pagamento são aceitas?",
    answer: "Todo o processamento é feito pela Stripe, a plataforma de pagamentos mais segura do mundo. Aceitamos Cartões de Crédito de todas as bandeiras e Pix."
  },
  {
    question: "Posso cancelar quando quiser?",
    answer: "Sim! Não há fidelidade ou taxas ocultas. Você pode cancelar sua assinatura a qualquer momento com apenas 1 clique pelo seu painel de Perfil."
  },
  {
    question: "E se eu trocar de celular?",
    answer: "Sua assinatura fica vinculada ao seu e-mail de cadastro. Ao entrar no seu novo aparelho, todos os seus recursos Plus e histórico são restaurados automaticamente."
  }
];
