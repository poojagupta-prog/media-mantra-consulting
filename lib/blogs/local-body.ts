import { Children, isValidElement, type ReactNode } from "react";
import type { TocEntry } from "./types";

function textContent(node: ReactNode): string {
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(textContent).join(" ");
  if (isValidElement<{ children?: ReactNode }>(node)) {
    return textContent(node.props.children);
  }
  return "";
}

export function prepareLocalBody(body: ReactNode) {
  const toc: TocEntry[] = [];
  function visit(node: ReactNode): void {
    Children.forEach(node, (child) => {
      if (!isValidElement<{ id?: string; children?: ReactNode }>(child)) return;
      if ((child.type === "h2" || child.type === "h3") && child.props.id) {
        toc.push({
          id: child.props.id,
          text: textContent(child.props.children).replace(/\s+/g, " ").trim(),
          level: child.type === "h2" ? 2 : 3,
        });
      }
      visit(child.props.children);
    });
  }
  visit(body);
  const words = textContent(body).trim().split(/\s+/).length;
  return { toc, readingMinutes: Math.max(1, Math.ceil(words / 220)) };
}
