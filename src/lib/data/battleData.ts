export interface BattleScriptureAnchor {
  passage: string;
  reference: string;
  explanation: string;
}

export const battleScriptures: BattleScriptureAnchor[] = [
  {
    passage:
      "Nenhuma tentação vos sobreveio que não fosse humana. E Deus é fiel; não permitirá que sejais tentados além das vossas forças, mas com a tentação vos dará também o meio de sair dela e a força para a suportar.",
    reference: "1 Coríntios 10, 13",
    explanation: "Você não está sozinho. Deus já preparou a saída para este instante exato."
  },
  {
    passage:
      "Revesti-vos da armadura de Deus, para que possais resistir às ciladas do diabo.",
    reference: "Efésios 6, 11",
    explanation: "A batalha não se vence com forças humanas, mas na presença do Senhor."
  },
  {
    passage:
      "Tudo posso naquele que me fortalece.",
    reference: "Filipenses 4, 13",
    explanation: "Cristo é a sua fortaleza viva nesta hora de fraqueza."
  }
];

export const stMichaelPrayer = {
  title: "Oração a São Miguel Arcanjo",
  subtitle: "O Príncipe da Milícia Celeste em nossa defesa",
  text:
    "São Miguel Arcanjo, defendei-nos no combate, sede o nosso refúgio contra as maldades e ciladas do demônio. Ordene-lhe Deus, instantemente o pedimos, e vós, príncipe da milícia celeste, pela virtude divina, precipitai no inferno a Satanás e a todos os espíritos malignos, que andam pelo mundo para perder as almas. Amém."
};

export const actOfContrition = {
  title: "Ato de Contrição Perfeita",
  text:
    "Meu Deus, eu me arrependo de todo o meu coração de Vos ter ofendido, porque sois tão bom e amável. Prometo firmemente, com a ajuda da Vossa graça, nunca mais pecar, evitar as ocasiões de pecado e confessar-me quanto antes. Jesus, Filho de Davi, tende piedade de mim! Maria, refúgio dos pecadores, acolhei meu arrependimento e levai-me a Jesus. Amém."
};

export const confessionalGuide = {
  title: "Guia para o Sacramento da Reconciliação (Confissão)",
  intro:
    "A Confissão não é um tribunal de condenação, mas um abraço paternal de cura e recomeço. Jesus espera você de braços abertos no confessionário através do sacerdote.",
  steps: [
    {
      title: "1. Exame de Consciência",
      description: "Relembre com sinceridade diante de Deus os pecados cometidos por pensamentos, palavras, atos e omissões desde a última confissão bem feita."
    },
    {
      title: "2. Dor do Coração (Contrição)",
      description: "Tenha dor e tristeza por ter ofendido a Deus, que é infinitamente bom, mais do que pelo medo da vergonha humana."
    },
    {
      title: "3. Firme Propósito",
      description: "Decida com a ajuda da graça evitar o pecado e as situações de perigo que costumam levá-lo a cair."
    },
    {
      title: "4. Confissão Sincera dos Pecados",
      description: "Diga ao sacerdote todos os pecados com clareza, humildade e sem esconder nada por vergonha."
    },
    {
      title: "5. Cumprimento da Penitência",
      description: "Reze a oração ou cumpra a boa obra indicada pelo confessor em espírito de reparação e gratidão a Deus."
    }
  ]
};

export const emergencyPhysicalActions = [
  "Lave o rosto com água fria imediatamente.",
  "Mude de cômodo: saia do isolamento e vá para um local iluminado.",
  "Afaste o celular ou computador para longe das mãos por pelo menos 15 minutos.",
  "Beba um copo cheio de água fresca devagar.",
  "Faça 5 respirações profundas inspirando a paz e soltando a agitação."
];
