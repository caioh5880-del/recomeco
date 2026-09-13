import { Prayer } from "../types";

export const prayersList: Prayer[] = [
  {
    id: "sinal-da-cruz",
    title: "Sinal da Cruz",
    subtitle: "Invocação da Santíssima Trindade e consagração inicial",
    category: "traditional",
    latinTitle: "Signum Crucis",
    suggestedMoment: "Ao iniciar e concluir qualquer oração ou ato cristão",
    explanation:
      "A mais antiga e frequente profissão de fé dos cristãos, traçando a Santa Cruz sobre a fronte, boca e coração em honra da Trindade Santa.",
    text:
      "Em nome do Pai, e do Filho, e do Espírito Santo. Amém.",
    latinText:
      "In nomine Patris, et Filii, et Spiritus Sancti. Amen."
  },
  {
    id: "credo-apostolico",
    title: "Credo (Símbolo dos Apóstolos)",
    subtitle: "A profissão da fé cristã batismal",
    category: "traditional",
    latinTitle: "Symbolum Apostolorum",
    suggestedMoment: "Início do Rosário, manhãs e domingos",
    explanation:
      "Síntese inabalável das verdades eternas reveladas por Deus e guardadas pela Tradição Apostólica da Igreja Católica.",
    text:
      "Creio em Deus Pai todo-poderoso, Criador do céu e da terra. E em Jesus Cristo, seu único Filho, nosso Senhor, que foi concebido pelo poder do Espírito Santo, nasceu da Virgem Maria, padeceu sob Pôncio Pilatos, foi crucificado, morto e sepultado; desceu à mansão dos mortos; ressuscitou ao terceiro dia; subiu aos céus, está sentado à direita de Deus Pai todo-poderoso, donde há de vir a julgar os vivos e os mortos. Creio no Espírito Santo, na Santa Igreja Católica, na comunhão dos santos, na remissão dos pecados, na ressurreição da carne, na vida eterna. Amém.",
    latinText:
      "Credo in Deum Patrem omnipotentem, Creatorem caeli et terrae. Et in Iesum Christum, Filium eius unicum, Dominum nostrum, qui conceptus est de Spiritu Sancto, natus ex Maria Virgine, passus sub Pontio Pilato, crucifixus, mortuus, et sepultus, descendit ad inferos, tertia die resurrexit a mortuis, ascendit ad caelos, sedet ad dexteram Dei Patris omnipotentis, inde venturus est iudicare vivos et mortuos. Credo in Spiritum Sanctum, sanctam Ecclesiam catholicam, sanctorum communionem, remissionem peccatorum, carnis resurrectionem, vitam aeternam. Amen."
  },
  {
    id: "pai-nosso",
    title: "Pai-Nosso",
    subtitle: "A oração ensinada pelo próprio Jesus Cristo",
    category: "traditional",
    latinTitle: "Pater Noster",
    suggestedMoment: "Em qualquer momento do dia",
    explanation:
      "A oração perfeita, modelo de todas as súplicas cristãs, entregue por Jesus aos seus discípulos no Sermão da Montanha.",
    text:
      "Pai nosso, que estais nos céus, santificado seja o vosso nome. Venha a nós o vosso reino. Seja feita a vossa vontade, assim na terra como no céu. O pão nosso de cada dia nos dai hoje. Perdoai-nos as nossas ofensas, assim como nós perdoamos a quem nos tem ofendido. E não nos deixeis cair em tentação, mas livrai-nos do mal. Amém.",
    latinText:
      "Pater noster, qui es in caelis, sanctificetur nomen tuum. Adveniat regnum tuum. Fiat voluntas tua, sicut in caelo et in terra. Panem nostrum cotidianum da nobis hodie. Et dimitte nobis debita nostra, sicut et nos dimittimus debitoribus nostris. Et ne nos inducas in tentationem, sed libera nos a malo. Amen."
  },
  {
    id: "ave-maria",
    title: "Ave-Maria",
    subtitle: "A saudação angélica e a louvação da Igreja",
    category: "traditional",
    latinTitle: "Ave Maria",
    suggestedMoment: "Em todo tempo e lugar",
    explanation:
      "Une a saudação do Arcanjo Gabriel, a bênção profética de Santa Isabel e a humilde súplica da Santa Igreja por nossa salvação.",
    text:
      "Ave Maria, cheia de graça, o Senhor é convosco, bendita sois vós entre as mulheres e bendito é o fruto do vosso ventre, Jesus. Santa Maria, Mãe de Deus, rogai por nós pecadores, agora e na hora de nossa morte. Amém.",
    latinText:
      "Ave Maria, gratia plena, Dominus tecum. Benedicta tu in mulieribus, et benedictus fructus ventris tui, Iesus. Sancta Maria, Mater Dei, ora pro nobis peccatoribus, nunc et in hora mortis nostrae. Amen."
  },
  {
    id: "gloria-ao-pai",
    title: "Glória ao Pai",
    subtitle: "Doxologia menor em honra da Santíssima Trindade",
    category: "traditional",
    latinTitle: "Gloria Patri",
    suggestedMoment: "Conclusão de salmos e orações",
    explanation:
      "Louvor solene à Trindade Santa — Pai, Filho e Espírito Santo — reconhecendo Sua soberania eterna.",
    text:
      "Glória ao Pai, e ao Filho e ao Espírito Santo. Como era no princípio, agora e sempre. Amém.",
    latinText:
      "Gloria Patri, et Filio, et Spiritui Sancto. Sicut erat in principio, et nunc, et semper, et in saecula saeculorum. Amen."
  },
  {
    id: "salve-rainha",
    title: "Salve-Rainha",
    subtitle: "Antífona solene à Mãe de Misericórdia",
    category: "marian",
    latinTitle: "Salve Regina",
    suggestedMoment: "Conclusão do Terço ou orações noturnas",
    explanation:
      "Hino do século XI que expressa o desterro terreno e o anseio pelo Céu, suplicando o olhar compassivo da Rainha Celeste.",
    text:
      "Salve, Rainha, Mãe de misericórdia, vida, doçura e esperança nossa, salve! A vós bradamos, os degredados filhos de Eva. A vós suspiramos, gemendo e chorando neste vale de lágrimas. Eia, pois, advogada nossa, esses vossos olhos misericordiosos a nós volvei, e depois deste desterro mostrai-nos Jesus, bendito fruto do vosso ventre, ó clemente, ó piedosa, ó doce sempre Virgem Maria. Rogai por nós, Santa Mãe de Deus, para que sejamos dignos das promessas de Cristo. Amém.",
    latinText:
      "Salve, Regina, Mater misericordiae, vita, dulcedo, et spes nostra, salve. Ad te clamamus, exsules filii Hevae. Ad te suspiramus, gementes et flentes in hac lacrimarum valle. Eia ergo, advocata nostra, illos tuos misericordes oculos ad nos converte. Et Iesum, benedictum fructum ventris tui, nobis post hoc exsilium ostende. O clemens, o pia, o dulcis Virgo Maria. Ora pro nobis, Sancta Dei Genetrix, ut digni efficiamur promissionibus Christi. Amen."
  },
  {
    id: "angelus",
    title: "O Ângelus",
    subtitle: "Memória da Encarnação do Verbo Divino",
    category: "marian",
    latinTitle: "Angelus Domini",
    suggestedMoment: "Tradicionalmente às 6h, 12h e 18h",
    explanation:
      "Celebra o momento em que o Arcanjo Gabriel anunciou à Virgem Maria que ela seria a Mãe do Salvador e a resposta fiel de Nossa Senhora.",
    text:
      "— O Anjo do Senhor anunciou a Maria.\n— E Ela concebeu do Espírito Santo.\n\nAve Maria, cheia de graça, o Senhor é convosco, bendita sois vós entre as mulheres e bendito é o fruto do vosso ventre, Jesus. Santa Maria, Mãe de Deus, rogai por nós pecadores, agora e na hora de nossa morte. Amém.\n\n— Eis aqui a serva do Senhor.\n— Faça-se em mim segundo a Vossa palavra.\n\nAve Maria...\n\n— E o Verbo se fez carne.\n— E habitou entre nós.\n\nAve Maria...\n\n— Rogai por nós, Santa Mãe de Deus.\n— Para que sejamos dignos das promessas de Cristo.\n\nOremos:\nInfundi, Senhor, a vossa graça em nossas almas, para que nós, que pela anunciação do Anjo conhecemos a encarnação de Jesus Cristo, vosso Filho, cheguemos, por sua paixão e cruz, à glória da ressurreição. Por Nosso Senhor Jesus Cristo, vosso Filho, na unidade do Espírito Santo. Amém.",
    latinText:
      "— Angelus Domini nuntiavit Mariae.\n— Et concepit de Spiritu Sancto.\n\nAve Maria, gratia plena, Dominus tecum. Benedicta tu in mulieribus, et benedictus fructus ventris tui, Iesus. Sancta Maria, Mater Dei, ora pro nobis peccatoribus, nunc et in hora mortis nostrae. Amen.\n\n— Ecce ancilla Domini.\n— Fiat mihi secundum verbum tuum.\n\nAve Maria...\n\n— Et Verbum caro factum est.\n— Et habitavit in nobis.\n\nAve Maria...\n\n— Ora pro nobis, Sancta Dei Genetrix.\n— Ut digni efficiamur promissionibus Christi.\n\nOremus:\nGratiam tuam, quaesumus, Domine, mentibus nostris infunde; ut qui, Angelo nuntiante, Christi Filii tui incarnationem cognovimus, per passionem eius et crucem ad resurrectionis gloriam perducamur. Per eundem Christum Dominum nostrum. Amen."
  },
  {
    id: "regina-caeli",
    title: "Regina Caeli",
    subtitle: "Hino pascal em honra da Rainha do Céu",
    category: "marian",
    latinTitle: "Regina Caeli, laetare",
    suggestedMoment: "Tempo Pascal (da Páscoa a Pentecostes, às 12h)",
    explanation:
      "Substitui o Ângelus durante todo o Tempo Pascal, exultando de júbilo pela Ressurreição gloriosa de Jesus Cristo.",
    text:
      "— Rainha do Céu, alegrai-vos, aleluia!\n— Porque Aquele que merecestes trazer em vosso seio, aleluia!\n— Ressuscitou como havia dito, aleluia!\n— Rogai a Deus por nós, aleluia!\n\n— Exultai e alegrai-vos, ó Virgem Maria, aleluia!\n— Porque o Senhor ressuscitou verdadeiramente, aleluia!\n\nOremos:\nÓ Deus, que Vos dignastes alegrar o mundo com a Ressurreição do Vosso Filho, Nosso Senhor Jesus Cristo, concedei-nos, nós Vo-lo suplicamos, que por Sua Mãe, a Virgem Maria, alcancemos as alegrias da vida eterna. Por Cristo, Nosso Senhor. Amém.",
    latinText:
      "— Regina caeli, laetare, alleluia!\n— Quia quem meruisti portare, alleluia!\n— Resurrexit, sicut dixit, alleluia!\n— Ora pro nobis Deum, alleluia!\n\n— Gaude et laetare, Virgo Maria, alleluia!\n— Quia surrexit Dominus vere, alleluia!\n\nOremus:\nDeus, qui per resurrectionem Filii tui, Domini nostri Iesu Christi, mundum laetificare dignatus es: praesta, quaesumus, ut per eius Genetricem Virginem Mariam, perpetuae capiamus gaudia vitae. Per eundem Christum Dominum nostrum. Amen."
  },
  {
    id: "magnificat",
    title: "O Magnificat",
    subtitle: "O Cântico de louvor e exultação de Nossa Senhora",
    category: "marian",
    latinTitle: "Canticum B. Mariae Virginis",
    suggestedMoment: "Oração da tarde ou momentos de louvor",
    explanation:
      "O hino entoado por Maria na casa de Isabel, proclamando a grandeza de Deus, Sua misericórdia e o cumprimento de Suas promessas eternas.",
    text:
      "A minha alma glorifica o Senhor e o meu espírito se alegra em Deus, meu Salvador, porque olhou para a humildade de sua serva. Desde agora, todas as gerações me chamarão bem-aventurada, porque o Todo-Poderoso fez em mim grandes coisas; Santo é o seu nome. A sua misericórdia se estende de geração em geração sobre os que o temem. Manifestou o poder de seu braço, dispersou os homens de coração soberbo. Derrubou os poderosos de seus tronos e exaltou os humildes. Encheu de bens os famintos e despediu os ricos de mãos vazias. Acolheu a Israel, seu servo, lembrado de sua misericórdia, como havia prometido a nossos pais, em favor de Abraão e de sua descendência para sempre. Glória ao Pai, ao Filho e ao Espírito Santo, como era no princípio, agora e sempre. Amém.",
    latinText:
      "Magnificat anima mea Dominum, et exsultavit spiritus meus in Deo salvatore meo, quia respexit humilitatem ancillae suae. Ecce enim ex hoc beatam me dicent omnes generationes, quia fecit mihi magna, qui potens est, et sanctum nomen eius, et misericordia eius in progenies et progenies timentibus eum. Fecit potentiam in brachio suo, dispersit superbos mente cordis sui; deposuit potentes de sede et exaltavit humiles; esurientes implevit bonis et divites dimisit inanes. Suscepit Israel puerum suum, recordatus misericordiae, sicut locutus est ad patres nostros, Abraham et semini eius in saecula. Gloria Patri, et Filio, et Spiritui Sancto, sicut erat in principio, et nunc, et semper, et in saecula saeculorum. Amen."
  },
  {
    id: "memorare",
    title: "Lembrai-vos (Memorare)",
    subtitle: "Oração de filial confiança atribuída a São Bernardo",
    category: "marian",
    latinTitle: "Memorare, O piissima Virgo Maria",
    suggestedMoment: "Momentos de aflição, dúvida ou necessidade premente",
    explanation:
      "Uma das mais belas e consoladoras preces marianas, lembrando que jamais se ouviu dizer que alguém tenha recorrido a Maria e sido desamparado.",
    text:
      "Lembrai-vos, ó puríssima Virgem Maria, que nunca se ouviu dizer que algum daqueles que têm recorrido à vossa proteção, implorado a vossa assistência e reclamado o vosso socorro, fosse por vós desamparado. Animado eu, pois, de igual confiança, a vós, Virgem entre todas singular, como a Mãe recorro, de vós me valho e, gemendo sob o peso dos meus pecados, me prostro a vossos pés. Não desprezeis as minhas súplicas, ó Mãe do Filho de Deus humanado, mas dignai-vos de as ouvir propícia e de me alcançar o que vos peço. Amém.",
    latinText:
      "Memorare, o piissima Virgo Maria, a saeculo non esse auditum, quemquam ad tua currentem praesidia, tua implorantem auxilia, tua petentem suffragia, esse derelictum. Ego tali animatus confidentia, ad te, Virgo Virginum, Mater, curro, ad te venio, coram te gemens peccator assisto. Noli, Mater Verbi, verba mea despicere; sed audi propitia et exaudi. Amen."
  },
  {
    id: "consagracao-nossa-senhora",
    title: "Consagração a Nossa Senhora",
    subtitle: "Entrega total dos sentidos e da vida à Santa Mãe",
    category: "marian",
    latinTitle: "Consecratio ad Beatam Mariam Virginem",
    suggestedMoment: "Todos os dias pela manhã ou antes de dormir",
    explanation:
      "Oração consagrada pelo povo cristão para consagrar os olhos, ouvidos, boca, coração e toda a integridade da alma à proteção virginal de Maria.",
    text:
      "Ó minha Senhora, ó minha Mãe, eu me ofereço todo a vós e, em prova da minha devoção para convosco, vos consagro neste dia e para sempre: meus olhos, meus ouvidos, minha boca, meu coração e inteiramente todo o meu ser. E porque assim sou vosso, ó incomparável Mãe, guardai-me e defendei-me como coisa e propriedade vossa. Amém.",
    latinText:
      "O Domina mea, o Mater mea, tibi me totum offero; atque, ut me tibi devotum esse tester, hodie et semper tibi consecro oculos meos, aures meas, os meum, cor meum, plane me totum. Quoniam itaque tuus sum, o incomparabilis Mater, serva me, defende me, ut rem et possessionem tuam. Amen."
  },
  {
    id: "ladainha-nossa-senhora",
    title: "Ladainha de Nossa Senhora",
    subtitle: "Ladainha Lauretana com as invocações à Santíssima Virgem",
    category: "marian",
    latinTitle: "Litaniae Lauretanae",
    suggestedMoment: "Após a oração do Rosário",
    explanation:
      "Uma coroa de títulos bíblicos e poéticos com os quais a Igreja louva as virtudes eminentes e a glória de Maria Santíssima.",
    text:
      "Senhor, tende piedade de nós.\nCristo, tende piedade de nós.\nSenhor, tende piedade de nós.\nJesus Cristo, ouvi-nos.\nJesus Cristo, atendei-nos.\n\nPai do Céu, que sois Deus, tende piedade de nós.\nFilho, Redentor do mundo, que sois Deus, tende piedade de nós.\nEspírito Santo, que sois Deus, tende piedade de nós.\nSantíssima Trindade, que sois um só Deus, tende piedade de nós.\n\nSanta Maria, rogai por nós.\nSanta Mãe de Deus, rogai por nós.\nSanta Virgem das virgens, rogai por nós.\nMãe de Cristo, rogai por nós.\nMãe da Igreja, rogai por nós.\nMãe de misericórdia, rogai por nós.\nMãe da divina graça, rogai por nós.\nMãe da esperança, rogai por nós.\nMãe puríssima, rogai por nós.\nMãe castíssima, rogai por nós.\nMãe sempre virgem, rogai por nós.\nMãe imaculada, rogai por nós.\nMãe digna de amor, rogai por nós.\nMãe admirável, rogai por nós.\nMãe do bom conselho, rogai por nós.\nMãe do Criador, rogai por nós.\nMãe do Salvador, rogai por nós.\nVirgem prudentíssima, rogai por nós.\nVirgem venerável, rogai por nós.\nVirgem louvável, rogai por nós.\nVirgem poderosa, rogai por nós.\nVirgem clemente, rogai por nós.\nVirgem fiel, rogai por nós.\nEspelho de justiça, rogai por nós.\nSede da sabedoria, rogai por nós.\nCausa da nossa alegria, rogai por nós.\nVaso espiritual, rogai por nós.\nVaso honorífico, rogai por nós.\nVaso insigne de devoção, rogai por nós.\nRosa mística, rogai por nós.\nTorre de Davi, rogai por nós.\nTorre de marfim, rogai por nós.\nCasa de ouro, rogai por nós.\nArca da aliança, rogai por nós.\nPorta do Céu, rogai por nós.\nEstrela da manhã, rogai por nós.\nSaúde dos enfermos, rogai por nós.\nRefúgio dos pecadores, rogai por nós.\nConsoladora dos aflitos, rogai por nós.\nAuxílio dos cristãos, rogai por nós.\nRainha dos Anjos, rogai por nós.\nRainha dos Patriarcas, rogai por nós.\nRainha dos Profetas, rogai por nós.\nRainha dos Apóstolos, rogai por nós.\nRainha dos Mártires, rogai por nós.\nRainha dos Confessores, rogai por nós.\nRainha das Virgens, rogai por nós.\nRainha de todos os Santos, rogai por nós.\nRainha concebida sem pecado original, rogai por nós.\nRainha assunta ao Céu, rogai por nós.\nRainha do Santíssimo Rosário, rogai por nós.\nRainha da família, rogai por nós.\nRainha da paz, rogai por nós.\n\nCordeiro de Deus, que tirais o pecado do mundo, perdoai-nos, Senhor.\nCordeiro de Deus, que tirais o pecado do mundo, ouvi-nos, Senhor.\nCordeiro de Deus, que tirais o pecado do mundo, tende piedade de nós.",
    latinText:
      "Kyrie, eleison. Christe, eleison. Kyrie, eleison. Christe, audi nos. Christe, exaudi nos.\n\nPater de caelis, Deus, miserere nobis.\nFili, Redemptor mundi, Deus, miserere nobis.\nSpiritus Sancte, Deus, miserere nobis.\nSancta Trinitas, unus Deus, miserere nobis.\n\nSancta Maria, ora pro nobis.\nSancta Dei Genetrix, ora pro nobis.\nSancta Virgo virginum, ora pro nobis.\nMater Christi, ora pro nobis.\nMater Ecclesiae, ora pro nobis.\nMater misericordiae, ora pro nobis.\nMater divinae gratiae, ora pro nobis.\nMater spei, ora pro nobis.\nMater purissima, ora pro nobis.\nMater castissima, ora pro nobis.\nMater inviolata, ora pro nobis.\nMater intemerata, ora pro nobis.\nMater amabilis, ora pro nobis.\nMater admirabilis, ora pro nobis.\nMater boni consilii, ora pro nobis.\nMater Creatoris, ora pro nobis.\nMater Salvatoris, ora pro nobis.\nVirgo prudentissima, ora pro nobis.\nVirgo veneranda, ora pro nobis.\nVirgo praedicanda, ora pro nobis.\nVirgo potens, ora pro nobis.\nVirgo clemens, ora pro nobis.\nVirgo fidelis, ora pro nobis.\nSpeculum iustitiae, ora pro nobis.\nSedes sapientiae, ora pro nobis.\nCausa nostrae laetitiae, ora pro nobis.\nVas spirituale, ora pro nobis.\nVas honorabile, ora pro nobis.\nVas insigne devotionis, ora pro nobis.\nRosa mystica, ora pro nobis.\nTurris Davidica, ora pro nobis.\nTurris eburnea, ora pro nobis.\nDomus aurea, ora pro nobis.\nFoederis arca, ora pro nobis.\nIanua caeli, ora pro nobis.\nStella matutina, ora pro nobis.\nSalus infirmorum, ora pro nobis.\nRefugium peccatorum, ora pro nobis.\nConsolatrix afflictorum, ora pro nobis.\nAuxilium Christianorum, ora pro nobis.\nRegina Angelorum, ora pro nobis.\nRegina Patriarcharum, ora pro nobis.\nRegina Prophetarum, ora pro nobis.\nRegina Apostolorum, ora pro nobis.\nRegina Martyrum, ora pro nobis.\nRegina Confessorum, ora pro nobis.\nRegina Virginum, ora pro nobis.\nRegina Sanctorum omnium, ora pro nobis.\nRegina sine labe originali concepta, ora pro nobis.\nRegina in caelum assumpta, ora pro nobis.\nRegina sacratissimi Rosarii, ora pro nobis.\nRegina familiae, ora pro nobis.\nRegina pacis, ora pro nobis.\n\nAgnus Dei, qui tollis peccata mundi, parce nobis, Domine.\nAgnus Dei, qui tollis peccata mundi, exaudi nos, Domine.\nAgnus Dei, qui tollis peccata mundi, miserere nobis."
  },
  {
    id: "oracao-de-fatima",
    title: "Oração de Fátima (Ejaculatória)",
    subtitle: "Invocação ensinada por Nossa Senhora aos três pastorinhos",
    category: "traditional",
    latinTitle: "Oratio Fatimae",
    suggestedMoment: "Ao término do Glória de cada mistério do Terço",
    explanation:
      "Ensinada em 13 de julho de 1917 em Fátima, suplicando o perdão das faltas, livramento do inferno e misericórdia para com todas as almas.",
    text:
      "Ó meu Jesus, perdoai-nos, livrai-nos do fogo do inferno, levai as almas todas para o céu e socorrei principalmente as que mais precisarem da vossa misericórdia.",
    latinText:
      "O mi Iesu, dimitte nobis debita nostra, libera nos ab igne inferni, perduc in caelum omnes animas, praesertim eas, quae misericordiae tuae maxime indigent."
  },
  {
    id: "oracao-de-agradecimento",
    title: "Oração de Agradecimento",
    subtitle: "Louvor à Soberana Rainha na conclusão do Rosário",
    category: "marian",
    latinTitle: "Actio Gratiarum ad Reginam",
    suggestedMoment: "Conclusão do Terço antes da Salve Rainha",
    explanation:
      "Ação de graças filial pelos incontáveis benefícios que a Mãe de Deus alcança de suas mãos carinhosas para a nossa vida diária.",
    text:
      "Infinitas graças vos damos, soberana Rainha, pelos benefícios que todos os dias recebemos de vossas mãos maternais. Dignai-vos agora e para sempre tomar-nos debaixo de vosso poderoso amparo, e para mais vos agradecer, vos saudamos com uma Salve Rainha:",
    latinText:
      "Infinitas tibi gratias agimus, suprema Regina, pro beneficiis quae cotidie de tuis manibus maternalibus accipimus. Dignare nunc et semper sub tuo potenti praesidio nos suscipere, et ut uberiores tibi grates referamus, te hac Salve Regina salutamus:"
  },
  {
    id: "oracao-da-manha",
    title: "Oração da Manhã",
    subtitle: "Consagração do despertar e das primeiras horas",
    category: "morning",
    latinTitle: "Oratio Matutina",
    suggestedMoment: "Ao se levantar",
    explanation:
      "Apresenta as primeiras batidas do coração a Deus, colocando todo o desenrolar das atividades sob a proteção divina.",
    text:
      "Senhor, no silêncio deste dia que amanhece, venho pedir-Vos paz, sabedoria e força. Quero olhar hoje o mundo com olhos cheios de amor, ser paciente, compreensivo, manso e prudente. Quero ver, além das aparências, vossos filhos como Vós mesmo os vedes, e assim não ver senão o bem em cada um. Cerrai meus ouvidos a toda calúnia, guardai minha língua de toda maldade, para que só de bênçãos se encha meu espírito. Que eu seja tão bondoso e tão alegre que todos quantos se aproximarem de mim sintam a Vossa presença. Revesti-me de Vossa beleza, Senhor, e que, no decurso deste dia, eu Vos revele a todos. Amém.",
    latinText:
      "Domine Deus, in silentio huius diei orientis, a te pacem, sapientiam et virtutem peto. Mundum hodie intueri volo oculis amore plenis, esse patiens, comprensivus, mitis ac prudens. Ultra species filios tuos videre cupio, sicut tu ipse eos vides, ut nihil nisi bonum in unoquoque conspiciam. Aures meas claude ab omni calumnia, linguam meam custodi ab omni malitia, ut solis benedictionibus repletur anima mea. Fac me tam benignum tamque laetum, ut omnes qui ad me accedunt tuam sentiant praesentiam. Indue me, Domine, tua venustate, et te omnibus hoc die revelem. Amen."
  },
  {
    id: "oferecimento-do-dia",
    title: "Oferecimento do Dia",
    subtitle: "Consagração dos pensamentos, atos e intenções ao Sagrado Coração",
    category: "morning",
    latinTitle: "Oblatio Matutina",
    suggestedMoment: "Ao começar o dia",
    explanation:
      "Une todos os seus atos, estudos, trabalhos e sofrimentos ao Coração de Jesus e Maria desde as primeiras horas do dia.",
    text:
      "Senhor meu Deus, Pai infinitamente bom, eu Vos ofereço este dia: meus pensamentos, palavras, obras, sofrimentos e alegrias, em união com o Sagrado Coração de Vosso Divino Filho Jesus Cristo, que se renova incessantemente na Santa Missa pelo mundo inteiro. Por intercessão do Imaculado Coração de Maria, Mãe de Deus e nossa Mãe amantíssima, ofereço tudo pelas intenções da Santa Igreja, pela santificação das famílias e pela conversão de todos os corações. Amém.",
    latinText:
      "Domine Deus meus, Pater infinite bone, tibi offero hunc diem: cogitationes, verba, opera, dolores et gaudia mea, in unione cum Sacratissimo Corde Divini Filii tui Iesu Christi, quod in Sancto Missae Sacrificio per totum mundum iugiter renovatur. Per intercessionem Immaculati Cordis Mariae, Matris Dei et Matris nostrae amantissimae, omnia offero pro intentionibus Sanctae Ecclesiae, pro sanctificatione familiarum et pro conversione omnium cordium. Amen."
  },
  {
    id: "hora-da-misericordia",
    title: "Hora da Misericórdia",
    subtitle: "Clamor às 15 horas pela Paixão dolorosa de Jesus",
    category: "traditional",
    latinTitle: "Hora Divinae Misericordiae",
    suggestedMoment: "Às 15 horas (Hora da Morte de Cristo)",
    explanation:
      "Recorda o instante supremo em que Cristo expirou na Cruz e a misericórdia jorrou sobre o mundo inteiro.",
    text:
      "Ó Sangue e Água que jorrastes do Coração de Jesus como fonte de misericórdia para nós, eu confio em Vós!\n\nJesus, eu confio em Vós.\nJesus, eu confio em Vós.\nJesus, eu confio em Vós.",
    latinText:
      "O Sanguis et Aqua, qui profluxisti de Corde Iesu tamquam fons misericordiae pro nobis, in te confido!\n\nIesu, in te confido.\nIesu, in te confido.\nIesu, in te confido."
  },
  {
    id: "exame-de-consciencia",
    title: "Exame do Dia & Contrição",
    subtitle: "Revisão serena da jornada na presença amorosa de Deus",
    category: "night",
    latinTitle: "Actus Contritionis",
    suggestedMoment: "Antes de deitar",
    explanation:
      "Passo essencial para o crescimento espiritual: agradecer pelas graças recebidas, reconhecer as faltas cometidas e renovar o propósito de amar mais a Deus amanhã.",
    text:
      "Meu Deus e Senhor, coloco-me em Vossa santa presença. Iluminai a minha mente com a luz do Vosso Espírito Santo para que eu possa enxergar este dia com os olhos da verdade e da misericórdia. Meu Deus, tenho muita dor de ter pecado, porque sois infinitamente bom e digno de ser amado sobre todas as coisas. Proponho firmemente, com o auxílio da Vossa graça, não mais pecar e evitar as ocasiões de queda. Pela intercessão da Virgem Imaculada, acolhei meu arrependimento e dai-me uma noite tranquila. Amém.",
    latinText:
      "Deus meus et Dominus meus, in sancta tua praesentia me pono. Illumina mentem meam lumine Spiritus Sancti, ut hunc diem oculis veritatis et misericordiae videam. Deus meus, ex toto corde me poenitet de omnibus peccatis meis, quia es infinite bonus et super omnia amabilis. Firmiter propono, adiuvante gratia tua, de cetero non peccare et proximas peccandi occasiones fugere. Per intercessionem Virginis Immaculatae, suscipe poenitentiam meam et noctem quietam concede. Amen."
  },
  {
    id: "oracao-da-noite",
    title: "Oração da Noite",
    subtitle: "Abandono confiante no repouso do corpo e da alma",
    category: "night",
    latinTitle: "Visita, quaesumus, Domine",
    suggestedMoment: "Último ato antes de dormir",
    explanation:
      "Entrega a noite e o sono aos Santos Anjos e à Mãe Celeste, para acordar com forças renovadas no dia seguinte.",
    text:
      "Visita, Senhor, esta habitação e afastai para longe dela todas as ciladas do inimigo; habitem nela os vossos santos anjos para nos guardar em paz, e a vossa bênção esteja sempre conosco. Virgem Santíssima, cobri-me com o vosso manto sagrado nesta noite e livrai-me de qualquer perigo do corpo e da alma. Em vossas mãos, Senhor, entrego o meu espírito. Amém.",
    latinText:
      "Visita, quaesumus, Domine, habitationem istam, et omnes insidias inimici ab ea longe repelle: Angeli tui sancti habitent in ea, qui nos in pace custodiant; et benedictio tua sit super nos semper. Sanctissima Virgo, tuo sacro manto me protege hac nocte et ab omni periculo corporis et animae me libera. In manus tuas, Domine, commendo spiritum meum. Amen."
  }
];
