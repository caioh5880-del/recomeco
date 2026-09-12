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
  explanation: string;
  text: string[];
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
    explanation:
      "Une todos os seus atos, estudos, trabalhos e sofrimentos ao Coração de Jesus e Maria desde as primeiras horas do dia.",
    text: [
      "Senhor meu Deus, Pai infinitamente bom, eu Vos ofereço este dia: meus pensamentos, palavras, obras, sofrimentos e alegrias, em união com o Sagrado Coração de Vosso Divino Filho Jesus Cristo, que se renova incessantemente na Santa Missa pelo mundo inteiro.",
      "Por intercessão do Imaculado Coração de Maria, Mãe de Deus e nossa Mãe amantíssima, ofereço tudo pelas intenções da Santa Igreja, pela santificação das famílias e pela conversão de todos os corações.",
      "Amém."
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
    explanation:
      "Professar a fé antes de tudo! Alicerçar cada escolha, pensamento e desafio nas verdades eternas reveladas por Deus.",
    text: [
      "Creio em Deus Pai todo-poderoso, Criador do céu e da terra;",
      "E em Jesus Cristo, seu único Filho, nosso Senhor, que foi concebido pelo poder do Espírito Santo, nasceu da Virgem Maria, padeceu sob Pôncio Pilatos, foi crucificado, morto e sepultado;",
      "Desceu à mansão dos mortos; ressuscitou ao terceiro dia; subiu aos céus, está sentado à direita de Deus Pai todo-poderoso, donde há de vir a julgar os vivos e os mortos.",
      "Creio no Espírito Santo, na santa Igreja Católica, na comunhão dos santos, na remissão dos pecados, na ressurreição da carne, na vida eterna.",
      "Amém."
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
    icon: Bell
  },
  {
    id: "hora-da-misericordia",
    slot: "mercy",
    timeLabel: "15h",
    shortLabel: "15h",
    tag: "⏰ 15h (Misericórdia)",
    title: "Hora da Misericórdia",
    subtitle: "A hora da Redenção na Cruz",
    explanation:
      "Às 15 horas, momento em que Jesus expirou na Cruz pela salvação do mundo, mergulhamos no Seu Coração Misericordioso.",
    text: [
      "Ó Sangue e Água que jorrastes do Coração de Jesus como fonte de misericórdia para nós, eu confio em Vós!",
      "Jesus, Vós expirastes, mas uma fonte de vida brotou para as almas e um oceano de misericórdia se abriu para o mundo inteiro. Ó Fonte de Vida, insondável Misericórdia Divina, envolvei o mundo todo e derramai-Vos sobre nós.",
      "Ó Sangue e Água que jorrastes do Coração de Jesus como fonte de misericórdia para nós, eu confio em Vós!",
      "Ó Sangue e Água que jorrastes do Coração de Jesus como fonte de misericórdia para nós, eu confio em Vós!",
      "Ó Sangue e Água que jorrastes do Coração de Jesus como fonte de misericórdia para nós, eu confio em Vós!",
      "Jesus, eu confio em Vós. Amém."
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
    explanation:
      "O Exame de Consciência encerra o dia com paz e revisão do coração. Agradecemos as graças, reconhecemos as faltas e descansamos sob a proteção de Maria.",
    text: [
      "Meu Deus e Senhor, coloco-me em Vossa presença amorosa neste encerramento de jornada.",
      "1. Agradecimento: Dou-Vos graças por cada bênção, respiração, livramento e dom que me concedestes hoje.",
      "2. Consciência: Onde vacilei hoje? Fui fiel na caridade? Cedi à impaciência, ao orgulho, à preguiça ou a pensamentos e atitudes impuras?",
      "3. Arrependimento e Propósito: Meu Deus, tenho muita dor de ter pecado, porque sois infinitamente bom. Proponho firmemente, com a Vossa graça, recomeçar e evitar as ocasiões de queda.",
      "Oração da Noite: Visita, Senhor, esta habitação e afastai para longe dela todas as ciladas do inimigo; habitem nela os vossos santos anjos para nos guardar em paz, e a vossa bênção esteja sempre conosco. Virgem Santíssima, cobri-me com o vosso manto sagrado nesta noite e guardai meu corpo e minha alma. Em vossas mãos, Senhor, entrego o meu espírito. Amém."
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
    if (hour >= 18 || hour < 5) {
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
          {currentPrayer.subtitle}
        </p>

        <p className="text-xs text-gray-600 mb-3 leading-relaxed">
          {currentPrayer.explanation}
        </p>

        <div className="p-3.5 rounded-xl bg-white border border-[#e2d9c8] space-y-2 text-xs sm:text-sm text-gray-800 font-serif leading-relaxed italic">
          {currentPrayer.text.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between text-[11px] text-gray-500 px-1">
        <span className="flex items-center gap-1 text-[#1e3a8a] font-medium">
          <BookOpen className="w-3.5 h-3.5" />
          <span>Orações tradicionais da Igreja</span>
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
