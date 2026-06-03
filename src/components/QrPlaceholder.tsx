/**
 * Decorative QR-code placeholder (matches the empty white QR square in the
 * Figma footer). Renders a deterministic, QR-like module grid — it is not a
 * scannable code, purely visual polish.
 */
interface QrPlaceholderProps {
  className?: string;
}

// Deterministic pseudo-random module pattern (no Math.random — stable render).
const SIZE = 21; // modules per side (QR v1 proportions)

function isFinder(row: number, col: number): boolean {
  const inBox = (r0: number, c0: number) =>
    row >= r0 && row < r0 + 7 && col >= c0 && col < c0 + 7;
  return inBox(0, 0) || inBox(0, SIZE - 7) || inBox(SIZE - 7, 0);
}

function finderFilled(row: number, col: number): boolean {
  // Outer ring + solid 3x3 center of each 7x7 finder pattern.
  const local = (r0: number, c0: number) => {
    const r = row - r0;
    const c = col - c0;
    const ring = r === 0 || r === 6 || c === 0 || c === 6;
    const core = r >= 2 && r <= 4 && c >= 2 && c <= 4;
    return ring || core;
  };
  if (row < 7 && col < 7) return local(0, 0);
  if (row < 7 && col >= SIZE - 7) return local(0, SIZE - 7);
  if (row >= SIZE - 7 && col < 7) return local(SIZE - 7, 0);
  return false;
}

function dataFilled(row: number, col: number): boolean {
  // Stable hash → ~45% fill, evoking QR data modules.
  const h = (row * 73856093) ^ (col * 19349663) ^ ((row + col) * 83492791);
  return ((h >>> 0) % 100) < 45;
}

export default function QrPlaceholder({ className = "" }: QrPlaceholderProps) {
  const cells: { x: number; y: number }[] = [];
  for (let row = 0; row < SIZE; row++) {
    for (let col = 0; col < SIZE; col++) {
      const filled = isFinder(row, col)
        ? finderFilled(row, col)
        : dataFilled(row, col);
      if (filled) cells.push({ x: col, y: row });
    }
  }

  return (
    <svg
      viewBox={`-1 -1 ${SIZE + 2} ${SIZE + 2}`}
      className={className}
      role="img"
      aria-label="Código QR de descarga"
      shapeRendering="crispEdges"
    >
      <rect x={-1} y={-1} width={SIZE + 2} height={SIZE + 2} rx={2} fill="#ffffff" />
      {cells.map((c) => (
        <rect key={`${c.x}-${c.y}`} x={c.x} y={c.y} width={1} height={1} fill="#0b0a0a" />
      ))}
    </svg>
  );
}
