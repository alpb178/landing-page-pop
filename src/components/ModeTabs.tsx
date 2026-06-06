import type { ModeId } from "../data/content";
import { MODES, MODE_ORDER } from "../data/content";

interface ModeTabsProps {
  mode: ModeId;
  onChange: (mode: ModeId) => void;
}

/**
 * Mode switcher (POP Circle / POP Date) — a segmented pill toggle matching the
 * Figma design (node 9513:987): a translucent rounded track with the active
 * option filled by the teal gradient. Implemented with `aria-pressed` buttons so
 * it stays fully keyboard-operable; we avoid the WAI-ARIA Tabs roles because the
 * switch controls content spread across several page sections, not one tabpanel.
 */
export default function ModeTabs({ mode, onChange }: ModeTabsProps) {
  return (
    <div role="group" aria-label="Modo de PolyPOP" className="flex justify-center px-6">
      <div className="inline-flex items-center gap-2 rounded-full bg-[linear-gradient(170deg,rgba(214,253,252,0.45)_6%,rgba(130,104,201,0.18)_96%)] p-2">
        {MODE_ORDER.map((id) => {
          const active = id === mode;
          return (
            <button
              key={id}
              type="button"
              aria-pressed={active}
              onClick={() => onChange(id)}
              className={[
                "cursor-pointer rounded-full px-6 py-3 text-xl leading-[1.2] transition-all duration-200 sm:px-8 sm:py-4 sm:text-2xl",
                active
                  ? "bg-[linear-gradient(153deg,#5bdfdb_7%,#21b9b4_100%)] font-semibold text-white shadow-[0_6px_16px_-6px_rgba(31,179,174,0.7)]"
                  : "font-normal text-ink-black hover:text-teal-text",
              ].join(" ")}
            >
              {MODES[id].label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
