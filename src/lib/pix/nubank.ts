export const PIX_CONFIG = {
  key: "544113ec-4b6c-496e-82c1-64715c1216bc",
  name: "Caio Dantas",
  city: "Natal",
  bank: "Nubank",
  whatsappNumber: "5584986340238"
};

function formatField(id: string, value: string): string {
  const len = value.length.toString().padStart(2, "0");
  return `${id}${len}${value}`;
}

function crc16(str: string): string {
  let crc = 0xffff;
  for (let i = 0; i < str.length; i++) {
    crc ^= str.charCodeAt(i) << 8;
    for (let j = 0; j < 8; j++) {
      if ((crc & 0x8000) !== 0) {
        crc = ((crc << 1) ^ 0x1021) & 0xffff;
      } else {
        crc = (crc << 1) & 0xffff;
      }
    }
  }
  return crc.toString(16).toUpperCase().padStart(4, "0");
}

export function generatePixEmv({
  key,
  name,
  city,
  amount,
  txId = "RECOMECO"
}: {
  key: string;
  name: string;
  city: string;
  amount: number;
  txId?: string;
}): string {
  const cleanKey = key.trim();
  const cleanName = name
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .slice(0, 25)
    .trim();
  const cleanCity = city
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .slice(0, 15)
    .trim();
  const cleanTxId = txId.replace(/[^a-zA-Z0-9]/g, "").slice(0, 25) || "***";

  const merchantAccountInfo =
    formatField("00", "br.gov.bcb.pix") + formatField("01", cleanKey);
  const additionalData = formatField("05", cleanTxId);

  const payload =
    formatField("00", "01") +
    formatField("26", merchantAccountInfo) +
    formatField("52", "0000") +
    formatField("53", "986") +
    formatField("54", amount.toFixed(2)) +
    formatField("58", "BR") +
    formatField("59", cleanName) +
    formatField("60", cleanCity) +
    formatField("62", additionalData) +
    "6304";

  const checksum = crc16(payload);
  return payload + checksum;
}
