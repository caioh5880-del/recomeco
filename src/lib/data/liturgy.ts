import { LiturgyDay, LiturgyReading, LiturgyReadingOption, GospelAcclamation, LiturgyPrayers } from "../types";

export const currentSundayTitle = "XXIV Domingo do Tempo Comum";
export const currentSundayVerse = "«Não te digo até sete vezes, mas até setenta vezes sete.» (Mt 18, 22)";
export const currentLiturgicalSeason = "Tempo Comum — Ano A (Oficial CNBB)";

export const cnbbBadgeText = "Liturgia Oficial da CNBB";
export const cancaoNovaBadgeText = "Liturgia Diária da Canção Nova";

export const weekLiturgies: LiturgyDay[] = [
  {
    id: "domingo",
    source: "cnbb",
    dayOfWeek: 0,
    dayName: "Domingo",
    shortName: "DOM",
    sundayReference: "XXIV Domingo do Tempo Comum",
    date: "Domingo, 13 de setembro de 2026 • XXIV Domingo do Tempo Comum",
    rawDate: "2026-09-13",
    liturgicalColor: "Verde",
    celebrationTitle: "XXIV Domingo do Tempo Comum — O perdão sem limites (Ano A)",
    firstReading: {
      title: "Primeira Leitura",
      reference: "Eclesiástico 27, 33 – 28, 9",
      content:
        "O rancor e a ira são coisas abomináveis; no entanto, o pecador guarda ambas dentro de si. Quem se vinga sofrerá a vingança do Senhor, que guardará com rigor a conta de seus pecados. Perdoa a injustiça cometida pelo teu próximo, e então, quando rezares, teus pecados serão perdoados. Como pode um homem guardar rancor contra outro homem e pedir a Deus a cura? Não tem compaixão de um homem seu semelhante, e pede perdão pelos próprios pecados? Sendo ele apenas carne, guarda rancor: quem alcançará o perdão para os seus pecados? Lembra-te do teu fim e deixa de odiar; lembra-te da destruição e da morte, e sê fiel aos mandamentos. Lembra-te dos mandamentos e não guardes rancor do teu próximo; lembra-te da aliança do Altíssimo e não leves em conta a falta que cometeram contra ti."
    },
    psalm: {
      reference: "Salmo 102 (103)",
      title: "Salmo 102 — O Senhor é compassivo e clemente",
      versesReference: "Versículos: 1-2, 3-4, 9-10, 11-12",
      response: "O Senhor é compassivo e clemente, lento para a cólera e rico em misericórdia.",
      verses: [
        "¹ Bendize, ó minha alma, ao Senhor, e todo o meu ser, seu santo nome! ² Bendize, ó minha alma, ao Senhor, não te esqueças de nenhum de seus benefícios!",
        "³ Pois ele te perdoa toda culpa, e cura toda a tua enfermidade; ⁴ da sepultura ele salva a tua vida e te cerca de carinho e compaixão.",
        "⁹ Não fica sempre repetindo as suas queixas, nem guarda eternamente o seu rancor. ¹⁰ Não nos trata como exigem nossos erros, nem nos pune em proporção às nossas faltas.",
        "¹¹ Pois tanto quanto o céu dista da terra, tão grande é seu amor aos que o respeitam; ¹² quanto a terra está longe do oriente, tanto ele afasta para longe nossos crimes."
      ]
    },
    secondReading: {
      title: "Segunda Leitura",
      reference: "Romanos 14, 7-9",
      content:
        "Irmãos: Nenhum de nós vive para si mesmo e ninguém morre para si mesmo. Com efeito, se vivemos, é para o Senhor que vivemos; se morremos, é para o Senhor que morremos. Portanto, quer vivamos, quer morramos, pertencemos ao Senhor. De fato, para isso Cristo morreu e ressuscitou: para ser o Senhor dos mortos e dos vivos."
    },
    gospelAcclamation: {
      refrain: "Aleluia, Aleluia, Aleluia!",
      verse: "Eu vos dou um novo mandamento: amai-vos uns aos outros, como eu vos amei."
    },
    gospel: {
      title: "Santo Evangelho",
      reference: "Mateus 18, 21-35",
      content:
        "Naquele tempo, Pedro aproximou-se de Jesus e perguntou: 'Senhor, quantas vezes devo perdoar, se meu irmão pecar contra mim? Até sete vezes?' Jesus respondeu: 'Não te digo até sete vezes, mas até setenta vezes sete.\n\nPor isso, o Reino dos Céus é como um rei que resolveu acertar as contas com os seus empregados. Quando começou o acerto, trouxeram-lhe um que lhe devia uma quantia enorme. Como o empregado não tivesse com que pagar, o patrão mandou que fosse vendido como escravo, junto com a mulher e os filhos e tudo o que possuía, para pagar a dívida. O empregado, porém, caiu de joelhos diante do patrão e suplicou: 'Tem paciência comigo, e te pagarei tudo!' Diante disso, o patrão teve compaixão daquele empregado, soltou-o e perdoou-lhe a dívida.\n\nAo sair dali, aquele empregado encontrou um dos seus companheiros que lhe devia uma quantia irrisória. Ele o agarrou e começou a sufocá-lo, dizendo: 'Paga o que me deves!' O companheiro, caindo de joelhos, suplicava: 'Tem paciência comigo, e te pagarei!' Mas o outro não quis saber; pelo contrário, mandou jogá-lo na prisão, até que pagasse o que devia.\n\nVendo o que havia acontecido, os outros empregados ficaram muito tristes, procuraram o patrão e contaram-lhe tudo. Então o patrão mandou chamar o empregado e disse: 'Empregado perverso, eu te perdoei toda a tua dívida, porque me suplicaste. Não devias tu também ter compaixão do teu companheiro, como eu tive compaixão de ti?' E o patrão, indignado, entregou aquele empregado aos algozes, até que pagasse toda a sua dívida.\n\nÉ assim que o meu Pai que está nos céus vos tratará, se cada um de vós não perdoar de coração ao seu irmão'."
    },
    explanation:
      "A liturgia dominical une de modo perfeito a sabedoria do Antigo Testamento e o mandato supremo de Jesus. O livro do Eclesiástico já prevenia que quem retém ira e rancor não receberá a cura do Senhor. Cristo eleva esta verdade ao ápice: nós fomos perdoados de uma dívida impagável pelo Sacrifício da Cruz, de modo que reter ofensas é fechar as portas da própria redenção.",
    homily: {
      title: "O perdão que recebemos de Deus exige o perdão que damos ao irmão",
      content:
        "A parábola do credor incompassivo atinge o centro da nossa fé: fomos perdoados por Deus de uma dívida impagável pelo Sangue de Cristo na Cruz. Não temos o direito de reter rancores, mágoas ou amarguras contra o nosso próximo. O perdão cristão não é uma fraqueza humana ou mera emoção passageira, mas um ato de obediência e profunda gratidão ao amor que o Pai derramou sobre nós. Ao perdoar o irmão de todo o coração, abrimos a nossa alma para vivermos sob a bênção e a misericórdia de Deus.",
      practicalApplication:
        "Faça hoje uma revisão sincera diante de Jesus: há alguém que o ofendeu ou magoou e a quem você ainda não perdoou de coração? Entregue esse ressentimento na oração de hoje e reze uma Ave-Maria pela paz e conversão dessa pessoa."
    },
    marianReflection: {
      title: "O que Maria nos ensina sobre este Evangelho?",
      content:
        "Aos pés da Cruz, Nossa Senhora suportou a dor indizível de ver Seu Filho imolado sem guardar a menor sombra de ódio ou vingança. Ela uniu o Seu coração ao perdão de Jesus: 'Pai, perdoa-lhes!'. Com Maria, aprendemos que o perdão sincero é o caminho mais seguro para a paz do coração."
    },
    prayers: {
      collect: "Ó Deus, criador de todas as coisas, volvei para nós o vosso olhar e fazei que vos sirvamos de todo o coração, para sentirmos os efeitos do vosso amor.",
      offerings: "Acolhei com bondade, Senhor, as preces e oferendas do vosso povo, para que os dons oferecidos por cada um em vossa honra sirvam para a salvação de todos.",
      communion: "Nós vos pedimos, Senhor, que a ação deste sacramento celeste tome conta do nosso espírito e do nosso corpo, para que não sejamos conduzidos pelos nossos impulsos, mas pela eficácia da vossa graça.",
      entranceAntiphon: "Dai a paz, Senhor, aos que em vós esperam, para que se confirme a palavra dos vossos profetas. Ouvi as preces do vosso servo e do vosso povo de Israel.",
      communionAntiphon: "Como é preciosa a vossa misericórdia, ó Deus! Os homens se abrigam à sombra das vossas asas."
    }
  },
  {
    id: "segunda",
    source: "cnbb",
    dayOfWeek: 1,
    dayName: "Segunda-feira",
    shortName: "SEG",
    sundayReference: "XXIV Domingo do Tempo Comum",
    date: "Segunda-feira, 14 de setembro de 2026 • Exaltação da Santa Cruz",
    rawDate: "2026-09-14",
    liturgicalColor: "Vermelho",
    celebrationTitle: "Festa da Exaltação da Santa Cruz — A salvação pelo lenho sagrado",
    firstReading: {
      title: "Primeira Leitura",
      reference: "Números 21, 4b-9",
      content:
        "Naqueles dias, os israelitas partiram do monte Hor, pelo caminho do mar Vermelho, para contornar a terra de Edom. Mas o povo não pôde suportar as fadigas do caminho e começou a falar contra Deus e contra Moisés: 'Por que nos fizestes sair do Egito para morrermos no deserto? Não há aqui nem pão nem água, e já temos nojo desta comida insípida'. Então o Senhor enviou contra o povo serpentes abrasadoras, que mordiam as pessoas; e morreram muitos israelitas. O povo foi a Moisés e disse: 'Pecamos, falando contra o Senhor e contra ti. Roga ao Senhor que afaste de nós estas serpentes'. E Moisés orou pelo povo. O Senhor disse a Moisés: 'Faze uma serpente de bronze e coloca-a sobre uma haste vertical: todo aquele que for mordido e olhar para ela, ficará curado'. Moisés fez uma serpente de bronze e colocou-a sobre uma haste. Quando alguém era mordido por uma serpente, olhava para a serpente de bronze e continuava vivo."
    },
    psalm: {
      reference: "Salmo 77 (78)",
      title: "Salmo 77 — Das obras do Senhor não te esqueças",
      versesReference: "Versículos: 1-2, 34-35, 36-37, 38",
      response: "Das obras do Senhor, ó meu povo, não te esqueças!",
      verses: [
        "¹ Escuta, ó meu povo, a minha doutrina; ouve com atenção as palavras de minha boca! ² Abrirei a minha boca em parábolas e proclamarei os segredos dos tempos passados.",
        "³⁴ Quando os castigava, eles o procuravam e voltavam a buscar a Deus sem demora; ³⁵ lembravam-se de que Deus era o seu rochedo e o Altíssimo o seu Libertador.",
        "³⁶ Mas enganavam-no com a boca e mentiam-lhe com a língua; ³⁷ o seu coração não era sincero com ele e não eram fiéis à sua aliança.",
        "³⁸ No entanto, ele, compassivo, perdoava a culpa e não os destruía; muitas vezes reprimiu o seu furor e conteve a sua ira."
      ]
    },
    secondReading: {
      title: "Segunda Leitura",
      reference: "Filipenses 2, 6-11",
      content:
        "Jesus Cristo, existindo em condição divina, não fez do ser igual a Deus uma usurpação, mas esvaziou-se a si mesmo, assumindo a condição de servo, tornando-se semelhante aos homens. Encontrado com aspecto humano, humilhou-se a si mesmo, fazendo-se obediente até à morte, e morte de cruz. Por isso, Deus o exaltou soberanamente e lhe conferiu o nome que está acima de todo nome, para que, ao nome de Jesus, todo joelho se dobre nos céus, na terra e sob a terra, e toda língua confesse: 'Jesus Cristo é o Senhor', para a glória de Deus Pai."
    },
    gospelAcclamation: {
      refrain: "Aleluia, Aleluia, Aleluia!",
      verse: "Nós vos adoramos, Senhor Jesus Cristo, e vos bendizemos, porque pela cruz remistes o mundo!"
    },
    gospel: {
      title: "Santo Evangelho",
      reference: "João 3, 13-17",
      content:
        "Naquele tempo, disse Jesus a Nicodemos: 'Ninguém subiu ao céu a não ser aquele que desceu do céu, o Filho do Homem. Do mesmo modo como Moisés levantou a serpente no deserto, assim é necessário que o Filho do Homem seja levantado, para que todo aquele que nele crer tenha a vida eterna. Pois Deus amou tanto o mundo, que deu o seu Filho unigênito, para que todo aquele que nele crer não pereça, mas tenha a vida eterna. De fato, Deus não enviou o seu Filho ao mundo para condenar o mundo, mas para que o mundo seja salvo por ele'."
    },
    explanation:
      "A Festa da Exaltação da Santa Cruz ilumina o mistério supremo da nossa Redenção: a serpente de bronze que Moisés ergueu numa haste no deserto anunciava profeticamente o Cristo elevado no alto do Calvário. A Cruz, antigo símbolo de maldição e morte, tornou-se o trono glorioso da misericórdia divina.",
    homily: {
      title: "A Cruz: árvore de vida e vitória da misericórdia",
      content:
        "A Cruz não é instrumento de derrota, mas o altar sagrado onde o Filho de Deus entregou a Sua vida para resgatar a humanidade do pecado e da morte. Olhar para a Cruz com fé sincera cura os venenos do desânimo e da amargura, enchendo a alma de esperança viva.",
      practicalApplication:
        "Trace com profunda reverência o Sinal da Cruz no início de todas as suas tarefas hoje, unindo os seus cansaços ao amor redentor de Cristo."
    },
    marianReflection: {
      title: "O que Maria nos ensina sobre este Evangelho?",
      content:
        "Nossa Senhora permaneceu fiel de pé junto à Cruz de Jesus. Ela nos ensina a não fugir das provações da vida, mas a vivê-las com amor generoso e fortaleza inabalável."
    },
    prayers: {
      collect: "Ó Deus, quisestes que vosso Filho Unigênito sofresse o suplício da cruz para salvar o gênero humano; concedei que, tendo conhecido na terra este mistério, mereçamos alcançar no céu o prêmio da redenção.",
      offerings: "Purifique-nos, Senhor, de todas as ofensas, este sacrifício que, no altar da cruz, tirou o pecado do mundo inteiro. Por Cristo, nosso Senhor.",
      communion: "Senhor Jesus Cristo, alimentados pela vossa santa ceia, humildemente vos pedimos: levai à glória da ressurreição os redimidos pela árvore da cruz que nos trouxe a vida.",
      entranceAntiphon: "Quanto a nós, devemos gloriar-nos na cruz de nosso Senhor Jesus Cristo, que é nossa salvação, nossa vida e nossa ressurreição, e pelo qual fomos salvos e libertos.",
      communionAntiphon: "Quando eu for levantado da terra, atrairei todos a mim, diz o Senhor."
    }
  },
  {
    id: "terca",
    source: "cnbb",
    dayOfWeek: 2,
    dayName: "Terça-feira",
    shortName: "TER",
    sundayReference: "XXIV Domingo do Tempo Comum",
    date: "Terça-feira, 15 de setembro de 2026 • Nossa Senhora das Dores",
    rawDate: "2026-09-15",
    liturgicalColor: "Branco",
    celebrationTitle: "Memória de Nossa Senhora das Dores — A compaixão da Mãe junto à Cruz",
    firstReading: {
      title: "Primeira Leitura",
      reference: "Hebreus 5, 7-9",
      content:
        "Cristo, nos dias de sua vida terrestre, dirigiu preces e súplicas, com forte clamor e lágrimas, àquele que o podia salvar da morte. E foi atendido por causa de sua entrega a Deus. Mesmo sendo Filho, aprendeu o que significa a obediência por aquilo que sofreu. E, consumado na perfeição, tornou-se causa de salvação eterna para todos os que lhe obedecem."
    },
    psalm: {
      reference: "Salmo 30 (31)",
      title: "Salmo 30 — Salvai-me pela vossa compaixão",
      versesReference: "Versículos: 2-3ab, 3cd-4, 5-6, 15-16, 20",
      response: "Salvai-me pela vossa compaixão, ó Senhor!",
      verses: [
        "² Em vós, Senhor, me abrigo, não seja eu confundido; pela vossa justiça, libertai-me! ³ᵃᵇ Inclinai para mim o vosso ouvido, apressai-vos em socorrer-me!",
        "³ᶜᵈ Sede para mim um rochedo de refúgio, uma fortaleza para me salvar! ⁴ Sim, sois vós o meu rochedo e minha fortaleza; por vosso nome, guiai-me e conduzi-me!",
        "⁵ Livrai-me da rede que me armaram em segredo, pois sois vós a minha defesa! ⁶ Em vossas mãos entrego o meu espírito; vós me resgatareis, Senhor, Deus fiel!",
        "¹⁵ Mas eu confio em vós, Senhor; eu digo: 'Vós sois o meu Deus!' ¹⁶ Em vossas mãos está o meu destino; livrai-me das mãos dos meus inimigos e perseguidores!",
        "²⁰ Como é grande, Senhor, a vossa bondade, que reservais para os que vos temem!"
      ]
    },
    gospelAcclamation: {
      refrain: "Aleluia, Aleluia, Aleluia!",
      verse: "Feliz a Virgem Maria que, sem passar pela morte, mereceu a palma do martírio aos pés da cruz do Senhor!"
    },
    gospel: {
      title: "Santo Evangelho",
      reference: "João 19, 25-27",
      content:
        "Naquele tempo, estavam de pé, junto à cruz de Jesus, sua mãe, a irmã de sua mãe, Maria de Cléofas, e Maria Madalena. Quando Jesus viu sua mãe e, ao lado dela, o discípulo que ele amava, disse à mãe: 'Mulher, eis aí o teu filho'. Depois disse ao discípulo: 'Eis aí a tua mãe'. E, a partir daquela hora, o discípulo a acolheu em sua casa."
    },
    explanation:
      "A Memória de Nossa Senhora das Dores nos ensina a profunda união do coração materno de Maria com o sacrifício redentor de Jesus. Aos pés da cruz, a profecia de Simeão se consuma: a espada transpassa a sua alma para que nos tornemos verdadeiros filhos de Deus.",
    homily: {
      title: "Eis a tua Mãe: acolher Maria como refúgio e intercessora",
      content:
        "No alto do Calvário, Jesus entregou a Sua própria Mãe para ser a mãe espiritual de cada cristão. As lágrimas de Maria junto à Cruz unem-se ao sacrifício de amor do Redentor. Quem acolhe Maria em sua casa interior nunca caminha sozinho no sofrimento, pois tem uma Mãe atenta e compassiva que intercede sem cessar.",
      practicalApplication:
        "Reze uma Ave-Maria com profunda devoção, consagrando à intercessão de Nossa Senhora das Dores uma dor interior ou alguém de sua família que necessita de consolo."
    },
    marianReflection: {
      title: "O que Maria nos ensina sobre este Evangelho?",
      content:
        "No mistério das Suas dores, Nossa Senhora nos ensina a paciência e a confiança cega no desígnio de Deus. Ela nos acolhe como seus verdadeiros filhos sob o Seu manto de carinho."
    },
    prayers: {
      collect: "Ó Deus, que quisestes que a Mãe do vosso Filho estivesse de pé junto à cruz, sofrendo com ele, concedei que a vossa Igreja, associada a Maria na paixão de Cristo, mereça participar da sua ressurreição.",
      offerings: "Recebei, ó Deus de misericórdia, as preces e oferendas que vos apresentamos para o louvor do vosso nome, na veneração da Bem-aventurada Virgem Maria, que nos destes por Mãe compassiva junto à cruz de Jesus.",
      communion: "Tendo recebido o sacramento da salvação eterna, nós vos pedimos, Senhor, que, venerando as dores da Virgem Maria, completemos em nós o que falta à paixão de Cristo para o bem da Igreja.",
      entranceAntiphon: "Simeão disse a Maria: Uma espada traspassará a tua própria alma, para que se revelem os pensamentos de muitos corações.",
      communionAntiphon: "Alegrai-vos na medida em que participais dos sofrimentos de Cristo, para que também vos alegreis e exulteis na revelação de sua glória."
    }
  },
  {
    id: "quarta",
    source: "cnbb",
    dayOfWeek: 3,
    dayName: "Quarta-feira",
    shortName: "QUA",
    sundayReference: "XXIV Domingo do Tempo Comum",
    date: "Quarta-feira, 16 de setembro de 2026 • Santos Cornélio e Cipriano",
    rawDate: "2026-09-16",
    liturgicalColor: "Vermelho",
    celebrationTitle: "Quarta-feira da 24ª Semana do Tempo Comum — O primado da caridade",
    firstReading: {
      title: "Primeira Leitura",
      reference: "1 Coríntios 12, 31 – 13, 13",
      content:
        "Irmãos: Aspirai aos dons mais elevados. E vou mostrar-vos um caminho ainda mais excelente. Se eu falasse as línguas dos homens e dos anjos, mas não tivesse amor, seria como um bronze que ressoa ou como um címbalo que retine. Se eu tivesse o dom da profecia, se conhecesse todos os mistérios e toda a ciência, se tivesse toda a fé, a ponto de transportar montanhas, mas não tivesse amor, eu nada seria. Se eu distribuísse todos os meus bens aos pobres e entregasse o meu corpo às chamas, mas não tivesse amor, de nada me adiantaria. O amor é paciente, o amor é bondoso. Não é ciumento, não é presunçoso, não se incha de orgulho, não faz nada de vergonhoso, não busca o seu próprio interesse, não se irrita, não guarda rancor. Não se alegra com a injustiça, mas regozija-se com a verdade. Tudo desculpa, tudo crê, tudo espera, tudo suporta. O amor jamais acabará. Agora permanecem estas três virtudes: a fé, a esperança e o amor; mas a maior delas é o amor."
    },
    psalm: {
      reference: "Salmo 32 (33)",
      title: "Salmo 32 — Feliz o povo que o Senhor escolheu",
      versesReference: "Versículos: 2-3, 4-5, 12, 22",
      response: "Feliz o povo que o Senhor escolheu por sua herança!",
      verses: [
        "² Dai graças ao Senhor ao som da cítara, cantai-lhe salmos com a harpa de dez cordas! ³ Cantai para o Senhor um cântico novo, tocai com arte e aclamai com júbilo!",
        "⁴ Pois reta é a palavra do Senhor, e fiel é toda a sua obra. ⁵ Ele ama a justiça e o direito; da misericórdia do Senhor está cheia a terra.",
        "¹² Feliz a nação cujo Deus é o Senhor, o povo que ele escolheu para sua herança!",
        "²² Venha sobre nós, Senhor, a vossa misericórdia, pois em vós pusemos a nossa esperança!"
      ]
    },
    gospelAcclamation: {
      refrain: "Aleluia, Aleluia, Aleluia!",
      verse: "Um grande profeta surgiu entre nós e Deus visitou o seu povo."
    },
    gospel: {
      title: "Santo Evangelho",
      reference: "Lucas 7, 31-35",
      content:
        "Naquele tempo, disse o Senhor: 'A quem hei de comparar os homens desta geração? A quem são semelhantes? São semelhantes a crianças sentadas na praça, gritando umas para as outras: 'Nós tocamos flauta para vós, e não dançastes; entoamos lamentações, e não chorastes!' De fato, veio João Batista, que não come pão nem bebe vinho, e dizeis: 'Tem um demônio!' Veio o Filho do Homem, que come e bebe, e dizeis: 'É um comilão e beberrão, amigo de cobradores de impostos e de pecadores!' Mas a Sabedoria foi justificada por todos os seus filhos'."
    },
    explanation:
      "A 1ª Leitura traz o imortal hino da caridade de São Paulo aos Coríntios. O Evangelho confronta o espírito crítico e endurecido que rejeitou tanto a austeridade de João Batista quanto a mansidão misericordiosa de Cristo. O verdadeiro sábio discerne os caminhos de Deus pela caridade viva.",
    homily: {
      title: "O amor que tudo suporta e a sabedoria da fé",
      content:
        "São Paulo coloca a caridade como o centro supremo de toda a existência cristã. Sem o amor genuíno e desinteressado, até as obras mais extraordinárias tornam-se vazias. Jesus censura a atitude hipócrita daqueles que sempre encontram motivos para criticar e afastar-se do chamado de Deus. A autêntica sabedoria é abraçar o Evangelho com generosidade e servir ao próximo com paciência e mansidão.",
      practicalApplication:
        "Escolha calar uma queixa ou comentário desnecessário hoje, substituindo qualquer julgamento por um gesto de paciência e oração silenciosa."
    },
    marianReflection: {
      title: "O que Maria nos ensina sobre este Evangelho?",
      content:
        "Maria viveu a plenitude do hino da caridade com humildade e pureza incomparáveis. Ela não buscava seus próprios interesses, mas entregou toda a sua vida para que Cristo nascesse em cada coração."
    }
  },
  {
    id: "quinta",
    source: "cnbb",
    dayOfWeek: 4,
    dayName: "Quinta-feira",
    shortName: "QUI",
    sundayReference: "XXIV Domingo do Tempo Comum",
    date: "Quinta-feira, 17 de setembro de 2026 • 24ª Semana do Tempo Comum",
    rawDate: "2026-09-17",
    liturgicalColor: "Verde",
    celebrationTitle: "5ª Feira da 24ª Semana do Tempo Comum — O muito amor de quem foi perdoado",
    firstReading: {
      title: "Primeira Leitura",
      reference: "1 Coríntios 15, 1-11",
      content:
        "Irmãos, lembro-vos o Evangelho que vos anunciei, o qual recebestes e no qual permaneceis firmes, e pelo qual sois salvos, se o retiverdes tal como vo-lo preguei; do contrário, teríeis crido em vão. Com efeito, transmiti-vos em primeiro lugar o que eu mesmo havia recebido: que Cristo morreu pelos nossos pecados, segundo as Escrituras; que foi sepultado e ressuscitou ao terceiro dia, segundo as Escrituras; e que apareceu a Cefas e, depois, aos Doze... Por último de todos, apareceu também a mim, como a um abortivo. Pois eu sou o menor dos apóstolos, e nem sou digno de ser chamado apóstolo, porque persegui a Igreja de Deus. Mas, pela graça de Deus, sou o que sou; e a graça que ele me deu não foi estéril."
    },
    psalm: {
      reference: "Salmo 117 (118)",
      title: "Salmo 117 — Dai graças ao Senhor porque ele é bom",
      versesReference: "Versículos: 1-2, 16ab-17, 28",
      response: "Dai graças ao Senhor, porque ele é bom; eterna é a sua misericórdia!",
      verses: [
        "¹ Dai graças ao Senhor, porque ele é bom; eterna é a sua misericórdia! ² Diga a casa de Israel: 'Eterna é a sua misericórdia!'",
        "¹⁶ᵃᵇ A mão direita do Senhor fez maravilhas, a mão direita do Senhor me levantou! ¹⁷ Não hei de morrer, mas viverei e contarei as obras do Senhor.",
        "²⁸ Vós sois o meu Deus: eu vos dou graças; vós sois o meu Deus: eu vos exalto!"
      ]
    },
    gospelAcclamation: {
      refrain: "Aleluia, Aleluia, Aleluia!",
      verse: "Sua palavra é um facho para os meus passos e uma luz para o meu caminho."
    },
    gospel: {
      title: "Santo Evangelho",
      reference: "Lucas 7, 36-50",
      content:
        "Naquele tempo, um fariseu convidou Jesus para comer com ele. Jesus entrou na casa do fariseu e sentou-se à mesa. Havia ali uma mulher conhecida na cidade como pecadora. Ao saber que Jesus estava à mesa na casa do fariseu, ela levou um frasco de alabastro com perfume. Ficando por trás, aos pés de Jesus, chorava e com lágrimas começou a banhar-lhe os pés, enxugando-os com os cabelos; cobria-lhe os pés de beijos e os ungia com o perfume... Jesus virou-se para a mulher e disse a Simão: 'Vês esta mulher? Entrei na tua casa e não me deste água para os pés; ela, porém, banhou os meus pés com lágrimas e os enxugou com os cabelos. Tu não me deste o beijo; ela, porém, desde que entrei, não parou de beijar os meus pés. Tu não me derramaste óleo na cabeça; ela, porém, ungiu os meus pés com perfume. Por isso eu te digo: muitos pecados lhe foram perdoados, porque ela muito amou. Mas aquele a quem pouco se perdoa, pouco ama'. E disse à mulher: 'Teus pecados estão perdoados. A tua fé te salvou. Vai em paz!'."
    },
    explanation:
      "São Paulo recorda que a fé repousa na Morte e Ressurreição de Cristo, e que sua própria vida foi redimida pela pura graça de Deus. No Evangelho, a mulher que lava os pés de Jesus com lágrimas e perfume personifica essa mesma verdade: quem reconhece o tamanho do perdão divino ama com todo o ardor do coração.",
    homily: {
      title: "Muito foi perdoado a quem muito amou",
      content:
        "A cena de Jesus na casa de Simão ensina a infinita diferença entre o olhar do orgulho farisaico e o olhar compassivo do Redentor. Simão via apenas rótulos e condenação; Cristo acolheu a dor e o arrependimento sincero daquela mulher. Quanto mais experimentamos a misericórdia de Deus em nossas quedas, mais o nosso coração deve transbordar em carinho, zelo e adoração ao Senhor.",
      practicalApplication:
        "Agradeça a Jesus pelo perdão concedido aos seus pecados e busque enxergar com olhos de misericórdia quem cometeu um erro ao seu lado."
    },
    marianReflection: {
      title: "O que Maria nos ensina sobre este Evangelho?",
      content:
        "Maria é refúgio terno dos pecadores e advogada dos necessitados. Ela nos convida a depositar todas as nossas feridas aos pés de Jesus com profunda confiança na Sua infinita bondade."
    }
  },
  {
    id: "sexta",
    source: "cnbb",
    dayOfWeek: 5,
    dayName: "Sexta-feira",
    shortName: "SEX",
    sundayReference: "XXIV Domingo do Tempo Comum",
    date: "Sexta-feira, 18 de setembro de 2026 • 24ª Semana do Tempo Comum",
    rawDate: "2026-09-18",
    liturgicalColor: "Verde",
    celebrationTitle: "6ª Feira da 24ª Semana do Tempo Comum — A certeza da Ressurreição e o seguimento de Cristo",
    firstReading: {
      title: "Primeira Leitura",
      reference: "1 Coríntios 15, 12-20",
      content:
        "Irmãos: Se anunciamos que Cristo ressuscitou dos mortos, como é que alguns dentre vós dizem que não há ressurreição dos mortos? Se não há ressurreição dos mortos, também Cristo não ressuscitou. E, se Cristo não ressuscitou, a nossa pregação é vã e vã é também a vossa fé... Se a nossa esperança em Cristo se limita a esta vida apenas, somos os mais dignos de compaixão de todos os homens. Mas não! Cristo ressuscitou dos mortos como primícias dos que morreram!"
    },
    psalm: {
      reference: "Salmo 16 (17)",
      title: "Salmo 16 — Ao despertar, me saciará vossa presença",
      versesReference: "Versículos: 1, 6-7, 8b, 15",
      response: "Ao despertar, me saciará vossa presença e vosso olhar!",
      verses: [
        "¹ Ó Senhor, atendei à minha justa causa, inclinai-vos ao meu clamor; ouvi a minha oração, que não nasce de lábios falsos!",
        "⁶ Eu vos invoco, ó Deus, porque me respondeis; inclinai o vosso ouvido para mim e escutai a minha palavra! ⁷ Mostrai a vossa maravilhosa misericórdia, vós que salvais os que confiam em vossa mão direita!",
        "⁸ᵇ Guardai-me à sombra de vossas asas, livrai-me dos ímpios que me atacam!",
        "¹⁵ Mas eu, na vossa justiça, contemplarei a vossa face; ao despertar, me saciará a vossa presença!"
      ]
    },
    gospelAcclamation: {
      refrain: "Aleluia, Aleluia, Aleluia!",
      verse: "Bendito sejas, ó Pai, Senhor do céu e da terra, porque revelaste aos pequeninos os mistérios do Reino."
    },
    gospel: {
      title: "Santo Evangelho",
      reference: "Lucas 8, 1-3",
      content:
        "Naquele tempo, Jesus andava por cidades e aldeias, pregando e anunciando a Boa-Nova do Reino de Deus. Os Doze iam com ele, e também algumas mulheres que tinham sido curadas de espíritos malignos e de doenças: Maria, chamada Madalena, da qual tinham saído sete demônios; Joana, mulher de Cuza, alto funcionário de Herodes; Susana e várias outras, que os ajudavam com os seus bens."
    },
    explanation:
      "A certeza inegociável da Ressurreição de Cristo sustenta a vida de fé da Igreja nas provações da história. É esse Cristo vivo que atrai e congrega discípulos e discípulas fiéis que partilham seus dons para levar o Evangelho a todos os recantos.",
    homily: {
      title: "A esperança na vida eterna e a prontidão no serviço",
      content:
        "A ressurreição de Nosso Senhor Jesus Cristo ilumina toda a nossa caminhada sobre a terra. Ela nos recorda que nenhuma oração, nenhum sacrifício e nenhuma dedicação é perdida aos olhos de Deus. O Evangelho mostra homens e mulheres que, transformados pelo toque salvador de Cristo, colocavam seus talentos e bens materiais a serviço do Reino. Seguir a Jesus é uma vocação de serviço alegre e comunhão fraterna.",
      practicalApplication:
        "Ofereça algo de concreto hoje: uma contribuição solidária, o seu tempo de atenção a alguém doente ou o apoio a uma obra da Igreja."
    },
    marianReflection: {
      title: "O que Maria nos ensina sobre este Evangelho?",
      content:
        "Maria acompanhou os passos de Jesus desde Nazaré até o Calvário e o Cenáculo. Ela é o modelo perfeito de discipulado fiel, discreto e inteiramente dedicado a Cristo."
    }
  },
  {
    id: "sabado",
    source: "cnbb",
    dayOfWeek: 6,
    dayName: "Sábado",
    shortName: "SÁB",
    sundayReference: "XXIV Domingo do Tempo Comum",
    date: "Sábado, 19 de setembro de 2026 • 24ª Semana do Tempo Comum",
    rawDate: "2026-09-19",
    liturgicalColor: "Verde",
    celebrationTitle: "Sábado da 24ª Semana do Tempo Comum — A semente em terra boa",
    firstReading: {
      title: "Primeira Leitura",
      reference: "1 Coríntios 15, 35-37. 42-49",
      content:
        "Irmãos, dirá alguém: 'Como ressuscitam os mortos? Com que corpo voltarão?' Insensato! O que semeias não ganha vida se primeiro não morrer... Semeia-se um corpo corruptível, ressuscita um corpo incorruptível; semeia-se na humilhação, ressuscita na glória; semeia-se na fraqueza, ressuscita cheio de força; semeia-se um corpo animal, ressuscita um corpo espiritual... E assim como trouxemos a imagem do homem terrestre, traremos também a imagem do homem celeste."
    },
    psalm: {
      reference: "Salmo 55 (56)",
      title: "Salmo 55 — Andarei na presença de Deus",
      versesReference: "Versículos: 10-11ab, 11cd-12, 13-14",
      response: "Andarei na presença de Deus, na luz dos vivos!",
      verses: [
        "¹⁰ Meus inimigos recuarão no dia em que eu clamar; tenho certeza de que Deus está a meu favor! ¹¹ᵃᵇ Em Deus, cuja palavra eu louvo, ¹¹ᶜᵈ no Senhor, cuja palavra eu celebro,",
        "¹² em Deus eu confio e nada temo; que mal me pode fazer um homem mortal?",
        "¹³ Cumprirei, ó Deus, os votos que vos fiz; oferecer-vos-ei sacrifícios de ação de graças, ¹⁴ porque livrastes a minha alma da morte e os meus pés da queda, para que eu ande na presença de Deus, na luz dos vivos!"
      ]
    },
    gospelAcclamation: {
      refrain: "Aleluia, Aleluia, Aleluia!",
      verse: "A semente é a Palavra de Deus e o semeador é Cristo; quem o encontra viverá para sempre."
    },
    gospel: {
      title: "Santo Evangelho",
      reference: "Lucas 8, 4-15",
      content:
        "Naquele tempo, reuniu-se uma grande multidão e de todas as cidades iam até Jesus. Então ele contou esta parábola: 'O semeador saiu a semear a sua semente. Ao semear, uma parte caiu à beira do caminho; foi pisada e as aves do céu a comeram. Outra caiu sobre a rocha; logo que brotou, secou por falta de umidade. Outra caiu entre os espinhos; e os espinhos cresceram com ela e a sufocaram. Outra caiu em terra boa; cresceu e produziu fruto, cem por um'... Jesus explicou: 'A semente é a Palavra de Deus... As que caíram em terra boa são aqueles que ouvem a Palavra com um coração nobre e generoso, guardam-na com perseverança e dão fruto'."
    },
    explanation:
      "São Paulo compara o corpo da ressurreição ao grão de trigo que morre na terra para florescer em vida eterna e incorruptível. Essa mesma analogia ecoa no Evangelho da semente: a Palavra divina lançada em terra nobre e generosa rende frutos incalculáveis de santidade e perseverança.",
    homily: {
      title: "O coração nobre e generoso que faz frutificar a Palavra",
      content:
        "A semente divina nunca falha: a eficácia do fruto depende da disposição do terreno da nossa alma. Devemos arrancar as distrações superficiais, o comodismo que seca a fé e os espinhos dos apegos mundanos. Um coração acolhedor e orante guarda a Palavra com fidelidade cotidiana e produz frutos abundantes de paz, caridade e perseverança.",
      practicalApplication:
        "Faça o exame de consciência da sua semana com serenidade e prepare o seu coração para a Santa Missa do Domingo, acolhendo a Palavra de Deus com reverência."
    },
    marianReflection: {
      title: "O que Maria nos ensina sobre este Evangelho?",
      content:
        "Nossa Senhora é a terra perfeitamente pura e fecunda que acolheu a Palavra de Deus e a fez frutificar para a salvação da humanidade. Peçamos a ela que torne nosso coração dócil à voz do Senhor."
    }
  }
];

export function getLiturgyForDate(date: Date = new Date(), source: "cnbb" | "cancaonova" = "cnbb"): LiturgyDay {
  const dayOfWeek = date.getDay();
  const dayNames = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
  const shortNames = ["DOM", "SEG", "TER", "QUA", "QUI", "SEX", "SÁB"];
  const monthNames = [
    "janeiro", "fevereiro", "março", "abril", "maio", "junho",
    "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"
  ];

  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();

  const formattedDate = `${dayNames[dayOfWeek]}, ${day} de ${monthNames[month]} de ${year}`;
  const rawDate = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;

  const foundInCurated = weekLiturgies.find((d) => d.dayOfWeek === dayOfWeek);

  if (foundInCurated) {
    const isCuratedExact = foundInCurated.rawDate === rawDate;
    const base = isCuratedExact ? foundInCurated : {
      ...foundInCurated,
      date: `${formattedDate} • ${foundInCurated.celebrationTitle}`,
      rawDate
    };

    return {
      ...base,
      source
    };
  }

  const isSunday = dayOfWeek === 0;

  return {
    id: rawDate,
    source,
    rawDate,
    dayOfWeek,
    dayName: dayNames[dayOfWeek],
    shortName: shortNames[dayOfWeek],
    date: `${formattedDate} • Tempo Comum`,
    liturgicalColor: isSunday ? "Verde" : "Verde",
    celebrationTitle: isSunday ? "Domingo do Tempo Comum" : `${dayNames[dayOfWeek]} do Tempo Comum`,
    firstReading: {
      title: "Primeira Leitura",
      reference: "1 Coríntios 12, 1-11",
      content:
        "Irmãos: A respeito dos dons espirituais, não quero que vivais na ignorância... Há diversidade de dons, mas o Espírito é o mesmo; diversidade de ministérios, mas o Senhor é o mesmo; diversidade de operações, mas é o mesmo Deus que opera tudo em todos."
    },
    psalm: {
      reference: "Salmo 95 (96)",
      title: "Salmo 95 — Anunciai entre as nações as grandes obras do Senhor",
      versesReference: "Versículos: 1-2a, 2b-3, 7-8a, 9-10a",
      response: "Anunciai entre as nações as grandes obras do Senhor!",
      verses: [
        "¹ Cantai ao Senhor Deus um canto novo, cantai ao Senhor Deus, ó terra inteira! ²ᵃ Cantai e bendizei seu santo nome!",
        "²ᵇ Dia após dia anunciai sua salvação, ³ manifestai a sua glória entre as nações, e entre os povos do universo seus prodígios!",
        "⁷ Ó famílias das nações, dai ao Senhor, dai ao Senhor poder e glória, ⁸ᵃ dai-lhe a glória que é devida ao seu nome!",
        "⁹ Adorai o Senhor no esplendor de sua santidade, tremei diante dele, ó terra inteira! ¹⁰ᵃ Dizei entre as nações: 'O Senhor é rei!'"
      ]
    },
    secondReading: isSunday
      ? {
          title: "Segunda Leitura",
          reference: "Romanos 12, 9-16",
          content:
            "O amor seja sincero. Detestai o mal, apegai-vos ao bem. Amai-vos mutuamente com afeto fraternal, antecipando-vos em honrar-vos uns aos outros."
        }
      : undefined,
    gospelAcclamation: {
      refrain: "Aleluia, Aleluia, Aleluia!",
      verse: "Minhas ovelhas escutam a minha voz, eu as conheço e elas me seguem."
    },
    gospel: {
      title: "Santo Evangelho",
      reference: "Mateus 5, 1-12",
      content:
        "Naquele tempo, vendo Jesus as multidões, subiu ao monte e sentou-se. Seus discípulos aproximaram-se dele, e ele começou a ensiná-los, dizendo: 'Bem-aventurados os pobres em espírito, porque deles é o Reino dos Céus. Bem-aventurados os mansos, porque possuirão a terra. Bem-aventurados os que choram, porque serão consolados. Bem-aventurados os que têm fome e sede de justiça, porque serão saciados... Alegrai-vos e exultai, porque será grande a vossa recompensa nos céus'."
    },
    explanation:
      "A liturgia nos convida a acolher a Palavra de Deus que transforma a nossa mentalidade mundana no molde das Bem-aventuranças celestes de Cristo Jesus.",
    homily: {
      title: "As Bem-aventuranças: o mapa divino da felicidade",
      content:
        "O Evangelho das Bem-aventuranças não é uma utopia distante, mas o programa de vida traçado pelo próprio Cristo. Ser manso, misericordioso e puro de coração constrói o Reino de Deus já no meio de nós e abre os céus para a eternidade.",
      practicalApplication:
        "Escolha hoje viver uma das Bem-aventuranças no seu lar e no trabalho: promova a paz diante de um conflito ou acolha quem se encontra aflito."
    },
    marianReflection: {
      title: "O que Maria nos ensina sobre este Evangelho?",
      content:
        "Maria é a primeira bem-aventurada: 'Feliz aquela que acreditou'. Ela nos conduz pela mão para que acolhamos o chamado de Jesus à santidade com coração humilde e dócil."
    },
    prayers: {
      collect: "Concedei-nos, Senhor, a graça de vos amar em tudo e acima de tudo, para obtermos as vossas promessas, que superam todo desejo humano.",
      offerings: "Acolhei, ó Deus, os dons que vos apresentamos e transformai-os no sacramento da nossa salvação.",
      communion: "Alimentados pelo vosso corpo eucarístico, dai-nos, Senhor, viver na caridade mútua e na fidelidade aos vossos mandamentos.",
      entranceAntiphon: "O Senhor é a força do seu povo, fortaleza de salvação para o seu ungido.",
      communionAntiphon: "O Senhor é meu pastor, nada me faltará; em verdes pastagens me faz repousar."
    }
  };
}

export const todayLiturgy: LiturgyDay = getLiturgyForDate(new Date(), "cnbb");
