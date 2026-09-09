export interface ConsecrationStep {
  stepNumber: number;
  periodTitle: string;
  focus: string;
  practices: string[];
  recommendedReading: string;
}

export interface ConsecrationFaq {
  question: string;
  answer: string;
}

export const consecrationFaqs: ConsecrationFaq[] = [
  {
    question: "O que é a Consagração a Nossa Senhora?",
    answer:
      "A consagração mariana é um ato consciente, livre e amoroso de renovação solene das nossas promessas batismais pelas mãos da Virgem Maria. Não se trata de adorar Maria — adoração (latria) pertence unicamente a Deus Uno e Trino —, mas de entregar a ela nossa vida, méritos, orações e lutas para que ela os purifique e apresente perfeitos a Jesus Cristo."
  },
  {
    question: "Por que fazer a Consagração?",
    answer:
      "São Luís de Montfort ensina que Maria é o caminho mais fácil, curto, seguro e perfeito para chegar à união com Cristo. Jesus escolheu vir ao mundo por meio de Maria; portanto, o caminho mais belo de irmos a Jesus é também por meio d’Ela. Ela nos protege contra as armadilhas do demônio e nos ensina a ser discípulos fiéis."
  },
  {
    question: "Como funciona na prática?",
    answer:
      "Não é um amuleto nem uma 'fórmula mágica'. A consagração exige um período prévio de preparação (tradicionalmente 33 dias de orações e meditações de desapego do espírito do mundo e enchimento do Espírito de Jesus), a Confissão sacramental, a Santa Missa e a recitação solene da fórmula de consagração."
  },
  {
    question: "Qual o impacto na vida cotidiana?",
    answer:
      "A pessoa consagrada passa a fazer tudo 'com Maria, em Maria, por Maria e para Maria', a fim de fazer tudo mais perfeitamente 'com Jesus, em Jesus, por Jesus e para Jesus'. Significa consultar a Mãe antes de tomar decisões, imitar a pureza de seu olhar e recorrer a ela nos momentos de provação."
  }
];

export const consecrationSteps: ConsecrationStep[] = [
  {
    stepNumber: 1,
    periodTitle: "12 Dias Preliminares: Desapego do Espírito do Mundo",
    focus: "Esvaziar o coração das ilusões e vaidades mundanas para abrir espaço para a graça de Deus.",
    practices: [
      "Vidas dos santos e oração diária do Veni Creator Spiritus e Ave Maris Stella",
      "Redução consciente do uso de redes sociais e entretenimento vazio",
      "Exame de consciência profundo sobre as vaidades do coração"
    ],
    recommendedReading: "Evangelho de São Mateus (Sermão da Montanha)"
  },
  {
    stepNumber: 2,
    periodTitle: "1ª Semana: Conhecimento de Si Mesmo",
    focus: "Reconhecer com humildade nossa fraqueza, miséria e dependência total da misericórdia divina.",
    practices: [
      "Ladainha do Espírito Santo e Ladainha de Nossa Senhora",
      "Reconhecer as causas das quedas e pecados frequentes",
      "Prática de mortificações leves da vontade própria"
    ],
    recommendedReading: "Tratado da Verdadeira Devoção (Parágrafos 1 a 89)"
  },
  {
    stepNumber: 3,
    periodTitle: "2ª Semana: Conhecimento da Santíssima Virgem",
    focus: "Meditar na dignidade sublime, virtudes e maternidade espiritual de Nossa Senhora.",
    practices: [
      "Oração do Terço diário meditado com amor",
      "Ladainha do Imaculado Coração de Maria e Ave Maris Stella",
      "Exercício da pureza nas palavras e intenções"
    ],
    recommendedReading: "O Segredo de Maria (São Luís de Montfort)"
  },
  {
    stepNumber: 4,
    periodTitle: "3ª Semana: Conhecimento de Jesus Cristo, Sabedoria Encarnada",
    focus: "Fixar os olhos no mistério da Encarnação, Paixão e Eucaristia de Nosso Senhor.",
    practices: [
      "Ladainha do Santíssimo Nome de Jesus e do Sagrado Coração",
      "Visita ao Santíssimo Sacramento e adoração silenciosa",
      "Confissão sacramental e Santa Missa no dia da consagração solene"
    ],
    recommendedReading: "Evangelho de São João e Tratado (Parágrafos 227 a 273)"
  }
];
