"use client";

import React, { useState, useEffect } from "react";
import { Sun, Bell, Clock, CheckCircle, Circle, Sparkles, BookOpen } from "lucide-react";

interface HourlyPrayersCardProps {
  completedPrayers: string[];
  onTogglePrayer: (prayerId: string) => void;
}

interface HourlyPrayerItem {
  id: string;
  slot: "morning" | "noon" | "mercy";
  timeLabel: string;
  tag: string;
  title: string;
  explanation: string;
  text: string[];
  icon: React.ElementType;
}

const hourlyPrayers: HourlyPrayerItem[] = [
  {
    id: "oferecimento-diario",
    slot: "morning",
    timeLabel: "Manhã",
    tag: "☀️ Manhã",
    title: "Oferecimento do Dia",
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
    id: "angelus",
    slot: "noon",
    timeLabel: "Meio-dia",
    tag: "🔔 Meio-dia (12h)",
    title: "O Ângelus",
    explanation:
      "Celebra o momento sagrado da Encarnação do Verbo de Deus no seio puríssimo da Virgem Maria em resposta ao anúncio do Arcanjo.",
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
    tag: "⏰ 15h (Misericórdia)",
    title: "Hora da Misericórdia",
    explanation:
      "Às 15 horas, momento em que Jesus expirou na Cruz por nossa salvação, mergulhamos no Seu Coração Misericordioso.",
    text: [
      "Ó Sangue e Água que jorrastes do Coração de Jesus como fonte de misericórdia para nós, eu confio em Vós!",
      "Jesus, Vós expirastes, mas uma fonte de vida brotou para as almas e um oceano de misericórdia se abriu para o mundo inteiro. Ó Fonte de Vida, insondável Misericórdia Divina, envolvei o mundo todo e derramai-Vos sobre nós.",
      "Ó Sangue e Água que jorrastes do Coração de Jesus como fonte de misericórdia para nós, eu confio em Vós!",
      "Ó Sangue e Água que jorrastes do Coração de Jesus como fonte de misericórdia para nós, eu confio em Vós!",
      "Ó Sangue e Água que jorrastes do Coração de Jesus como fonte de misericórdia para nós, eu confio em Vós!",
      "Jesus, eu confio em Vós. Amém."
    ],
    icon: Clock
  }
];

export function HourlyPrayersCard({
  completedPrayers,
  onTogglePrayer
}: HourlyPrayersCardProps) {
  const [selectedSlot, setSelectedSlot] = useState<"morning" | "noon" | "mercy">("morning");

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour >= 14) {
      setSelectedSlot("mercy");
    } else if (hour >= 11) {
      setSelectedSlot("noon");
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
            <span>Orações por Horário</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-[#0d1527]">
            Ritmo de Oração Diária
          </h3>
        </div>

        <span className="text-[11px] font-semibold text-[#854d0e] bg-[#fef9c3] px-2.5 py-1 rounded-full border border-[#facc15]/40">
          3 Momentos
        </span>
      </div>

      <div className="grid grid-cols-3 gap-2 mb-4">
        {hourlyPrayers.map((prayer) => {
          const isSelected = selectedSlot === prayer.slot;
          const isDone = completedPrayers.includes(prayer.id);
          const Icon = prayer.icon;

          return (
            <button
              key={prayer.id}
              onClick={() => setSelectedSlot(prayer.slot)}
              className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between min-h-[64px] ${
                isSelected
                  ? "bg-[#0d1527] text-white border-[#d4af37] shadow-sm"
                  : "bg-white/80 text-gray-700 border-gray-200 hover:bg-white hover:border-[#d4af37]/50"
              }`}
            >
              <div className="flex items-center justify-between w-full mb-1">
                <Icon
                  className={`w-4 h-4 ${
                    isSelected ? "text-[#facc15]" : "text-[#1e3a8a]"
                  }`}
                />
                {isDone && (
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-500 fill-emerald-500/20" />
                )}
              </div>
              <div>
                <span
                  className={`block text-[11px] font-bold leading-tight ${
                    isSelected ? "text-white" : "text-[#0d1527]"
                  }`}
                >
                  {prayer.timeLabel}
                </span>
                <span
                  className={`block text-[9px] truncate ${
                    isSelected ? "text-gray-300" : "text-gray-500"
                  }`}
                >
                  {prayer.title}
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

        <h4 className="text-base font-bold text-[#0d1527] mb-1">
          {currentPrayer.title}
        </h4>

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
          de 3 concluídas
        </span>
      </div>
    </div>
  );
}
