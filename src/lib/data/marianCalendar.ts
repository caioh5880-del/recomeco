import { LiturgicalSolemnity } from "../types";

export const liturgicalSolemnities: LiturgicalSolemnity[] = [
  {
    id: "santa-maria-mae-de-deus",
    title: "Santa Maria, Mãe de Deus (Theotókos)",
    date: "1 de Janeiro",
    dayBadge: "01 JAN",
    liturgicalGrade: "Solenidade Maior (Preceito)",
    isTransferred: false,
    spiritualMeaning:
      "Maria é proclamada Mãe de Deus porque gerou em seu ventre virginal o Verbo Divino encarnado, Jesus Cristo, verdadeiro Deus e verdadeiro homem.",
    whatChurchCelebrates:
      "O primeiro dogma mariano proclamado em Éfeso (431 d.C.). A Igreja inaugura cada ano civil sob o manto maternal de Maria e celebra a Jornada Mundial da Paz.",
    howToLiveToday:
      "Consagre o ano que se inicia aos cuidados maternos de Nossa Senhora. Participe da Santa Missa de preceito e reze pela paz nas famílias e no mundo.",
    prayer:
      "Santa Maria, Mãe de Deus e nossa Mãe, abençoai o nosso caminhar, guardai os nossos lares na fidelidade e fazei deste ano um tempo fecundo de graça e conversão. Amém."
  },
  {
    id: "epifania-do-senhor",
    title: "Epifania do Senhor (Manifestação aos Povos)",
    date: "6 de Janeiro (ou Domingo mais próximo)",
    dayBadge: "06 JAN",
    liturgicalGrade: "Solenidade (Transferida no Brasil)",
    isTransferred: true,
    transferDetails: "No Brasil, quando coincide com dia útil, é celebrada no domingo entre 2 e 8 de janeiro.",
    spiritualMeaning:
      "A revelação de Jesus Cristo como Luz de todas as nações, acolhido pela fé dos Magos do Oriente que Lhe oferecem ouro, incenso e mirra.",
    whatChurchCelebrates:
      "A manifestação universal de Deus na fragilidade de um Menino, reconhecido como Rei divino, Sacerdote eterno e Salvador dos homens.",
    howToLiveToday:
      "Apresente a Cristo os seus melhores dons: o ouro do seu amor sincero, o incenso da sua oração diária e a mirra das suas renúncias por amor a Deus.",
    prayer:
      "Ó Jesus Menino, Luz dos povos, guiai os nossos passos para que nunca nos cansemos de Vos procurar, adorar e proclamar como nosso único Senhor. Amém."
  },
  {
    id: "sao-jose",
    title: "São José, Esposo da Virgem Maria e Patrono da Igreja",
    date: "19 de Março",
    dayBadge: "19 MAR",
    liturgicalGrade: "Solenidade (Durante a semana)",
    isTransferred: false,
    spiritualMeaning:
      "O homem justo, silencioso e casto a quem o Pai confiou a custódia da Sagrada Família de Nazaré e a paternidade adotiva de Jesus.",
    whatChurchCelebrates:
      "A fidelidade heroica de São José, guarda do Redentor, patrono dos trabalhadores, modelo dos pais de família e patrono universal de toda a Igreja.",
    howToLiveToday:
      "Dedique seu trabalho com perfeição a Deus. Peça a intercessão de São José para superar tentações contra a pureza e para alcançar docilidade interior à vontade do Pai.",
    prayer:
      "Glorioso São José, protetor de Jesus e esposo virginal de Maria, socorrei as nossas necessidades temporais e espirituais e ensinai-nos a trabalhar no silêncio do amor. Amém."
  },
  {
    id: "anunciacao-do-senhor",
    title: "Anunciação do Senhor à Virgem Maria",
    date: "25 de Março",
    dayBadge: "25 MAR",
    liturgicalGrade: "Solenidade (Durante a semana)",
    isTransferred: false,
    spiritualMeaning:
      "O momento sublime em que o Filho de Deus Se fez carne no seio da Virgem Maria pelo poder do Espírito Santo após o humilde 'Faça-se' de Nazaré.",
    whatChurchCelebrates:
      "A Encarnação do Redentor, o Dia do Nascituro e a dignidade inegociável da vida humana desde o seu primeiro instante de concepção.",
    howToLiveToday:
      "Reze o Ângelus pontualmente ao meio-dia e às 18h. Diga um sim generoso a um dever de estado ou renúncia que você vinha adiando.",
    prayer:
      "E o Verbo Se fez carne e habitou entre nós. Eis aqui a serva do Senhor, faça-se em mim segundo a vossa palavra. Amém."
  },
  {
    id: "ressurreicao-do-senhor",
    title: "Domingo da Ressurreição de Nosso Senhor Jesus Cristo (Páscoa)",
    date: "Data Móvel (Domingo Pascal)",
    dayBadge: "PÁSCOA",
    liturgicalGrade: "Solenidade das Solenidades",
    isTransferred: false,
    spiritualMeaning:
      "A vitória esmagadora de Cristo sobre a morte, o inferno e o pecado. O alicerce e a razão de toda a nossa esperança e fé cristã.",
    whatChurchCelebrates:
      "A ressurreição corporal do Senhor ao terceiro dia, abrindo para a humanidade as portas do Paraíso e a regeneração sacramental.",
    howToLiveToday:
      "Celebre com profunda alegria pascal. Renove com fervor as suas promessas batismais de renunciar a satanás, ao pecado e às suas seduções.",
    prayer:
      "Cristo Ressuscitou, verdadeiramente ressuscitou! Aleluia! Senhor Jesus, concedei-nos caminhar na novidade da vida e vencer toda tentação pelo poder da Vossa Ressurreição. Amém."
  },
  {
    id: "ascensao-do-senhor",
    title: "Ascensão do Senhor aos Céus",
    date: "40 dias após a Páscoa (ou 7º Domingo da Páscoa)",
    dayBadge: "ASCENSÃO",
    liturgicalGrade: "Solenidade (Transferida no Brasil)",
    isTransferred: true,
    transferDetails: "No Brasil, a celebração é transferida da quinta-feira para o 7º Domingo da Páscoa.",
    spiritualMeaning:
      "A elevação triunfal da humanidade de Cristo à direita do Pai eterno, preparando-nos um lugar nas moradas celestes.",
    whatChurchCelebrates:
      "A glorificação de Jesus e o mandato missionário dado à Igreja: 'Ide por todo o mundo e pregai o Evangelho a toda criatura'.",
    howToLiveToday:
      "Não prenda seu coração nas glórias mundanas efêmeras. Lembre-se de que nossa verdadeira pátria definitiva é o Céu.",
    prayer:
      "Senhor Jesus, que subistes aos Céus à vista dos Apóstolos, atraí para Vós o nosso coração e dai-nos o ardor missionário de testemunhar a Vossa verdade. Amém."
  },
  {
    id: "domingo-de-pentecostes",
    title: "Domingo de Pentecostes (Efusão do Espírito Santo)",
    date: "50 dias após a Páscoa",
    dayBadge: "PENTECOSTES",
    liturgicalGrade: "Solenidade",
    isTransferred: false,
    spiritualMeaning:
      "O cumprimento da promessa de Jesus com a descida do Paráclito sob a forma de línguas de fogo sobre os Apóstolos e a Virgem Maria no Cenáculo.",
    whatChurchCelebrates:
      "O nascimento público da Igreja apostólica e a plenitude dos sete dons do Espírito Santo para renovar a face da terra.",
    howToLiveToday:
      "Invoque o Espírito Santo ao acordar. Peça os dons da fortaleza e do discernimento para combater as fraquezas da carne e crescer nas virtudes.",
    prayer:
      "Vinde, Espírito Santo, enchei os corações dos vossos fiéis e acendei neles o fogo do vosso amor. Enviai o vosso Espírito e tudo será criado, e renovareis a face da terra. Amém."
  },
  {
    id: "santissima-trindade",
    title: "Santíssima Trindade",
    date: "Domingo após Pentecostes",
    dayBadge: "TRINDADE",
    liturgicalGrade: "Solenidade",
    isTransferred: false,
    spiritualMeaning:
      "O mistério central da fé e da vida cristã: um só Deus em três Pessoas realmente distintas: o Pai criador, o Filho redentor e o Espírito Santo santificador.",
    whatChurchCelebrates:
      "A comunhão perfeita de Amor eterno da Trindade Santa na qual fomos batizados e inseridos como filhos de Deus.",
    howToLiveToday:
      "Faça o sinal da cruz com profunda reverência e consciência ao longo do dia, meditando na presença de Deus no íntimo da sua alma em estado de graça.",
    prayer:
      "Glória ao Pai, e ao Filho, e ao Espírito Santo. Como era no princípio, agora e sempre. Amém."
  },
  {
    id: "corpus-christi",
    title: "Santíssimo Corpo e Sangue de Cristo (Corpus Christi)",
    date: "Quinta-feira após a Santíssima Trindade",
    dayBadge: "CORPUS CHR.",
    liturgicalGrade: "Solenidade (Durante a semana)",
    isTransferred: false,
    spiritualMeaning:
      "A presença real, verdadeira e substancial de Jesus Cristo na Eucaristia — Corpo, Sangue, Alma e Divindade — sob as aparências do pão e do vinho.",
    whatChurchCelebrates:
      "O sacramento do Altar, a instituição do Sacerdócio e a adoração solene do Senhor pelas ruas em procissão pública sobre tapetes festivos.",
    howToLiveToday:
      "Participe da Santa Missa e da procissão solene. Faça pelo menos 15 minutos de adoração fervorosa diante do Santíssimo Sacramento no Sacrário.",
    prayer:
      "Graças e louvores se deem a todo momento ao Santíssimo e Digníssimo Sacramento! Jesus Sacramentado, nosso Deus e Senhor, nós Vos adoramos e bendizemos. Amém."
  },
  {
    id: "sagrado-coracao-de-jesus",
    title: "Sagrado Coração de Jesus",
    date: "Sexta-feira após o 2º Domingo pós-Pentecostes",
    dayBadge: "SAGR. COR.",
    liturgicalGrade: "Solenidade (Durante a semana)",
    isTransferred: false,
    spiritualMeaning:
      "O Coração humano e divino de Jesus aberto pela lança no Calvário, fonte inesgotável de misericórdia, caridade, perdão e reparação para os pecadores.",
    whatChurchCelebrates:
      "O amor infinito de Deus revelado a Santa Margarida Maria Alacoque, que prometeu graças infinitas àqueles que honrarem o Seu Coração amantíssimo.",
    howToLiveToday:
      "Faça um ato de reparação e desagravo pelas ofensas cometidas contra a Eucaristia. Perdoe de coração a quem lhe ofendeu.",
    prayer:
      "Jesus, manso e humilde de coração, fazei o meu coração semelhante ao vosso. Sagrado Coração de Jesus, eu confio em Vós! Amém."
  },
  {
    id: "natividade-sao-joao-batista",
    title: "Natividade de São João Batista",
    date: "24 de Junho",
    dayBadge: "24 JUN",
    liturgicalGrade: "Solenidade (Durante a semana)",
    isTransferred: false,
    spiritualMeaning:
      "O nascimento do maior entre os nascidos de mulher, santificado ainda no ventre de Santa Isabel pela visitação da Bem-Aventurada Virgem Maria.",
    whatChurchCelebrates:
      "O único santo (além de Jesus e Maria) cujo nascimento terreno a Igreja celebra como solenidade, precursor que preparou os caminhos do Cordeiro de Deus.",
    howToLiveToday:
      "Seja uma voz firme em favor da verdade sem medo das opiniões do mundo. Pratique o desapego e a humildade: 'É necessário que Ele cresça e eu diminua'.",
    prayer:
      "São João Batista, voz que clama no deserto e amigo do Esposo, rogai por nós para que sejamos testemunhas corajosas do Evangelho de Cristo. Amém."
  },
  {
    id: "sao-pedro-e-sao-paulo",
    title: "São Pedro e São Paulo, Apóstolos",
    date: "29 de Junho (ou Domingo mais próximo)",
    dayBadge: "29 JUN",
    liturgicalGrade: "Solenidade (Transferida no Brasil)",
    isTransferred: true,
    transferDetails: "No Brasil, quando ocorre em dia útil, é celebrada no domingo mais próximo.",
    spiritualMeaning:
      "As duas colunas inabaláveis sobre as quais Cristo fundou a Sua Igreja militante: Pedro, a pedra e o Pastor dos pastores; Paulo, o apóstolo das nações.",
    whatChurchCelebrates:
      "O martírio e a comunhão dos dois grandes apóstolos em Roma e o Dia do Papa, renovando nossa fidelidade irrestrita à Sé de Pedro.",
    howToLiveToday:
      "Reze pelo Santo Padre o Papa, pelos bispos e sacerdotes. Aprofunde-se no Catecismo da Igreja Católica para fundamentar a sua fé.",
    prayer:
      "Senhor, que fundastes a Vossa Igreja sobre o testemunho dos Apóstolos Pedro e Paulo, conservai-nos firmes na fé católica e em comunhão filial com o Papa. Amém."
  },
  {
    id: "assuncao-nossa-senhora",
    title: "Assunção da Bem-Aventurada Virgem Maria aos Céus",
    date: "15 de Agosto (ou Domingo mais próximo)",
    dayBadge: "15 AGO",
    liturgicalGrade: "Solenidade (Transferida no Brasil)",
    isTransferred: true,
    transferDetails: "No Brasil, quando ocorre em dia útil, é transferida para o domingo subsequente.",
    spiritualMeaning:
      "Maria Santíssima, preservada de toda corrupção do sepulcro, foi elevada em corpo e alma à glória do Céu na companhia de seu Divino Filho.",
    whatChurchCelebrates:
      "O dogma mariano proclamado pelo Papa Pio XII (1950), antecipação gloriosa da ressurreição final reservada a todos os que pertencem a Cristo.",
    howToLiveToday:
      "Desvie seus afetos dos prazeres mundanos que corrompem o corpo. Cuide da pureza dos seus pensamentos sabendo que seu corpo é templo do Espírito Santo.",
    prayer:
      "Virgem Assunta ao Céu, Rainha dos Anjos e dos Santos, sede o farol da nossa peregrinação terrena até que entremos convosco na glória eterna. Amém."
  },
  {
    id: "nossa-senhora-aparecida",
    title: "Nossa Senhora da Conceição Aparecida, Padroeira do Brasil",
    date: "12 de Outubro",
    dayBadge: "12 OUT",
    liturgicalGrade: "Solenidade Própria do Brasil",
    isTransferred: false,
    spiritualMeaning:
      "A Mãe morena e pequenina, sinal manifesto do amor de Deus pelo povo brasileiro, resgatada nas águas do Rio Paraíba para abençoar a nossa terra.",
    whatChurchCelebrates:
      "A Rainha e Padroeira Principal do Brasil, cuja intercessão materna acompanha as famílias, os trabalhadores e os jovens em todas as adversidades.",
    howToLiveToday:
      "Reze o Rosário pelo Brasil, pela conversão moral da nossa sociedade e pela proteção das crianças e dos jovens. Seja generoso com os mais pobres.",
    prayer:
      "Ó Imaculada Senhora Aparecida, Mãe e Padroeira do Brasil, abençoai nossa nação, guardai as nossas famílias e conduzi a juventude nos caminhos de Jesus Cristo. Amém."
  },
  {
    id: "todos-os-santos",
    title: "Todos os Santos",
    date: "1 de Novembro (ou 1º Domingo de Novembro)",
    dayBadge: "01 NOV",
    liturgicalGrade: "Solenidade (Transferida no Brasil)",
    isTransferred: true,
    transferDetails: "No Brasil, quando ocorre em dia útil, a celebração é transferida para o 1º domingo de novembro.",
    spiritualMeaning:
      "A celebração da multidão incontável de homens e mulheres canonizados e anônimos que lavaram suas vestes no Sangue do Cordeiro e contemplam a face de Deus.",
    whatChurchCelebrates:
      "O chamado universal à santidade no cotidiano e a comunhão dos santos que intercedem sem cessar por nossa vitória espiritual na terra.",
    howToLiveToday:
      "Leia a biografia de um santo que você não conhece. Tome consciência de que você nasceu para ser santo e que nenhuma mediocridade espiritual satisfaz a alma.",
    prayer:
      "Ó Deus todo-poderoso, que nos concedeis celebrar numa só festa os méritos de todos os vossos Santos, fazei-nos perseverar na Vossa amizade até alcançarmos a coroa da vida eterna. Amém."
  },
  {
    id: "cristo-rei-do-universo",
    title: "Nosso Senhor Jesus Cristo, Rei do Universo",
    date: "Último Domingo do Tempo Comum (Novembro)",
    dayBadge: "CRISTO REI",
    liturgicalGrade: "Solenidade",
    isTransferred: false,
    spiritualMeaning:
      "Jesus Cristo é o Senhor da História, Rei dos reis e o centro para o qual converge toda a Criação visível e invisível.",
    whatChurchCelebrates:
      "O coroamento e encerramento de todo o Ano Litúrgico, proclamando que todo joelho se dobrará diante do nome santíssimo de Jesus.",
    howToLiveToday:
      "Faça um exame honesto: quem governa o seu tempo, seus sentimentos e seus desejos? Submeta todas as áreas da sua vida ao senhorio absoluto de Cristo.",
    prayer:
      "Cristo vence, Cristo reina, Cristo impera! Senhor Jesus, reinai soberanamente no meu coração, na minha inteligência e em todas as minhas decisões. Amém."
  },
  {
    id: "imaculada-conceicao",
    title: "Imaculada Conceição da Bem-Aventurada Virgem Maria",
    date: "8 de Dezembro",
    dayBadge: "08 DEZ",
    liturgicalGrade: "Solenidade (Preceito)",
    isTransferred: false,
    spiritualMeaning:
      "Pela graça e privilégio de Deus todo-poderoso, em vista dos méritos de Cristo, Maria foi preservada imune de toda mancha da culpa original.",
    whatChurchCelebrates:
      "O dogma definido pelo Beato Pio IX (1854), exaltando a criatura perfeitamente bela e cheia de graça escolhida para ser o sacrário vivo do Altíssimo.",
    howToLiveToday:
      "Procure o sacramento da Confissão. Peça à Virgem Imaculada a graça de um coração transparente, com horror ao pecado mortal e venial.",
    prayer:
      "Ó Maria concebida sem pecado, rogai por nós que recorremos a vós! Guardai a pureza do meu olhar, do meu corpo e da minha mente. Amém."
  },
  {
    id: "natal-do-senhor",
    title: "Natal de Nosso Senhor Jesus Cristo",
    date: "25 de Dezembro",
    dayBadge: "25 DEZ",
    liturgicalGrade: "Solenidade Maior (Preceito)",
    isTransferred: false,
    spiritualMeaning:
      "A ternura infinita de Deus que Se despojou da Sua majestade e Se fez um bebê indefeso na manjedoura fria de Belém por amor à nossa salvação.",
    whatChurchCelebrates:
      "O nascimento temporal do Criador do mundo, acolhido na pobreza e pureza por Maria e José e anunciado aos humildes pastores pelos anjos celestes.",
    howToLiveToday:
      "Coloque Jesus no centro do seu Natal, e não o consumo. Reze diante do presépio, comungue em estado de graça e viva a fraternidade sincera em família.",
    prayer:
      "Glória a Deus nas alturas e paz na terra aos homens por Ele amados! Ó Doce Menino Jesus, nascido em Belém, nascei hoje e para sempre no meu coração. Amém."
  }
];

export const marianFeasts = liturgicalSolemnities;
