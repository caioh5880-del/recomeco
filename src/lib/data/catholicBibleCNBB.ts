import { BibleBook, BibleChapter, BibleVerse } from "../types";
import { matthewCompleteChapters } from "./matthewChapters";

export const cnbbOfficialBadge = "Tradução oficial — CNBB";
export const cnbbVersionName = "Bíblia Sagrada — Versão Oficial da CNBB";
export const cnbbCanonDescription = "Cânon Católico Completo • 73 Livros Sagrados";

export const catholicCanonBooks: BibleBook[] = [
  {
    id: "genesis",
    name: "Gênesis",
    shortName: "Gênesis",
    abbreviation: "Gn",
    testament: "AT",
    category: "pentateuco",
    categoryLabel: "Pentateuco",
    totalChapters: 50,
    description: "A criação do mundo, as origens da humanidade e a aliança com os patriarcas."
  },
  {
    id: "exodo",
    name: "Êxodo",
    shortName: "Êxodo",
    abbreviation: "Êx",
    testament: "AT",
    category: "pentateuco",
    categoryLabel: "Pentateuco",
    totalChapters: 40,
    description: "A libertação do povo de Israel do Egito e a aliança no Sinai."
  },
  {
    id: "levitico",
    name: "Levítico",
    shortName: "Levítico",
    abbreviation: "Lv",
    testament: "AT",
    category: "pentateuco",
    categoryLabel: "Pentateuco",
    totalChapters: 27,
    description: "Leis litúrgicas, sacerdócio e o chamado à santidade de vida."
  },
  {
    id: "numeros",
    name: "Números",
    shortName: "Números",
    abbreviation: "Nm",
    testament: "AT",
    category: "pentateuco",
    categoryLabel: "Pentateuco",
    totalChapters: 36,
    description: "A caminhada do povo pelo deserto rumo à Terra Prometida."
  },
  {
    id: "deuteronomio",
    name: "Deuteronômio",
    shortName: "Deuteronômio",
    abbreviation: "Dt",
    testament: "AT",
    category: "pentateuco",
    categoryLabel: "Pentateuco",
    totalChapters: 34,
    description: "Os discursos de Moisés e a renovação da fidelidade aos mandamentos de Deus."
  },
  {
    id: "josue",
    name: "Josué",
    shortName: "Josué",
    abbreviation: "Js",
    testament: "AT",
    category: "historicos",
    categoryLabel: "Livros Históricos",
    totalChapters: 24,
    description: "A entrada e conquista da Terra Prometida sob a liderança de Josué."
  },
  {
    id: "juizes",
    name: "Juízes",
    shortName: "Juízes",
    abbreviation: "Jz",
    testament: "AT",
    category: "historicos",
    categoryLabel: "Livros Históricos",
    totalChapters: 21,
    description: "Os líderes suscitados por Deus para libertar e guiar as tribos de Israel."
  },
  {
    id: "rute",
    name: "Rute",
    shortName: "Rute",
    abbreviation: "Rt",
    testament: "AT",
    category: "historicos",
    categoryLabel: "Livros Históricos",
    totalChapters: 4,
    description: "A fidelidade de Rute e a linhagem que conduz ao rei Davi e a Cristo."
  },
  {
    id: "1samuel",
    name: "1 Samuel",
    shortName: "1 Sm",
    abbreviation: "1Sm",
    testament: "AT",
    category: "historicos",
    categoryLabel: "Livros Históricos",
    totalChapters: 31,
    description: "A transição dos juízes para a monarquia com Saul e a unção do jovem Davi."
  },
  {
    id: "2samuel",
    name: "2 Samuel",
    shortName: "2 Sm",
    abbreviation: "2Sm",
    testament: "AT",
    category: "historicos",
    categoryLabel: "Livros Históricos",
    totalChapters: 24,
    description: "O reinado de Davi, a Arca da Aliança e a promessa da dinastia eterna."
  },
  {
    id: "1reis",
    name: "1 Reis",
    shortName: "1 Reis",
    abbreviation: "1Rs",
    testament: "AT",
    category: "historicos",
    categoryLabel: "Livros Históricos",
    totalChapters: 22,
    description: "A sabedoria de Salomão, o Templo e a divisão dos reinos de Judá e Israel."
  },
  {
    id: "2reis",
    name: "2 Reis",
    shortName: "2 Reis",
    abbreviation: "2Rs",
    testament: "AT",
    category: "historicos",
    categoryLabel: "Livros Históricos",
    totalChapters: 25,
    description: "O ministério dos profetas Elias e Eliseu até o exílio em Babilônia."
  },
  {
    id: "1cronicas",
    name: "1 Crônicas",
    shortName: "1 Cr",
    abbreviation: "1Cr",
    testament: "AT",
    category: "historicos",
    categoryLabel: "Livros Históricos",
    totalChapters: 29,
    description: "Genealogias sagradas e a preparação do culto no Templo por Davi."
  },
  {
    id: "2cronicas",
    name: "2 Crônicas",
    shortName: "2 Cr",
    abbreviation: "2Cr",
    testament: "AT",
    category: "historicos",
    categoryLabel: "Livros Históricos",
    totalChapters: 36,
    description: "A glória de Salomão e a história dos reis de Judá até o retorno do exílio."
  },
  {
    id: "esdras",
    name: "Esdras",
    shortName: "Esdras",
    abbreviation: "Esd",
    testament: "AT",
    category: "historicos",
    categoryLabel: "Livros Históricos",
    totalChapters: 10,
    description: "O retorno a Jerusalém, a reconstrução do Templo e o zelo pela Lei."
  },
  {
    id: "neemias",
    name: "Neemias",
    shortName: "Neemias",
    abbreviation: "Ne",
    testament: "AT",
    category: "historicos",
    categoryLabel: "Livros Históricos",
    totalChapters: 13,
    description: "A reconstrução dos muros de Jerusalém e a renovação comunitária da fé."
  },
  {
    id: "tobias",
    name: "Tobias",
    shortName: "Tobias",
    abbreviation: "Tb",
    testament: "AT",
    category: "historicos",
    categoryLabel: "Livros Históricos",
    totalChapters: 14,
    isDeuterocanonical: true,
    description: "Livro Deuterocanônico do Cânon Católico. A piedade em família e a proteção do Arcanjo Rafael."
  },
  {
    id: "judite",
    name: "Judite",
    shortName: "Judite",
    abbreviation: "Jt",
    testament: "AT",
    category: "historicos",
    categoryLabel: "Livros Históricos",
    totalChapters: 16,
    isDeuterocanonical: true,
    description: "Livro Deuterocanônico do Cânon Católico. A coragem exemplar de Judite em defesa do povo de Deus."
  },
  {
    id: "ester",
    name: "Ester",
    shortName: "Ester",
    abbreviation: "Est",
    testament: "AT",
    category: "historicos",
    categoryLabel: "Livros Históricos",
    totalChapters: 10,
    description: "A providência de Deus salvando o povo através da rainha Ester (incluindo adições gregas)."
  },
  {
    id: "1macabeus",
    name: "1 Macabeus",
    shortName: "1 Mc",
    abbreviation: "1Mc",
    testament: "AT",
    category: "historicos",
    categoryLabel: "Livros Históricos",
    totalChapters: 16,
    isDeuterocanonical: true,
    description: "Livro Deuterocanônico do Cânon Católico. A heroica luta dos macabeus pela fé e purificação do Templo."
  },
  {
    id: "2macabeus",
    name: "2 Macabeus",
    shortName: "2 Mc",
    abbreviation: "2Mc",
    testament: "AT",
    category: "historicos",
    categoryLabel: "Livros Históricos",
    totalChapters: 15,
    isDeuterocanonical: true,
    description: "Livro Deuterocanônico do Cânon Católico. O testemunho dos mártires, a oração pelos mortos e a ressurreição."
  },
  {
    id: "jo",
    name: "Jó",
    shortName: "Jó",
    abbreviation: "Jó",
    testament: "AT",
    category: "sapienciais",
    categoryLabel: "Livros Sapienciais",
    totalChapters: 42,
    description: "O mistério do sofrimento do justo e a confiança inabalável na soberania de Deus."
  },
  {
    id: "salmos",
    name: "Salmos",
    shortName: "Salmos",
    abbreviation: "Sl",
    testament: "AT",
    category: "sapienciais",
    categoryLabel: "Livros Sapienciais",
    totalChapters: 150,
    description: "O hinário orante de louvor, súplica e ação de graças do Povo de Deus."
  },
  {
    id: "proverbios",
    name: "Provérbios",
    shortName: "Provérbios",
    abbreviation: "Pr",
    testament: "AT",
    category: "sapienciais",
    categoryLabel: "Livros Sapienciais",
    totalChapters: 31,
    description: "Conselhos práticos inspirados para uma vida reta segundo o temor de Deus."
  },
  {
    id: "eclesiastes",
    name: "Eclesiastes (Qohélet)",
    shortName: "Eclesiastes",
    abbreviation: "Ecl",
    testament: "AT",
    category: "sapienciais",
    categoryLabel: "Livros Sapienciais",
    totalChapters: 12,
    description: "A fugacidade das vaidades terrenas e o valor de colocar o coração apenas em Deus."
  },
  {
    id: "canticos",
    name: "Cântico dos Cânticos",
    shortName: "Cânticos",
    abbreviation: "Ct",
    testament: "AT",
    category: "sapienciais",
    categoryLabel: "Livros Sapienciais",
    totalChapters: 8,
    description: "O poema nupcial do amor sublime, figura da união de Deus com o Seu povo e a Igreja."
  },
  {
    id: "sabedoria",
    name: "Sabedoria",
    shortName: "Sabedoria",
    abbreviation: "Sb",
    testament: "AT",
    category: "sapienciais",
    categoryLabel: "Livros Sapienciais",
    totalChapters: 19,
    isDeuterocanonical: true,
    description: "Livro Deuterocanônico do Cânon Católico. O dom sublime da divina Sabedoria e a imortalidade da alma."
  },
  {
    id: "eclesiastico",
    name: "Eclesiástico (Sirácida)",
    shortName: "Eclesiástico",
    abbreviation: "Eclo",
    testament: "AT",
    category: "sapienciais",
    categoryLabel: "Livros Sapienciais",
    totalChapters: 51,
    isDeuterocanonical: true,
    description: "Livro Deuterocanônico do Cânon Católico. As virtudes, a amizade verdadeira e o temor do Senhor."
  },
  {
    id: "isaias",
    name: "Isaías",
    shortName: "Isaías",
    abbreviation: "Is",
    testament: "AT",
    category: "profeticos",
    categoryLabel: "Livros Proféticos",
    totalChapters: 66,
    description: "O profeta messiânico por excelência: os oráculos do Emanuel e do Servo Sofredor."
  },
  {
    id: "jeremias",
    name: "Jeremias",
    shortName: "Jeremias",
    abbreviation: "Jr",
    testament: "AT",
    category: "profeticos",
    categoryLabel: "Livros Proféticos",
    totalChapters: 52,
    description: "A vocação ardente, a denúncia da idolatria e a promessa da Nova Aliança."
  },
  {
    id: "lamentacoes",
    name: "Lamentações",
    shortName: "Lamentações",
    abbreviation: "Lm",
    testament: "AT",
    category: "profeticos",
    categoryLabel: "Livros Proféticos",
    totalChapters: 5,
    description: "Cânticos de dor pela ruína de Jerusalém e a renovada esperança na misericórdia de Deus."
  },
  {
    id: "baruc",
    name: "Baruc",
    shortName: "Baruc",
    abbreviation: "Br",
    testament: "AT",
    category: "profeticos",
    categoryLabel: "Livros Proféticos",
    totalChapters: 6,
    isDeuterocanonical: true,
    description: "Livro Deuterocanônico do Cânon Católico. Arrependimento no exílio e o caminho para a verdadeira Sabedoria."
  },
  {
    id: "ezequiel",
    name: "Ezequiel",
    shortName: "Ezequiel",
    abbreviation: "Ez",
    testament: "AT",
    category: "profeticos",
    categoryLabel: "Livros Proféticos",
    totalChapters: 48,
    description: "As grandes visões celestes, os ossos secos revividos e o Templo restaurado."
  },
  {
    id: "daniel",
    name: "Daniel",
    shortName: "Daniel",
    abbreviation: "Dn",
    testament: "AT",
    category: "profeticos",
    categoryLabel: "Livros Proféticos",
    totalChapters: 14,
    description: "Fidelidade em corte pagã, profecias apocalípticas e as seções deuterocanônicas (Cântico dos 3 Jovens e Susana)."
  },
  {
    id: "oseias",
    name: "Oseias",
    shortName: "Oseias",
    abbreviation: "Os",
    testament: "AT",
    category: "profeticos",
    categoryLabel: "Livros Proféticos",
    totalChapters: 14,
    description: "O amor fiel e compassivo de Deus por Seu povo, mesmo diante da ingratidão."
  },
  {
    id: "joel",
    name: "Joel",
    shortName: "Joel",
    abbreviation: "Jl",
    testament: "AT",
    category: "profeticos",
    categoryLabel: "Livros Proféticos",
    totalChapters: 4,
    description: "O Dia do Senhor, o chamado à penitência de coração e a efusão do Espírito Santo."
  },
  {
    id: "amos",
    name: "Amós",
    shortName: "Amós",
    abbreviation: "Am",
    testament: "AT",
    category: "profeticos",
    categoryLabel: "Livros Proféticos",
    totalChapters: 9,
    description: "A defesa da justiça social autêntica e a denúncia da falsa religiosidade sem amor."
  },
  {
    id: "obadias",
    name: "Obadias",
    shortName: "Obadias",
    abbreviation: "Ob",
    testament: "AT",
    category: "profeticos",
    categoryLabel: "Livros Proféticos",
    totalChapters: 1,
    description: "A soberania divina sobre as nações e o triunfo final do Reino de Deus."
  },
  {
    id: "jonas",
    name: "Jonas",
    shortName: "Jonas",
    abbreviation: "Jn",
    testament: "AT",
    category: "profeticos",
    categoryLabel: "Livros Proféticos",
    totalChapters: 4,
    description: "A missão profética em Nínive e a universalidade da misericórdia perdoadora de Deus."
  },
  {
    id: "miqueias",
    name: "Miqueias",
    shortName: "Miqueias",
    abbreviation: "Mq",
    testament: "AT",
    category: "profeticos",
    categoryLabel: "Livros Proféticos",
    totalChapters: 7,
    description: "A profecia de Belém onde nascerá o Pastor de Israel e o chamado a andar humildemente com Deus."
  },
  {
    id: "naum",
    name: "Naum",
    shortName: "Naum",
    abbreviation: "Na",
    testament: "AT",
    category: "profeticos",
    categoryLabel: "Livros Proféticos",
    totalChapters: 3,
    description: "O julgamento da violência e a consolação de Israel pelo Senhor soberano."
  },
  {
    id: "habacuc",
    name: "Habacuc",
    shortName: "Habacuc",
    abbreviation: "Hab",
    testament: "AT",
    category: "profeticos",
    categoryLabel: "Livros Proféticos",
    totalChapters: 3,
    description: "O diálogo de fé com Deus: 'O justo viverá por sua fidelidade'."
  },
  {
    id: "sofonias",
    name: "Sofonias",
    shortName: "Sofonias",
    abbreviation: "Sf",
    testament: "AT",
    category: "profeticos",
    categoryLabel: "Livros Proféticos",
    totalChapters: 3,
    description: "A purificação do povo e a promessa de alegria para o humilde Resto de Israel."
  },
  {
    id: "ageu",
    name: "Ageu",
    shortName: "Ageu",
    abbreviation: "Ag",
    testament: "AT",
    category: "profeticos",
    categoryLabel: "Livros Proféticos",
    totalChapters: 2,
    description: "O imperativo de priorizar a Casa de Deus acima dos interesses egoístas."
  },
  {
    id: "zacarias",
    name: "Zacarias",
    shortName: "Zacarias",
    abbreviation: "Zc",
    testament: "AT",
    category: "profeticos",
    categoryLabel: "Livros Proféticos",
    totalChapters: 14,
    description: "A vinda do Rei manso montado num jumentinho e o derramamento do espírito de prece."
  },
  {
    id: "malaquias",
    name: "Malaquias",
    shortName: "Malaquias",
    abbreviation: "Ml",
    testament: "AT",
    category: "profeticos",
    categoryLabel: "Livros Proféticos",
    totalChapters: 3,
    description: "O profeta que encerra o Antigo Testamento com o anúncio do Sol da Justiça e de Elias precursor."
  },

  {
    id: "mateus",
    name: "São Mateus",
    shortName: "Mateus",
    abbreviation: "Mt",
    testament: "NT",
    category: "evangelhos",
    categoryLabel: "Santos Evangelhos",
    totalChapters: 28,
    description: "Jesus é o Messias prometido, novo Moisés que cumpre as Escrituras e funda a Sua Igreja."
  },
  {
    id: "marcos",
    name: "São Marcos",
    shortName: "Marcos",
    abbreviation: "Mc",
    testament: "NT",
    category: "evangelhos",
    categoryLabel: "Santos Evangelhos",
    totalChapters: 16,
    description: "O Evangelho do discipulado e da ação vigorosa: Jesus Cristo, Filho de Deus e Servo do Pai."
  },
  {
    id: "lucas",
    name: "São Lucas",
    shortName: "Lucas",
    abbreviation: "Lc",
    testament: "NT",
    category: "evangelhos",
    categoryLabel: "Santos Evangelhos",
    totalChapters: 24,
    description: "O Evangelho da misericórdia, da oração, dos pobres e da santíssima presença da Virgem Maria."
  },
  {
    id: "joao",
    name: "São João",
    shortName: "João",
    abbreviation: "Jo",
    testament: "NT",
    category: "evangelhos",
    categoryLabel: "Santos Evangelhos",
    totalChapters: 21,
    description: "O Verbo eterno que se fez carne: mistério sublime, vida em plenitude e amor eucarístico."
  },
  {
    id: "atos",
    name: "Atos dos Apóstolos",
    shortName: "Atos",
    abbreviation: "At",
    testament: "NT",
    category: "atos",
    categoryLabel: "Histórico do Novo Testamento",
    totalChapters: 28,
    description: "A descida de Pentecostes, a missão dos Apóstolos e o nascimento corajoso da Igreja Católica."
  },
  {
    id: "romanos",
    name: "Romanos",
    shortName: "Romanos",
    abbreviation: "Rm",
    testament: "NT",
    category: "cartas_paulinas",
    categoryLabel: "Cartas Paulinas",
    totalChapters: 16,
    description: "A justificação pela fé em Cristo, a graça redentora e a vida no Espírito Santo."
  },
  {
    id: "1corintios",
    name: "1 Coríntios",
    shortName: "1 Coríntios",
    abbreviation: "1Cor",
    testament: "NT",
    category: "cartas_paulinas",
    categoryLabel: "Cartas Paulinas",
    totalChapters: 16,
    description: "A sabedoria da Cruz, a unidade dos dons, a Santa Eucaristia e o hino supremo ao Amor."
  },
  {
    id: "2corintios",
    name: "2 Coríntios",
    shortName: "2 Coríntios",
    abbreviation: "2Cor",
    testament: "NT",
    category: "cartas_paulinas",
    categoryLabel: "Cartas Paulinas",
    totalChapters: 13,
    description: "O ministério apostólico nas fraquezas humanas: 'A minha graça te basta'."
  },
  {
    id: "galatas",
    name: "Gálatas",
    shortName: "Gálatas",
    abbreviation: "Gl",
    testament: "NT",
    category: "cartas_paulinas",
    categoryLabel: "Cartas Paulinas",
    totalChapters: 6,
    description: "A verdadeira liberdade dos filhos de Deus em Cristo contra o legalismo estéril."
  },
  {
    id: "efesios",
    name: "Efésios",
    shortName: "Efésios",
    abbreviation: "Ef",
    testament: "NT",
    category: "cartas_paulinas",
    categoryLabel: "Cartas Paulinas",
    totalChapters: 6,
    description: "O desígnio divino da Igreja como Corpo Místico de Cristo e a armadura espiritual do cristão."
  },
  {
    id: "filipenses",
    name: "Filipenses",
    shortName: "Filipenses",
    abbreviation: "Fl",
    testament: "NT",
    category: "cartas_paulinas",
    categoryLabel: "Cartas Paulinas",
    totalChapters: 4,
    description: "A carta da alegria e serenidade: 'Tudo posso naquele que me fortalece'."
  },
  {
    id: "colossenses",
    name: "Colossenses",
    shortName: "Colossenses",
    abbreviation: "Cl",
    testament: "NT",
    category: "cartas_paulinas",
    categoryLabel: "Cartas Paulinas",
    totalChapters: 4,
    description: "A soberania absoluta de Cristo, cabeça de toda a criação e primogênito dos mortos."
  },
  {
    id: "1tessalonicenses",
    name: "1 Tessalonicenses",
    shortName: "1 Tessalonicenses",
    abbreviation: "1Ts",
    testament: "NT",
    category: "cartas_paulinas",
    categoryLabel: "Cartas Paulinas",
    totalChapters: 5,
    description: "A vigilância na fé, a santificação diária e a viva esperança na volta gloriosa do Senhor."
  },
  {
    id: "2tessalonicenses",
    name: "2 Tessalonicenses",
    shortName: "2 Tessalonicenses",
    abbreviation: "2Ts",
    testament: "NT",
    category: "cartas_paulinas",
    categoryLabel: "Cartas Paulinas",
    totalChapters: 3,
    description: "A firmeza na verdade contra os enganos mundanos e o trabalho digno na fidelidade a Deus."
  },
  {
    id: "1timoteo",
    name: "1 Timóteo",
    shortName: "1 Timóteo",
    abbreviation: "1Tm",
    testament: "NT",
    category: "cartas_paulinas",
    categoryLabel: "Cartas Paulinas",
    totalChapters: 6,
    description: "Conselhos pastorais a um bispo jovem: zelar pela sã doutrina e pela comunidade eclesial."
  },
  {
    id: "2timoteo",
    name: "2 Timóteo",
    shortName: "2 Timóteo",
    abbreviation: "2Tm",
    testament: "NT",
    category: "cartas_paulinas",
    categoryLabel: "Cartas Paulinas",
    totalChapters: 4,
    description: "O testamento espiritual de São Paulo: 'Combati o bom combate, completei a corrida, guardei a fé'."
  },
  {
    id: "tito",
    name: "Tito",
    shortName: "Tito",
    abbreviation: "Tt",
    testament: "NT",
    category: "cartas_paulinas",
    categoryLabel: "Cartas Paulinas",
    totalChapters: 3,
    description: "A organização da Igreja e o testemunho exemplar dos cristãos nas boas obras."
  },
  {
    id: "filemon",
    name: "Filêmon",
    shortName: "Filêmon",
    abbreviation: "Fm",
    testament: "NT",
    category: "cartas_paulinas",
    categoryLabel: "Cartas Paulinas",
    totalChapters: 1,
    description: "A fraternidade cristã que transforma as relações humanas pelo perdão e caridade."
  },
  {
    id: "hebreus",
    name: "Hebreus",
    shortName: "Hebreus",
    abbreviation: "Hb",
    testament: "NT",
    category: "cartas_paulinas",
    categoryLabel: "Cartas Paulinas",
    totalChapters: 13,
    description: "O sacerdócio eterno e definitivo de Jesus Cristo, mediador da Nova e Eterna Aliança."
  },
  {
    id: "tiago",
    name: "São Tiago",
    shortName: "Tiago",
    abbreviation: "Tg",
    testament: "NT",
    category: "cartas_catolicas",
    categoryLabel: "Cartas Católicas",
    totalChapters: 5,
    description: "A fé autêntica traduzida em obras concretas, domínio da língua e cuidado com os necessitados."
  },
  {
    id: "1pedro",
    name: "1 São Pedro",
    shortName: "1 Pedro",
    abbreviation: "1Pd",
    testament: "NT",
    category: "cartas_catolicas",
    categoryLabel: "Cartas Católicas",
    totalChapters: 5,
    description: "A esperança viva dos cristãos em meio às provações: 'Vós sois raça eleita, sacerdócio régio'."
  },
  {
    id: "2pedro",
    name: "2 São Pedro",
    shortName: "2 Pedro",
    abbreviation: "2Pd",
    testament: "NT",
    category: "cartas_catolicas",
    categoryLabel: "Cartas Católicas",
    totalChapters: 3,
    description: "A perseverança na verdade contra falsos mestres e a paciência de Deus que quer a salvação de todos."
  },
  {
    id: "1joao",
    name: "1 São João",
    shortName: "1 João",
    abbreviation: "1Jo",
    testament: "NT",
    category: "cartas_catolicas",
    categoryLabel: "Cartas Católicas",
    totalChapters: 5,
    description: "Deus é Amor e Luz: quem ama seu irmão permanece na luz e conhece a Deus."
  },
  {
    id: "2joao",
    name: "2 São João",
    shortName: "2 João",
    abbreviation: "2Jo",
    testament: "NT",
    category: "cartas_catolicas",
    categoryLabel: "Cartas Católicas",
    totalChapters: 1,
    description: "Caminhar na verdade e no amor fiel aos mandamentos de Cristo."
  },
  {
    id: "3joao",
    name: "3 São João",
    shortName: "3 João",
    abbreviation: "3Jo",
    testament: "NT",
    category: "cartas_catolicas",
    categoryLabel: "Cartas Católicas",
    totalChapters: 1,
    description: "O louvor à hospitalidade generosa aos missionários e obreiros da fé católica."
  },
  {
    id: "judas",
    name: "São Judas",
    shortName: "Judas",
    abbreviation: "Jd",
    testament: "NT",
    category: "cartas_catolicas",
    categoryLabel: "Cartas Católicas",
    totalChapters: 1,
    description: "O combate vigoroso pela fé transmitida de uma vez para sempre aos santos."
  },
  {
    id: "apocalipse",
    name: "Apocalipse",
    shortName: "Apocalipse",
    abbreviation: "Ap",
    testament: "NT",
    category: "apocalipse",
    categoryLabel: "Profético do Novo Testamento",
    totalChapters: 22,
    description: "A vitória triunfante do Cordeiro, a Mulher coroada de estrelas e a Nova Jerusalém celeste."
  }
];

export const cnbbOfficialChapters: Record<string, Record<number, BibleVerse[]>> = {
  marcos: {
    7: [
      { number: 1, text: "Os fariseus e alguns mestres da Lei, que tinham vindo de Jerusalém, reuniram-se em volta de Jesus." },
      { number: 2, text: "Viram que alguns dos seus discípulos comiam o pão com as mãos impuras, isto é, sem as ter lavado." },
      { number: 3, text: "Com efeito, os fariseus e todos os judeus só comem depois de lavar bem as mãos, apegando-se à tradição dos antigos." },
      { number: 4, text: "Quando voltam da praça, não comem sem antes se purificarem. E há muitas outras coisas que guardam por tradição, como a lavagem de copos, jarras e vasilhas de bronze." },
      { number: 5, text: "Os fariseus e os mestres da Lei perguntaram a Jesus: 'Por que os teus discípulos não seguem a tradição dos antigos, mas comem o pão com mãos impuras?'" },
      { number: 6, text: "Ele respondeu: 'Bem profetizou Isaías sobre vós, hipócritas, como está escrito: Este povo me honra com os lábios, mas o seu coração está longe de mim." },
      { number: 7, text: "É inútil o culto que me prestam, pois ensinam doutrinas que não passam de preceitos humanos'." },
      { number: 8, text: "'Vós abandonais o mandamento de Deus para vos apegardes à tradição dos homens'." },
      { number: 9, text: "E dizia-lhes: 'Sabeis muito bem anular o mandamento de Deus para estabelecer a vossa tradição!'." },
      { number: 10, text: "Pois Moisés disse: 'Honra teu pai e tua mãe'; e: 'Quem amaldiçoar o pai ou a mãe seja punido com a morte'." },
      { number: 11, text: "Vós, porém, dizeis: 'Se alguém disser ao pai ou à mãe: É corban — isto é, oferta consagrada a Deus — o que de mim poderias receber como auxílio'," },
      { number: 12, text: "não lhe permitis fazer mais nada em favor de seu pai ou de sua mãe." },
      { number: 13, text: "Assim anulais a palavra de Deus com a tradição que vós mesmos transmitistes. E fazeis muitas outras coisas semelhantes a essa." },
      { number: 14, text: "Jesus chamou novamente a multidão para perto de si e dizia-lhes: 'Escutai-me todos e compreendei:" },
      { number: 15, text: "Nada do que entra na pessoa por fora pode torná-la impura, mas o que sai da pessoa é que a torna impura'." },
      { number: 16, text: "Se alguém tem ouvidos para ouvir, ouça!" },
      { number: 17, text: "Quando deixou a multidão e entrou em casa, seus discípulos perguntaram-lhe sobre o sentido da parábola." },
      { number: 18, text: "Ele respondeu: 'Também vós sois tão lentos para compreender? Não entendeis que nada do que de fora entra no ser humano pode torná-lo impuro," },
      { number: 19, text: "porque não entra no seu coração, mas no estômago, e depois é lançado na fossa?' Com isso, Jesus declarava puros todos os alimentos." },
      { number: 20, text: "E acrescentou: 'O que sai da pessoa, isso é que a torna impura'." },
      { number: 21, text: "'Pois é de dentro do coração humano que saem os maus pensamentos, imoralidades, roubos, assassinatos," },
      { number: 22, text: "adultérios, cobiças, perversidades, fraudes, devassidão, inveja, calúnia, orgulho, insensatez." },
      { number: 23, text: "Todas essas coisas más saem de dentro e são elas que tornam o ser humano impuro'." },
      { number: 24, text: "Partindo dali, Jesus foi para a região de Tiro e Sidônia. Entrou numa casa e não queria que ninguém soubesse; no entanto, não conseguiu ficar oculto." },
      { number: 25, text: "Com efeito, logo que ouviu falar a seu respeito, uma mulher cuja filhinha tinha um espírito impuro veio e caiu a seus pés." },
      { number: 26, text: "A mulher era grega, de origem siro-fenícia; e suplicava a Jesus que expulsasse de sua filha o demônio." },
      { number: 27, text: "Jesus disse-lhe: 'Deixa primeiro que os filhos se saciem; pois não fica bem tirar o pão dos filhos e atirá-lo aos cachorrinhos'." },
      { number: 28, text: "Ela respondeu: 'É verdade, Senhor; mas também os cachorrinhos, debaixo da mesa, comem as migalhas das crianças'." },
      { number: 29, text: "Jesus disse-lhe: 'Por causa dessa tua palavra, podes ir: o demônio já saiu da tua filha'." },
      { number: 30, text: "Quando chegou à sua casa, a mulher encontrou a menina deitada na cama, e o demônio já havia saído." },
      { number: 31, text: "Jesus saiu da região de Tiro e foi por Sidônia até o mar da Galileia, através do território da Decápole." },
      { number: 32, text: "Trouxeram-lhe então um homem surdo, que falava com dificuldade, e suplicaram-lhe que impusesse a mão sobre ele." },
      { number: 33, text: "Jesus afastou-se com ele da multidão, pôs os dedos nos seus ouvidos, cuspiu e tocou a língua dele." },
      { number: 34, text: "Olhando para o céu, suspirou e disse: 'Éfeta!', que quer dizer: 'Abre-te!'." },
      { number: 35, text: "Imediatamente seus ouvidos se abriram, a língua se soltou e ele começou a falar sem dificuldade." },
      { number: 36, text: "Jesus ordenou-lhes que não contassem a ninguém. Mas, quanto mais ele proibia, tanto mais eles o proclamavam." },
      { number: 37, text: "As pessoas ficavam sumamente admiradas e diziam: 'Ele fez bem todas as coisas: aos surdos faz ouvir e aos mudos falar'." }
    ]
  },
  lucas: {
    1: [
      { number: 26, text: "No sexto mês, o anjo Gabriel foi enviado por Deus a uma cidade da Galileia, chamada Nazaré," },
      { number: 27, text: "a uma virgem desposada com um homem chamado José, da casa de Davi; e o nome da virgem era Maria." },
      { number: 28, text: "Entrando onde ela estava, o anjo disse: 'Alegra-te, cheia de graça, o Senhor está contigo!'" },
      { number: 29, text: "Ela ficou perturbada com essas palavras e começou a pensar no que significaria tal saudação." },
      { number: 30, text: "O anjo disse-lhe: 'Não tenhas medo, Maria, porque encontraste graça diante de Deus." },
      { number: 31, text: "Eis que conceberás e darás à luz um filho, e tu lhe porás o nome de Jesus." },
      { number: 32, text: "Ele será grande e será chamado Filho do Altíssimo, e o Senhor Deus lhe dará o trono de seu pai Davi.'" },
      { number: 38, text: "Maria disse: 'Eis aqui a serva do Senhor; faça-se em mim segundo a tua palavra!' E o anjo retirou-se." },
      { number: 46, text: "E Maria disse: 'Minha alma engrandece o Senhor," },
      { number: 47, text: "e o meu espírito se alegra em Deus, meu Salvador," },
      { number: 48, text: "porque olhou para a humildade de sua serva. Doravante todas as gerações me chamarão bem-aventurada," },
      { number: 49, text: "pois o Todo-poderoso fez grandes coisas em meu favor; Santo é o seu nome!" },
      { number: 50, text: "Sua misericórdia se estende de geração em geração sobre aqueles que o temem." },
      { number: 51, text: "Mostrou a força de seu braço: dispersou os soberbos no pensamento de seus corações." },
      { number: 52, text: "Derrubou os poderosos de seus tronos e exaltou os humildes." },
      { number: 53, text: "Encheu de bens os famintos e despediu os ricos de mãos vazias." }
    ],
    6: [
      { number: 1, text: "Num sábado, Jesus estava passando por uma plantação de trigo. Seus discípulos colhiam espigas, esfregavam-nas nas mãos e as comiam." },
      { number: 2, text: "Alguns fariseus disseram: 'Por que fazeis o que não é permitido no sábado?'" },
      { number: 3, text: "Jesus respondeu: 'Acaso não lestes o que fez Davi quando sentiu fome, ele e seus companheiros?'" },
      { number: 5, text: "E dizia-lhes: 'O Filho do Homem é senhor também do sábado'." },
      { number: 6, text: "Aconteceu, num outro sábado, que Jesus entrou na sinagoga e começou a ensinar. Havia ali um homem cuja mão direita era seca." },
      { number: 7, text: "Os mestres da Lei e os fariseus o observavam para ver se curaria num sábado, a fim de terem de que o acusar." },
      { number: 8, text: "Mas Jesus conhecia os pensamentos deles e disse ao homem da mão seca: 'Levanta-te e fica no meio'. Ele levantou-se e ficou de pé." },
      { number: 9, text: "Então Jesus disse-lhes: 'Eu vos pergunto: O que é permitido fazer no sábado: o bem ou o mal, salvar uma vida ou deixá-la perecer?'" },
      { number: 10, text: "E, olhando em volta para todos, disse ao homem: 'Estende a mão'. O homem assim fez e sua mão ficou curada." },
      { number: 11, text: "Mas eles ficaram cheios de furor e discutiam entre si sobre o que fariam a Jesus." },
      { number: 20, text: "Jesus levantou os olhos para os seus discípulos e disse: 'Bem-aventurados vós, os pobres, porque vosso é o Reino de Deus!" },
      { number: 21, text: "Bem-aventurados vós, que agora tendes fome, porque sereis saciados! Bem-aventurados vós, que agora chorais, porque haveis de rir!" },
      { number: 22, text: "Bem-aventurados sereis quando os homens vos odiarem, vos expulsarem e amaldiçoarem vosso nome por causa do Filho do Homem!" },
      { number: 23, text: "Alegrai-vos nesse dia e exultai, pois será grande a vossa recompensa no céu!'" },
      { number: 27, text: "'A vós que me escutais, eu vos digo: Amai os vossos inimigos, fazei o bem aos que vos odeiam," },
      { number: 28, text: "bendizei os que vos amaldiçoam, orai pelos que vos caluniam." },
      { number: 29, text: "Se alguém te der uma bofetada numa face, oferece também a outra. Se alguém tomar o teu manto, deixa-lhe também a túnica." },
      { number: 31, text: "O que vós quereis que os outros vos façam, fazei-o também vós a eles." },
      { number: 35, text: "Amai os vossos inimigos, fazei o bem e emprestai sem esperar coisa alguma em troca. Então a vossa recompensa será grande e sereis filhos do Altíssimo.'" },
      { number: 36, text: "'Sede misericordiosos, como também o vosso Pai é misericordioso.'" },
      { number: 37, text: "'Não julgueis e não sereis julgados; não condeneis e não sereis condenados; perdoai e sereis perdoados.'" },
      { number: 38, text: "'Dai e vos será dado: uma boa medida, recalcada, sacudida e transbordante será colocada no vosso regaço. Porque com a mesma medida com que medirdes, sereis medidos vós também.'" }
    ]
  },
  mateus: {
    ...matthewCompleteChapters
  },
  joao: {
    1: [
      { number: 1, text: "No princípio era a Palavra, e a Palavra estava com Deus; e a Palavra era Deus." },
      { number: 2, text: "Ela estava no princípio com Deus." },
      { number: 3, text: "Todas as coisas foram feitas por meio dela e, sem ela, nada foi feito de tudo o que existe." },
      { number: 4, text: "Nela estava a vida, e a vida era a luz dos seres humanos." },
      { number: 5, text: "A luz resplandece nas trevas, e as trevas não a compreenderam." },
      { number: 14, text: "E a Palavra se fez carne e habitou entre nós, e nós vimos a sua glória, glória que recebe do Pai o Filho único, cheio de graça e de verdade." },
      { number: 16, text: "Da sua plenitude todos nós recebemos graça sobre graça." },
      { number: 17, text: "Pois a Lei foi dada por meio de Moisés; a graça e a verdade vieram por meio de Jesus Cristo." }
    ]
  },
  isaias: {
    35: [
      { number: 1, text: "O deserto e a terra seca se alegrarão; o ermo exultará e florescerá como a rosa;" },
      { number: 2, text: "cobrir-se-á de flores e exultará com grande júbilo e brados de alegria!" },
      { number: 3, text: "Fortalecei as mãos enfraquecidas e firmai os joelhos vacilantes." },
      { number: 4, text: "Dizei às pessoas deprimidas: 'Coragem! Não tenhais medo! Eis o vosso Deus: vem a vingança, vem a recompensa de Deus; ele mesmo vem para vos salvar'." },
      { number: 5, text: "Então se abrirão os olhos dos cegos e se desimpedirão os ouvidos dos surdos." },
      { number: 6, text: "O coxo saltará como um cervo e a língua do mudo dará gritos de alegria; pois águas brotarão no deserto e torrentes na estepe." },
      { number: 7, text: "A terra abrasada se transformará em lago e a região sedenta em mananciais de água." },
      { number: 8, text: "Haverá ali uma vereda, um caminho sagrado chamado 'Caminho Santo'." },
      { number: 10, text: "Os resgatados do Senhor voltarão e virão a Sião com brados de alegria; sobre as suas cabeças haverá eterna alegria. A tristeza e o pranto fugirão." }
    ]
  },
  tiago: {
    2: [
      { number: 1, text: "Meus irmãos: a fé em nosso Senhor Jesus Cristo, Senhor da glória, não deve admitir acepção de pessoas." },
      { number: 2, text: "Com efeito, se entrar na vossa assembleia um homem com anel de ouro no dedo e magnificamente vestido, e entrar também um pobre em trajes rotos," },
      { number: 3, text: "e vós tiverdes consideração para com o que está ricamente trajado, e lhe disserdes: 'Senta-te aqui neste lugar de honra', e ao pobre disserdes: 'Tu, fica aí de pé', não fareis distinção?" },
      { number: 4, text: "Não vos tornareis juízes de maus pensamentos?" },
      { number: 5, text: "Ouvi, meus caríssimos irmãos: não escolheu Deus os que são pobres aos olhos do mundo para serem ricos na fé e herdeiros do Reino que prometeu aos que o amam?" },
      { number: 14, text: "De que adianta, meus irmãos, alguém dizer que tem fé, se não tem obras? Porventura essa fé poderá salvá-lo?" },
      { number: 17, text: "Assim também a fé: se não tiver obras, está morta em si mesma." },
      { number: 26, text: "Pois assim como o corpo sem o espírito está morto, assim também a fé sem obras está morta." }
    ]
  },
  "1corintios": {
    5: [
      { number: 1, text: "Ouve-se falar, e muito, de imoralidade entre vós, e de uma imoralidade tal que não existe nem mesmo entre os pagãos." },
      { number: 2, text: "E vós estais inchados de orgulho, quando devíeis antes estar em luto!" },
      { number: 6, text: "Não sabeis que um pouco de fermento leveda toda a massa?" },
      { number: 7, text: "Lançai fora o velho fermento, para que sejais uma massa nova, já que sois pães ázimos. Pois Cristo, nossa Páscoa, foi imolado." },
      { number: 8, text: "Celebremos, pois, a festa, não com o velho fermento, nem com o fermento da malícia e da perversidade, mas com os pães ázimos da pureza e da verdade." }
    ],
    7: [
      { number: 25, text: "A respeito dos solteiros, não tenho mandamento do Senhor, mas dou o meu conselho como quem obteve a misericórdia do Senhor para ser digno de fé." },
      { number: 29, text: "Digo-vos, irmãos: o tempo é breve. Doravante, os que têm esposa vivam como se não a tivessem;" },
      { number: 30, text: "os que choram, como se não chorassem; os que se alegram, como se não se alegrassem; os que compram, como se nada possuíssem;" },
      { number: 31, text: "e os que usam deste mundo, como se dele não usassem plenamente. Pois a figura deste mundo passa." }
    ],
    8: [
      { number: 1, text: "O conhecimento incha, mas a caridade edifica." },
      { number: 2, text: "Se alguém pensa que sabe alguma coisa, ainda não aprendeu como deve saber." },
      { number: 3, text: "Mas se alguém ama a Deus, esse é conhecido por ele." },
      { number: 6, text: "Para nós, contudo, existe um só Deus, o Pai, de quem procedem todas as coisas e para quem nós fomos criados; e um só Senhor, Jesus Cristo, por meio de quem tudo existe e por meio de quem nós somos." },
      { number: 9, text: "Cuidai, porém, para que essa vossa liberdade não se torne de modo algum motivo de queda para os fracos." },
      { number: 13, text: "Por isso, se um alimento escandaliza o meu irmão, nunca mais comerei carne, para não escandalizar o meu irmão." }
    ],
    9: [
      { number: 16, text: "De fato, pregar o evangelho não é para mim motivo de glória, mas uma obrigação que me foi imposta. Ai de mim se eu não anunciar o evangelho!" },
      { number: 19, text: "Com efeito, sendo livre em relação a todos, fiz-me servo de todos a fim de ganhar o maior número possível." },
      { number: 22, text: "Fiz-me tudo para todos, para salvar de qualquer maneira alguns." },
      { number: 24, text: "Não sabeis que os que correm no estádio, todos de fato correm, mas um só recebe o prêmio? Correi de tal maneira que o alcanceis!" },
      { number: 27, text: "Trato duramente o meu corpo e o subjugo, para não acontecer que, depois de ter pregado a outros, eu mesmo venha a ser reprovado." }
    ],
    13: [
      { number: 1, text: "Ainda que eu falasse as línguas dos homens e dos anjos, se não tiver amor, sou como o bronze que ressoa ou o címbalo que retine." },
      { number: 2, text: "Ainda que tivesse o dom da profecia e conhecesse todos os mistérios e toda a ciência, se não tiver amor, nada sou." },
      { number: 4, text: "O amor é paciente, o amor é bondoso; não é ciumento, não é presunçoso, não se incha de orgulho;" },
      { number: 5, text: "não é inconveniente, não busca o seu próprio interesse, não se irrita, não guarda rancor;" },
      { number: 6, text: "não se alegra com a injustiça, mas regozija-se com a verdade." },
      { number: 7, text: "Tudo desculpa, tudo crê, tudo espera, tudo suporta." },
      { number: 8, text: "O amor jamais acabará." },
      { number: 13, text: "Agora permanecem estas três virtudes: a fé, a esperança e o amor; mas a maior delas é o amor." }
    ]
  },
  salmos: {
    5: [
      { number: 1, text: "Dá ouvidos, Senhor, às minhas palavras, atende ao meu gemido." },
      { number: 2, text: "Escuta a voz do meu clamor, ó meu Rei e meu Deus, pois a ti suplico." },
      { number: 3, text: "Pela manhã, Senhor, escutas a minha voz; pela manhã te apresento a minha oração e fico esperando." },
      { number: 5, text: "Não sois um Deus a quem agrade a maldade, o ímpio não pode hospedar-se em vossa casa;" },
      { number: 6, text: "os soberbos não resistem diante de vossos olhos." },
      { number: 7, text: "Vós detestais os que praticam o mal e destruís os mentirosos; o homem sanguinário e traidor, o Senhor o abomina." },
      { number: 8, text: "Eu, porém, pela grandeza de vossa misericórdia, entro em vossa casa; prostro-me diante de vosso santo templo com reverência." },
      { number: 12, text: "Mas todos os que em vós confiam se alegrarão, exultarão para sempre; vós os protegereis." },
      { number: 13, text: "Em vós exultarão os que amam o vosso nome, pois abençoais o justo, Senhor; vossa bondade o cerca como um escudo." }
    ],
    23: [
      { number: 1, text: "O Senhor é o meu pastor: nada me falta." },
      { number: 2, text: "Em verdes pastagens me faz repousar, para fontes tranquilas me conduz," },
      { number: 3, text: "restaura minhas forças. Guia-me pelas veredas da justiça, por amor do seu nome." },
      { number: 4, text: "Ainda que eu caminhe pelo vale tenebroso, não temerei mal algum, porque estás comigo; o teu bordão e o teu cajado me dão conforto." },
      { number: 5, text: "Preparas uma mesa diante de mim, à vista dos meus adversários; unges minha cabeça com óleo, e o meu cálice transborda." },
      { number: 6, text: "Sim, a bondade e a misericórdia me acompanharão todos os dias da minha vida; e habitarei na casa do Senhor por dias sem fim." }
    ],
    145: [
      { number: 1, text: "Louva, minha alma, o Senhor! Louvarei o Senhor durante toda a minha vida;" },
      { number: 2, text: "cantarei louvores ao meu Deus enquanto eu viver." },
      { number: 7, text: "O Senhor é fiel para sempre, faz justiça aos que são oprimidos; ele dá alimento aos famintos e liberta da prisão os cativos." },
      { number: 8, text: "O Senhor abre os olhos aos cegos, o Senhor faz erguer-se o caído; o Senhor ama aquele que é justo, é o Senhor quem protege o estrangeiro." },
      { number: 9, text: "Ele sustenta a viúva e o órfão, mas confunde os caminhos dos maus." },
      { number: 10, text: "O Senhor reinará para sempre, ó Sião, o teu Deus reinará de geração em geração! Aleluia!" }
    ],
    102: [
      { number: 1, text: "Bendize, ó minha alma, ao Senhor, e todo o meu ser, seu santo nome!" },
      { number: 2, text: "Bendize, ó minha alma, ao Senhor, não te esqueças de nenhum de seus benefícios!" },
      { number: 3, text: "Pois ele te perdoa toda culpa, e cura toda a tua enfermidade;" },
      { number: 4, text: "da sepultura ele salva a tua vida e te cerca de carinho e compaixão." },
      { number: 8, text: "O Senhor é compassivo e clemente, lento para a cólera e rico em misericórdia." },
      { number: 9, text: "Não fica sempre repetindo as suas queixas, nem guarda eternamente o seu rancor." },
      { number: 10, text: "Não nos trata como exigem nossos erros, nem nos pune em proporção às nossas faltas." },
      { number: 11, text: "Pois tanto quanto o céu dista da terra, tão grande é seu amor aos que o respeitam;" },
      { number: 12, text: "quanto a terra está longe do oriente, tanto ele afasta para longe nossos crimes." }
    ]
  },
  tobias: {
    12: [
      { number: 6, text: "Então Rafael chamou os dois em particular e lhes disse: 'Bendizei a Deus e dai-lhe graças diante de todos os viventes pelos benefícios que vos concedeu, para bendizer e cantar o seu nome. Proclamai dignamente as obras de Deus e não hesiteis em dar-lhe graças.'" },
      { number: 7, text: "'É bom manter oculto o segredo do rei, mas é glorioso revelar e proclamar as obras de Deus. Praticai o bem, e o mal não vos atingirá.'" },
      { number: 8, text: "'Boa coisa é a oração acompanhada de jejum, e a esmola com justiça é melhor do que a riqueza com iniquidade. É melhor dar esmola do que acumular tesouros de ouro.'" },
      { number: 9, text: "'A esmola livra da morte e purifica de todo pecado. Os que praticam a esmola terão abundância de vida.'" },
      { number: 15, text: "'Eu sou Rafael, um dos sete santos anjos que assistem e têm entrada diante da glória do Senhor.'" }
    ]
  },
  sabedoria: {
    3: [
      { number: 1, text: "A vida dos justos está nas mãos de Deus, e nenhum tormento os atingirá." },
      { number: 2, text: "Aos olhos dos insensatos pareciam ter morrido; sua partida foi tida como uma desgraça," },
      { number: 3, text: "e a sua separação de nós, como destruição; mas eles estão na paz!" },
      { number: 4, text: "Embora diante dos homens tenham sofrido punição, a sua esperança estava cheia de imortalidade." },
      { number: 9, text: "Os que confiam nele compreenderão a verdade, e os fiéis no amor permanecerão com ele, porque há graça e misericórdia para os seus eleitos." }
    ]
  },
  eclesiastico: {
    2: [
      { number: 1, text: "Meu filho, se te apresentas para servir ao Senhor, prepara a tua alma para a provação." },
      { number: 2, text: "Mantém reto o coração e sê constante; não te apavores no tempo da adversidade." },
      { number: 3, text: "Une-te a Deus e não te afastes dele, para que sejas exaltado nos teus últimos dias." },
      { number: 4, text: "Tudo o que te acontecer, aceita-o; e nas vicissitudes da tua humilhação, sê paciente." },
      { number: 5, text: "Pois é no fogo que se prova o ouro, e os homens aceitáveis no cadinho da humilhação." },
      { number: 10, text: "Olhai para as gerações antigas e vede: quem jamais confiou no Senhor e ficou desapontado? Quem permaneceu no seu temor e foi abandonado?" }
    ],
    27: [
      { number: 30, text: "O rancor e a ira são coisas abomináveis; no entanto, o pecador guarda ambas dentro de si." }
    ],
    28: [
      { number: 1, text: "Quem se vinga sofrerá a vingança do Senhor, que guardará com rigor a conta de seus pecados." },
      { number: 2, text: "Perdoa a injustiça cometida pelo teu próximo, e então, quando rezares, teus pecados serão perdoados." },
      { number: 3, text: "Como pode um homem guardar rancor contra outro homem e pedir a Deus a cura?" },
      { number: 4, text: "Não tem compaixão de um homem seu semelhante, e pede perdão pelos próprios pecados?" },
      { number: 5, text: "Sendo ele apenas carne, guarda rancor: quem alcançará o perdão para os seus pecados?" },
      { number: 6, text: "Lembra-te do teu fim e deixa de odiar; lembra-te da destruição e da morte, e sê fiel aos mandamentos." },
      { number: 7, text: "Lembra-te dos mandamentos e não guardes rancor do teu próximo; lembra-te da aliança do Altíssimo e não leves em conta a falta que cometeram contra ti." }
    ]
  },
  "1macabeus": {
    2: [
      { number: 49, text: "Aproximando-se os dias de sua morte, Matatias disse a seus filhos: 'Agora reina a soberba e o castigo, tempo de ruína e furor de indignação.'" },
      { number: 50, text: "'Agora, pois, ó filhos, sede zelosos pela Lei e dai a vossa vida pela aliança de vossos pais.'" },
      { number: 64, text: "'Vós, porém, meus filhos, sede corajosos e portai-vos com bravura na observância da Lei, pois é por ela que sereis glorificados.'" }
    ]
  },
  apocalipse: {
    12: [
      { number: 1, text: "Apareceu no céu um grande sinal: uma Mulher vestida de sol, com a lua debaixo dos pés e uma coroa de doze estrelas sobre a cabeça." },
      { number: 2, text: "Estava grávida e gritava com dores de parto, em angústia para dar à luz." },
      { number: 10, text: "Então ouvi uma voz forte no céu proclamando: 'Agora realizou-se a salvação, o poder e a realeza do nosso Deus, e a autoridade do seu Cristo, porque foi expulso o acusador dos nossos irmãos'." },
      { number: 11, text: "Eles o venceram pelo sangue do Cordeiro e pela palavra do seu testemunho." }
    ]
  },
  romanos: {
    8: [
      { number: 28, text: "Sabemos que todas as coisas concorrem para o bem daqueles que amam a Deus, daqueles que são chamados segundo o seu desígnio." },
      { number: 31, text: "Que diremos depois disso? Se Deus é por nós, quem será contra nós?" },
      { number: 32, text: "Aquele que não poupou o seu próprio Filho, mas o entregou por todos nós, como não nos dará com ele todas as coisas?" },
      { number: 35, text: "Quem nos separará do amor de Cristo? A tribulação, a angústia, a perseguição, a fome, a nudez, o perigo, a espada?" },
      { number: 37, text: "Mas em todas essas coisas somos mais que vencedores por meio daquele que nos amou." },
      { number: 38, text: "Pois estou convencido de que nem a morte, nem a vida, nem os anjos, nem os principados, nem o presente, nem o futuro, nem os poderes," },
      { number: 39, text: "nem a altura, nem a profundeza, nem qualquer outra criatura poderá nos separar do amor de Deus, que está em Cristo Jesus, nosso Senhor." }
    ],
    14: [
      { number: 7, text: "Nenhum de nós vive para si mesmo e ninguém morre para si mesmo." },
      { number: 8, text: "Com efeito, se vivemos, é para o Senhor que vivemos; se morremos, é para o Senhor que morremos. Portanto, quer vivamos, quer morramos, pertencemos ao Senhor." },
      { number: 9, text: "De fato, para isso Cristo morreu e ressuscitou: para ser o Senhor dos mortos e dos vivos." }
    ]
  }
};

export function getBibleBook(bookId: string): BibleBook | undefined {
  return catholicCanonBooks.find((book) => book.id.toLowerCase() === bookId.toLowerCase());
}

export function getBibleChapter(bookId: string, chapter: number): BibleChapter {
  const book = getBibleBook(bookId) || catholicCanonBooks[0];
  const safeChapter = Math.max(1, Math.min(chapter, book.totalChapters));
  const specificVerses = cnbbOfficialChapters[book.id]?.[safeChapter];

  if (specificVerses && specificVerses.length > 0) {
    return {
      bookId: book.id,
      bookName: book.name,
      chapter: safeChapter,
      verses: specificVerses
    };
  }

  return {
    bookId: book.id,
    bookName: book.name,
    chapter: safeChapter,
    verses: []
  };
}

export function parseLiturgyReferenceToBible(reference: string): { bookId: string; chapter: number } | null {
  if (!reference) return null;
  const cleaned = reference.trim().toLowerCase();

  const mapping: { pattern: RegExp; bookId: string }[] = [
    { pattern: /marcos|mc/i, bookId: "marcos" },
    { pattern: /lucas|lc/i, bookId: "lucas" },
    { pattern: /mateus|mt/i, bookId: "mateus" },
    { pattern: /jo[aã]o|jo/i, bookId: "joao" },
    { pattern: /1\s*cor[íi]ntios|1\s*cor/i, bookId: "1corintios" },
    { pattern: /2\s*cor[íi]ntios|2\s*cor/i, bookId: "2corintios" },
    { pattern: /isa[íi]as|is/i, bookId: "isaias" },
    { pattern: /salmo|sl/i, bookId: "salmos" },
    { pattern: /tiago|tg/i, bookId: "tiago" },
    { pattern: /miqueias|mq/i, bookId: "miqueias" },
    { pattern: /tobias|tb/i, bookId: "tobias" },
    { pattern: /judite|jt/i, bookId: "judite" },
    { pattern: /sabedoria|sb/i, bookId: "sabedoria" },
    { pattern: /eclesi[áa]stico|sir[áa]cida|eclo/i, bookId: "eclesiastico" },
    { pattern: /1\s*macabeus|1\s*mc/i, bookId: "1macabeus" },
    { pattern: /2\s*macabeus|2\s*mc/i, bookId: "2macabeus" },
    { pattern: /baruc|br/i, bookId: "baruc" },
    { pattern: /romanos|rm/i, bookId: "romanos" },
    { pattern: /g[êe]nesis|gn/i, bookId: "genesis" },
    { pattern: /[êe]xodo|[êe]x/i, bookId: "exodo" },
    { pattern: /apocalipse|ap/i, bookId: "apocalipse" },
    { pattern: /atos|at/i, bookId: "atos" }
  ];

  let matchedBookId: string | null = null;
  for (const m of mapping) {
    if (m.pattern.test(cleaned)) {
      matchedBookId = m.bookId;
      break;
    }
  }

  if (!matchedBookId) return null;

  const chapterMatch = cleaned.match(/(\d+)[\s,:]/);
  const chapterNumber = chapterMatch ? parseInt(chapterMatch[1], 10) : 1;

  return {
    bookId: matchedBookId,
    chapter: isNaN(chapterNumber) ? 1 : chapterNumber
  };
}
