import { LiturgyDay, RosaryMysteryType } from "../types";

const weeklyDecadeReflections: Record<
  number,
  Record<number, string>
> = {
  0: {
    1: "Éfeta, Abre-te: Peçamos a Jesus que abra nossos ouvidos para acolher a Sua santa vontade com docilidade, assim como Maria na Anunciação.",
    2: "Desatar a língua para o bem: O toque de Cristo solta a língua para a oração e a caridade. Levemos conforto e alegria ao próximo como Maria na Visitação.",
    3: "Deus Se faz próximo: Em Belém, Cristo desceu até nós para curar nossas dores e fraquezas. Confiemos a Ele nossas feridas interiores.",
    4: "Apresentação e Cura: Apresentemos ao Senhor nossas fraquezas e surdez espiritual, pedindo a graça de escutar Sua voz em meio aos ruídos do mundo.",
    5: "Ele fez bem todas as coisas: Jesus devolve a voz e a visão aos que O procuram com fé. Renovemos a esperança de que Cristo tudo restaura."
  },
  1: {
    1: "Salvar a vida e fazer o bem: A encarnação de Jesus revela o primado do amor. Peçamos um coração desprendido de egoísmos e pronto para o bem.",
    2: "Estender a mão ao irmão: Jesus cura o homem da mão seca. Sigamos o exemplo de Maria, estendendo as mãos em auxílio aos que mais precisam hoje.",
    3: "A presença que liberta: Na humildade da gruta, Cristo vem romper as amarras do pecado e da hipocrisia. Acolhamos o Seu amor salvador.",
    4: "A verdadeira obediência: Apresentar a vida a Deus é colocar a misericórdia acima de qualquer comodismo ou julgamento sobre o próximo.",
    5: "Fidelidade em meio à oposição: Mesmo diante das críticas e dificuldades, perseveremos no caminho da verdade e do amor fraterno."
  },
  2: {
    1: "A aurora da salvação: Ao comemorarmos o mistério de Maria, louvamos a Deus que prepara caminhos de graça onde parecia haver apenas deserto.",
    2: "Emanuel, Deus conosco: Maria carrega em seu seio o Salvador do mundo. Que a nossa vida leve a presença viva de Jesus a todos os ambientes.",
    3: "O cumprimento das promessas: Em Belém, cumpre-se a palavra anunciada pelos profetas. Confiemos que nenhuma promessa de Deus cai por terra.",
    4: "Consagração total: Como São José e Maria, sejamos dóceis aos desígnios do Senhor, entregando com serenidade nossos planos em Suas mãos.",
    5: "Buscar o essencial: No Templo, Maria e José buscam a Jesus. Que nada neste mundo nos roube a alegria de estar na casa e na graça de Deus."
  },
  3: {
    1: "A verdadeira bem-aventurança: O Reino de Deus pertence aos que têm o coração livre e desapegado das vaidades passageiras deste mundo.",
    2: "Partilhar a consolação divina: Felizes os que choram, pois serão consolados. Sejamos presença de carinho e consolo aos que sofrem.",
    3: "A riqueza da santa pobreza: Jesus nasce desprovido de glórias humanas para nos ensinar que Deus é a única herança eterna da nossa alma.",
    4: "A recompensa no Céu: No Templo, oferecemos nossas renúncias diárias, sabendo que Deus nunca se deixa vencer em generosidade.",
    5: "A alegria que o mundo não tira: Onde está o vosso tesouro, aí estará também o vosso coração. Busquemos em Cristo a paz duradoura."
  },
  4: {
    1: "Amar e perdoar sem medida: Jesus nos chama ao amor que vence o ressentimento. Peçamos um coração puro, livre de mágoas e calúnias.",
    2: "Fazer o bem sem esperar retorno: Maria partiu com prontidão para servir Isabel. Pratiquemos a generosidade silenciosa com quem nos rodeia.",
    3: "A misericórdia que desce do Céu: Em Cristo feito Menino, Deus manifesta Sua bondade infinita também aos ingratos e pecadores.",
    4: "A medida do perdão: Com a mesma medida com que medirdes sereis medidos. Ofereçamos o perdão sincero àqueles que nos ofenderam.",
    5: "Perseverança na provação: Nos momentos de injustiça ou incompreensão, busquemos abrigo no Coração de Jesus e nas orações de Maria."
  },
  5: {
    1: "A luz que purifica o olhar: Antes de reparar no cisco do irmão, peçamos a Deus que tire a trave do nosso orgulho e cure a nossa cegueira.",
    2: "Correr para a coroa incorruptível: A caridade é a nossa verdadeira meta espiritual. Não julguemos com rigor, mas sirvamos com paciência.",
    3: "O Mestre que nos ensina a amar: Jesus Se fez pequeno para nos erguer. Aprendamos da Sua mansidão para acolher os que erram.",
    4: "Retidão e sinceridade interior: Apresentemos nossas intenções a Deus, renunciando à hipocrisia e cultivando pensamentos de paz.",
    5: "Ouvir e imitar o Mestre: Quem segue o Mestre com humildade enxerga os outros com misericórdia e persevera no caminho da santidade."
  },
  6: {
    1: "Acolher a Palavra: Maria acolhe o anúncio divino com o coração limpo. A boa árvore produz bons frutos quando guardamos a Palavra de Deus e a colocamos em prática.",
    2: "Frutos de Caridade: A árvore se conhece pelos seus frutos. Ao visitar Isabel, Maria não fala apenas de amor, mas põe-se a caminho no serviço concreto.",
    3: "Construir sobre a Rocha: Jesus nasce na pobreza de Belém e Se torna a rocha firme da nossa salvação. Alicerçamos a nossa vida em Cristo e não nas ilusões do mundo.",
    4: "Fidelidade e Obediência: Apresentado no Templo, Jesus nos ensina a não apenas clamar 'Senhor, Senhor!', mas a cumprir com retidão a vontade do Pai em nossa rotina.",
    5: "No Quinto Mistério → Jesus nos ensina que Ele é a Rocha firme da nossa fé. Como podemos preparar o coração e produzir frutos de graça hoje?"
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
