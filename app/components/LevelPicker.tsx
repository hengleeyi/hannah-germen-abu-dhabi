"use client";

import { useState } from "react";

const LEVELS = [
  {
    code: "A1",
    name: "Beginner",
    text: "You start from zero. Greetings, numbers, introducing yourself and simple everyday sentences.",
    exam: "Goethe-Zertifikat A1: Start Deutsch 1",
  },
  {
    code: "A2",
    name: "Elementary",
    text: "You handle routine situations: shopping, directions, talking about your work, family and plans.",
    exam: "Goethe-Zertifikat A2",
  },
  {
    code: "B1",
    name: "Intermediate",
    text: "You get by when you travel or live in a German-speaking country, and you can talk about experiences and opinions.",
    exam: "Goethe-Zertifikat B1",
  },
  {
    code: "B2",
    name: "Upper intermediate",
    text: "You speak fluently with native speakers and follow complex texts.",
    exam: "Goethe-Zertifikat B2",
  },
  {
    code: "C1",
    name: "Advanced",
    text: "You use German flexibly at work, at university and in social life, with clear and well-structured language.",
    exam: "Goethe-Zertifikat C1",
  },
  {
    code: "C2",
    name: "Proficient",
    text: "You understand almost everything you hear or read and express yourself precisely, even on complex topics.",
    exam: "Goethe-Zertifikat C2: Großes Deutsches Sprachdiplom",
  },
];

export function LevelPicker({ bookingUrl }: { bookingUrl: string }) {
  const [active, setActive] = useState(2);
  const level = LEVELS[active];

  return (
    <div className="levels">
      <div className="ramp" role="group" aria-label="German levels A1 to C2" data-active>
        {LEVELS.map((l, i) => (
          <button
            key={l.code}
            type="button"
            aria-pressed={i === active}
            aria-controls="level-card"
            onClick={() => setActive(i)}
          >
            {l.code}
          </button>
        ))}
      </div>
      <div id="level-card" className="level-card" aria-live="polite">
        <p className="level-card__code">{level.code}</p>
        <h3 className="level-card__name">{level.name}</h3>
        <p>{level.text}</p>
        <p className="exam">Exam: {level.exam}</p>
        <p>
          Not sure where you are? Every course starts with a level check, so you do not need to know your level before
          you book.
        </p>
        <a className="text-link" href={bookingUrl} target="_blank" rel="noopener">
          Book a free online trial
        </a>
      </div>
    </div>
  );
}
