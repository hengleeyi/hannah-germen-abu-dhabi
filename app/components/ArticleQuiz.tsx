"use client";

import { useRef, useState } from "react";
import type { CSSProperties, MouseEvent } from "react";

type Article = "der" | "die" | "das";

const WORDS: { noun: string; en: string; article: Article; tip: string }[] = [
  { noun: "Mädchen", en: "girl", article: "das", tip: "Nouns ending in -chen are always das, even when they mean a person." },
  { noun: "Zeitung", en: "newspaper", article: "die", tip: "Nouns ending in -ung are always die." },
  { noun: "Wüste", en: "desert", article: "die", tip: "Most nouns ending in -e are die. Abu Dhabi has a lot of Wüste." },
  { noun: "Frühling", en: "spring", article: "der", tip: "Seasons, months and days of the week are all der." },
  { noun: "Museum", en: "museum", article: "das", tip: "Nouns ending in -um are das." },
  { noun: "Freiheit", en: "freedom", article: "die", tip: "Nouns ending in -heit and -keit are always die." },
  { noun: "Lehrer", en: "teacher", article: "der", tip: "der Lehrer is a male teacher. Add -in for a woman: die Lehrerin." },
  { noun: "Kaffee", en: "coffee", article: "der", tip: "der Kaffee. Learn each noun together with its article from day one." },
];

const FIELD: Record<Article, { bg: string; fg: string }> = {
  der: { bg: "var(--der)", fg: "#ffffff" },
  die: { bg: "var(--die)", fg: "var(--ink)" },
  das: { bg: "var(--das)", fg: "var(--ink)" },
};

export function ArticleQuiz() {
  const [index, setIndex] = useState(0);
  const [picked, setPicked] = useState<Article | null>(null);
  const [origin, setOrigin] = useState({ x: "50%", y: "50%" });
  const [floodBg, setFloodBg] = useState(FIELD.der.bg);
  const sectionRef = useRef<HTMLElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  const word = WORDS[index];
  const answered = picked !== null;
  const right = picked === word.article;
  const field = FIELD[word.article];

  function choose(article: Article, event: MouseEvent<HTMLButtonElement>) {
    if (answered) return;
    const box = sectionRef.current?.getBoundingClientRect();
    const btn = event.currentTarget.getBoundingClientRect();
    if (box) {
      setOrigin({
        x: `${btn.left + btn.width / 2 - box.left}px`,
        y: `${btn.top + btn.height / 2 - box.top}px`,
      });
    }
    setFloodBg(FIELD[word.article].bg);
    setPicked(article);
    requestAnimationFrame(() => nextRef.current?.focus());
  }

  function next() {
    setPicked(null);
    setIndex((i) => (i + 1) % WORDS.length);
  }

  const style = {
    "--fx": origin.x,
    "--fy": origin.y,
    color: answered ? field.fg : undefined,
    transition: "color 0.4s ease",
  } as CSSProperties;

  return (
    <section
      ref={sectionRef}
      className="quiz"
      aria-labelledby="quiz-title"
      data-state={answered ? (right ? "right" : "wrong") : "idle"}
      style={style}
    >
      <div className="quiz__flood" style={{ background: floodBg }} aria-hidden="true" />
      <div className="wrap quiz__inner">
        <div>
          <h2 id="quiz-title" className="quiz__q">
            Try one: <span lang="de">der, die oder das?</span>
          </h2>
          <p className="quiz__word" lang="de">
            <span className="quiz__blank">{answered ? word.article : " "}</span>
            <span>{word.noun}</span>
            <span className="quiz__en" lang="en">
              ({word.en})
            </span>
          </p>
          <div className="quiz__feedback" aria-live="polite">
            {answered ? (
              <>
                <p>
                  <strong>{right ? "Richtig!" : `Fast. It is ${word.article} ${word.noun}.`}</strong> {word.tip}
                </p>
                <button ref={nextRef} type="button" className="quiz__next text-link" onClick={next}>
                  Next word
                </button>
              </>
            ) : (
              <p>Every German noun has an article. Tap the one you think is right.</p>
            )}
          </div>
        </div>
        <div className="quiz__choices" role="group" aria-label="Choose the article">
          {(["der", "die", "das"] as const).map((a) => (
            <button
              key={a}
              type="button"
              lang="de"
              className={`choice choice--${a}`}
              onClick={(e) => choose(a, e)}
              disabled={answered}
            >
              {a}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
