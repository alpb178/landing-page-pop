import type { LegalBlock, LegalDoc } from "../data/legal";
import PageShell from "./PageShell";

function Block({ block }: { block: LegalBlock }) {
  if (block.kind === "paragraph") {
    return <p className="text-base leading-relaxed text-ink/80">{block.text}</p>;
  }
  return (
    <ul className="flex flex-col gap-3 pl-1">
      {block.items.map((item, i) => (
        <li key={i} className="flex gap-3 text-base leading-relaxed text-ink/80">
          <span aria-hidden="true" className="mt-2.5 size-1.5 shrink-0 rounded-full bg-teal" />
          <span>
            {item.term && <strong className="font-semibold text-ink">{item.term}</strong>}{" "}
            {item.email ? (
              <a
                href={`mailto:${item.email}`}
                className="text-teal-text underline underline-offset-2 hover:text-teal"
              >
                {item.text}
              </a>
            ) : (
              item.text
            )}
          </span>
        </li>
      ))}
    </ul>
  );
}

/**
 * Standalone legal page (Privacy Policy, Terms…) rendered from its own HTML
 * entry, using the shared PageShell chrome.
 */
export default function LegalPage({ doc }: { doc: LegalDoc }) {
  return (
    <PageShell title={doc.title} subtitle={doc.updated}>
      <article className="mx-auto w-full max-w-[820px] px-6 pb-24">
        <p className="text-base leading-relaxed text-ink/80">{doc.intro}</p>

        {doc.sections.map((section) => (
          <section key={section.title} className="mt-10">
            <h2 className="font-display text-xl font-bold text-teal-text">{section.title}</h2>
            <div className="mt-4 flex flex-col gap-4">
              {section.blocks.map((block, i) => (
                <Block key={i} block={block} />
              ))}
            </div>
          </section>
        ))}
      </article>
    </PageShell>
  );
}
