"use client";

import { useState } from "react";
import Link from "next/link";
import CardCarousel from "@/components/card/CardCarousel";
import SingleCard from "@/components/card/SingleCard";
import SectionHeading from "@/components/ui/SectionHeading";
import HeroBookmarkButton from "@/components/ui/HeroBookmarkButton";
import { GLOBAL_INSIGHTS, GLOBAL_LAW_QUIZ } from "@/data/news";

// Distinct pill colors matching the image card accents
const CARD_PILL_COLORS = [
  "bg-indigo-600 text-white",
  "bg-emerald-600 text-white",
  "bg-primary text-white",
  "bg-breaking text-white",
];

// Global Insights showcase: 9-col feature + 3-up infinite carousel, 3-col quiz + trend rail
export default function GlobalInsightsSection() {
  const lead = GLOBAL_INSIGHTS[0];
  const carouselCards = GLOBAL_INSIGHTS.slice(1, 7);
  const railStories = GLOBAL_INSIGHTS.slice(7, 10);

  const [quizStarted, setQuizStarted] = useState(false);
  const [questionIdx, setQuestionIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [quizDone, setQuizDone] = useState(false);

  const currentQuestion = GLOBAL_LAW_QUIZ[questionIdx];

  function handleAnswer(idx) {
    if (selectedOption !== null) return;
    setSelectedOption(idx);
    if (idx === currentQuestion.answerIndex) {
      setScore((prev) => prev + 1);
    }
  }

  function handleNextQuestion() {
    if (questionIdx + 1 < GLOBAL_LAW_QUIZ.length) {
      setQuestionIdx((prev) => prev + 1);
      setSelectedOption(null);
    } else {
      setQuizDone(true);
    }
  }

  function handleResetQuiz() {
    setQuestionIdx(0);
    setSelectedOption(null);
    setScore(0);
    setQuizDone(false);
    setQuizStarted(false);
  }

  return (
    <section className="site-container py-10 md:py-12 border-b border-outline-variant">
      <SectionHeading
        title="Global Insights"
        seeMoreHref="/news?category=International"
        seeMoreText="All Global →"
        dotColor="bg-accent-dark"
      />

      <div className="grid grid-cols-1 xl:grid-cols-12 gap-7 items-start">
        {/* LEFT 9 COLS: Lead Horizontal Feature + 4-Card Row */}
        <div className="xl:col-span-9 flex flex-col gap-7 min-w-0">
          {/* Top Split Lead Story */}
          <article className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-6 flex flex-col gap-3 min-w-0">
              <span className="self-start px-2.5 py-0.5 rounded-sm bg-breaking text-white font-label text-[10px] font-bold uppercase tracking-wider">
                {lead.eyebrow || lead.category}
              </span>

              <h3 className="font-display text-[24px] sm:text-[28px] lg:text-[31px] leading-[1.15] font-bold tracking-tight text-on-surface hover:text-primary transition-colors">
                <Link href={`/news/${lead.slug}`}>{lead.title}</Link>
              </h3>

              {lead.summary && (
                <p className="font-body text-[14px] leading-relaxed text-on-surface-variant line-clamp-2">
                  {lead.summary}
                </p>
              )}

              <div className="flex items-center justify-between pt-1">
                <span className="font-label text-[12px] text-on-surface-variant">
                  By <strong className="font-semibold text-on-surface">{lead.author || "Global Desk"}</strong>
                </span>
                <HeroBookmarkButton article={lead} />
              </div>
            </div>

            <Link
              href={`/news/${lead.slug}`}
              className="md:col-span-6 img-hero block aspect-[16/10] w-full bg-surface-container group"
            >
              <img
                src={lead.image}
                alt={lead.title}
                className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
              />
            </Link>
          </article>

          {/* Bottom 3-Column Auto Infinite Card Carousel */}
          <div className="pt-2 min-w-0">
            <CardCarousel
              items={carouselCards}
              desktopSlides={3}
              autoplayDelay={3500}
              showDots={false}
              renderCard={(item, idx) => (
                <SingleCard
                  article={item}
                  showSummary={true}
                  pillClassName={CARD_PILL_COLORS[idx % CARD_PILL_COLORS.length]}
                />
              )}
            />
          </div>
        </div>

        {/* RIGHT 3 COLS: Fast Four Global Quiz + 3 Trending Briefs */}
        <aside className="xl:col-span-3 xl:border-l xl:border-outline-variant xl:pl-6 min-w-0">
          <div className="border-t-2 border-on-surface pt-3.5">
            {/* Fast Four Interactive Quiz Box */}
            {!quizStarted ? (
              <div>
                <h3 className="font-display text-[17px] leading-snug font-bold text-on-surface">
                  Fast Four Quiz: Global Cross-Border Law
                </h3>
                <p className="font-body text-[12.5px] leading-relaxed text-on-surface-variant mt-2">
                  How sharp is your grasp on global arbitration, AI regulation &amp; IFSC hubs? Test yourself in 4 quick questions.
                </p>
                <button
                  type="button"
                  onClick={() => setQuizStarted(true)}
                  className="w-full mt-3.5 py-2.5 px-4 rounded-sm bg-accent hover:bg-accent-dark hover:text-white text-on-accent font-label text-[13px] font-bold transition-colors cursor-pointer"
                >
                  Get Started
                </button>
              </div>
            ) : quizDone ? (
              <div className="bg-surface-container/60 border border-outline-variant rounded-lg p-3.5">
                <p className="font-mono text-[10px] uppercase tracking-wider text-primary font-bold">
                  Quiz Complete
                </p>
                <h3 className="font-display text-[17px] font-bold text-on-surface mt-1">
                  Score: {score} / {GLOBAL_LAW_QUIZ.length}
                </h3>
                <p className="font-body text-[12px] text-on-surface-variant mt-1">
                  {score >= 3
                    ? "Sharp global counsel instinct — well ahead of 2026 cross-border shifts."
                    : "Explore the Global Insights briefs below to sharpen your cross-border pulse."}
                </p>
                <button
                  type="button"
                  onClick={handleResetQuiz}
                  className="w-full mt-3 py-2 px-3 rounded-sm bg-primary text-white font-label text-[12px] font-bold hover:bg-secondary transition-colors cursor-pointer"
                >
                  Retake Quiz
                </button>
              </div>
            ) : (
              <div className="bg-surface-container/60 border border-outline-variant rounded-lg p-3.5">
                <div className="flex items-center justify-between text-[10px] font-mono font-bold text-primary uppercase">
                  <span>
                    Question {questionIdx + 1}/{GLOBAL_LAW_QUIZ.length}
                  </span>
                  <button
                    type="button"
                    onClick={handleResetQuiz}
                    className="text-on-surface-variant hover:text-on-surface cursor-pointer"
                  >
                    Close
                  </button>
                </div>
                <p className="font-headline text-[13px] font-bold text-on-surface leading-snug mt-1.5">
                  {currentQuestion.question}
                </p>
                <div className="flex flex-col gap-1.5 mt-2.5">
                  {currentQuestion.options.map((opt, idx) => {
                    const isPicked = selectedOption === idx;
                    const isCorrect = idx === currentQuestion.answerIndex;
                    let btnStyle =
                      "bg-white border-outline-variant text-on-surface hover:border-primary";
                    if (selectedOption !== null) {
                      if (isCorrect) btnStyle = "bg-emerald-50 border-emerald-600 text-emerald-900 font-bold";
                      else if (isPicked) btnStyle = "bg-red-50 border-breaking text-breaking";
                    }
                    return (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => handleAnswer(idx)}
                        className={`text-left px-2.5 py-1.5 rounded border font-label text-[11.5px] transition-colors cursor-pointer ${btnStyle}`}
                      >
                        {opt}
                      </button>
                    );
                  })}
                </div>
                {selectedOption !== null && (
                  <button
                    type="button"
                    onClick={handleNextQuestion}
                    className="w-full mt-2.5 py-2 px-3 rounded-sm bg-accent text-on-accent font-label text-[12px] font-bold hover:bg-accent-dark hover:text-white transition-colors cursor-pointer"
                  >
                    {questionIdx + 1 < GLOBAL_LAW_QUIZ.length ? "Next Question →" : "See Score"}
                  </button>
                )}
              </div>
            )}

            {/* 3 Stacked Right-Rail Stories with Rising Trend Arrow */}
            <div className="mt-5 border-t border-outline-variant divide-y divide-outline-variant">
              {railStories.map((story) => (
                <article key={story.slug} className="py-3.5 first:pt-4 last:pb-0 group">
                  <Link href={`/news/${story.slug}`} className="flex items-start gap-1.5">
                    <svg
                      viewBox="0 0 16 16"
                      className="w-3.5 h-3.5 shrink-0 mt-0.5 text-on-surface-variant group-hover:text-primary"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.75"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2 11.5 6 7.5l3 3 5-6" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 4.5H14V8" />
                    </svg>
                    <h4 className="font-headline text-[13.5px] leading-snug font-bold text-on-surface group-hover:text-primary group-hover:underline">
                      {story.title}
                    </h4>
                  </Link>
                  {story.summary && (
                    <p className="font-body text-[12px] leading-relaxed text-on-surface-variant mt-1 line-clamp-2">
                      {story.summary}
                    </p>
                  )}
                </article>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
