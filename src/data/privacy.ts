import type { LegalDoc } from "./legal";

/**
 * Privacy Policy content for Popyplan, mirrored verbatim from the canonical
 * policy published at https://pop.corpsc.com/ (last updated 23 de marzo de
 * 2026). Only the app name was rebranded Pop -> Popyplan to match the landing.
 */
export const PRIVACY_DOC: LegalDoc = {
  title: "Política de Privacidad",
  updated: "Última actualización: 23 de marzo de 2026",
  intro:
    'Popyplan ("nosotros", "nuestra" o "la aplicación") se compromete a proteger la privacidad de sus usuarios. Esta Política de Privacidad describe cómo recopilamos, usamos, almacenamos y compartimos tu información cuando utilizas nuestra aplicación móvil.',
  sections: [
    {
      title: "1. Información que recopilamos",
      blocks: [
        { kind: "paragraph", text: "Recopilamos los siguientes tipos de información:" },
        {
          kind: "list",
          items: [
            {
              term: "Información de registro:",
              text: "nombre, apellido, fecha de nacimiento, correo electrónico, contraseña, género, orientación sexual y profesión.",
            },
            {
              term: "Información de perfil:",
              text: "fotografías, biografía, altura, peso (opcional), preferencias de contacto e intereses.",
            },
            {
              term: "Datos de ubicación:",
              text: "ubicación geográfica en tiempo real cuando usas las funciones de mapa y descubrimiento de usuarios cercanos. Solo accedemos a tu ubicación con tu consentimiento explícito.",
            },
            {
              term: "Fotografías:",
              text: "imágenes que subes a tu perfil o para verificación de identidad, accediendo a tu cámara o galería con tu permiso.",
            },
            {
              term: "Datos de uso:",
              text: "interacciones dentro de la app (matches, likes, mensajes), preferencias de búsqueda y actividad en eventos.",
            },
            {
              term: "Datos del dispositivo:",
              text: "modelo del dispositivo, sistema operativo y versión de la aplicación.",
            },
          ],
        },
      ],
    },
    {
      title: "2. Cómo usamos tu información",
      blocks: [
        { kind: "paragraph", text: "Utilizamos la información recopilada para:" },
        {
          kind: "list",
          items: [
            { text: "Crear y gestionar tu cuenta de usuario." },
            { text: "Mostrarte perfiles de otros usuarios según tus preferencias y ubicación." },
            { text: "Facilitar la funcionalidad de matching (likes, dislikes, super likes)." },
            { text: "Permitir la comunicación entre usuarios mediante chat." },
            { text: "Mostrar y gestionar planes y eventos sociales." },
            { text: "Verificar tu identidad para la seguridad de la comunidad." },
            { text: "Mostrar usuarios cercanos en el mapa interactivo." },
            { text: "Mejorar y optimizar la experiencia de la aplicación." },
            { text: "Prevenir fraudes y actividades maliciosas." },
          ],
        },
      ],
    },
    {
      title: "3. Permisos del dispositivo",
      blocks: [
        { kind: "paragraph", text: "La aplicación solicita los siguientes permisos:" },
        {
          kind: "list",
          items: [
            { term: "Cámara:", text: "para tomar fotos de perfil y verificación de identidad." },
            {
              term: "Galería/Almacenamiento:",
              text: "para seleccionar fotos existentes como imágenes de perfil o eventos.",
            },
            {
              term: "Ubicación:",
              text: "para mostrar usuarios cercanos en el mapa y funciones de descubrimiento basadas en proximidad.",
            },
            {
              term: "Biometría (Face ID/Huella):",
              text: "para inicio de sesión seguro (opcional).",
            },
          ],
        },
        {
          kind: "paragraph",
          text: "Cada permiso se solicita en el momento de uso y puedes revocarlos en cualquier momento desde la configuración de tu dispositivo.",
        },
      ],
    },
    {
      title: "4. Almacenamiento y seguridad de datos",
      blocks: [
        {
          kind: "list",
          items: [
            { text: "Tus datos se almacenan en servidores seguros con cifrado en tránsito (HTTPS/TLS)." },
            { text: "Las contraseñas se almacenan de forma cifrada y nunca en texto plano." },
            { text: "Los tokens de autenticación se almacenan localmente en tu dispositivo de forma segura." },
            {
              text: "Implementamos medidas técnicas y organizativas para proteger tu información contra acceso no autorizado.",
            },
          ],
        },
      ],
    },
    {
      title: "5. Compartición de datos con terceros",
      blocks: [
        {
          kind: "paragraph",
          text: "No vendemos tu información personal. Podemos compartir datos en los siguientes casos:",
        },
        {
          kind: "list",
          items: [
            {
              term: "Con otros usuarios:",
              text: "tu perfil público (nombre, edad, fotos, biografía, profesión) es visible para otros usuarios de la plataforma según tus configuraciones de privacidad.",
            },
            {
              term: "Proveedores de servicios:",
              text: "utilizamos servicios de terceros para hosting, almacenamiento y mapas (Google Maps) que pueden procesar datos según sus propias políticas de privacidad.",
            },
            {
              term: "Requisitos legales:",
              text: "podemos divulgar información si es requerido por ley o para proteger nuestros derechos legales.",
            },
          ],
        },
      ],
    },
    {
      title: "6. Retención de datos",
      blocks: [
        {
          kind: "paragraph",
          text: "Conservamos tu información mientras mantengas una cuenta activa en Popyplan. Si eliminas tu cuenta, procederemos a eliminar tus datos personales en un plazo máximo de 30 días, salvo que la ley requiera su conservación por un período mayor.",
        },
      ],
    },
    {
      title: "7. Tus derechos",
      blocks: [
        { kind: "paragraph", text: "Como usuario, tienes derecho a:" },
        {
          kind: "list",
          items: [
            { term: "Acceso:", text: "solicitar una copia de tus datos personales." },
            { term: "Rectificación:", text: "corregir datos inexactos desde tu perfil." },
            { term: "Eliminación:", text: "solicitar la eliminación de tu cuenta y datos asociados." },
            { term: "Portabilidad:", text: "solicitar tus datos en un formato estructurado." },
            { term: "Oposición:", text: "oponerte al tratamiento de tus datos para ciertos fines." },
            { term: "Revocación:", text: "retirar permisos del dispositivo en cualquier momento." },
          ],
        },
      ],
    },
    {
      title: "8. Menores de edad",
      blocks: [
        {
          kind: "paragraph",
          text: "Popyplan está dirigida exclusivamente a personas mayores de 18 años. No recopilamos intencionalmente información de menores de edad. Si detectamos que un menor se ha registrado, procederemos a eliminar su cuenta y datos de inmediato.",
        },
      ],
    },
    {
      title: "9. Cambios en esta política",
      blocks: [
        {
          kind: "paragraph",
          text: "Podemos actualizar esta Política de Privacidad periódicamente. Te notificaremos de cambios significativos a través de la aplicación o por correo electrónico. El uso continuado de Popyplan después de dichos cambios constituye tu aceptación de la política actualizada.",
        },
      ],
    },
    {
      title: "10. Contacto",
      blocks: [
        {
          kind: "paragraph",
          text: "Si tienes preguntas sobre esta Política de Privacidad o deseas ejercer tus derechos, puedes contactarnos en:",
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
