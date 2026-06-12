import { useState, type FormEvent } from "react";
import { SUPPORT_EMAIL } from "../data/content";
import PageShell from "./PageShell";

const inputClasses =
  "w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-base text-ink outline-none transition-colors placeholder:text-ink/40 focus:border-teal focus:ring-2 focus:ring-teal/30";

/**
 * Support page (/soporte). The landing is fully static (no backend), so
 * the form composes a pre-filled email and opens the visitor's mail client via
 * a mailto: link. A direct email link is offered as a fallback.
 */
export default function SupportPage() {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const finalSubject = subject.trim() || "Soporte PolyPOP";
    const mailto = `mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent(
      finalSubject,
    )}&body=${encodeURIComponent(message)}`;
    window.location.href = mailto;
  }

  return (
    <PageShell title="Soporte">
      <div className="mx-auto w-full max-w-[820px] px-6 pb-24">
        <p className="text-base leading-relaxed text-ink/80">
          ¿Tienes una duda, un problema con la aplicación o una sugerencia? Escríbenos y nuestro
          equipo te responderá lo antes posible. Completa el formulario y se abrirá tu aplicación de
          correo con el mensaje listo para enviar.
        </p>

        {/* Direct email link */}
        <div className="mt-6 flex flex-col gap-1 rounded-2xl bg-teal-light px-5 py-4 text-base sm:flex-row sm:items-center sm:gap-2">
          <span className="font-semibold text-ink">Correo de soporte:</span>
          <a
            href={`mailto:${SUPPORT_EMAIL}`}
            className="font-semibold text-teal-text underline underline-offset-2 hover:text-teal"
          >
            {SUPPORT_EMAIL}
          </a>
        </div>

        {/* Pre-fill form → opens the visitor's mail client */}
        <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <label htmlFor="subject" className="text-sm font-semibold text-ink">
              Asunto
            </label>
            <input
              id="subject"
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="¿En qué podemos ayudarte?"
              className={inputClasses}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-sm font-semibold text-ink">
              Mensaje
            </label>
            <textarea
              id="message"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={6}
              placeholder="Cuéntanos los detalles de tu consulta…"
              className={`${inputClasses} resize-y`}
            />
          </div>

          <button
            type="submit"
            className="self-start rounded-xl bg-ink-black px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-ink"
          >
            Enviar mensaje
          </button>
        </form>

        <p className="mt-6 text-sm text-ink/50">
          Si el formulario no abre tu aplicación de correo, escríbenos directamente a{" "}
          <a
            href={`mailto:${SUPPORT_EMAIL}`}
            className="text-teal-text underline underline-offset-2 hover:text-teal"
          >
            {SUPPORT_EMAIL}
          </a>
          .
        </p>
      </div>
    </PageShell>
  );
}
