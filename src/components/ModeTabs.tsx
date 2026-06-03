import type { ModeId } from "../data/content";
import { MODES, MODE_ORDER } from "../data/content";

interface ModeTabsProps {
  mode: ModeId;
  onChange: (mode: ModeId) => void;
}

/**
 * Mode switcher (POP Circle / POP Date). Implemented as a group of toggle
 * buttons using `aria-pressed` — an honest, fully keyboard-operable pattern
 * (each button is Tab-focusable and activates on Enter/Space). We intentionally
 * avoid the WAI-ARIA Tabs roles here because the content the switch controls is
 * spread across several page sections rather than a single tabpanel.
 */
export default function ModeTabs({ mode, onChange }: ModeTabsProps) {
  return (
    <div
      role="group"
      aria-label="Modo de PolyPOP"
      className="flex items-center justify-center gap-8 px-6 sm:gap-16"
    >
      {MODE_ORDER.map((id) => {
        const active = id === mode;
        return (
          <button
            key={id}
            type="button"
            aria-pressed={active}
            onClick={() => onChange(id)}
            className={[
              "relative cursor-pointer text-2xl transition-all duration-200 sm:text-[32px]",
              "underline-offset-[10px] decoration-2",
              active
                ? "font-extrabold text-ink-black underline"
                : "font-normal text-ink-black/65 hover:text-ink-black",
            ].join(" ")}
          >
            {MODES[id].label}
          </button>
        );
      })}
    </div>
  );
}
