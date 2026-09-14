export interface BibleIntroPrayer {
  id: string;
  title: string;
  subtitle: string;
  portuguese: string;
  latin: string;
}

export const bibleIntroductoryPrayers: BibleIntroPrayer[] = [
  {
    id: "espirito_santo",
    title: "Oração ao Espírito Santo",
    subtitle: "Invocação para abrir o coração e a mente à revelação divina",
    portuguese:
      "Vinde, Espírito Santo, enchei os corações dos vossos fiéis e acendei neles o fogo do vosso amor. Enviai o vosso Espírito e tudo será criado, e renovareis a face da terra.\n\nOremos: Ó Deus, que instruístes os corações dos vossos fiéis com a luz do Espírito Santo, fazei que apreciemos retamente todas as coisas segundo o mesmo Espírito e gozemos sempre da sua consolação. Por Cristo, Senhor nosso. Amém.",
    latin:
      "Veni, Sancte Spiritus, reple tuorum corda fidelium, et tui amoris in eis ignem accende. Emitte Spiritum tuum, et creabuntur, et renovabis faciem terrae.\n\nOremus: Deus, qui corda fidelium Sancti Spiritus illustratione docuisti, da nobis in eodem Spiritu recta sapere, et de eius semper consolatione gaudere. Per Christum Dominum nostrum. Amen."
  },
  {
    id: "sao_jeronimo",
    title: "Oração de São Jerônimo",
    subtitle: "Padroeiro dos estudos bíblicos e tradutor da Vulgata",
    portuguese:
      "Senhor Jesus Cristo, abre os olhos e os ouvidos do meu coração para que eu possa escutar a Tua Palavra santa e compreender os Teus mandamentos. Desconhecer as Sagradas Escrituras é desconhecer a Cristo. Concede-me a graça de acolher o Evangelho com fidelidade e colocá-lo em prática todos os dias da minha vida. Amém.",
    latin:
      "Domine Iesu Christe, aperi oculos et aures cordis mei ad audienda verba tua et intelligenda praecepta tua. Ignoratio Scripturarum ignoratio Christi est. Da mihi gratiam custodiendi verba tua in vita mea cotidiana. Amen."
  },
  {
    id: "santo_agostinho",
    title: "Oração de Santo Agostinho",
    subtitle: "Doutor da Igreja • O amor ardente pela Verdade revelada",
    portuguese:
      "Senhor meu Deus, que as Tuas Santas Escrituras sejam a minha pura delícia: que nelas eu não me engane nem com elas engane a outrem. Senhor, escuta e tem misericórdia de mim; abre-me os segredos da Tua Palavra e concede-me o que amo, pois amo a Tua Verdade. Por Jesus Cristo, Teu Filho e nosso Salvador. Amém.",
    latin:
      "Domine Deus meus, sint castae deliciae meae Scripturae tuae: nec fallar in eis, nec fallam ex eis. Domine, attende et miserere mei; aperi mihi secreta verbi tui et da quod amo, quia amo veritatem tuam. Per Iesum Christum Filium tuum et Salvatorem nostrum. Amen."
  },
  {
    id: "nossa_senhora",
    title: "Oração a Nossa Senhora, Sede da Sabedoria",
    subtitle: "A Mãe que guardava todas as palavras no Seu Coração",
    portuguese:
      "Ó Maria Santíssima, Virgem da Escuta e Mãe da Divina Sabedoria, vós que acolhestes o Verbo eterno em vosso seio e guardastes todas as coisas meditando-as em vosso coração: ensinai-me a ler as Sagradas Escrituras com reverência, humildade e amor, para que a Palavra de Deus frutifique em santidade e boas obras. Amém.",
    latin:
      "Sancta Maria, Sedes Sapientiae et Mater Verbi Divini, quae verbum Dei in corde tuo assidue servasti: doce me Sacram Scripturam legere cum reverentia et humilitate, ut verbum Dei fructum afferat in me ad vitam aeternam. Amen."
  }
];
