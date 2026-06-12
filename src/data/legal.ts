/**
 * Shared content model for PolyPOP's legal pages (Privacy Policy, Terms).
 *
 * Both documents render through the same <LegalPage> component, so they share
 * one structure. Inline emphasis is expressed via the optional `term` label;
 * an `email` turns the item into a mailto link.
 */

export interface LegalItem {
  /** Optional leading label rendered in bold (e.g. "Información de registro:"). */
  term?: string;
  text: string;
  /** When set, `text` is rendered as a mailto link to this address. */
  email?: string;
}

export type LegalBlock =
  | { kind: "paragraph"; text: string }
  | { kind: "list"; items: LegalItem[] };

export interface LegalSection {
  title: string;
  blocks: LegalBlock[];
}

export interface LegalDoc {
  /** Page <h1> and document <title>. */
  title: string;
  /** Short label, e.g. "Última actualización: 23 de marzo de 2026". */
  updated: string;
  /** Lead paragraph shown above the numbered sections. */
  intro: string;
  sections: LegalSection[];
}
