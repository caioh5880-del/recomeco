import { DailyMarianCard, DailyMessage, DailyChallenge, SaintOfDay, Prayer } from "../types";

export const dailyMarianCard: DailyMarianCard = {
  quote: "Hoje, aprenda com Maria a confiar em Deus mesmo quando você não entende tudo.",
  reflection:
    "Quando o anjo Gabriel anunciou o plano de Deus a Maria, ela não conhecia todos os passos do futuro, nem as dores que enfrentaria no Calvário. Mesmo assim, com humildade e coragem santa, ela pronunciou o seu 'Fiat' — Faça-se em mim segundo a Tua palavra. Confiar não significa ter todas as respostas prévias, mas ter a certeza inabalável de que as mãos de Deus conduzem cada detalhe da nossa vida.",
  practicalAction:
    "Hoje, antes de qualquer reclamação diante de uma contrariedade ou dificuldade, faça uma pequena oração interior: 'Jesus, eu confio em Vós; Maria, ensina-me a confiar.' Entregue essa situação com serenidade nas mãos de Deus."
};

export const dailyMessage: DailyMessage = {
  source: "Para sua alma",
  reference: "Com Maria na caminhada",
  quote:
    "Maria também precisou confiar sem conhecer todo o caminho. Você não precisa entender tudo hoje para continuar caminhando com Deus.",
  reflection:
    "A vida espiritual é feita de passos diários, não de certezas humanas acumuladas. Não permita que o medo do futuro, a ansiedade ou as quedas do passado paralisem a sua fé. Deus não pede que você resolva a sua vida inteira hoje; Ele pede apenas a sua fidelidade sincera no dia de hoje. Dê o passo seguinte com coragem."
};

export const dailyOfferingPrayer: Prayer = {
  id: "oferecimento-diario",
  title: "Oferecimento do Dia",
  subtitle: "Consagrando seus atos, estudos, trabalhos e orações",
  category: "morning",
  suggestedMoment: "Ao acordar",
  explanation:
    "O oferecimento do dia une todo o seu esforço, cansaço e alegrias ao Sacrifício de Cristo no altar, santificando a sua rotina.",
  text:
    "Senhor meu Deus, Pai infinitamente bom, eu Vos ofereço este dia: meus pensamentos, palavras, obras, sofrimentos e alegrias, em união com o Sagrado Coração de Vosso Divino Filho Jesus Cristo, que se renova incessantemente na Santa Missa pelo mundo inteiro. Por intercessão do Imaculado Coração de Maria, Mãe de Deus e nossa Mãe amantíssima, ofereço tudo pelas intenções da Santa Igreja, pela santificação dos jovens e pela conversão de todos os corações. Amém."
};

export const dailyChallenges: DailyChallenge[] = [
  {
    id: "challenge-1",
    title: "Rezar uma Ave-Maria com atenção plena",
    description:
      "Pare tudo durante um minuto, feche os olhos e reze cada palavra da Ave-Maria pausadamente, meditando na encarnação de Jesus e na presença materna de Maria.",
    virtue: "Recolhimento e Devoção",
    scriptureReference: "Lc 1, 28"
  },
  {
    id: "challenge-2",
    title: "Fazer uma boa ação escondida",
    description:
      "Faça um favor, arrume algo ou auxilie alguém sem que ninguém perceba quem fez. Pratique a humildade de servir somente aos olhos de Deus.",
    virtue: "Caridade Humilde",
    scriptureReference: "Mt 6, 3-4"
  },
  {
    id: "challenge-3",
    title: "Entregar uma preocupação a Deus",
    description:
      "Identifique aquilo que mais tem tirado a sua paz hoje. Escreva ou coloque em oração diante de Jesus no Sacrário ou diante de uma imagem de Maria e não toque mais nessa angústia.",
    virtue: "Abandono e Fé",
    scriptureReference: "1Pd 5, 7"
  },
  {
    id: "challenge-4",
    title: "Praticar 5 minutos de silêncio santo",
    description:
      "Desligue o celular, feche as abas e fique cinco minutos em completo silêncio diante de Deus, aprendendo com o coração meditativo de Nossa Senhora.",
    virtue: "Silêncio Interior",
    scriptureReference: "Lc 2, 19"
  },
  {
    id: "challenge-5",
    title: "Ler uma passagem do Evangelho",
    description:
      "Abra os Evangelhos, leia um capítulo com calma e se pergunte: 'O que Jesus está pedindo ao meu coração hoje?'",
    virtue: "Amor à Palavra",
    scriptureReference: "Hb 4, 12"
  }
];

export const saintOfDay: SaintOfDay = {
  name: "São Luís Maria Grignion de Montfort",
  feastDate: "Exemplo de Amor Mariano",
  title: "O Apóstolo da Santa Escravidão de Amor",
  biography:
    "São Luís de Montfort foi um sacerdote francês do século XVII cuja vida ardeu em zelo apostólico pela conversão dos pecadores. Autor do clássico 'Tratado da Verdadeira Devoção à Santíssima Virgem', ensinou que a perfeita devoção a Maria é o caminho mais seguro, fácil, curto e perfeito para se unir intimamente a Jesus Cristo. Enfrentou perseguições, viagens a pé sob intempéries e nunca perdeu a doçura e a coragem.",
  marianConnectionTitle: "Maria na vida dos Santos",
  marianConnection:
    "São Luís afirmava: 'Foi por intermédio da Santíssima Virgem que Jesus Cristo veio ao mundo, e é também por meio d’Ela que Ele deve reinar no mundo.' Para ele, quanto mais uma alma se consagra a Maria, mais se consagra a Jesus, pois Maria é o molde puro onde somos formados à imagem do Salvador.",
  patronage: "Padroeiro dos missionários e pregadores marianos"
};
