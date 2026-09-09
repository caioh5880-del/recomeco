import React, { useState } from "react";
import {
  Heart,
  Sparkles,
  Sun,
  Flame,
  Wine,
  Shield,
  HandHeart,
  Cross,
  ChevronRight,
  X,
  BookOpen
} from "lucide-react";
import { marianCentralTopics } from "@/lib/data/marianCentral";
import { MarianCentralTopic } from "@/lib/types";
import { MarianRoseIcon, MarianLilyIcon } from "../ui/MarianRoseIcon";
import { Button } from "../ui/Button";

export function MarianCentralSection() {
  const [selectedTopic, setSelectedTopic] = useState<MarianCentralTopic | null>(null);

  const getTopicIcon = (name: string) => {
    switch (name) {
      case "Heart":
        return <Heart className="w-5 h-5 text-rose-500" />;
      case "Sparkles":
        return <Sparkles className="w-5 h-5 text-amber-500" />;
      case "Sun":
        return <Sun className="w-5 h-5 text-amber-600" />;
      case "Flame":
        return <Flame className="w-5 h-5 text-orange-500" />;
      case "Cross":
        return <Cross className="w-5 h-5 text-indigo-500" />;
      case "Wine":
        return <Wine className="w-5 h-5 text-purple-500" />;
      case "Shield":
        return <Shield className="w-5 h-5 text-blue-500" />;
      case "HandHeart":
        return <HandHeart className="w-5 h-5 text-emerald-500" />;
      default:
        return <MarianRoseIcon className="w-5 h-5 text-[#1e3a8a]" />;
    }
  };

  return (
    <div className="space-y-4">
      <div className="p-6 rounded-3xl bg-gradient-to-br from-[#0d1527] via-[#14213d] to-[#1e3a8a] text-white border border-[#d4af37]/35 shadow-lg">
        <div className="flex items-center gap-2 text-[#fef08a] mb-2">
          <MarianLilyIcon className="w-6 h-6 text-[#facc15]" />
          <span className="text-xs font-bold uppercase tracking-wider">
            Central de Formação Mariana
          </span>
        </div>
        <h3 className="text-xl sm:text-2xl font-black text-white leading-tight mb-2">
          Conheça Maria, a Mãe de Jesus
        </h3>
        <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-normal">
          Aprenda com ela a viver a sua fé católica em profunda união com Cristo, descobrindo suas virtudes e sua presença constante na vida dos jovens.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {marianCentralTopics.map((topic) => (
          <div
            key={topic.id}
            onClick={() => setSelectedTopic(topic)}
            className="p-4 rounded-2xl bg-white border border-[#e2d9c8] hover:border-[#d4af37] shadow-sm hover:shadow-md transition-all cursor-pointer flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <div className="w-9 h-9 rounded-xl bg-gray-50 flex items-center justify-center border border-gray-100 group-hover:scale-105 transition-transform">
                  {getTopicIcon(topic.iconName)}
                </div>
                <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-[#1e3a8a] transition-colors" />
              </div>
              <h4 className="text-sm font-bold text-[#0d1527] mb-1">
                {topic.title}
              </h4>
              <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed">
                {topic.shortDescription}
              </p>
            </div>
          </div>
        ))}
      </div>

      {selectedTopic && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 shadow-2xl border border-[#d4af37]/40 max-h-[90vh] overflow-y-auto custom-scrollbar flex flex-col">
            <div className="flex items-center justify-between pb-3 border-b border-gray-100 shrink-0 mb-4">
              <div className="flex items-center gap-2">
                {getTopicIcon(selectedTopic.iconName)}
                <h3 className="font-bold text-lg text-[#0d1527]">
                  {selectedTopic.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedTopic(null)}
                className="p-1.5 rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-all cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
              <div className="p-3 bg-[#eff6ff] rounded-xl border border-blue-100 flex items-center gap-2 text-xs font-semibold text-[#1e3a8a]">
                <BookOpen className="w-4 h-4 text-[#1e3a8a] shrink-0" />
                <span>{selectedTopic.biblicalAnchor}</span>
              </div>

              <div className="space-y-2">
                <h4 className="text-xs font-bold text-[#0d1527] uppercase tracking-wide">
                  Ensinamento da Igreja
                </h4>
                <p className="text-gray-800 leading-relaxed">
                  {selectedTopic.fullContent}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#faf7f0] border border-[#d4af37]/30 space-y-1.5">
                <h4 className="text-xs font-bold text-[#854d0e] uppercase tracking-wide flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#ca8a04]" />
                  Como viver isso na juventude
                </h4>
                <p className="text-xs sm:text-sm text-gray-800 leading-relaxed">
                  {selectedTopic.applicationToYouth}
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#0d1527] text-white">
                <span className="text-[10px] font-bold text-[#fef08a] uppercase tracking-wider block mb-1">
                  Jaculatória / Oração Breve:
                </span>
                <p className="text-xs font-serif italic text-white/90">
                  &ldquo;{selectedTopic.aspiration}&rdquo;
                </p>
              </div>
            </div>

            <div className="mt-6 pt-3 border-t border-gray-100 flex justify-end shrink-0">
              <Button variant="marian" size="md" onClick={() => setSelectedTopic(null)}>
                Entendido
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
