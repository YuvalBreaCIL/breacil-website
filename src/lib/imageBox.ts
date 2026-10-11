import type { CSSProperties } from "react";

export interface ImageBox {
  width?: string;
  height?: string;
  marginTop?: string;
  marginRight?: string;
  marginBottom?: string;
  marginLeft?: string;
}

export function imageBoxStyle(box?: ImageBox): CSSProperties | undefined {
  if (!box) return undefined;
  const style: CSSProperties = {};

  if (box.width) {
    style.width = `${box.width}px`;
    style.height = box.height ? `${box.height}px` : "auto";
  } else if (box.height) {
    style.height = `${box.height}px`;
    style.width = "auto";
  }

  if (box.marginTop) style.marginTop = `${box.marginTop}px`;
  if (box.marginRight) style.marginRight = `${box.marginRight}px`;
  if (box.marginBottom) style.marginBottom = `${box.marginBottom}px`;
  if (box.marginLeft) style.marginLeft = `${box.marginLeft}px`;

  return Object.keys(style).length ? style : undefined;
}
