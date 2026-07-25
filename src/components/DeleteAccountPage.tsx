"use client";

import { useState, type FormEvent } from "react";
import { SUPPORT_EMAIL } from "../data/content";
import PageShell from "./PageShell";

const inputClasses =
  "w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-base text-ink outline-none transition-colors placeholder:text-ink/40 focus:border-teal focus:ring-2 focus:ring-teal/30";

/** Steps that mirror the in-app flow (Perfil → Configuración → Borrar mi cuenta). */
const IN_APP_STEPS = [
  "Abre tu perfil y entra en Configuración.",
  "Pulsa Borrar mi cuenta, al final de la pantalla.",
  "Confirma en el aviso: la cuenta se elimina y se cierra la sesión.",
];

const DELETED_DATA = [
  "Tu perfil y tus datos de registro (nombre, correo, fecha de nacimiento, preferencias).",
  "Tus fotografías.",
  "Tus mensajes de chat.",
  "Tus datos de ubicación.",
  "Tu token de notificaciones push.",
];

/**
 * Account deletion request page (/delete-account).
 *
 * Google Play exige una URL pública —accesible sin instalar la app ni iniciar
 * sesión— que explique cómo solicitar la eliminación de la cuenta y qué datos
 * se borran. La landing es estática (sin backend), así que el formulario
 * compone un correo prerrellenado y lo abre en el cliente de correo del
 * visitante, igual que <SupportPage />.
 *
 * El contenido debe mantenerse alineado con la sección "Eliminar tu cuenta y
 * conservación de datos" de la política de privacidad (privacy-policy.html en
 * el repo de la app y /privacy aquí).
 */
export default function DeleteAccountPage() {
  const [email, setEmail] = useState("");
  const [reason, setReason] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const body = [
      "Solicito la eliminación de mi cuenta de Popyplan y de los datos asociados.",
      "",
      `Correo de la cuenta: ${email.trim()}`,
      reason.trim() && `Comentario: ${reason.trim()}`,
    ]
      .filter(Boolean)
      .join("\n");
    const mailto = `mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent(
      "Solicitud de eliminación de cuenta",
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
  }

  return (
    <PageShell
      title="Eliminar tu cuenta"
      subtitle="Popyplan — aplicación móvil (com.tikneo.popmobile)"
    >
      <div className="mx-auto w-full max-w-[820px] px-6 pb-24">
        <p className="text-base leading-relaxed text-ink/80">
          Puedes eliminar tu cuenta de Popyplan y tus datos cuando quieras, tú
          mismo y sin pasar por atención al cliente. Si ya no tienes la
          aplicación instalada, puedes solicitarlo desde esta página.
        </p>

        {/* Ruta 1 — desde la app */}
        <section className="mt-10">
          <h2 className="font-display text-xl font-bold text-teal-text">
            Desde la aplicación
          </h2>
          <ol className="mt-4 flex flex-col gap-3">
            {IN_APP_STEPS.map((step, i) => (
              <li
                key={i}
                className="flex gap-3 text-base leading-relaxed text-ink/80"
              >
                <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-teal-light text-sm font-bold text-teal-text">
                  {i + 1}
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </section>

        {/* Ruta 2 — sin la app instalada */}
        <section className="mt-10">
          <h2 className="font-display text-xl font-bold text-teal-text">
            Sin la aplicación instalada
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink/80">
            Rellena este formulario con la dirección de correo con la que te
            registraste. Se abrirá tu aplicación de correo con la solicitud
            lista para enviar. Tramitaremos la solicitud y te confirmaremos por
            correo cuando esté hecha.
          </p>

          <div className="mt-6 flex flex-col gap-1 rounded-2xl bg-teal-light px-5 py-4 text-base sm:flex-row sm:items-center sm:gap-2">
            <span className="font-semibold text-ink">
              Correo para solicitudes:
            </span>
            <a
              href={`mailto:${SUPPORT_EMAIL}`}
              className="font-semibold text-teal-text underline underline-offset-2 hover:text-teal"
            >
              {SUPPORT_EMAIL}
            </a>
          </div>

          <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm font-semibold text-ink">
                Correo de tu cuenta
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="el correo con el que te registraste"
                className={inputClasses}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="reason"
                className="text-sm font-semibold text-ink"
              >
                Comentario (opcional)
              </label>
              <textarea
                id="reason"
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                rows={4}
                placeholder="Si quieres, cuéntanos el motivo…"
                className={`${inputClasses} resize-y`}
              />
            </div>

            <button
              type="submit"
              className="self-start rounded-xl bg-ink-black px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-ink"
            >
              Solicitar la eliminación
            </button>
          </form>

          <p className="mt-6 text-sm text-ink/50">
            Si el formulario no abre tu aplicación de correo, escríbenos
            directamente a{" "}
            <a
              href={`mailto:${SUPPORT_EMAIL}`}
              className="text-teal-text underline underline-offset-2 hover:text-teal"
            >
              {SUPPORT_EMAIL}
            </a>{" "}
            desde la dirección con la que te registraste.
          </p>
        </section>

        {/* Qué se borra y qué se conserva */}
        <section className="mt-10">
          <h2 className="font-display text-xl font-bold text-teal-text">
            Qué datos se eliminan
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink/80">
            Al eliminar tu cuenta borramos, en un plazo máximo de 30 días:
          </p>
          <ul className="mt-4 flex flex-col gap-3 pl-1">
            {DELETED_DATA.map((item, i) => (
              <li
                key={i}
                className="flex gap-3 text-base leading-relaxed text-ink/80"
              >
                <span
                  aria-hidden="true"
                  className="mt-2.5 size-1.5 shrink-0 rounded-full bg-teal"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-base leading-relaxed text-ink/80">
            Solo conservamos más tiempo lo que la ley nos obliga a guardar —por
            ejemplo, registros mínimos para prevenir el fraude, atender
            reclamaciones o responder a requerimientos legales— y lo eliminamos
            al vencer ese plazo. Los reportes de moderación que hayas enviado
            pueden conservarse de forma anonimizada para proteger a la
            comunidad.
          </p>
          <p className="mt-6 text-sm text-ink/50">
            Más detalle en nuestra{" "}
            <a
              href="/privacy"
              className="text-teal-text underline underline-offset-2 hover:text-teal"
            >
              Política de Privacidad
            </a>
            .
          </p>
        </section>
      </div>
    </PageShell>
  );
}
