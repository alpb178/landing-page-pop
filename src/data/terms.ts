import type { LegalDoc } from "./legal";

/**
 * Terms of Service for PolyPOP. There was no published terms page to mirror
 * (https://pop.corpsc.com/ only hosts the privacy policy), so this is an
 * original draft consistent with the app's social/dating features and the
 * privacy policy's tone, structure, and contact channel.
 */
export const TERMS_DOC: LegalDoc = {
  title: "Términos y Condiciones",
  updated: "Última actualización: 23 de marzo de 2026",
  intro:
    'Estos Términos y Condiciones ("Términos") regulan el uso de PolyPOP ("nosotros", "nuestra" o "la aplicación"). Al crear una cuenta o utilizar la aplicación, aceptas estos Términos en su totalidad. Si no estás de acuerdo con ellos, no debes utilizar PolyPOP.',
  sections: [
    {
      title: "1. Aceptación de los Términos",
      blocks: [
        {
          kind: "paragraph",
          text: "Al registrarte, acceder o utilizar PolyPOP confirmas que has leído, entendido y aceptado estos Términos, así como nuestra Política de Privacidad. Si utilizas la aplicación en nombre de un tercero, declaras contar con la autorización para hacerlo.",
        },
      ],
    },
    {
      title: "2. Requisitos de elegibilidad",
      blocks: [
        { kind: "paragraph", text: "Para usar PolyPOP debes:" },
        {
          kind: "list",
          items: [
            { text: "Ser mayor de 18 años." },
            { text: "Tener capacidad legal para celebrar un contrato vinculante." },
            { text: "No haber sido suspendido o eliminado previamente de la plataforma." },
            { text: "Proporcionar información veraz, exacta y actualizada durante el registro." },
          ],
        },
        {
          kind: "paragraph",
          text: "Nos reservamos el derecho de suspender o eliminar cualquier cuenta que no cumpla estos requisitos.",
        },
      ],
    },
    {
      title: "3. Registro y seguridad de la cuenta",
      blocks: [
        {
          kind: "list",
          items: [
            { text: "Eres responsable de mantener la confidencialidad de tus credenciales de acceso." },
            { text: "Eres responsable de toda actividad que ocurra bajo tu cuenta." },
            {
              text: "Debes notificarnos de inmediato si detectas un uso no autorizado de tu cuenta.",
            },
            { text: "No puedes crear más de una cuenta ni ceder o transferir tu cuenta a terceros." },
          ],
        },
      ],
    },
    {
      title: "4. Normas de conducta",
      blocks: [
        {
          kind: "paragraph",
          text: "PolyPOP es una comunidad basada en el respeto. Al usar la aplicación te comprometes a no:",
        },
        {
          kind: "list",
          items: [
            { text: "Acosar, amenazar, intimidar o suplantar a otros usuarios." },
            { text: "Publicar contenido ilegal, ofensivo, discriminatorio, sexualmente explícito o violento." },
            { text: "Compartir información falsa, fotos que no te pertenezcan o perfiles engañosos." },
            { text: "Solicitar dinero, realizar fraudes o promocionar productos o servicios no autorizados." },
            { text: "Recopilar o almacenar datos de otros usuarios sin su consentimiento." },
            { text: "Utilizar bots, scrapers o cualquier medio automatizado para acceder a la aplicación." },
          ],
        },
        {
          kind: "paragraph",
          text: "El incumplimiento de estas normas puede derivar en la suspensión o eliminación inmediata de tu cuenta.",
        },
      ],
    },
    {
      title: "5. Contenido del usuario",
      blocks: [
        {
          kind: "paragraph",
          text: "Conservas la titularidad del contenido que publicas (fotos, biografía, mensajes). Al publicarlo, nos concedes una licencia mundial, no exclusiva y libre de regalías para alojar, mostrar y distribuir dicho contenido con el fin de operar la aplicación.",
        },
        {
          kind: "paragraph",
          text: "Eres el único responsable del contenido que compartes y declaras que cuentas con los derechos necesarios para publicarlo. Podemos retirar cualquier contenido que infrinja estos Términos.",
        },
      ],
    },
    {
      title: "6. Funciones de matching, planes y eventos",
      blocks: [
        {
          kind: "list",
          items: [
            {
              text: "Las funciones de descubrimiento y matching se ofrecen sin garantía de obtener conexiones o resultados específicos.",
            },
            {
              text: "Los planes y eventos sociales mostrados en la aplicación pueden ser organizados por terceros; PolyPOP no se responsabiliza de su realización ni de su contenido.",
            },
            {
              text: "Cualquier interacción o encuentro con otros usuarios ocurre bajo tu propia responsabilidad. Te recomendamos tomar precauciones de seguridad.",
            },
          ],
        },
      ],
    },
    {
      title: "7. Suscripciones y pagos",
      blocks: [
        {
          kind: "paragraph",
          text: "PolyPOP puede ofrecer funciones de pago o suscripciones. Si adquieres alguna de ellas:",
        },
        {
          kind: "list",
          items: [
            {
              text: "Los pagos se procesan a través de las tiendas de aplicaciones (App Store, Google Play) según sus propios términos.",
            },
            {
              text: "Las suscripciones se renuevan automáticamente salvo que las canceles antes del final del período vigente.",
            },
            {
              text: "Los reembolsos se rigen por las políticas de la tienda de aplicaciones correspondiente.",
            },
          ],
        },
      ],
    },
    {
      title: "8. Suspensión y terminación",
      blocks: [
        {
          kind: "paragraph",
          text: "Puedes eliminar tu cuenta en cualquier momento desde la configuración de la aplicación. Nos reservamos el derecho de suspender o cancelar tu acceso, con o sin previo aviso, si incumples estos Términos o realizas un uso indebido de la plataforma.",
        },
      ],
    },
    {
      title: "9. Limitación de responsabilidad",
      blocks: [
        {
          kind: "paragraph",
          text: 'PolyPOP se ofrece "tal cual" y "según disponibilidad". En la máxima medida permitida por la ley, no garantizamos que la aplicación esté libre de errores o interrupciones, ni nos hacemos responsables de daños indirectos, incidentales o derivados del uso de la aplicación o de las interacciones entre usuarios.',
        },
      ],
    },
    {
      title: "10. Cambios en los Términos",
      blocks: [
        {
          kind: "paragraph",
          text: "Podemos actualizar estos Términos periódicamente. Te notificaremos de cambios significativos a través de la aplicación o por correo electrónico. El uso continuado de PolyPOP después de dichos cambios constituye tu aceptación de los Términos actualizados.",
        },
      ],
    },
    {
      title: "11. Contacto",
      blocks: [
        {
          kind: "paragraph",
          text: "Si tienes preguntas sobre estos Términos y Condiciones, puedes contactarnos en:",
        },
        {
          kind: "list",
          items: [
            {
              term: "Correo electrónico:",
              text: "apple@tikneo.com",
              email: "apple@tikneo.com",
            },
          ],
        },
      ],
    },
  ],
};
