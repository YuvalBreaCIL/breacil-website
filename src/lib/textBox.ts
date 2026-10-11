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
