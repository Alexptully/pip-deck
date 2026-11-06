import QRCode from "qrcode";
import { isPlaceholder } from "@/content/config";

/** A real QR code for the demo link, or a marked slot while the link is still a placeholder. */
export function QrCode({ value, size }: { value: string; size: number }) {
  if (isPlaceholder(value)) {
    return (
      <div
        className="type-fine grid place-items-center bg-paper-shade p-4 text-center text-ink-muted outline-2 outline-dashed outline-ink-muted"
        style={{ width: size, height: size }}
      >
        {`Set ${value} in config.ts to draw the QR code`}
      </div>
    );
  }
  const { modules } = QRCode.create(value, { errorCorrectionLevel: "M" });
  const cells = Array.from({ length: modules.size * modules.size }, (_, index) => index).filter((index) =>
    modules.get(Math.floor(index / modules.size), index % modules.size),
  );
  return (
    <svg
      viewBox={`-2 -2 ${modules.size + 4} ${modules.size + 4}`}
      width={size}
      height={size}
      role="img"
      aria-label={`QR code for ${value}`}
    >
      <rect x={-2} y={-2} width={modules.size + 4} height={modules.size + 4} className="fill-paper" />
      {cells.map((index) => (
        <rect
          key={index}
          x={index % modules.size}
          y={Math.floor(index / modules.size)}
          width={1.02}
          height={1.02}
          className="fill-ink"
        />
      ))}
    </svg>
  );
}
