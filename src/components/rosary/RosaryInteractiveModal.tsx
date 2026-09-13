"use client";

import React, { useState } from "react";
import {
  X,
  ChevronLeft,
  ChevronRight,
  RotateCcw,
  Sparkles,
  BookOpen,
  CheckCircle2,
  Cross
} from "lucide-react";
import { rosaryGroups } from "@/lib/data/rosary";
import { RosaryMysteryType, RosaryMysteryGroup } from "@/lib/types";
import { todayLiturgy } from "@/lib/data/liturgy";
import { getDecadeLiturgyReflection } from "@/lib/data/rosaryLiturgy";
import { MarianRoseIcon } from "../ui/MarianRoseIcon";
import { Button } from "../ui/Button";

interface RosaryInteractiveModalProps {
  onClose: () => void;
}

type RosaryStage = "intro" | "decades" | "final";
type IntroStep = 0 | 1 | 2 | 3 | 4 | 5;
type DecadeStep = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
type FinalStep = 0 | 1 | 2 | 3;

const prayerTexts = {
  credo:
    "Creio em Deus Pai todo-poderoso, Criador do céu e da terra. E em Jesus Cristo, seu único Filho, nosso Senhor, que foi concebido pelo poder do Espírito Santo, nasceu da Virgem Maria, padeceu sob Pôncio Pilatos, foi crucificado, morto e sepultado; desceu à mansão dos mortos; ressuscitou ao terceiro dia; subiu aos céus, está sentado à direita de Deus Pai todo-poderoso, donde há de vir a julgar os vivos e os mortos. Creio no Espírito Santo, na Santa Igreja Católica, na comunhão dos santos, na remissão dos pecados, na ressurreição da carne, na vida eterna. Amém.",
  paiNosso:
    "Pai nosso, que estais nos céus, santificado seja o vosso nome; venha a nós o vosso reino, seja feita a vossa vontade assim na terra como no céu. O pão nosso de cada dia nos dai hoje; perdoai-nos as nossas ofensas assim como nós perdoamos a quem nos tem ofendido, e não nos deixeis cair em tentação, mas livrai-nos do mal. Amém.",
  aveMaria:
    "Ave Maria, cheia de graça, o Senhor é convosco, bendita sois vós entre as mulheres e bendito é o fruto do vosso ventre, Jesus. Santa Maria, Mãe de Deus, rogai por nós pecadores, agora e na hora da nossa morte. Amém.",
  gloria:
    "Glória ao Pai, ao Filho e ao Espírito Santo. Como era no princípio, agora e sempre. Amém.",
  fatima:
    "Ó meu Jesus, perdoai-nos, livrai-nos do fogo do inferno, levai as almas todas para o céu e socorrei principalmente as que mais precisarem da vossa misericórdia.",
  agradecimento:
    "Infinitas graças vos damos, soberana Rainha, pelos benefícios que todos os dias recebemos de vossas mãos maternais. Dignai-vos agora e para sempre tomar-nos debaixo de vosso poderoso amparo, e para mais vos agradecer, vos saudamos com uma Salve Rainha:",
  salveRainha:
    "Salve, Rainha, Mãe de misericórdia, vida, doçura e esperança nossa, salve! A vós bradamos, os degredados filhos de Eva. A vós suspiramos, gemendo e chorando neste vale de lágrimas. Eia, pois, advogada nossa, esses vossos olhos misericordiosos a nós volvei, e depois deste desterro mostrai-nos Jesus, bendito fruto do vosso ventre, ó clemente, ó piedosa, ó doce sempre Virgem Maria. Rogai por nós, Santa Mãe de Deus, para que sejamos dignos das promessas de Cristo. Amém.",
  sinalDaCruz:
    "Em nome do Pai, do Filho e do Espírito Santo. Amém."
};

export function RosaryInteractiveModal({ onClose }: RosaryInteractiveModalProps) {
  const [selectedType, setSelectedType] = useState<RosaryMysteryType>("gozosos");
  const [stage, setStage] = useState<RosaryStage>("intro");
  const [introStep, setIntroStep] = useState<IntroStep>(0);
  const [currentDecadeIndex, setCurrentDecadeIndex] = useState<number>(0);
  const [decadeStep, setDecadeStep] = useState<DecadeStep>(0);
  const [finalStep, setFinalStep] = useState<FinalStep>(0);

  const currentGroup: RosaryMysteryGroup =
    rosaryGroups.find((g) => g.type === selectedType) || rosaryGroups[0];
  const currentDecade = currentGroup.decades[currentDecadeIndex];
  const liturgyReflection = getDecadeLiturgyReflection(
    todayLiturgy,
    currentDecade.number,
    selectedType
  );

  const handleNextStep = () => {
    if (stage === "intro") {
      if (introStep < 5) {
        setIntroStep((prev) => (prev + 1) as IntroStep);
      } else {
        setStage("decades");
        setCurrentDecadeIndex(0);
        setDecadeStep(0);
      }
      return;
    }

    if (stage === "decades") {
      if (decadeStep < 12) {
        setDecadeStep((prev) => (prev + 1) as DecadeStep);
      } else {
        if (currentDecadeIndex < 4) {
          setCurrentDecadeIndex((prev) => prev + 1);
          setDecadeStep(0);
        } else {
          setStage("final");
          setFinalStep(0);
        }
      }
      return;
    }

    if (stage === "final") {
      if (finalStep < 3) {
        setFinalStep((prev) => (prev + 1) as FinalStep);
      }
    }
  };

  const handlePrevStep = () => {
    if (stage === "intro") {
      if (introStep > 0) {
        setIntroStep((prev) => (prev - 1) as IntroStep);
      }
      return;
    }

    if (stage === "decades") {
      if (decadeStep > 0) {
        setDecadeStep((prev) => (prev - 1) as DecadeStep);
      } else if (currentDecadeIndex > 0) {
        setCurrentDecadeIndex((prev) => prev - 1);
        setDecadeStep(12);
      } else {
        setStage("intro");
        setIntroStep(5);
      }
      return;
    }

    if (stage === "final") {
      if (finalStep > 0) {
        setFinalStep((prev) => (prev - 1) as FinalStep);
      } else {
        setStage("decades");
        setCurrentDecadeIndex(4);
        setDecadeStep(12);
      }
    }
  };

  const handleSelectGroup = (type: RosaryMysteryType) => {
    setSelectedType(type);
    setCurrentDecadeIndex(0);
    setDecadeStep(0);
  };

  const handleReset = () => {
    setStage("intro");
    setIntroStep(0);
    setCurrentDecadeIndex(0);
    setDecadeStep(0);
    setFinalStep(0);
  };

  const renderIntroPrayerInfo = () => {
    if (introStep === 0) {
      return {
        badge: "Símbolo da Fé",
        badgeColor: "bg-[#d4af37]/20 text-[#fef08a] border-[#d4af37]/40",
        title: "Credo Apostólico",
        subtitle: "Profissão de fé cristã católica",
        text: prayerTexts.credo
      };
    }
    if (introStep === 1) {
      return {
        badge: "Pai-Nosso",
        badgeColor: "bg-[#d4af37]/20 text-[#fef08a] border-[#d4af37]/40",
        title: "Pai-Nosso",
        subtitle: "Pelas intenções do Santo Padre e da Santa Igreja",
        text: prayerTexts.paiNosso
      };
    }
    if (introStep === 2) {
      return {
        badge: "1ª Ave-Maria",
        badgeColor: "bg-blue-500/20 text-blue-200 border-blue-400/30",
        title: "Ave-Maria em Honra a Deus Pai",
        subtitle: "Para que o Senhor aumente a nossa Fé",
        text: prayerTexts.aveMaria
      };
    }
    if (introStep === 3) {
      return {
        badge: "2ª Ave-Maria",
        badgeColor: "bg-blue-500/20 text-blue-200 border-blue-400/30",
        title: "Ave-Maria em Honra a Deus Filho",
        subtitle: "Para que o Senhor aumente a nossa Esperança",
        text: prayerTexts.aveMaria
      };
    }
    if (introStep === 4) {
      return {
        badge: "3ª Ave-Maria",
        badgeColor: "bg-blue-500/20 text-blue-200 border-blue-400/30",
        title: "Ave-Maria em Honra ao Espírito Santo",
        subtitle: "Para que o Senhor aumente a nossa Caridade",
        text: prayerTexts.aveMaria
      };
    }
    return {
      badge: "Glória ao Pai",
      badgeColor: "bg-amber-400/20 text-amber-200 border-amber-400/40",
      title: "Glória ao Pai",
      subtitle: "Louvor à Santíssima Trindade antes dos mistérios",
      text: prayerTexts.gloria
    };
  };

  const renderDecadePrayerInfo = () => {
    if (decadeStep === 0) {
      return {
        badge: "Pai-Nosso",
        badgeColor: "bg-[#d4af37]/20 text-[#fef08a] border-[#d4af37]/40",
        title: "Pai-Nosso",
        subtitle: "A oração ensinada por Nosso Senhor Jesus Cristo",
        text: prayerTexts.paiNosso
      };
    }
    if (decadeStep >= 1 && decadeStep <= 10) {
      return {
        badge: `${decadeStep}ª Ave-Maria`,
        badgeColor: "bg-blue-500/20 text-blue-200 border-blue-400/30",
        title: `${decadeStep}ª Ave-Maria`,
        subtitle: `Conta ${decadeStep} de 10 do ${currentDecade.number}º Mistério`,
        text: prayerTexts.aveMaria
      };
    }
    if (decadeStep === 11) {
      return {
        badge: "Glória ao Pai",
        badgeColor: "bg-amber-400/20 text-amber-200 border-amber-400/40",
        title: "Glória ao Pai",
        subtitle: "Louvor à Santíssima Trindade após as 10 Ave-Marias",
        text: prayerTexts.gloria
      };
    }
    return {
      badge: "Ejaculatória de Fátima",
      badgeColor: "bg-rose-500/25 text-rose-200 border-rose-400/40",
      title: "Ejaculatória de Fátima",
      subtitle: "Rezada após o Glória ao Pai de cada um dos 5 mistérios",
      text: prayerTexts.fatima
    };
  };

  const currentIntroInfo = renderIntroPrayerInfo();
  const currentDecadeInfo = renderDecadePrayerInfo();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md animate-in fade-in">
      <div className="bg-[#0d1527] text-white rounded-3xl max-w-lg w-full p-5 sm:p-6 shadow-2xl border border-[#d4af37]/40 max-h-[92vh] flex flex-col justify-between">
        <div className="shrink-0 pb-3 border-b border-white/10 space-y-2.5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <MarianRoseIcon className="w-6 h-6 text-[#facc15]" />
              <div>
                <h3 className="font-black text-lg text-white tracking-wide">
                  O Santo Rosário
                </h3>
                <span className="text-[10px] text-[#fef08a] block">
                  {currentGroup.daysOfWeek}
                </span>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full text-white/50 hover:text-white hover:bg-white/10 transition-all cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="grid grid-cols-3 gap-1 p-1 bg-white/5 rounded-2xl border border-white/10 text-xs text-center font-bold">
            <button
              onClick={() => {
                setStage("intro");
              }}
              className={`py-1.5 rounded-xl transition-all cursor-pointer ${
                stage === "intro"
                  ? "bg-[#d4af37] text-[#0d1527] shadow"
                  : "text-white/60 hover:text-white"
              }`}
            >
              1. Início do Terço
            </button>
            <button
              onClick={() => {
                setStage("decades");
              }}
              className={`py-1.5 rounded-xl transition-all cursor-pointer ${
                stage === "decades"
                  ? "bg-[#d4af37] text-[#0d1527] shadow"
                  : "text-white/60 hover:text-white"
              }`}
            >
              2. Os 5 Mistérios
            </button>
            <button
              onClick={() => {
                setStage("final");
                setFinalStep(0);
              }}
              className={`py-1.5 rounded-xl transition-all cursor-pointer ${
                stage === "final"
                  ? "bg-[#d4af37] text-[#0d1527] shadow"
                  : "text-white/60 hover:text-white"
              }`}
            >
              3. Orações Finais
            </button>
          </div>

          <div className="grid grid-cols-4 gap-1.5 p-1 bg-white/5 rounded-xl border border-white/10">
            {rosaryGroups.map((g) => (
              <button
                key={g.type}
                onClick={() => handleSelectGroup(g.type)}
                className={`py-1.5 px-1 text-[11px] font-semibold rounded-lg transition-all cursor-pointer ${
                  selectedType === g.type
                    ? "bg-[#1e3a8a] text-white shadow-sm font-bold border border-blue-400/40"
                    : "text-white/60 hover:text-white"
                }`}
              >
                {g.type === "gozosos" && "Gozosos"}
                {g.type === "luminosos" && "Luminosos"}
                {g.type === "dolorosos" && "Dolorosos"}
                {g.type === "gloriosos" && "Gloriosos"}
              </button>
            ))}
          </div>
        </div>

        <div className="overflow-y-auto custom-scrollbar my-4 space-y-4 pr-1">
          {stage === "intro" && (
            <div className="space-y-4 animate-in fade-in">
              <div className="p-4 rounded-2xl bg-gradient-to-b from-[#14213d] to-[#162a56] border border-[#d4af37]/30 shadow-inner space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#fef08a] uppercase tracking-wider">
                    Início do Terço
                  </span>
                  <span className="text-[11px] text-white/60">
                    Passo {introStep + 1} de 6
                  </span>
                </div>
                <h4 className="text-base font-bold text-white leading-snug">
                  Preparação e Profissão de Fé
                </h4>
                <p className="text-xs text-white/75 font-serif italic">
                  Iniciamos o Santo Terço professando a nossa fé católica, rezando pelo Papa e pedindo o aumento das virtudes teologais: Fé, Esperança e Caridade.
                </p>
              </div>

              <div className="bg-white/5 rounded-2xl p-4 border border-white/10 space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-white/70">Ordem do Início:</span>
                  <span
                    className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold border ${currentIntroInfo.badgeColor}`}
                  >
                    {currentIntroInfo.badge}
                  </span>
                </div>

                <div className="flex items-center justify-between gap-1 px-1 py-1">
                  <button
                    onClick={() => setIntroStep(0)}
                    className={`py-1 px-2 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                      introStep === 0
                        ? "bg-[#d4af37] text-[#0d1527] border-[#fef08a] scale-105 shadow ring-2 ring-[#facc15]"
                        : "bg-white/10 text-white/70 border-white/20 hover:bg-white/20"
                    }`}
                  >
                    Credo
                  </button>

                  <button
                    onClick={() => setIntroStep(1)}
                    className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold border transition-all cursor-pointer ${
                      introStep === 1
                        ? "bg-[#d4af37] text-[#0d1527] border-[#fef08a] scale-110 shadow ring-2 ring-[#facc15]"
                        : "bg-white/10 text-white/70 border-white/20 hover:bg-white/20"
                    }`}
                    title="Pai-Nosso"
                  >
                    P
                  </button>

                  {[1, 2, 3].map((idx) => {
                    const stepNum = idx + 1;
                    const label = idx === 1 ? "Fé" : idx === 2 ? "Esp." : "Car.";
                    return (
                      <button
                        key={idx}
                        onClick={() => setIntroStep(stepNum as IntroStep)}
                        className={`px-2 py-1 rounded-xl text-[10px] font-bold border transition-all cursor-pointer ${
                          introStep === stepNum
                            ? "bg-[#2563eb] text-white border-blue-400 scale-105 shadow ring-2 ring-[#facc15]"
                            : "bg-white/10 text-white/50 border-white/10 hover:bg-white/20"
                        }`}
                        title={`${idx}ª Ave-Maria (${label})`}
                      >
                        {idx}ª {label}
                      </button>
                    );
                  })}

                  <button
                    onClick={() => setIntroStep(5)}
                    className={`w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-black border transition-all cursor-pointer ${
                      introStep === 5
                        ? "bg-amber-400 text-[#0d1527] border-amber-300 scale-110 shadow ring-2 ring-[#facc15]"
                        : "bg-white/10 text-white/70 border-white/20 hover:bg-white/20"
                    }`}
                    title="Glória ao Pai"
                  >
                    G
                  </button>
                </div>

                <div className="p-4 rounded-xl bg-black/30 border border-white/10 space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-bold text-[#fef08a] uppercase tracking-wide">
                      {currentIntroInfo.title}
                    </span>
                    <span className="text-[10px] text-white/50">
                      {currentIntroInfo.subtitle}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm font-serif italic text-white/95 leading-relaxed">
                    &ldquo;{currentIntroInfo.text}&rdquo;
                  </p>
                </div>
              </div>
            </div>
          )}

          {stage === "decades" && (
            <div className="space-y-4 animate-in fade-in">
              <div className="p-4 rounded-2xl bg-gradient-to-b from-[#14213d] to-[#162a56] border border-[#d4af37]/30 shadow-inner">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-[#fef08a] uppercase tracking-wider">
                    {currentDecade.number}º Mistério
                  </span>
                  <span className="text-[11px] text-white/60">
                    {currentDecadeIndex + 1} de 5
                  </span>
                </div>

                <h4 className="text-base font-bold text-white mb-2 leading-snug">
                  {currentDecade.title}
                </h4>

                <div className="text-xs text-white/70 italic mb-3 pl-2 border-l-2 border-[#d4af37]">
                  {currentDecade.scriptureText}
                </div>

                <div className="p-3 rounded-xl bg-[#d4af37]/15 border border-[#d4af37]/40 mb-3 space-y-1">
                  <div className="flex items-center gap-1.5 text-[10px] sm:text-[11px] font-bold text-[#fef08a] uppercase tracking-wider">
                    <BookOpen className="w-3.5 h-3.5 text-[#facc15] shrink-0" />
                    <span>Luz do Evangelho de Hoje ({todayLiturgy.gospel.reference})</span>
                  </div>
                  <p className="text-xs sm:text-[13px] text-white/95 leading-relaxed font-serif italic">
                    &ldquo;{liturgyReflection}&rdquo;
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-white/90 leading-relaxed bg-black/20 p-3 rounded-xl">
                  {currentDecade.meditation}
                </p>

                <div className="mt-2 text-[11px] text-[#fef08a] font-medium flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 text-[#facc15]" />
                  <span>Fruto: {currentDecade.fruitOfMystery}</span>
                </div>
              </div>

              <div className="bg-white/5 rounded-2xl p-4 border border-white/10 space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-white/70">Contas do {currentDecade.number}º Mistério:</span>
                  <span
                    className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold border ${currentDecadeInfo.badgeColor}`}
                  >
                    {currentDecadeInfo.badge}
                  </span>
                </div>

                <div className="flex items-center justify-between gap-1 px-1 py-1 overflow-x-auto custom-scrollbar">
                  <button
                    onClick={() => setDecadeStep(0)}
                    className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold border transition-all cursor-pointer shrink-0 ${
                      decadeStep === 0
                        ? "bg-[#d4af37] text-[#0d1527] border-[#fef08a] scale-110 shadow-lg shadow-[#d4af37]/40 ring-2 ring-[#facc15]"
                        : "bg-white/20 text-white/80 border-white/20 hover:bg-white/30"
                    }`}
                    title="Pai-Nosso"
                  >
                    P
                  </button>

                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                    <button
                      key={num}
                      onClick={() => setDecadeStep(num as DecadeStep)}
                      className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold border transition-all cursor-pointer shrink-0 ${
                        decadeStep >= num
                          ? "bg-[#2563eb] text-white border-blue-400 shadow-sm"
                          : "bg-white/10 text-white/50 border-white/10 hover:bg-white/20"
                      } ${decadeStep === num ? "ring-2 ring-[#facc15] scale-110" : ""}`}
                      title={`${num}ª Ave-Maria`}
                    >
                      {num}
                    </button>
                  ))}

                  <button
                    onClick={() => setDecadeStep(11)}
                    className={`w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-black border transition-all cursor-pointer shrink-0 ${
                      decadeStep === 11
                        ? "bg-amber-400 text-[#0d1527] border-amber-300 scale-110 shadow-lg ring-2 ring-[#facc15]"
                        : decadeStep > 11
                        ? "bg-amber-400/40 text-amber-200 border-amber-400/40"
                        : "bg-white/10 text-white/50 border-white/10 hover:bg-white/20"
                    }`}
                    title="Glória ao Pai"
                  >
                    G
                  </button>

                  <button
                    onClick={() => setDecadeStep(12)}
                    className={`w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-black border transition-all cursor-pointer shrink-0 ${
                      decadeStep === 12
                        ? "bg-rose-500 text-white border-rose-300 scale-110 shadow-lg ring-2 ring-rose-300"
                        : "bg-white/10 text-white/50 border-white/10 hover:bg-white/20"
                    }`}
                    title="Ejaculatória de Fátima"
                  >
                    F
                  </button>
                </div>

                <div className="p-4 rounded-xl bg-black/30 border border-white/10 space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-bold text-[#fef08a] uppercase tracking-wide">
                      {currentDecadeInfo.title}
                    </span>
                    <span className="text-[10px] text-white/50">
                      {currentDecadeInfo.subtitle}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm font-serif italic text-white/95 leading-relaxed">
                    &ldquo;{currentDecadeInfo.text}&rdquo;
                  </p>
                </div>
              </div>
            </div>
          )}

          {stage === "final" && (
            <div className="space-y-4 animate-in fade-in">
              <div className="grid grid-cols-3 gap-1.5 p-1 bg-white/5 rounded-2xl border border-white/10 text-center text-xs">
                <button
                  onClick={() => setFinalStep(0)}
                  className={`py-2 px-1 rounded-xl font-bold transition-all cursor-pointer ${
                    finalStep === 0
                      ? "bg-[#d4af37] text-[#0d1527] shadow"
                      : "text-white/60 hover:text-white"
                  }`}
                >
                  1. Agradecimento
                </button>
                <button
                  onClick={() => setFinalStep(1)}
                  className={`py-2 px-1 rounded-xl font-bold transition-all cursor-pointer ${
                    finalStep === 1
                      ? "bg-[#d4af37] text-[#0d1527] shadow"
                      : "text-white/60 hover:text-white"
                  }`}
                >
                  2. Salve Rainha
                </button>
                <button
                  onClick={() => setFinalStep(2)}
                  className={`py-2 px-1 rounded-xl font-bold transition-all cursor-pointer ${
                    finalStep === 2
                      ? "bg-[#d4af37] text-[#0d1527] shadow"
                      : "text-white/60 hover:text-white"
                  }`}
                >
                  3. Sinal da Cruz
                </button>
              </div>

              {finalStep === 0 && (
                <div className="p-5 rounded-2xl bg-gradient-to-b from-[#14213d] to-[#162a56] border border-[#d4af37]/40 shadow-inner space-y-3">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#fef08a] uppercase tracking-wider">
                    <Sparkles className="w-4 h-4 text-[#facc15]" />
                    <span>Orações Finais • Agradecimento</span>
                  </div>
                  <h4 className="text-base font-bold text-white leading-snug">
                    Oração de Agradecimento
                  </h4>
                  <p className="text-sm font-serif italic text-white/95 leading-relaxed bg-black/30 p-4 rounded-xl border border-white/10">
                    &ldquo;{prayerTexts.agradecimento}&rdquo;
                  </p>
                </div>
              )}

              {finalStep === 1 && (
                <div className="p-5 rounded-2xl bg-gradient-to-b from-[#14213d] to-[#162a56] border border-[#d4af37]/40 shadow-inner space-y-3">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#fef08a] uppercase tracking-wider">
                    <MarianRoseIcon className="w-4 h-4 text-[#facc15]" />
                    <span>Orações Finais • Soberana Rainha</span>
                  </div>
                  <h4 className="text-base font-bold text-white leading-snug">
                    Salve Rainha
                  </h4>
                  <p className="text-sm font-serif italic text-white/95 leading-relaxed bg-black/30 p-4 rounded-xl border border-white/10">
                    &ldquo;{prayerTexts.salveRainha}&rdquo;
                  </p>
                </div>
              )}

              {finalStep === 2 && (
                <div className="p-5 rounded-2xl bg-gradient-to-b from-[#14213d] to-[#162a56] border border-[#d4af37]/40 shadow-inner space-y-3">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#fef08a] uppercase tracking-wider">
                    <Sparkles className="w-4 h-4 text-[#facc15]" />
                    <span>Bênção Final</span>
                  </div>
                  <h4 className="text-base font-bold text-white leading-snug">
                    Sinal da Cruz
                  </h4>
                  <p className="text-base font-serif italic text-center font-bold text-[#fef08a] bg-black/30 p-5 rounded-xl border border-white/10">
                    &ldquo;{prayerTexts.sinalDaCruz}&rdquo;
                  </p>
                </div>
              )}

              {finalStep === 3 && (
                <div className="p-6 rounded-2xl bg-gradient-to-br from-[#102a43] to-[#0d1527] border-2 border-[#d4af37] text-center space-y-3 shadow-xl">
                  <div className="w-12 h-12 mx-auto rounded-full bg-[#d4af37]/20 border border-[#d4af37]/50 flex items-center justify-center text-[#facc15]">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h4 className="text-lg font-black text-white">
                    Santo Terço Concluído!
                  </h4>
                  <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-serif italic max-w-sm mx-auto">
                    Nossa Senhora recebe com alegria materna todas as ave-marias e preces oferecidas do fundo do seu coração.
                  </p>
                </div>
              )}
            </div>
          )}
        </div>

        <div className="shrink-0 pt-3 border-t border-white/10 flex items-center justify-between gap-3">
          <button
            onClick={handlePrevStep}
            disabled={stage === "intro" && introStep === 0}
            className="p-2.5 rounded-xl bg-white/10 text-white hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed transition-all cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <Button
            variant="gold"
            size="md"
            onClick={handleNextStep}
            className="flex-1 text-xs sm:text-sm"
            rightIcon={<ChevronRight className="w-4 h-4 text-[#0d1527]" />}
          >
            {stage === "intro" ? (
              introStep === 0
                ? "Rezar o Pai-Nosso"
                : introStep === 1
                ? "Rezar 1ª Ave-Maria (Fé)"
                : introStep === 2
                ? "Rezar 2ª Ave-Maria (Esperança)"
                : introStep === 3
                ? "Rezar 3ª Ave-Maria (Caridade)"
                : introStep === 4
                ? "Rezar o Glória ao Pai"
                : "Avançar para o 1º Mistério"
            ) : stage === "decades" ? (
              decadeStep === 0
                ? "Rezar 1ª Ave-Maria"
                : decadeStep < 10
                ? `Rezar ${decadeStep + 1}ª Ave-Maria`
                : decadeStep === 10
                ? "Rezar o Glória ao Pai"
                : decadeStep === 11
                ? "Rezar a Ejaculatória de Fátima"
                : currentDecadeIndex < 4
                ? `Avançar para o ${currentDecadeIndex + 2}º Mistério`
                : "Avançar para as Orações Finais"
            ) : finalStep === 0 ? (
              "Rezar a Salve Rainha"
            ) : finalStep === 1 ? (
              "Bênção Final (Sinal da Cruz)"
            ) : finalStep === 2 ? (
              "Concluir Santo Terço"
            ) : (
              "Concluído com Devoção"
            )}
          </Button>

          <button
            onClick={handleReset}
            title="Reiniciar Terço"
            className="p-2.5 rounded-xl bg-white/10 text-white/70 hover:text-white hover:bg-white/20 transition-all cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
