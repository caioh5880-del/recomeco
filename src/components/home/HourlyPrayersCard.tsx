"use client";

import React, { useState, useEffect } from "react";
import {
  Sun,
  ShieldCheck,
  Bell,
  Clock,
  Moon,
  CheckCircle,
  Circle,
  Sparkles,
  BookOpen,
  Lightbulb
} from "lucide-react";

interface HourlyPrayersCardProps {
  completedPrayers: string[];
  onTogglePrayer: (prayerId: string) => void;
}

interface HourlyPrayerItem {
  id: string;
  slot: "morning" | "creed" | "noon" | "mercy" | "night";
  timeLabel: string;
  shortLabel: string;
  tag: string;
  title: string;
  subtitle: string;
  latinTitle: string;
  explanation: string;
  text: string[];
  latinText: string[];
  icon: React.ElementType;
}

const hourlyPrayers: HourlyPrayerItem[] = [
  {
    id: "oferecimento-diario",
    slot: "morning",
    timeLabel: "Ao acordar",
    shortLabel: "Manhã",
    tag: "🌅 Ao começar o dia",
    title: "Oferecimento do Dia",
    subtitle: "Consagração dos pensamentos, atos e intenções",
    latinTitle: "Oblatio Matutina",
    explanation:
      "Une todos os seus atos, estudos, trabalhos e sofrimentos ao Coração de Jesus e Maria desde as primeiras horas do dia.",
    text: [
      "Senhor meu Deus, Pai infinitamente bom, eu Vos ofereço este dia: meus pensamentos, palavras, obras, sofrimentos e alegrias, em união com o Sagrado Coração de Vosso Divino Filho Jesus Cristo, que se renova incessantemente na Santa Missa pelo mundo inteiro.",
      "Por intercessão do Imaculado Coração de Maria, Mãe de Deus e nossa Mãe amantíssima, ofereço tudo pelas intenções da Santa Igreja, pela santificação das famílias e pela conversão de todos os corações.",
      "Amém."
    ],
    latinText: [
      "Domine Deus meus, Pater infinite bone, tibi offero hunc diem: cogitationes, verba, opera, dolores et gaudia mea, in unione cum Sacratissimo Corde Divini Filii tui Iesu Christi, quod in Sancto Missae Sacrificio per totum mundum iugiter renovatur.",
      "Per intercessionem Immaculati Cordis Mariae, Matris Dei et Matris nostrae amantissimae, omnia offero pro intentionibus Sanctae Ecclesiae, pro sanctificatione familiarum et pro conversione omnium cordium.",
      "Amen."
    ],
    icon: Sun
  },
  {
    id: "credo-apostolico",
    slot: "creed",
    timeLabel: "Início do dia",
    shortLabel: "Credo",
    tag: "✝️ Símbolo da Fé",
    title: "Oração do Credo",
    subtitle: "Professar que cremos em tudo que vivemos",
    latinTitle: "Symbolum Apostolorum",
    explanation:
      "Professar a fé antes de tudo! Alicerçar cada escolha, pensamento e desafio nas verdades eternas reveladas por Deus.",
    text: [
      "Creio em Deus Pai todo-poderoso, Criador do céu e da terra;",
      "E em Jesus Cristo, seu único Filho, nosso Senhor, que foi concebido pelo poder do Espírito Santo, nasceu da Virgem Maria, padeceu sob Pôncio Pilatos, foi crucificado, morto e sepultado;",
      "Desceu à mansão dos mortos; ressuscitou ao terceiro dia; subiu aos céus, está sentado à direita de Deus Pai todo-poderoso, donde há de vir a julgar os vivos e os mortos.",
      "Creio no Espírito Santo, na santa Igreja Católica, na comunhão dos santos, na remissão dos pecados, na ressurreição da carne, na vida eterna.",
      "Amém."
    ],
    latinText: [
      "Credo in Deum Patrem omnipotentem, Creatorem caeli et terrae;",
      "Et in Iesum Christum, Filium eius unicum, Dominum nostrum, qui conceptus est de Spiritu Sancto, natus ex Maria Virgine, passus sub Pontio Pilato, crucifixus, mortuus, et sepultus;",
      "Descendit ad inferos, tertia die resurrexit a mortuis, ascendit ad caelos, sedet ad dexteram Dei Patris omnipotentis, inde venturus est iudicare vivos et mortuos.",
      "Credo in Spiritum Sanctum, sanctam Ecclesiam catholicam, sanctorum communionem, remissionem peccatorum, carnis resurrectionem, vitam aeternam.",
      "Amen."
    ],
    icon: ShieldCheck
  },
  {
    id: "angelus",
    slot: "noon",
    timeLabel: "Meio-dia",
    shortLabel: "Ângelus",
    tag: "🔔 Meio-dia (12h)",
    title: "O Ângelus",
    subtitle: "Memória da Encarnação do Salvador",
    latinTitle: "Angelus Domini",
    explanation:
      "Pausa santa no meio da jornada para recordar a Anunciação do Arcanjo e o momento bendito em que o Verbo se fez carne.",
    text: [
      "— O Anjo do Senhor anunciou a Maria.",
      "— E Ela concebeu do Espírito Santo.",
      "Ave Maria, cheia de graça, o Senhor é convosco, bendita sois vós entre as mulheres e bendito é o fruto do vosso ventre, Jesus. Santa Maria, Mãe de Deus, rogai por nós pecadores, agora e na hora de nossa morte. Amém.",
      "— Eis aqui a serva do Senhor.",
      "— Faça-se em mim segundo a Vossa palavra.",
      "Ave Maria...",
      "— E o Verbo se fez carne.",
      "— E habitou entre nós.",
      "Ave Maria...",
      "— Rogai por nós, Santa Mãe de Deus.",
      "— Para que sejamos dignos das promessas de Cristo.",
      "Oremos: Infundi, Senhor, a vossa graça em nossas almas, para que nós, que pela anunciação do Anjo conhecemos a encarnação de Jesus Cristo, vosso Filho, cheguemos, por sua paixão e cruz, à glória da ressurreição. Por Nosso Senhor Jesus Cristo, vosso Filho, na unidade do Espírito Santo. Amém."
    ],
    latinText: [
      "— Angelus Domini nuntiavit Mariae.",
      "— Et concepit de Spiritu Sancto.",
      "Ave Maria, gratia plena, Dominus tecum. Benedicta tu in mulieribus, et benedictus fructus ventris tui, Iesus. Sancta Maria, Mater Dei, ora pro nobis peccatoribus, nunc et in hora mortis nostrae. Amen.",
      "— Ecce ancilla Domini.",
      "— Fiat mihi secundum verbum tuum.",
      "Ave Maria...",
      "— Et Verbum caro factum est.",
      "— Et habitavit in nobis.",
      "Ave Maria...",
      "— Ora pro nobis, Sancta Dei Genetrix.",
      "— Ut digni efficiamur promissionibus Christi.",
      "Oremus: Gratiam tuam, quaesumus, Domine, mentibus nostris infunde; ut qui, Angelo nuntiante, Christi Filii tui incarnationem cognovimus, per passionem eius et crucem ad resurrectionis gloriam perducamur. Per eundem Christum Dominum nostrum. Amen."
    ],
    icon: Bell
  },
  {
    id: "hora-da-misericordia",
    slot: "mercy",
    timeLabel: "15h",
    shortLabel: "15h",
    tag: "⏰ 15h (Misericórdia)",
    title: "Hora da Misericórdia",
    subtitle: "Oração da Divina Misericórdia revelada por Jesus",
    latinTitle: "Hora Divinae Misericordiae",
    explanation:
      "Às 15 horas, momento em que Jesus expirou na Cruz pela salvação do mundo, rezamos os textos centrais revelados por Nosso Senhor a Santa Faustina.",
    text: [
      "Nas contas maiores (rezar uma vez):",
      "Eterno Pai, eu Vos ofereço o Corpo e o Sangue, a Alma e a Divindade de Vosso diletíssimo Filho, nosso Senhor Jesus Cristo, em expiação dos nossos pecados e do mundo inteiro.",
      "Nas contas menores (rezar 10 vezes):",
      "Pela Sua dolorosa Paixão, tende misericórdia de nós e do mundo inteiro.",
      "Ao final (rezar 3 vezes):",
      "Deus Santo, Deus Forte, Deus Imortal, tende piedade de nós e de todo o mundo."
    ],
    latinText: [
      "In granis maioribus (semel):",
      "Pater Aeterne, offero tibi Corpus et Sanguinem, Animam et Divinitatem dilectissimi Filii tui, Domini nostri Iesu Christi, in propitiatione pro peccatis nostris et totius mundi.",
      "In granis minoribus (decies):",
      "Pro dolorosa Eius passione, miserere nobis et totius mundi.",
      "In fine (ter):",
      "Sanctus Deus, Sanctus Fortis, Sanctus Immortalis, miserere nobis et totius mundi."
    ],
    icon: Clock
  },
  {
    id: "noite-exame",
    slot: "night",
    timeLabel: "Ao deitar",
    shortLabel: "Noite",
    tag: "🌙 Ao terminar o dia",
    title: "Exame de Consciência & Oração da Noite",
    subtitle: "Revisão serena do coração e entrega do repouso",
    latinTitle: "Actus Contritionis & Visita, quaesumus, Domine",
    explanation:
      "O Exame de Consciência encerra o dia com paz e revisão do coração. Agradecemos as graças, reconhecemos as faltas e descansamos sob a proteção de Maria.",
    text: [
      "Meu Deus e Senhor, coloco-me em Vossa presença amorosa neste encerramento de jornada.",
      "1. Agradecimento: Dou-Vos graças por cada bênção, respiração, livramento e dom que me concedestes hoje.",
      "2. Consciência: Onde vacilei hoje? Fui fiel na caridade? Cedi à impaciência, ao orgulho, à preguiça ou a pensamentos e atitudes impuras?",
      "3. Arrependimento e Propósito: Meu Deus, tenho muita dor de ter pecado, porque sois infinitamente bom. Proponho firmemente, com a Vossa graça, recomeçar e evitar as ocasiões de queda.",
      "Oração da Noite: Visita, Senhor, esta habitação e afastai para longe dela todas as ciladas do inimigo; habitem nela os vossos santos anjos para nos guardar em paz, e a vossa bênção esteja sempre conosco. Virgem Santíssima, cobri-me com o vosso manto sagrado nesta noite e guardai meu corpo e minha alma. Em vossas mãos, Senhor, entrego o meu espírito. Amém."
    ],
    latinText: [
      "Deus meus et Dominus meus, in sancta et amabili tua praesentia me pono in fine huius diei.",
      "1. Gratiarum actio: Gratias tibi ago pro omni benedictione, respiratione, liberatione et dono quod mihi hodie largitus es.",
      "2. Conscientia: Ubi hodie defeci? Fidelis fui in caritate? Impatientiae, superbiae, desidiae vel impuris cogitationibus et actionibus cessi?",
      "3. Contritio et Propositum: Deus meus, ex toto corde me poenitet de omnibus peccatis meis, quia es infinite bonus. Firmiter propono, adiuvante gratia tua, de cetero non peccare et occasiones fugere.",
      "Oratio Nocturna: Visita, quaesumus, Domine, habitationem istam, et omnes insidias inimici ab ea longe repelle: Angeli tui sancti habitent in ea, qui nos in pace custodiant; et benedictio tua sit super nos semper. Sanctissima Virgo, tuo sacro manto me protege hac nocte et ab omni periculo corporis et animae me libera. In manus tuas, Domine, commendo spiritum meum. Amen."
    ],
    icon: Moon
  }
];

export function HourlyPrayersCard({
  completedPrayers,
  onTogglePrayer
}: HourlyPrayersCardProps) {
  const [selectedSlot, setSelectedSlot] = useState<
    "morning" | "creed" | "noon" | "mercy" | "night"
  >("morning");

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour >= 20 || hour < 5) {
      setSelectedSlot("night");
    } else if (hour >= 15) {
      setSelectedSlot("mercy");
    } else if (hour >= 11) {
      setSelectedSlot("noon");
    } else if (hour >= 8) {
      setSelectedSlot("creed");
    } else {
      setSelectedSlot("morning");
    }
  }, []);

  const currentPrayer =
    hourlyPrayers.find((p) => p.slot === selectedSlot) || hourlyPrayers[0];
  const isCurrentCompleted = completedPrayers.includes(currentPrayer.id);

  return (
    <div className="rounded-2xl border border-[#d4af37]/40 bg-gradient-to-br from-[#ffffff] to-[#faf8f4] p-5 sm:p-6 shadow-md transition-all">
      <div className="flex items-center justify-between mb-4">
        <div>
          <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#1e3a8a] mb-0.5">
            <Sparkles className="w-3.5 h-3.5 text-[#ca8a04]" />
            <span>Orações de Cada Momento do Dia</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-[#0d1527]">
            Ritmo de Oração Diária
          </h3>
        </div>

        <span className="text-[11px] font-semibold text-[#854d0e] bg-[#fef9c3] px-2.5 py-1 rounded-full border border-[#facc15]/40">
          5 Momentos
        </span>
      </div>

      <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-300/40 text-[11px] text-amber-900 leading-snug mb-3.5 flex items-start gap-2">
        <Lightbulb className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
        <span>
          <strong>Dica espiritual:</strong> O Credo vem logo ao iniciar o dia
          para professar a fé antes de tudo. O Exame de Consciência encerra o dia
          com paz e revisão do coração.
        </span>
      </div>

      <div className="grid grid-cols-5 gap-1.5 sm:gap-2 mb-4">
        {hourlyPrayers.map((prayer) => {
          const isSelected = selectedSlot === prayer.slot;
          const isDone = completedPrayers.includes(prayer.id);
          const Icon = prayer.icon;

          return (
            <button
              key={prayer.id}
              onClick={() => setSelectedSlot(prayer.slot)}
              className={`p-2 rounded-xl border text-center transition-all cursor-pointer flex flex-col items-center justify-between min-h-[66px] ${
                isSelected
                  ? "bg-[#0d1527] text-white border-[#d4af37] shadow-sm scale-[1.02]"
                  : "bg-white/80 text-gray-700 border-gray-200 hover:bg-white hover:border-[#d4af37]/50"
              }`}
            >
              <div className="relative mb-1">
                <Icon
                  className={`w-4 h-4 ${
                    isSelected ? "text-[#facc15]" : "text-[#1e3a8a]"
                  }`}
                />
                {isDone && (
                  <span className="absolute -top-1 -right-2">
                    <CheckCircle className="w-3 h-3 text-emerald-500 fill-emerald-500/20" />
                  </span>
                )}
              </div>
              <div>
                <span
                  className={`block text-[11px] font-bold leading-tight ${
                    isSelected ? "text-white" : "text-[#0d1527]"
                  }`}
                >
                  {prayer.shortLabel}
                </span>
                <span
                  className={`block text-[9px] truncate ${
                    isSelected ? "text-gray-300" : "text-gray-500"
                  }`}
                >
                  {prayer.timeLabel}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      <div className="bg-[#fcfbf7] rounded-xl p-4 border border-[#d4af37]/25 mb-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-bold text-[#854d0e] bg-[#fef08a]/60 px-2 py-0.5 rounded-md">
            {currentPrayer.tag}
          </span>

          <button
            onClick={() => onTogglePrayer(currentPrayer.id)}
            className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold transition-all cursor-pointer border ${
              isCurrentCompleted
                ? "bg-emerald-100 text-emerald-800 border-emerald-300 shadow-sm"
                : "bg-white text-gray-700 border-gray-300 hover:border-gray-400"
            }`}
          >
            {isCurrentCompleted ? (
              <>
                <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                <span>Rezada hoje</span>
              </>
            ) : (
              <>
                <Circle className="w-3.5 h-3.5 text-gray-400" />
                <span>Marcar rezada</span>
              </>
            )}
          </button>
        </div>

        <h4 className="text-base font-bold text-[#0d1527] mb-0.5">
          {currentPrayer.title}
        </h4>
        <p className="text-[11px] text-[#1e3a8a] font-medium mb-2">
          {currentPrayer.subtitle} • <span className="italic font-serif">{currentPrayer.latinTitle}</span>
        </p>

        <p className="text-xs text-gray-600 mb-3 leading-relaxed">
          {currentPrayer.explanation}
        </p>

        {currentPrayer.slot === "mercy" ? (
          <div className="space-y-3">
            <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-300/40 text-xs text-amber-950 font-medium flex items-center gap-2">
              <span className="text-base">💛</span>
              <span>
                <strong>Oração da Misericórdia:</strong> Reze às 15h os dois corações da oração e a aclamação final revelados por Jesus.
              </span>
            </div>

            <div className="p-4 rounded-xl bg-white border border-[#e2d9c8] space-y-2.5 shadow-sm">
              <div className="flex items-center justify-between pb-1.5 border-b border-gray-100">
                <span className="text-xs font-bold text-[#854d0e] uppercase tracking-wider">
                  Nas contas maiores (rezar uma vez)
                </span>
                <span className="text-[10px] text-[#854d0e] font-bold bg-[#fef9c3] px-2 py-0.5 rounded-md border border-[#facc15]/40">
                  1x
                </span>
              </div>
              <div className="space-y-2">
                <div className="p-3 rounded-xl bg-[#faf8f5] border border-gray-100 space-y-1">
                  <div className="flex items-center gap-1.5 text-[11px] font-bold text-[#854d0e] uppercase tracking-wider">
                    <span>🇧🇷</span>
                    <span>Português:</span>
                  </div>
                  <p className="text-xs sm:text-sm font-serif text-gray-900 leading-relaxed">
                    Eterno Pai, eu Vos ofereço o Corpo e o Sangue, a Alma e a Divindade de Vosso diletíssimo Filho, nosso Senhor Jesus Cristo, em expiação dos nossos pecados e do mundo inteiro.
                  </p>
                </div>
                <div className="p-3 rounded-xl bg-[#faf7f0] border border-[#d4af37]/35 space-y-1">
                  <div className="flex items-center gap-1.5 text-[11px] font-bold text-[#1e3a8a] uppercase tracking-wider">
                    <span>📜</span>
                    <span>Latim:</span>
                  </div>
                  <p className="text-xs sm:text-sm font-serif italic text-gray-800 leading-relaxed">
                    Pater Aeterne, offero tibi Corpus et Sanguinem, Animam et Divinitatem dilectissimi Filii tui, Domini nostri Iesu Christi, in propitiatione pro peccatis nostris et totius mundi.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white border border-[#e2d9c8] space-y-2.5 shadow-sm">
              <div className="flex items-center justify-between pb-1.5 border-b border-gray-100">
                <span className="text-xs font-bold text-[#1e3a8a] uppercase tracking-wider">
                  Nas contas menores (rezar 10 vezes)
                </span>
                <span className="text-[10px] text-blue-900 font-bold bg-blue-50 px-2 py-0.5 rounded-md border border-blue-200">
                  10x
                </span>
              </div>
              <div className="space-y-2">
                <div className="p-3 rounded-xl bg-[#eff6ff]/60 border border-blue-100 space-y-1">
                  <div className="flex items-center gap-1.5 text-[11px] font-bold text-[#854d0e] uppercase tracking-wider">
                    <span>🇧🇷</span>
                    <span>Português:</span>
                  </div>
                  <p className="text-xs sm:text-sm font-serif font-medium text-blue-950 leading-relaxed">
                    Pela Sua dolorosa Paixão, tende misericórdia de nós e do mundo inteiro.
                  </p>
                </div>
                <div className="p-3 rounded-xl bg-[#faf7f0] border border-[#d4af37]/35 space-y-1">
                  <div className="flex items-center gap-1.5 text-[11px] font-bold text-[#1e3a8a] uppercase tracking-wider">
                    <span>📜</span>
                    <span>Latim:</span>
                  </div>
                  <p className="text-xs sm:text-sm font-serif italic text-gray-800 leading-relaxed">
                    Pro dolorosa Eius passione, miserere nobis et totius mundi.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white border border-[#e2d9c8] space-y-2.5 shadow-sm">
              <div className="flex items-center justify-between pb-1.5 border-b border-gray-100">
                <span className="text-xs font-bold text-amber-800 uppercase tracking-wider">
                  Ao final (rezar 3 vezes)
                </span>
                <span className="text-[10px] text-amber-900 font-bold bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200">
                  3x
                </span>
              </div>
              <div className="space-y-2">
                <div className="p-3 rounded-xl bg-[#fefce8] border border-amber-200/70 space-y-1">
                  <div className="flex items-center gap-1.5 text-[11px] font-bold text-[#854d0e] uppercase tracking-wider">
                    <span>🇧🇷</span>
                    <span>Português:</span>
                  </div>
                  <p className="text-xs sm:text-sm font-serif font-semibold text-amber-950 leading-relaxed">
                    Deus Santo, Deus Forte, Deus Imortal, tende piedade de nós e de todo o mundo.
                  </p>
                </div>
                <div className="p-3 rounded-xl bg-[#faf7f0] border border-[#d4af37]/35 space-y-1">
                  <div className="flex items-center gap-1.5 text-[11px] font-bold text-[#1e3a8a] uppercase tracking-wider">
                    <span>📜</span>
                    <span>Latim:</span>
                  </div>
                  <p className="text-xs sm:text-sm font-serif italic text-gray-800 leading-relaxed">
                    Sanctus Deus, Sanctus Fortis, Sanctus Immortalis, miserere nobis et totius mundi.
                  </p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-3">
            <div className="p-4 rounded-xl bg-white border border-[#e2d9c8] space-y-2 text-xs sm:text-sm text-gray-800 font-serif leading-relaxed shadow-sm">
              <div className="flex items-center gap-1.5 text-xs font-bold text-[#854d0e] uppercase tracking-wider mb-1">
                <span>🇧🇷</span>
                <span>Português:</span>
              </div>
              {currentPrayer.text.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            <div className="p-4 rounded-xl bg-[#faf7f0] border border-[#d4af37]/40 space-y-2 text-xs sm:text-sm text-gray-800 font-serif italic leading-relaxed shadow-sm">
              <div className="flex items-center gap-1.5 text-xs font-bold text-[#1e3a8a] uppercase tracking-wider mb-1">
                <span>📜</span>
                <span>Latim:</span>
              </div>
              {currentPrayer.latinText.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="flex items-center justify-between text-[11px] text-gray-500 px-1">
        <span className="flex items-center gap-1 text-[#1e3a8a] font-medium">
          <BookOpen className="w-3.5 h-3.5" />
          <span>Orações tradicionais em Português e Latim</span>
        </span>
        <span className="font-semibold text-emerald-700">
          {
            hourlyPrayers.filter((p) => completedPrayers.includes(p.id)).length
          }{" "}
          de 5 concluídas
        </span>
      </div>
    </div>
  );
}
