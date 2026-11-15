---
name: Hannah · German lessons in Abu Dhabi
description: A one-page tutor site that speaks in the German article colour code, der blue, die rose, das green.
colors:
  der: "#2f5fd0"
  die: "#e86fa5"
  das: "#33a873"
  ink: "#1b2547"
  paper: "#ffffff"
  on-der-soft: "#eef2fd"
  die-on-paper: "#c13f7c"
  das-on-paper: "#1f7d52"
  der-soft: "#e7eefc"
  die-soft: "#fdeaf2"
  das-soft: "#e3f5ec"
  das-soft-hover: "#c5ead8"
typography:
  display:
    fontFamily: "Bricolage Grotesque, system-ui, sans-serif"
    fontSize: "clamp(2.6rem, 5.1vw, 5.5rem)"
    fontWeight: 800
    lineHeight: 0.98
    letterSpacing: "-0.04em"
  article:
    fontFamily: "Bricolage Grotesque, system-ui, sans-serif"
    fontSize: "clamp(3rem, 6.2vw, 6rem)"
    fontWeight: 800
    lineHeight: 0.95
    letterSpacing: "-0.035em"
  noun:
    fontFamily: "Bricolage Grotesque, system-ui, sans-serif"
    fontSize: "clamp(1.5rem, 2.4vw, 2.25rem)"
    fontWeight: 700
    lineHeight: 0.95
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Bricolage Grotesque, system-ui, sans-serif"
    fontSize: "clamp(1.4rem, 2.2vw, 2rem)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Bricolage Grotesque, system-ui, sans-serif"
    fontSize: "1.4rem"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Atkinson Hyperlegible Next, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: "Atkinson Hyperlegible Next, system-ui, sans-serif"
    fontSize: "0.95rem"
    fontWeight: 700
    lineHeight: 1.3
rounded:
  none: "0px"
spacing:
  gutter: "clamp(20px, 4vw, 56px)"
  section: "clamp(72px, 10vw, 144px)"
  wrap: "1280px"
  rule: "2px"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.none}"
    padding: "0 1.5rem"
    height: "56px"
  button-primary-hover:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
  button-light:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "0 1.5rem"
    height: "56px"
  article-choice-der:
    backgroundColor: "{colors.der}"
    textColor: "{colors.paper}"
    rounded: "{rounded.none}"
    size: "clamp(88px, 9vw, 116px)"
  article-choice-die:
    backgroundColor: "{colors.die}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    size: "clamp(88px, 9vw, 116px)"
  article-choice-das:
    backgroundColor: "{colors.das}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    size: "clamp(88px, 9vw, 116px)"
  skill-tag:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.none}"
    padding: "8px 14px"
  level-bar:
    backgroundColor: "{colors.das-soft}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "12px"
  level-bar-active:
    backgroundColor: "{colors.das}"
  trial-panel:
    backgroundColor: "{colors.die}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "clamp(24px, 3vw, 40px)"
---

# Design System: Hannah · German lessons in Abu Dhabi

## Overview

**Creative North Star: "Article Colours"**

Every German learner memorises nouns with a colour: der blue, die rose, das green. This system turns that classroom code into the whole visual language. Each section is a German noun, and its grammatical article decides its colour, so colour always carries meaning and never decorates. The page is built from full-bleed flat fields of those three colours, indigo ink and white paper, divided by 2px ink rules and set in a heavy, tightly tracked grotesque.

The density is generous and confident: big type, long rules, few elements per field. Depth comes only from colour fields meeting at hard edges, never from shadow, gradient or rounding. Motion is short and purposeful: the three hero fields wipe in once along the article order, and the quiz floods its strip with the right article's colour.

The user's steer rules out the German flag palette completely. No black, red or gold appears anywhere; the darkest value is indigo ink.

**Key Characteristics:**
- Colour is grammar: der blue, die rose, das green, chosen by each section's noun.
- Full-bleed flat fields with hard edges; no radius, shadow or gradient anywhere.
- Every section header is a lockup: the article huge, the German noun beside it, an English gloss below.
- 2px ink rules structure lists, tables and accordions.
- Bricolage Grotesque at 700 to 800 for display; Atkinson Hyperlegible Next for reading.

## Colors

Three grammatical-gender colours on indigo ink and white paper; every hue has a job.

### Primary
- **Der Blue** (#2f5fd0): Masculine nouns. Fields for der Unterricht (hero), der Beruf (adult lessons), der Preis (prices) and der Kontakt (closing). Text on it is white; secondary text uses Der Haze (#eef2fd). Also the browser theme colour and the scrollbar thumb.

### Secondary
- **Die Rose** (#e86fa5): Feminine nouns. Fields for die Lehrerin (hero portrait) and die Methode, the trial-lesson panel (die Probestunde) and the text-selection highlight. Text on it is always ink.
- **Die Rose on Paper** (#c13f7c): The deepened rose used only when a die lockup sits on white (die Lehrerin about section, die Fragen), so the article reads at AA contrast.

### Tertiary
- **Das Green** (#33a873): Neuter nouns. Fields for das Ziel (hero actions) and das Kind (children's lessons), the selected level bar and the das quiz choice. Text on it is always ink.
- **Das Green on Paper** (#1f7d52): The deepened green for das lockups and the large level code on white.

### Neutral
- **Indigo Ink** (#1b2547): All body text on paper and on rose and green fields, every 2px rule, the primary button, the skill tags, the focus ring.
- **Paper** (#ffffff): Page background and the text colour on der blue.
- **Der Haze** (#eef2fd): Secondary text on der blue (brand tag, hero lede, table headers).
- **Soft tints** (der #e7eefc, die #fdeaf2, das #e3f5ec): Quiet backgrounds inside a colour's own territory: scrollbar track (der), portrait placeholder (die), unselected level bars (das), with #c5ead8 as the level-bar hover.

### Named Rules
**The Article Decides Rule.** A section's colour comes from its German noun's grammatical gender, never from taste. Name the noun first, then take the colour: der → blue, die → rose, das → green. A new section with no fitting noun stays on paper.

**The No Flag Rule.** No black, red or gold, ever, not even as an accent, tint or hover. The darkest value in the system is Indigo Ink.

**The Ink on Light Fields Rule.** Text on die rose and das green is ink; text on der blue is white. On paper, a coloured article uses its deepened "on paper" value, never the field value.

## Typography

**Display Font:** Bricolage Grotesque (with system-ui, sans-serif)
**Body Font:** Atkinson Hyperlegible Next (with system-ui, Segoe UI, Arial, sans-serif)

**Character:** A chunky, slightly quirky grotesque at heavy weights and tight tracking does the shouting; a legibility-first sans built for low-vision and non-native readers does the explaining.

### Hierarchy
- **Article** (800, clamp(3rem, 6.2vw, 6rem), 0.95, -0.035em): The der/die/das word in every lockup. The largest recurring type on the page. A small lockup (clamp(2.5rem, 4vw, 3.75rem)) is used inside hero fields and the trial panel.
- **Display** (800, clamp(2.6rem, 5.1vw, 5.5rem), 0.98, -0.04em): The single h1 and the closing line. Balanced wrap, 13 to 16ch max.
- **Noun** (700, clamp(1.5rem, 2.4vw, 2.25rem), -0.02em): The German noun set on the article's baseline.
- **Headline** (700, clamp(1.4rem, 2.2vw, 2rem), 1.1): The English gloss under a section lockup, which carries the SEO heading text.
- **Title** (700, 1.4rem to clamp(1.25rem, 1.7vw, 1.6rem), 1.1 to 1.2): Step titles, door links, FAQ questions, price-row formats.
- **Body** (400, 1.125rem, 1.55): Prose at 64ch max; level text at 52ch; quiz feedback at 58ch.
- **Label** (700, 0.9 to 0.95rem): Nav links, table headers, skill tags, fine print.
- **Big figures** (800, Display font): Step counters (2.25rem), level code (clamp(3.5rem, 7vw, 6rem)), format words in the hero (clamp(2rem, 3.4vw, 3.25rem)) and the quiz noun (clamp(2.75rem, 6vw, 5.5rem)).

### Named Rules
**The Lockup Rule.** Every section header is a lockup: the article in Article type, the noun beside it on the same baseline, the English gloss on its own line beneath. German words carry `lang="de"`.

**The Two Voices Rule.** Display type is Bricolage at 700 or 800 only; reading text is Atkinson at 400, with 700 for emphasis. Never set paragraphs in Bricolage.

## Layout

Content sits in a 1280px wrap with a fluid gutter (clamp(20px, 4vw, 56px)); sections breathe with clamp(72px, 10vw, 144px) of vertical padding. Colour fields run full-bleed edge to edge while their content stays inside the wrap.

The hero is three vertical fields at 46/27/27 (der, die, das), filling up to min(100svh, 980px). Below 1100px the der field spans the full width above die and das side by side; below 700px all three stack as bands, the nav hides and the primary action appears inside the first field. The two lesson paths (der Beruf, das Kind) sit as a 50/50 full-bleed pair that stacks below 860px. Content sections use asymmetric two-column grids (7/5, 5/7, 6/5, 4/8) that collapse to one column below 860px.

Breakpoints in use: 1100px, 860px, 700px.

## Elevation & Depth

The system is completely flat. There are no shadows, no gradients and no translucent layers. Depth comes only from full-bleed colour fields meeting at hard edges and from 2px ink rules. The one exception to strict flatness is the price table on der blue, whose row dividers use white at 55% opacity so the header rule (solid white) reads as stronger.

### Named Rules
**The Flat Field Rule.** Separate things with a colour change or a 2px rule, never with a shadow or a gradient.

## Shapes

Every corner is square (0px radius): buttons, choice tiles, tags, level bars, the portrait and the trial panel. Icons use square line caps at a 2.5 stroke to match. Structure comes from 2px solid rules (`border-top` on a list, `border-bottom` on each row) in ink, or in `currentColor` on coloured fields. The only curve is motion: the quiz answer floods outward as an expanding circle from the tapped button and then fills the strip edge to edge.

## Components

### Buttons
Heavy, rectangular and inverting.
- **Shape:** Square corners (0px), 56px minimum height, 0 1.5rem padding, 2px border in the fill colour.
- **Primary:** Ink fill, white Bricolage 700 at 1.125rem, with a trailing arrow icon.
- **Hover / Focus:** The fill inverts to white with ink text over 0.25s ease-out, and the arrow slides 4px right. Focus is a 3px ink outline at 3px offset (white on der blue).
- **Light:** White fill and ink text for use on der blue; hover turns it transparent with white text.
- **Text link:** Bold underlined text at a 44px minimum target; hover thickens the underline from 2px to 4px.

### Chips
- **Skill tags:** Ink fill, white Atkinson 700 at 0.95rem, 8px 14px padding, square. Static labels, not filters.

### Cards / Containers
- **Corner Style:** Square (0px).
- **Background:** A whole colour field, never a white card on colour. The trial panel is a die-rose block inside the der-blue prices section.
- **Shadow Strategy:** None (see Elevation & Depth).
- **Border:** None on fields; 2px ink rules on ruled lists.
- **Internal Padding:** clamp(24px, 3vw, 44px) in hero fields; clamp(24px, 3vw, 40px) in the trial panel.

### Navigation
Bold Atkinson links at 0.95rem with 6px vertical padding, set in the der field beside the brand. Hover adds a 2px currentColor underline as a bottom border. Hidden below 700px, where the page relies on the hero's own doors and actions.

### Ruled lists (doors, facts, ticks, steps, FAQ)
The recurring structural pattern: a 2px rule on top and a 2px rule under each row. Doors are Bricolage 700 links with a small Atkinson subline and an arrow that slides 6px on hover. Steps carry a counter in Bricolage 800 at 2.25rem. The FAQ uses native details/summary, with a plus icon that rotates 45° to a cross when open.

### Article Quiz (signature)
A white strip with the question "der, die oder das?", a German noun in Bricolage 800 behind an underlined blank, and three square choice tiles (der blue with white text, die rose and das green with ink text). The tiles lift 4px on hover. Choosing one floods the strip from the tapped tile with the correct article's colour (a circular clip-path, 0.75s ease-out), writes the article into the blank, shows the rule as feedback and moves focus to "Next word".

### Level Ramp (signature)
Six square bars for A1 to C2, rising from 30% to 100% height like a staircase, in das-soft with ink codes. The selected bar fills with das green; a ruled card beside it shows the level code large in das-on-paper green, the name, the description and the Goethe exam.

## Do's and Don'ts

### Do:
- **Do** pick every coloured section's field by its German noun's article: der #2f5fd0, die #e86fa5, das #33a873.
- **Do** set every section header as an article + noun + gloss lockup, with `lang="de"` on the German.
- **Do** use ink (#1b2547) text on die rose and das green, and white text on der blue.
- **Do** use the deepened values (die #c13f7c, das #1f7d52) when an article colour is text on white.
- **Do** structure lists, tables and accordions with 2px rules.
- **Do** keep every corner square and every surface flat.
- **Do** use cubic-bezier(0.16, 1, 0.3, 1) for transitions, and turn off the field wipe and smooth scroll under prefers-reduced-motion.

### Don't:
- **Don't** use black, red or gold anywhere, including tints, hovers, shadows or illustrations. Those are the German flag colours and the user ruled them out.
- **Don't** use a gender colour for decoration or for a section whose noun has a different article.
- **Don't** add border radius, drop shadows or gradients.
- **Don't** set body paragraphs in Bricolage Grotesque.
- **Don't** put white text on die rose or das green.
