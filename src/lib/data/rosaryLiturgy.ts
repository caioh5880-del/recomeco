import { LiturgyDay, RosaryMysteryType } from "../types";

const weeklyDecadeReflections: Record<
  number,
  Record<number, string>
> = {
  0: {
    1: "Perdoar setenta vezes sete: Jesus nos ensina que o perdão não tem limites. Peçamos a Maria a graça de desarmar o nosso coração e acolher o próximo com compaixão sincera.",
    2: "A dívida impagável perdoada por Deus: O Pai celeste perdoou todas as nossas faltas pelo Sangue de Jesus. Como Maria na Visitação, levemos aos irmãos a alegria do perdão recebido.",
    3: "O Menino Deus e a divina compaixão: Em Belém, Cristo Se fez frágil para nos reconciliar com o Pai. Depositemos nas mãos do Menino Jesus todas as nossas mágoas e ressentimentos.",
    4: "Apresentar um coração reconciliado: No Templo, ofereçamos a Deus o desejo sincero de paz com quem nos feriu, pedindo a virtude da mansidão evangélica.",
    5: "Perdoar de coração ao irmão: Jesus nos alerta que a bênção de Deus repousa sobre quem perdoa sinceramente. Com Maria aos pés da Cruz, perdoemos a todos de todo o coração."
  },
  1: {
    1: "O amor do Pai revelado no Filho: Deus amou tanto o mundo que enviou o Seu Filho unigênito. Como Maria na Anunciação, acolhamos o amor que nos cura e salva.",
    2: "A caridade que vai ao encontro: A salvação da Cruz move a alma à generosidade. Sigamos os passos de Maria, levando consolo aos que sofrem e necessitam de socorro.",
    3: "O lenho da vida: Na manjedoura como na Cruz, Jesus Se entrega inteiramente por nós. Adoremos o Redentor que transforma a nossa dor em vida nova.",
    4: "Obediência e exaltação: Cristo humilhou-Se até a morte de Cruz e por isso foi exaltado. Peçamos a fidelidade incondicional aos mandamentos do Senhor.",
    5: "Olhar para a Cruz com fé: Quem contempla o Crucificado com o coração puro é curado de todo mal. Permaneçamos firmes na esperança da vitória da graça."
  },
  2: {
    1: "O 'Sim' que abraça a dor com amor: Maria aceitou ser a Mãe do Redentor sabendo que uma espada transpassaria a sua alma. Peçamos fortaleza em nossas provações.",
    2: "Consolo nas aflições: Ao visitar Isabel, Maria levou o júbilo do Espírito Santo. Que a Mãe Dolorosa console hoje todas as famílias que choram.",
    3: "A pobreza abraçada por amor: Jesus nasce pobre em Belém antecipando o despojamento do Calvário. Aprendamos o desapego das coisas deste mundo.",
    4: "A profecia de Simeão cumprida: No Templo de Jerusalém, Maria acolhe a profecia da Cruz. Entreguemos com serenidade o nosso futuro nas mãos da Providência.",
    5: "Eis a tua Mãe: Junto à Cruz, Jesus nos entregou Maria como nossa Mãe e refúgio. Acolhamos o seu manto materno em todas as tempestades da vida."
  },
  3: {
    1: "O primado da caridade: O dom supremo que dá sentido à vida é o amor autêntico. Peçamos a Maria a graça de amar a Deus sobre todas as coisas e ao próximo com ternura.",
    2: "A paciência e a bondade: O amor tudo desculpa, tudo crê, tudo espera e tudo suporta. Que a Mãe da Graça nos ajude a desarmar qualquer atitude de irritação ou discórdia.",
    3: "A humildade do Amor encarnado: O Rei da glória nasce na manjedoura para mostrar que a grandeza de Deus está no serviço e no despojamento humilde.",
    4: "A Sabedoria justificada pelos seus filhos: Renunciemos às críticas fáceis e à indiferença, apresentando uma vida pautada na verdade e na oração perseverante.",
    5: "O amor que jamais acabará: Todas as vaidades da terra passarão, mas o amor durará para sempre. Fixemos nossa esperança no Reino eterno dos Céus."
  },
  4: {
    1: "Lágrimas de arrependimento e gratidão: A mulher pecadora lavou os pés de Jesus com suas lágrimas. Peçamos um coração contrito e dócil ao perdão divino.",
    2: "Muito amar a quem muito foi perdoado: Quem reconhece a imensa misericórdia de Deus transborda em carinho e dedicação aos irmãos.",
    3: "A misericórdia que desce à nossa fraqueza: Em Belém, o Santo de Deus aproxima-Se dos pecadores para lhes restituir a dignidade e a pureza de alma.",
    4: "A graça que opera maravilhas: Pela graça de Deus somos o que somos. Apresentemos a nossa vida no altar com a confiança de que Cristo tudo santifica.",
    5: "A fé que salva e traz a paz: 'Tua fé te salvou, vai em paz'. Confiemos nas palavras de Jesus e busquemos sempre a paz interior nos sacramentos."
  },
  5: {
    1: "Cristo ressuscitou, primícia dos que morreram: A nossa esperança não se limita a esta terra. Renovemos com Maria a certeza radiante da vida eterna.",
    2: "Discipulado no serviço alegre: As santas mulheres serviam ao Senhor com seus bens. Peçamos um coração disponível para colaborar com as obras de caridade da Igreja.",
    3: "A Luz do mundo que vence as trevas: Na Noite Santa de Belém como na manhã de Páscoa, a luz de Cristo dissipa os medos e as tristezas da alma.",
    4: "A consagração de todas as nossas forças: Ofereçamos a Deus nosso trabalho cotidiano, sabendo que nenhuma fadiga vivida por amor é em vão.",
    5: "Perseverança na esperança cristã: A vitória final pertence a Cristo. Que a Mãe da Esperança nos ampare firmes na fé até o encontro definitivo no Céu."
  },
  6: {
    1: "Ouvir a Palavra com coração reto: Maria é o modelo do solo bom que acolhe o anúncio de Deus e guarda cada palavra com fidelidade inabalável.",
    2: "Frutos abundantes de santidade: A semente do Evangelho brota no serviço silencioso ao irmão, como Maria na sua visita caridosa a Santa Isabel.",
    3: "A semente da vida nova: Na gruta de Belém, brotou a salvação da humanidade. Peçamos a graça de cultivar em nós pensamentos e desejos celestes.",
    4: "Superar os espinhos e as tentações: Livremo-nos das inquietações e das ilusões do mundo para que a Palavra de Deus cresça livre e forte em nossa alma.",
    5: "Perseverar até a colheita eterna: Quem guarda a Palavra com perseverança produz fruto cem por um. Que Maria Santíssima nos conduza à santidade plena."
  }
};

export function getDecadeLiturgyReflection(
  todayLiturgy: LiturgyDay,
  decadeNumber: number,
  mysteryType: RosaryMysteryType
): string {
  const day = todayLiturgy.dayOfWeek ?? new Date().getDay();
  const dayReflections = weeklyDecadeReflections[day];

  if (dayReflections && dayReflections[decadeNumber]) {
    return dayReflections[decadeNumber];
  }

  return `À luz do Evangelho (${todayLiturgy.gospel.reference}): Jesus nos ensina que ${todayLiturgy.homily.title.toLowerCase()}. Peçamos a Maria a graça de colocar a Palavra de Deus em prática neste ${decadeNumber}º mistério.`;
}
