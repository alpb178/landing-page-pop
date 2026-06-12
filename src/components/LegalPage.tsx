import type { LegalBlock, LegalDoc } from "../data/legal";

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
 * entry. Restyled with the PolyPOP brand and kept self-contained — its own
 * minimal header/footer — so it doesn't depend on the home page's in-page
 * anchor navigation.
 */
export default function LegalPage({ doc }: { doc: LegalDoc }) {
  return (
    <div className="flex min-h-screen flex-col bg-white font-body text-ink">
      {/* Minimal header — logo links back home */}
      <header className="sticky top-0 z-50 w-full border-b border-black/5 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between px-6 py-4 lg:px-12 lg:py-5">
          <a href="/" className="flex shrink-0 items-center" aria-label="PolyPOP — inicio">
            <img
              src="/assets/logo.svg"
              alt="PolyPOP"
              width={79}
              height={52}
              className="h-11 w-[67px] object-contain sm:h-[52px] sm:w-[79px]"
            />
          </a>
          <a
            href="/"
            className="rounded-lg px-4 py-2 text-base font-medium text-ink-black transition-colors hover:text-teal-text"
          >
            Volver al inicio
          </a>
        </div>
      </header>

      <main className="flex-1">
        {/* Title band */}
        <div className="bg-gradient-to-b from-teal-light to-white">
          <div className="mx-auto w-full max-w-[820px] px-6 pb-10 pt-14 lg:pt-20">
            <h1 className="font-display text-3xl font-extrabold text-ink-black sm:text-4xl">
              {doc.title}
            </h1>
            <p className="mt-3 text-sm text-ink/50">{doc.updated}</p>
          </div>
        </div>

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
      </main>

      {/* Minimal footer */}
      <footer className="bg-gradient-to-b from-[#1fb3ae] to-[#168a86] text-white">
        <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-2 px-6 py-10 text-sm text-white/80 sm:flex-row sm:items-center sm:justify-between lg:px-12">
          <p>© {new Date().getFullYear()} PolyPOP. Todos los derechos reservados.</p>
          <a href="/" className="transition-colors hover:text-white">
            Volver al inicio
          </a>
        </div>
      </footer>
    </div>
  );
}
