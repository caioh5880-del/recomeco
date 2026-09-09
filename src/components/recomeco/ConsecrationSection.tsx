import React, { useState } from "react";
import { ChevronDown, ChevronUp, BookCheck } from "lucide-react";
import { consecrationFaqs, consecrationSteps } from "@/lib/data/consecration";
import { MarianRoseIcon } from "../ui/MarianRoseIcon";

export function ConsecrationSection() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="space-y-5">
      <div className="rounded-3xl bg-gradient-to-br from-[#0d1527] to-[#1e3a8a] text-white p-6 shadow-xl border border-[#d4af37]/35">
        <div className="flex items-center gap-2 text-[#fef08a] mb-2">
          <MarianRoseIcon className="w-5 h-5 text-[#facc15]" />
          <span className="text-xs font-bold uppercase tracking-wider">
            Total Entrega de Amor
          </span>
        </div>
        <h3 className="text-xl sm:text-2xl font-black text-white leading-tight mb-2">
          Consagração a Nossa Senhora
        </h3>
        <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-normal">
          Entenda o que significa consagrar a própria vida a Jesus pelas mãos puríssimas da Santíssima Virgem Maria, segundo o método de São Luís de Montfort.
        </p>
      </div>

      <div className="space-y-2.5">
        <h4 className="text-xs font-bold uppercase tracking-wider text-[#0d1527] px-1">
          Dúvidas Comuns
        </h4>
        {consecrationFaqs.map((faq, idx) => {
          const isOpen = openFaqIndex === idx;
          return (
            <div
              key={idx}
              className="rounded-2xl bg-white border border-[#e2d9c8] overflow-hidden shadow-sm"
            >
              <button
                onClick={() => toggleFaq(idx)}
                className="w-full p-4 flex items-center justify-between text-left cursor-pointer hover:bg-gray-50/70 transition-colors"
              >
                <span className="text-sm font-bold text-[#0d1527] pr-2">
                  {faq.question}
                </span>
                {isOpen ? (
                  <ChevronUp className="w-4 h-4 text-[#1e3a8a] shrink-0" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-gray-400 shrink-0" />
                )}
              </button>

              {isOpen && (
                <div className="px-4 pb-4 pt-1 text-xs sm:text-sm text-gray-700 leading-relaxed border-t border-gray-100 bg-[#faf8f5]/50">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="space-y-3 pt-2">
        <div className="flex items-center gap-2">
          <BookCheck className="w-4 h-4 text-[#1e3a8a]" />
          <h4 className="text-xs font-bold uppercase tracking-wider text-[#0d1527]">
            Etapas da Trilha Preparatória (33 Dias)
          </h4>
        </div>

        <div className="space-y-3">
          {consecrationSteps.map((step) => (
            <div
              key={step.stepNumber}
              className="rounded-2xl bg-white border border-[#e2d9c8] p-4 sm:p-5 shadow-sm space-y-2"
            >
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#1e3a8a] text-white flex items-center justify-center text-xs font-bold shrink-0">
                  {step.stepNumber}
                </span>
                <h5 className="text-sm font-bold text-[#0d1527]">
                  {step.periodTitle}
                </h5>
              </div>

              <p className="text-xs text-gray-700 pl-8 leading-relaxed">
                {step.focus}
              </p>

              <div className="pl-8 pt-2 space-y-1">
                <span className="text-[11px] font-bold text-[#854d0e] uppercase tracking-wide block">
                  Práticas recomendadas:
                </span>
                <ul className="text-xs text-gray-600 space-y-1 list-disc list-inside">
                  {step.practices.map((p, pIdx) => (
                    <li key={pIdx}>{p}</li>
                  ))}
                </ul>
              </div>

              <div className="pl-8 pt-2 text-[11px] text-gray-500 italic">
                Leitura sugerida: {step.recommendedReading}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
