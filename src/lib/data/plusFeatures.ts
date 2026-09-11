export interface PlusBenefitItem {
  id: string;
  icon: string;
  number: string;
  title: string;
  shortDesc: string;
  details: string;
  tag: string;
}

export const PLUS_BENEFITS: PlusBenefitItem[] = [
  {
    id: "saints_calendar",
    icon: "Calendar",
    number: "1",
    title: "CALENDÁRIO DOS SANTOS + BIOGRAFIA",
    shortDesc: "Santo do dia, história completa e exemplo de vida.",
    details: "Alguém que viveu e venceu como você quer vencer. Conheça a história real de superação, oração e virtude de cada Santo para inspirar sua própria caminhada.",
    tag: "Exclusivo Plus"
  },
  {
    id: "stats_prayer_saint",
    icon: "BarChart3",
    number: "2",
    title: "ESTATÍSTICAS + ORAÇÃO PERSONALIZADA + SANTO EXEMPLO",
    shortDesc: "Acompanhamento da sua caminhada com direção espiritual sob medida.",
    details: "Oração exata pro que você está vivendo no momento. Conheça o Santo que já passou por isso e venceu pela graça, servindo como guia prático para a sua vitória.",
    tag: "Exclusivo Plus"
  },
  {
    id: "liturgy_homily_practice",
    icon: "BookOpen",
    number: "3",
    title: "LITURGIA + HOMILIA + COMO PRATICAR",
    shortDesc: "Leitura, Salmo e Evangelho do dia com reflexão simples.",
    details: "O que isso significa pra VOCÊ hoje e como aplicar na sua vida. Sem teoria vazia: ensinamento vivo traduzido em ações práticas para o seu dia a dia.",
    tag: "Exclusivo Plus"
  },
  {
    id: "temptation_rescue",
    icon: "Shield",
    number: "4",
    title: "SOCORRO NA TENTAÇÃO — Botão de socorro",
    shortDesc: "Ajuda espiritual imediata na hora exata do combate.",
    details: "Ao clicar: Oração imediata + Versículos de força + Santo que também foi fraco e venceu. Um escudo rápido para blindar seu coração nos momentos de fraqueza.",
    tag: "Exclusivo Plus"
  },
  {
    id: "deliverance_novenas",
    icon: "Sparkles",
    number: "5",
    title: "NOVENAS DE LIBERTAÇÃO",
    shortDesc: "Novenas de 9 dias específicas pra vencer vícios, hábitos e dependências.",
    details: "Caminhada estruturada de cura e liberdade espiritual. Passo a passo oracional focado em quebrar amarras e restaurar a paz interior pela intercessão de Maria.",
    tag: "Exclusivo Plus"
  },
  {
    id: "sacramental_answers",
    icon: "HelpCircle",
    number: "6",
    title: "DÚVIDAS E EXPLICAÇÕES SACRAMENTAIS",
    shortDesc: "Respostas claras: o que é pecado e o que não é.",
    details: "Esclarecimentos diretos para casos reais (ex: 'Vi algo sem querer — sem culpa, não precisa confessar'). Entender a moral católica pra viver em paz e confessar-se bem.",
    tag: "Exclusivo Plus"
  }
];

export const PLUS_FAQS = [
  {
    question: "O que muda entre o plano gratuito e o Plus?",
    answer: "O plano gratuito continua com o essencial para suas orações diárias. O Recomeço Plus desbloqueia os 6 pilares exclusivos: Calendário dos Santos com Biografia, Estatísticas com Oração Personalizada e Santo Exemplo, Liturgia com Homilia e Aplicação Prática, Botão de Socorro na Tentação, Novenas de Libertação de 9 dias e Explicações Sacramentais."
  },
  {
    question: "Como funciona a assinatura e valores?",
    answer: "Você pode assinar no plano mensal por R$ 16,68/mês ou no plano anual por R$ 186,15/ano (com 7% de desconto, equivalente a R$ 15,51/mês). Ambos liberam imediatamente todos os 6 pilares exclusivos."
  },
  {
    question: "Quais formas de pagamento são aceitas?",
    answer: "Todo o processamento é feito pela Stripe, a plataforma de pagamentos mais segura do mundo. Aceitamos Cartões de Crédito de todas as bandeiras e Pix."
  },
  {
    question: "Posso cancelar quando quiser?",
    answer: "Sim! Não há fidelidade ou taxas ocultas. Você pode cancelar sua assinatura a qualquer momento com apenas 1 clique pelo seu painel de Perfil."
  }
];
