import Image from "next/image";
import { site } from "@/lib/site";
import { ArticleQuiz } from "./components/ArticleQuiz";
import { LevelPicker } from "./components/LevelPicker";
import { Arrow, Plus, Tick } from "./components/icons";
import portrait from "@/public/hannah.webp";

const mailto = `mailto:${site.email}?subject=${encodeURIComponent("German lessons")}`;

const FAQ = [
  {
    q: "Do you teach in person or online?",
    a: "Both. Lessons are in person in Abu Dhabi or online, whichever you prefer.",
  },
  {
    q: "Who do you teach?",
    a: "Mostly children and young adults, but any age is welcome. I also support international expats at different stages of their careers.",
  },
  {
    q: "Is there a free trial lesson?",
    a: "Yes, for online lessons. The free trial applies to online lessons only, not to in-person lessons in Abu Dhabi.",
  },
  {
    q: "Can you prepare me for a Goethe-Institut exam?",
    a: "Yes. I tailor lessons to your goals, including preparation for Goethe-Institut exams, up to advanced levels such as C1 and C2.",
  },
  {
    q: "I do not know my level. Where do I start?",
    a: "At the start of each course I assess your current German and we talk about your personal and professional goals. Then I build a learning plan for you.",
  },
  {
    q: "What if I get stuck between lessons?",
    a: "Just reach out. If you have a question, need something explained again or get stuck on an exercise, I am happy to help.",
  },
  {
    q: "Can you tell me about working and living in Germany, Austria or Switzerland?",
    a: "Yes. I grew up and worked in Austria and worked in Germany, Switzerland and the Netherlands, so I share first-hand insight into the job market and daily life there.",
  },
];

function Lockup({
  article,
  noun,
  gloss,
  tone,
  as: Tag = "h2",
  id,
  small,
}: {
  article: "der" | "die" | "das";
  noun: string;
  gloss: string;
  tone?: "t-der" | "t-die" | "t-das";
  as?: "h2" | "p";
  id?: string;
  small?: boolean;
}) {
  return (
    <Tag id={id} className={`lockup${small ? " lockup--sm" : ""}`}>
      <span lang="de" className={`lockup__article ${tone ?? ""}`}>
        {article}
      </span>{" "}
      <span lang="de" className={`lockup__noun ${tone ?? ""}`}>
        {noun}
      </span>
      <span className="sr-only">: </span>
      <span className="lockup__gloss">{gloss}</span>
    </Tag>
  );
}

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${site.url}/#website`,
        url: site.url,
        name: "Hannah · German lessons in Abu Dhabi",
        inLanguage: "en",
      },
      {
        "@type": "Person",
        "@id": `${site.url}/#hannah`,
        name: "Hannah",
        jobTitle: "German teacher",
        description:
          "Native German speaker from Austria with over 10 years of experience teaching German as a foreign language.",
        image: `${site.url}${portrait.src}`,
        url: site.url,
        email: site.email,
        knowsLanguage: ["de", "en", "nl", "ja"],
        workLocation: { "@type": "Place", name: "Abu Dhabi, United Arab Emirates" },
      },
      {
        "@type": "Service",
        "@id": `${site.url}/#lessons`,
        name: "German lessons in Abu Dhabi and online",
        serviceType: "German language tutoring",
        description: site.description,
        provider: { "@id": `${site.url}/#hannah` },
        areaServed: [
          { "@type": "City", name: "Abu Dhabi" },
          { "@type": "Country", name: "United Arab Emirates" },
        ],
        availableChannel: {
          "@type": "ServiceChannel",
          serviceUrl: site.bookingUrl,
        },
        audience: [
          { "@type": "Audience", audienceType: "Adults and professionals" },
          { "@type": "Audience", audienceType: "Children and teenagers" },
        ],
        offers: {
          "@type": "Offer",
          name: "Free online trial lesson",
          price: 0,
          priceCurrency: site.currency,
          url: site.bookingUrl,
          description: "Free trial lesson for online lessons only.",
        },
      },
      {
        "@type": "ProfessionalService",
        "@id": `${site.url}/#business`,
        name: "Hannah · German lessons in Abu Dhabi",
        description: site.description,
        url: site.url,
        email: site.email,
        image: `${site.url}${portrait.src}`,
        address: { "@type": "PostalAddress", addressLocality: "Abu Dhabi", addressCountry: "AE" },
        areaServed: [
          { "@type": "City", name: "Abu Dhabi" },
          { "@type": "Country", name: "United Arab Emirates" },
        ],
        founder: { "@id": `${site.url}/#hannah` },
        knowsLanguage: ["de", "en"],
        makesOffer: { "@id": `${site.url}/#lessons` },
      },
      {
        "@type": "Course",
        "@id": `${site.url}/#course`,
        name: "German lessons A1 to C2 with a native speaker",
        description:
          "Private German lessons from beginner to C2, including Goethe-Institut exam preparation. Conversation practice, grammar and writing, tailored to your goals.",
        inLanguage: "de",
        educationalLevel: "A1 to C2 (CEFR)",
        provider: { "@id": `${site.url}/#business` },
        hasCourseInstance: [
          {
            "@type": "CourseInstance",
            courseMode: "online",
            instructor: { "@id": `${site.url}/#hannah` },
          },
          {
            "@type": "CourseInstance",
            courseMode: "onsite",
            location: { "@type": "Place", name: "Abu Dhabi, United Arab Emirates" },
            instructor: { "@id": `${site.url}/#hannah` },
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${site.url}/#faq`,
        mainEntity: FAQ.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <header className="hero" id="top">
        <div className="field field--der on-der">
          <div className="topbar">
            <a className="brand" href="#top" aria-label="Hannah, German lessons, back to top">
              <span className="brand__name">Hannah</span>
              <span className="brand__tag">German lessons · Abu Dhabi &amp; online</span>
            </a>
            <nav className="nav" aria-label="Sections">
              <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#lessons">Lessons</a></li>
                <li><a href="#levels">Levels</a></li>
                <li><a href="#prices">Prices</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </nav>
          </div>
          <Lockup as="p" article="der" noun="Unterricht" gloss="the lessons" small />
          <h1 className="hero__title">German lessons in Abu Dhabi and online.</h1>
          <p className="hero__lede">
            Learn with a native speaker from Austria. From your first words to C2 and Goethe-Institut exams, for
            adults, children and teens.
          </p>
          <a className="btn btn--light hero__cta-compact" href={site.bookingUrl} target="_blank" rel="noopener">
            Book a free online trial <Arrow />
          </a>
          <ul className="hero__facts">
            <li>Native speaker</li>
            <li>10+ years teaching</li>
            <li>A1 to C2</li>
          </ul>
        </div>

        <div className="field field--die on-die">
          <Lockup as="p" article="die" noun="Lehrerin" gloss="the teacher" />
          <figure className="portrait">
            <Image
              src={portrait}
              alt="Hannah, German teacher in Abu Dhabi, smiling"
              priority
              sizes="(max-width: 700px) 112px, (max-width: 1100px) 50vw, 27vw"
              placeholder="blur"
            />
          </figure>
          <p className="field__text">
            <strong>Hallo, I am Hannah.</strong> I grew up in Austria, and I have taught German to international
            expats for over 10 years.
          </p>
        </div>

        <div className="field field--das on-das">
          <Lockup as="p" article="das" noun="Ziel" gloss="the goal" />
          <ul className="doors">
            <li>
              <a className="door" href="#beruf">
                <span>
                  For adults and careers
                  <small>Work, move, pass your exam</small>
                </span>
                <Arrow />
              </a>
            </li>
            <li>
              <a className="door" href="#kind">
                <span>
                  For children and teens
                  <small>Speaking, grammar, writing</small>
                </span>
                <Arrow />
              </a>
            </li>
          </ul>
          <dl className="formats">
            <div>
              <dt>Online</dt>
              <dd>Free trial lesson</dd>
            </div>
            <div>
              <dt>In person</dt>
              <dd>Abu Dhabi</dd>
            </div>
          </dl>
          <div className="hero__actions">
            <a className="btn" href={site.bookingUrl} target="_blank" rel="noopener">
              Book a free online trial <Arrow />
            </a>
            <a className="text-link" href={mailto}>
              Or email Hannah
            </a>
            <p className="fineprint">The free trial is for online lessons.</p>
          </div>
        </div>
      </header>

      <main id="main">
        <ArticleQuiz />

        <section id="about" className="section" aria-labelledby="about-title">
          <div className="wrap">
            <div className="section-head">
              <Lockup id="about-title" article="die" noun="Lehrerin" gloss="Your German teacher in Abu Dhabi" tone="t-die" />
            </div>
            <div className="about">
              <div className="prose">
                <p>
                  I am a native German speaker. I grew up, lived and worked in Austria, and I completed my
                  Bachelor&apos;s degree in Product Design in the Netherlands.
                </p>
                <p>
                  For several years I worked as a designer and in product management across Austria, Germany,
                  Switzerland and the Netherlands. Today I work as a Product Designer in the UAE.
                </p>
                <p>
                  I have taught German as a foreign language for over 10 years, supporting international expats at
                  different stages of their careers. I help learners build the German they need to work and grow a
                  career in a German-speaking country, and I prepare them for advanced levels such as C1 and C2.
                </p>
                <p>
                  Outside work I love travelling, walking in nature and meeting people from different backgrounds.
                  Because I genuinely enjoy teaching, I am always happy to help when you have a question.
                </p>
              </div>
              <dl className="facts">
                <div>
                  <dt>Languages</dt>
                  <dd>
                    <ul className="langs">
                      <li lang="de">Deutsch (native)</li>
                      <li>English</li>
                      <li lang="nl">Nederlands</li>
                      <li lang="ja">日本語</li>
                    </ul>
                  </dd>
                </div>
                <div>
                  <dt>Teaching</dt>
                  <dd>German as a foreign language, over 10 years</dd>
                </div>
                <div>
                  <dt>Worked in</dt>
                  <dd>Austria, Germany, Switzerland, the Netherlands and the UAE</dd>
                </div>
                <div>
                  <dt>Degree</dt>
                  <dd>Bachelor in Product Design, the Netherlands</dd>
                </div>
                <div>
                  <dt>Lessons</dt>
                  <dd>In person in Abu Dhabi, or online</dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        <section id="lessons" className="paths" aria-label="German lessons for adults and for children">
          <div id="beruf" className="path on-der">
            <div className="path__inner">
              <div className="section-head">
                <Lockup article="der" noun="Beruf" gloss="German lessons for adults and careers" />
              </div>
              <ul className="ticks">
                <li><Tick />German for working and building a career in Germany, Austria or Switzerland</li>
                <li><Tick />First-hand insight into the job market and daily life in Austria, Germany, Switzerland and the Netherlands</li>
                <li><Tick />Preparation for Goethe-Institut exams, up to C1 and C2</li>
                <li><Tick />A plan built around your goals, your pace and your schedule</li>
              </ul>
              <a className="btn btn--light" href={site.bookingUrl} target="_blank" rel="noopener">
                Book a free online trial <Arrow />
              </a>
            </div>
          </div>
          <div id="kind" className="path on-das">
            <div className="path__inner">
              <div className="section-head">
                <Lockup article="das" noun="Kind" gloss="German lessons for children and teens" />
              </div>
              <ul className="ticks">
                <li><Tick />Lessons for children and young adults, in Abu Dhabi or online</li>
                <li><Tick />Speaking practice so they talk freely and with confidence</li>
                <li><Tick />Grammar and writing in equal parts, plus Goethe-Institut exam preparation</li>
                <li><Tick />Lessons adapted to each child&apos;s pace and learning style</li>
              </ul>
              <a className="btn" href={site.bookingUrl} target="_blank" rel="noopener">
                Book a free online trial <Arrow />
              </a>
            </div>
          </div>
        </section>

        <section id="method" className="section on-die" aria-labelledby="method-title">
          <div className="wrap method">
            <div className="section-head">
              <Lockup id="method-title" article="die" noun="Methode" gloss="How the German lessons work" />
            </div>
            <div>
              <ol className="steps">
                <li>
                  <div>
                    <h3>Level check and goals</h3>
                    <p>We start by assessing your German and talking about your personal and professional goals.</p>
                  </div>
                </li>
                <li>
                  <div>
                    <h3>Your learning plan</h3>
                    <p>I build a plan for your needs. Lessons follow your pace and your learning style.</p>
                  </div>
                </li>
                <li>
                  <div>
                    <h3>Speak, then understand why</h3>
                    <p>The focus is on conversation practice, together with grammar and regular writing sessions.</p>
                  </div>
                </li>
                <li>
                  <div>
                    <h3>Help between lessons</h3>
                    <p>Stuck on an exercise or need something explained again? Reach out and I will help.</p>
                  </div>
                </li>
              </ol>
              <ul className="skills" aria-label="Skills covered">
                <li>Speaking</li>
                <li>Grammar</li>
                <li>Writing</li>
                <li>Reading</li>
                <li>Listening</li>
                <li>Pronunciation</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="levels" className="section" aria-labelledby="levels-title">
          <div className="wrap">
            <div className="section-head">
              <Lockup
                id="levels-title"
                article="das"
                noun="Niveau"
                gloss="German levels A1 to C2 and Goethe exams"
                tone="t-das"
              />
            </div>
            <LevelPicker bookingUrl={site.bookingUrl} />
          </div>
        </section>

        <section id="prices" className="section on-der" aria-labelledby="prices-title">
          <div className="wrap">
            <div className="section-head">
              <Lockup id="prices-title" article="der" noun="Preis" gloss="Prices for German lessons" />
            </div>
            <table className="price-table">
              <caption className="sr-only">Lesson formats and prices in {site.currency}</caption>
              <thead>
                <tr>
                  <th scope="col">Format</th>
                  <th scope="col">Where</th>
                  <th scope="col">Who</th>
                  <th scope="col" style={{ textAlign: "right" }}>
                    Price per lesson
                  </th>
                </tr>
              </thead>
              <tbody>
                {site.prices.map((row) => (
                  <tr key={row.format}>
                    <th scope="row">
                      {row.format}
                      {row.length ? `, ${row.length}` : ""}
                    </th>
                    <td className="where">{row.where}</td>
                    <td className="who">{row.who}</td>
                    <td className="price">
                      {row.price === null ? (
                        <a href={mailto}>Ask Hannah</a>
                      ) : (
                        `${site.currency} ${row.price}`
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="trial">
              <Lockup as="p" article="die" noun="Probestunde" gloss="the trial lesson" small />
              <p>
                Your first online lesson is free, so you can meet me and see how I teach. The free trial applies to
                online lessons only.
              </p>
              <a className="btn" href={site.bookingUrl} target="_blank" rel="noopener">
                Book it <Arrow />
              </a>
            </div>
          </div>
        </section>

        <section id="faq" className="section" aria-labelledby="faq-title">
          <div className="wrap faq">
            <div className="section-head">
              <Lockup id="faq-title" article="die" noun="Fragen" gloss="Questions about German lessons" tone="t-die" />
            </div>
            <div className="faq__list">
              {FAQ.map((f) => (
                <details key={f.q}>
                  <summary>
                    {f.q}
                    <Plus />
                  </summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="closing on-der" aria-labelledby="contact-title">
          <div className="wrap">
            <div className="section-head">
              <Lockup id="contact-title" article="der" noun="Kontakt" gloss="Book your German lesson" />
            </div>
            <p className="closing__line">Let&apos;s go from zero to having fun speaking German!</p>
            <div className="closing__actions">
              <a className="btn btn--light" href={site.bookingUrl} target="_blank" rel="noopener">
                Book a free online trial <Arrow />
              </a>
              <a className="closing__email" href={mailto}>
                {site.email}
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="wrap">
          <p>
            <span className="footer__mark" lang="de" aria-hidden="true">
              <span className="t-der">der</span> <span className="t-die">die</span>{" "}
              <span className="t-das">das</span>
            </span>{" "}
            Hannah · German lessons in Abu Dhabi and online
          </p>
          <p>
            <a href={mailto}>{site.email}</a>
          </p>
        </div>
      </footer>
    </>
  );
}
