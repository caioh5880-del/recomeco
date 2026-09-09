import React, { useState } from "react";
import { Star, ChevronRight, X } from "lucide-react";
import { saintOfDay } from "@/lib/data/homeData";
import { MarianRoseIcon } from "../ui/MarianRoseIcon";
import { Button } from "../ui/Button";

export function SaintOfTheDayCard() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="rounded-2xl bg-white border border-[#e2d9c8] p-5 sm:p-6 shadow-sm">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-700 border border-indigo-200">
              <Star className="w-4 h-4" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#0d1527]">
                Santo do Dia
              </span>
              <span className="block text-[10px] text-gray-500 font-medium">
                {saintOfDay.feastDate}
              </span>
            </div>
          </div>
          <span className="text-[10px] font-semibold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded-full border border-indigo-100">
            Inspiração
          </span>
        </div>

        <h4 className="text-base font-bold text-[#0d1527] mb-1">
          {saintOfDay.name}
        </h4>
        <p className="text-xs text-[#854d0e] font-semibold mb-2">
          {saintOfDay.title}
        </p>

        <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4 line-clamp-3">
          {saintOfDay.biography}
        </p>

        <div className="bg-[#faf7f0] rounded-xl p-3 border border-[#d4af37]/30 mb-3">
          <div className="flex items-center gap-1.5 text-xs font-bold text-[#854d0e] mb-1">
            <MarianRoseIcon className="w-3.5 h-3.5 text-[#ca8a04]" />
            <span>{saintOfDay.marianConnectionTitle}</span>
          </div>
          <p className="text-xs text-gray-700 leading-relaxed line-clamp-2">
            {saintOfDay.marianConnection}
          </p>
        </div>

        <Button
          variant="outline"
          size="sm"
          onClick={() => setIsOpen(true)}
          className="w-full justify-between"
          rightIcon={<ChevronRight className="w-4 h-4" />}
        >
          Ler história completa do santo
        </Button>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 shadow-2xl border border-gray-200 max-h-[90vh] overflow-y-auto custom-scrollbar">
            <div className="flex items-center justify-between pb-3 border-b border-gray-100 mb-4">
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-amber-500" />
                <h3 className="font-bold text-lg text-[#0d1527]">{saintOfDay.name}</h3>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-all cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
              <div>
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wide">
                  Vida e Vocação
                </span>
                <p className="mt-1">{saintOfDay.biography}</p>
              </div>

              <div className="p-4 rounded-2xl bg-[#eff6ff] border border-blue-100">
                <h4 className="text-xs font-bold text-[#1e3a8a] uppercase tracking-wide mb-2 flex items-center gap-1.5">
                  <MarianRoseIcon className="w-4 h-4 text-[#1e3a8a]" />
                  Maria na vida deste Santo
                </h4>
                <p className="text-xs sm:text-sm text-gray-800">
                  {saintOfDay.marianConnection}
                </p>
              </div>

              <div className="text-xs text-gray-500 italic">
                {saintOfDay.patronage}
              </div>
            </div>

            <div className="mt-6 pt-3 border-t border-gray-100 flex justify-end">
              <Button variant="default" size="md" onClick={() => setIsOpen(false)}>
                Fechar
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
