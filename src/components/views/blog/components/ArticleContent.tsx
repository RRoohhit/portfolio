import React from "react";
import Link from "next/link";
import { CopyCodeButton } from "./CopyCodeButton";

// Lightweight markdown-ish renderer shared by the /blog/[slug] pages (server)
// and the client-side article reader modal. Uses no external deps.
export interface ArticleBlock {
  type: "h2" | "h3" | "h4" | "p" | "ul" | "code";
  text?: string;
  items?: string[];
  lang?: string;
  /** Pre-computed anchor ID for h2/h3 blocks so render stays pure */
  sectionId?: string;
}

const INLINE_LINK = /\[([^\]]+)\]\(([^)]+)\)/g;
const INLINE_BOLD = /\*\*([^*]+)\*\*/g;
const INLINE_CODE = /`([^`]+)`/g;

function renderInline(text: string): React.ReactNode[] {
  // Process all inline patterns in a single pass to avoid nested regex issues
  const parts: React.ReactNode[] = [];
  let lastIndex = 0;
  let key = 0;

  // Tokenize the text into segments: links, bold, inline-code, plain text
  const tokenRegex = /\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*|`([^`]+)`/g;
  let match: RegExpExecArray | null;

  while ((match = tokenRegex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }

    if (match[1] !== undefined && match[2] !== undefined) {
      // Link: [label](url)
      const rawUrl = match[2];
      const isInternal =
        rawUrl.startsWith("/") ||
        rawUrl.startsWith("#") ||
        rawUrl.includes("rohitguptaseo.in") ||
        rawUrl.includes("rohitguptaseo.com");

      const cleanHref = isInternal && (rawUrl.startsWith("http://") || rawUrl.startsWith("https://"))
        ? rawUrl.replace(/^https?:\/\/(www\.)?rohitguptaseo\.(in|com)/i, "") || "/"
        : rawUrl;

      parts.push(
        isInternal ? (
          <Link
            key={key++}
            href={cleanHref}
            className="text-emerald-400 font-semibold underline underline-offset-2 decoration-emerald-400/40 hover:text-emerald-300 transition-colors"
          >
            {match[1]}
          </Link>
        ) : (
          <a
            key={key++}
            href={rawUrl}
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="text-emerald-400 font-semibold underline underline-offset-2 decoration-emerald-400/40 hover:text-emerald-300 transition-colors"
          >
            {match[1]}
          </a>
        )
      );
    } else if (match[3] !== undefined) {
      // Bold: **text**
      parts.push(
        <strong key={key++} className="font-semibold text-white">
          {match[3]}
        </strong>
      );
    } else if (match[4] !== undefined) {
      // Inline code: `text`
      parts.push(
        <code
          key={key++}
          className="px-1.5 py-0.5 rounded bg-white/10 border border-white/15 text-emerald-300 font-mono text-[0.85em]"
        >
          {match[4]}
        </code>
      );
    }

    lastIndex = tokenRegex.lastIndex;
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts;
}

export function parseArticleContent(content: string): ArticleBlock[] {
  const lines = content.split("\n");
  const blocks: ArticleBlock[] = [];
  let i = 0;
  let h2Count = 0;

  while (i < lines.length) {
    const line = lines[i].trim();
    if (!line) {
      i++;
      continue;
    }

    // Code block
    if (line.startsWith("```")) {
      const lang = line.slice(3).trim() || "text";
      const codeLines: string[] = [];
      i++;
      while (i < lines.length && !lines[i].trim().startsWith("```")) {
        codeLines.push(lines[i]);
        i++;
      }
      i++;
      blocks.push({ type: "code", text: codeLines.join("\n"), lang });
      continue;
    }

    // H4 (### in markdown → h4 in DOM, as h1=title, h2=first section, h3=subsequent sections)
    if (line.startsWith("### ")) {
      blocks.push({ type: "h4", text: line.slice(4) });
      i++;
      continue;
    }

    // H2/H3 — first ## becomes h2, subsequent ## become h3
    if (line.startsWith("## ")) {
      h2Count += 1;
      blocks.push({
        type: h2Count === 1 ? "h2" : "h3",
        text: line.slice(3),
        sectionId: `section-${h2Count}`,
      });
      i++;
      continue;
    }

    // Unordered list
    if (line.startsWith("- ")) {
      const items: string[] = [];
      while (i < lines.length && lines[i].trim().startsWith("- ")) {
        items.push(lines[i].trim().slice(2));
        i++;
      }
      blocks.push({ type: "ul", items });
      continue;
    }

    // Paragraph — merge consecutive non-empty lines
    const para: string[] = [];
    while (i < lines.length && lines[i].trim() !== "") {
      para.push(lines[i]);
      i++;
    }
    blocks.push({ type: "p", text: para.join(" ") });
  }

  return blocks;
}

export const ArticleContent: React.FC<{ content: string; className?: string }> = ({
  content,
  className,
}) => {
  const blocks = parseArticleContent(content);

  return (
    <div
      className={`space-y-5 text-sm text-white/85 leading-relaxed font-light max-w-none ${className ?? ""}`}
    >
      {blocks.map((block, idx) => {
        if (block.type === "h2") {
          return (
            <h2
              key={idx}
              id={block.sectionId}
              className="scroll-mt-24 text-xl sm:text-2xl font-extrabold text-white tracking-tight pt-4 border-l-[3px] border-emerald-400 pl-4 leading-snug"
            >
              {block.text}
            </h2>
          );
        }

        if (block.type === "h3") {
          return (
            <h3
              key={idx}
              id={block.sectionId}
              className="scroll-mt-24 text-base sm:text-xl font-extrabold text-white tracking-tight pt-4 border-l-[3px] border-emerald-400/60 pl-4 leading-snug"
            >
              {block.text}
            </h3>
          );
        }

        if (block.type === "h4") {
          return (
            <h4
              key={idx}
              className="text-base sm:text-lg font-bold text-emerald-300 tracking-tight pt-3 leading-snug"
            >
              {block.text}
            </h4>
          );
        }

        if (block.type === "ul" && block.items) {
          return (
            <ul key={idx} className="space-y-2 pl-1">
              {block.items.map((item, itemIdx) => (
                <li key={itemIdx} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-[0.45rem] shrink-0" />
                  <span className="text-white/85 leading-relaxed">
                    {renderInline(item)}
                  </span>
                </li>
              ))}
            </ul>
          );
        }

        if (block.type === "code" && block.text !== undefined) {
          return (
            <div key={idx} className="relative group">
              {block.lang && block.lang !== "text" && (
                <div className="flex items-center justify-between px-4 py-2 rounded-t-2xl bg-zinc-900 border border-white/10 border-b-0">
                  <span className="text-[10px] font-mono font-bold text-white/40 uppercase tracking-widest">
                    {block.lang}
                  </span>
                </div>
              )}
              <pre
                className={`p-5 ${block.lang && block.lang !== "text" ? "rounded-b-2xl rounded-t-none" : "rounded-2xl"} bg-zinc-950 border border-white/10 text-xs font-mono text-emerald-200 overflow-x-auto leading-relaxed shadow-inner`}
              >
                <code>{block.text}</code>
              </pre>
              <CopyCodeButton code={block.text} />
            </div>
          );
        }

        return (
          <p key={idx} className="text-sm text-white/80 leading-[1.8]">
            {renderInline(block.text ?? "")}
          </p>
        );
      })}
    </div>
  );
};