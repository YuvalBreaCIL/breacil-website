import type { CSSProperties } from "react";

export interface TextBox {
  value: string;
  font?: string;
  size?: string;
}

export function textBoxStyle(box: TextBox): CSSProperties | undefined {
  if (!box.font && !box.size) return undefined;
  const style: CSSProperties = {};
  if (box.font) style.fontFamily = box.font;
  if (box.size) style.fontSize = `${box.size}px`;
  return style;
}

/**
 * The CMS is edited by non-programmers and can save a list item with a
 * field left untouched, which omits that key from the JSON entirely
 * (rather than saving it as an empty string). Every text box read from
 * content JSON should be passed through this first so `.value` is always
 * safe to access, even on a field a future edit forgets to fill in.
 */
export function normalizeTextBox(box?: Partial<TextBox> | null): TextBox {
  return { value: box?.value ?? "", font: box?.font ?? "", size: box?.size ?? "" };
}
