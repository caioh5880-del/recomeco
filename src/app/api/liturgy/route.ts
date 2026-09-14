import { NextResponse } from "next/server";
import { getLiturgyForDate } from "@/lib/data/liturgy";
import { LiturgyDay, LiturgyReadingOption } from "@/lib/types";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const requestedSource = (searchParams.get("source") || "cnbb").toLowerCase() === "cancaonova" ? "cancaonova" : "cnbb";

    const now = new Date();
    const defaultDateStr = new Intl.DateTimeFormat("en-CA", {
      timeZone: "America/Sao_Paulo",
      year: "numeric",
      month: "2-digit",
      day: "2-digit"
    }).format(now);

    const dateParam = searchParams.get("date") || defaultDateStr;
    const [yearStr, monthStr, dayStr] = dateParam.split("-");
    const year = parseInt(yearStr, 10) || now.getFullYear();
    const month = parseInt(monthStr, 10) || now.getMonth() + 1;
    const day = parseInt(dayStr, 10) || now.getDate();

    const dateObj = new Date(year, month - 1, day, 12, 0, 0);
    const dayOfWeek = dateObj.getDay();

    let remoteLiturgy: LiturgyDay | null = null;

    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 3500);

      const apiUrl = `https://liturgia.up.railway.app/?dia=${day}&mes=${month}`;
      const res = await fetch(apiUrl, {
        headers: { "User-Agent": "Mozilla/5.0" },
        signal: controller.signal
      });
      clearTimeout(timeoutId);

      if (res.ok) {
        const raw = await res.json();
        if (raw && (raw.primeiraLeitura || raw.evangelho)) {
          const dayNames = [
            "Domingo",
            "Segunda-feira",
            "Terça-feira",
            "Quarta-feira",
            "Quinta-feira",
            "Sexta-feira",
            "Sábado"
          ];
          const shortNames = ["DOM", "SEG", "TER", "QUA", "QUI", "SEX", "SÁB"];
          const monthNames = [
            "janeiro",
            "fevereiro",
            "março",
            "abril",
            "maio",
            "junho",
            "julho",
            "agosto",
            "setembro",
            "outubro",
            "novembro",
            "dezembro"
          ];

          const celebration = raw.liturgia || "";
          const isSunday = dayOfWeek === 0;
          const isSolemnity = /solenidade|festa/i.test(celebration);

          const formattedDate = `${dayNames[dayOfWeek]}, ${day} de ${monthNames[month - 1]} de ${year} • ${celebration}`;

          let psalmVerses: string[] = [];
          if (raw.salmo?.texto) {
            psalmVerses = raw.salmo.texto
              .split(/\n+/)
              .map((v: string) => v.trim())
              .filter((v: string) => v.length > 0);
          }

          let secondReading = undefined;
          if (isSunday || isSolemnity) {
            if (raw.segundaLeitura && typeof raw.segundaLeitura === "object" && raw.segundaLeitura.texto) {
              secondReading = {
                title: raw.segundaLeitura.titulo || "Segunda Leitura",
                reference: raw.segundaLeitura.referencia || "",
                content: raw.segundaLeitura.texto || ""
              };
            }
          }

          let firstReading = {
            title: raw.primeiraLeitura?.titulo || "Primeira Leitura",
            reference: raw.primeiraLeitura?.referencia || "",
            content: raw.primeiraLeitura?.texto || ""
          };

          let firstReadingOptions: LiturgyReadingOption[] | undefined = undefined;
          if (firstReading.content.includes("Ou:") || firstReading.content.includes("OU:")) {
            const parts = firstReading.content.split(/\n*(?:Ou|OU):\s*/);
            if (parts.length >= 2) {
              firstReadingOptions = [
                {
                  optionLabel: "Opção A",
                  title: "Primeira Leitura — Opção A",
                  reference: firstReading.reference,
                  content: parts[0].trim()
                },
                {
                  optionLabel: "Opção B",
                  title: "Primeira Leitura — Opção B",
                  reference: firstReading.reference,
                  content: parts[1].trim()
                }
              ];
              firstReading = firstReadingOptions[0];
            }
          }

          const localFallback = getLiturgyForDate(dateObj, requestedSource);

          remoteLiturgy = {
            id: `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`,
            source: requestedSource,
            rawDate: dateParam,
            dayOfWeek,
            dayName: dayNames[dayOfWeek],
            shortName: shortNames[dayOfWeek],
            date: formattedDate,
            liturgicalColor: raw.cor || localFallback.liturgicalColor,
            celebrationTitle: celebration || localFallback.celebrationTitle,
            firstReading,
            firstReadingOptions,
            psalm: {
              reference: raw.salmo?.referencia || localFallback.psalm.reference,
              title: `Salmo — ${raw.salmo?.refrao || localFallback.psalm.response}`,
              versesReference: raw.salmo?.referencia || localFallback.psalm.versesReference,
              response: raw.salmo?.refrao || localFallback.psalm.response,
              verses: psalmVerses.length > 0 ? psalmVerses : localFallback.psalm.verses
            },
            secondReading,
            gospelAcclamation: localFallback.gospelAcclamation || {
              refrain: "Aleluia, Aleluia, Aleluia!",
              verse: "A Palavra de Deus é viva e eficaz; ela discerne os pensamentos do coração."
            },
            gospel: {
              title: raw.evangelho?.titulo || localFallback.gospel.title,
              reference: raw.evangelho?.referencia || localFallback.gospel.reference,
              content: raw.evangelho?.texto || localFallback.gospel.content
            },
            explanation: localFallback.explanation,
            homily: localFallback.homily,
            marianReflection: localFallback.marianReflection,
            prayers: {
              collect: raw.dia || localFallback.prayers?.collect,
              offerings: raw.oferendas || localFallback.prayers?.offerings,
              communion: raw.comunhao || localFallback.prayers?.communion,
              entranceAntiphon: raw.antifonas?.entrada || localFallback.prayers?.entranceAntiphon,
              communionAntiphon: raw.antifonas?.comunhao || localFallback.prayers?.communionAntiphon
            }
          };
        }
      }
    } catch {}

    const result = remoteLiturgy || getLiturgyForDate(dateObj, requestedSource);
    return NextResponse.json(result);
  } catch (error) {
    const fallback = getLiturgyForDate(new Date(), "cnbb");
    return NextResponse.json(fallback, { status: 200 });
  }
}
