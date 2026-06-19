/**
 * MCQ Quiz Widget for Plus UI Blogger Theme
 * Single-file self-contained widget
 * 
 * Usage in Blogger post:
 * <div class="quiz-app-root" id="my-quiz"></div>
 * <script src="https://your-github-username.github.io/repo-name/mcq-quiz.js"></script>
 */

(function() {
  'use strict';

  // ─── CSS ───
  const QUIZ_CSS = `
/* ==========================================================================
   MCQ QUIZ — Plus UI v3.7.0 Compatible Stylesheet
   Breakpoints: 520px, 640px, 768px, 896px, 1100px
   ========================================================================== */

/* ─── Theme & Color Mapping ─── */
:root{
  --accent: var(--linkC, #1976d2);
  --accent-soft: color-mix(in srgb, var(--accent) 15%, transparent);
  --accent-bg: color-mix(in srgb, var(--accent) 8%, var(--paper, #fffdfc));
  --ink: var(--headC, #08102b);
  --ink-soft: var(--bodyCa, #989b9f);
  --ink-muted: var(--bodyCa, #989b9f);
  --paper: var(--contentB, #fffdfc);
  --paper-sunken: var(--bodyB, #fdfcff);
  --paper-elevated: var(--contentB, #fffdfc);
  --line: var(--contentL, #e6e6e6);
  --line-strong: var(--contentLa, #b5b5b4);
  --good: #10b981;
  --good-soft: rgba(16, 185, 129, 0.12);
  --good-bg: rgba(16, 185, 129, 0.06);
  --bad: #ef4444;
  --bad-soft: rgba(239, 68, 68, 0.12);
  --bad-bg: rgba(239, 68, 68, 0.06);
  --warn: #f59e0b;
  --warn-soft: rgba(245, 158, 11, 0.12);
  --warn-bg: rgba(245, 158, 11, 0.06);
  --radius-sm: 8px;
  --radius: 12px;
  --radius-lg: 16px;
  --radius-xl: 20px;
  --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  --shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
  --font-sans: var(--fontB, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, Noto Sans, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", Segoe UI Symbol, "Noto Color Emoji");
  --font-mono: var(--fontC, ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace);
}

/* ─── Dark Mode ─── */
.quiz-app-root .drK .quiz-app-root, :root:not(.lzD) .modI:checked ~ .mainW .quiz-app-root{
  --ink: var(--darkT, #fffdfc);
  --ink-soft: var(--darkTa, #989b9f);
  --ink-muted: var(--darkTa, #989b9f);
  --paper: var(--darkBa, #2d2d30);
  --paper-sunken: var(--darkB, #1e1e1e);
  --paper-elevated: var(--darkBa, #2d2d30);
  --line: #444444;
  --line-strong: #696969;
  --accent-soft: color-mix(in srgb, var(--accent) 15%, transparent);
  --accent-bg: color-mix(in srgb, var(--accent) 8%, var(--darkBa, #2d2d30));
}

/* ─── Theme Colors ─── */
:root.csN:not(.cs0) .quiz-app-root{
  --accent: var(--linkC, #1976d2);
}

/* ─── Box Design ─── */
.quiz-app-root .bX .quiz-app-root .question-card, .quiz-app-root .bX .quiz-app-root .review-card, .quiz-app-root .bX .quiz-app-root .subject-card, .quiz-app-root .bX .quiz-app-root .stat-pill{
  box-shadow: var(--bs-1, 0 5px 35px rgb(0 0 0 / 7%));
}


*{ box-sizing: border-box; margin: 0; padding: 0; }

html{ scroll-behavior: smooth; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }

body{
  font-family: var(--font-sans);
  background: var(--paper-sunken);
  color: var(--ink);
  line-height: 1.6;
  min-height: 100vh;
}

.quiz-app-root img, .quiz-app-root svg{ max-width: 100%; display: block; }

.quiz-app-root button{ font-family: inherit; }

/* ---------- Quiz App Container ---------- */
.quiz-app-root #quiz-app{
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.quiz-app-root .quiz-shell{ width: 100%; flex: 1; display: flex; flex-direction: column; }

.quiz-app-root .quiz-inner{
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}


/* ---------- Sticky Header ---------- */
.quiz-app-root #quiz-sticky-header{
  position: sticky;
  top: 0;
  z-index: 100;
  width: 100%;
  background: rgba(255, 255, 255, 0.92);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--line);
  box-shadow: var(--shadow-sm);
  transform: translateY(-100%);
  opacity: 0;
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s ease;
  pointer-events: none;
}

.quiz-app-root #quiz-sticky-header.active{
  transform: translateY(0);
  opacity: 1;
  pointer-events: auto;
}

.quiz-app-root .quiz-header-inner{
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 14px 24px 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}

.quiz-app-root #quiz-subject-title{
  font-weight: 800;
  font-size: clamp(1rem, 2vw, 1.25rem);
  letter-spacing: -0.02em;
  color: var(--ink);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.quiz-app-root #timer{
  font-family: var(--font-mono);
  font-weight: 700;
  font-size: 0.95rem;
  padding: 6px 14px;
  border-radius: 999px;
  background: var(--paper-sunken);
  color: var(--ink-soft);
  border: 1px solid var(--line);
  transition: all 0.3s ease;
  flex-shrink: 0;
}

.quiz-app-root #timer.warning{
  background: var(--bad-soft);
  border-color: var(--bad);
  color: var(--bad);
  animation: pulseWarn 1.2s ease-in-out infinite;
}

@keyframes pulseWarn {
  0%, 100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(239, 68, 68, 0.3); }
  50% { transform: scale(1.03); box-shadow: 0 0 0 8px rgba(239, 68, 68, 0); }
}

.quiz-app-root .progress-track{
  width: 100%;
  height: 4px;
  background: var(--line);
  position: relative;
  overflow: hidden;
}

.quiz-app-root .progress-fill{
  height: 100%;
  width: 0%;
  background: linear-gradient(90deg, var(--accent), color-mix(in srgb, var(--accent) 70%, #60a5fa));
  transition: width 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  border-radius: 0 2px 2px 0;
}

.quiz-app-root .progress-text{
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 6px 24px 10px;
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--ink-muted);
  text-align: right;
  letter-spacing: 0.02em;
}


/* ---------- Screens ---------- */
.quiz-app-root .screen{
  display: none;
  width: 100%;
  animation: fadeIn 0.4s ease;
}

.quiz-app-root .screen.active{ display: block; }

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

/* ==========================================================================
   SCREEN 1: SUBJECT SELECTION — Redesigned
   ========================================================================== */

.quiz-app-root .hero{
  width: 100%;
  padding: 80px 24px 48px;
  text-align: center;
  background: linear-gradient(180deg, 
    color-mix(in srgb, var(--accent) 10%, white) 0%, 
    var(--paper) 100%);
  border-bottom: 1px solid var(--line);
  position: relative;
  overflow: hidden;
}

.quiz-app-root .hero::before{
  content: "";
  position: absolute;
  top: -40%;
  left: 50%;
  transform: translateX(-50%);
  width: 900px;
  height: 900px;
  background: radial-gradient(circle, var(--accent-soft) 0%, transparent 65%);
  pointer-events: none;
}

.quiz-app-root .hero::after{
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--line-strong), transparent);
}

.quiz-app-root .hero-content{
  position: relative;
  z-index: 1;
  max-width: 640px;
  margin: 0 auto;
}

.quiz-app-root .hero-badge{
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 14px;
  background: var(--accent-bg);
  border: 1px solid color-mix(in srgb, var(--accent) 20%, transparent);
  border-radius: 999px;
  font-size: 0.8rem;
  font-weight: 700;
  color: var(--accent);
  margin-bottom: 20px;
  letter-spacing: 0.02em;
}

.quiz-app-root .hero h2{
  margin: 0 0 14px;
  font-weight: 900;
  letter-spacing: -0.04em;
  font-size: clamp(2rem, 6vw, 3.2rem);
  color: var(--ink);
  line-height: 1.1;
}

.quiz-app-root .hero p{
  margin: 0 auto;
  max-width: 480px;
  color: var(--ink-soft);
  font-size: clamp(1rem, 1.6vw, 1.15rem);
  line-height: 1.65;
}

/* ---------- Subjects Grid ---------- */
.quiz-app-root .subjects-grid{
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 24px 80px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 24px;
}



/* ---------- Subject Card — Redesigned with Image & Full-Width Button ---------- */
.quiz-app-root .subject-card{
  --subject-color: var(--accent);
  width: 100%;
  background: var(--paper-elevated);
  border: 1px solid var(--line);
  border-radius: var(--radius-xl);
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: var(--shadow-sm);
}

.quiz-app-root .subject-card:hover{
  transform: translateY(-6px);
  box-shadow: var(--shadow-xl);
  border-color: color-mix(in srgb, var(--subject-color) 30%, var(--line));
}

.quiz-app-root .subject-card:active{
  transform: translateY(-3px) scale(0.99);
}

/* Top accent bar */
.quiz-app-root .subject-card::before{
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: var(--subject-color);
  z-index: 2;
}

/* Image Section */
.quiz-app-root .subject-image-wrap{
  width: 100%;
  height: 180px;
  position: relative;
  overflow: hidden;
  background: color-mix(in srgb, var(--subject-color) 10%, var(--paper-sunken));
}

.quiz-app-root .subject-image-wrap img{
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}

.quiz-app-root .subject-card:hover .subject-image-wrap img{
  transform: scale(1.1);
}

.quiz-app-root .subject-image-overlay{
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, 
    transparent 40%, 
    color-mix(in srgb, var(--subject-color) 25%, transparent) 100%);
  pointer-events: none;
}

/* Body Section */
.quiz-app-root .subject-body{
  padding: 22px 22px 24px;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.quiz-app-root .subject-meta{
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 14px;
}

.quiz-app-root .icon-wrap{
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  border-radius: var(--radius);
  background: color-mix(in srgb, var(--subject-color) 12%, white);
  border: 1px solid color-mix(in srgb, var(--subject-color) 20%, transparent);
  flex-shrink: 0;
  transition: transform 0.3s ease;
}

.quiz-app-root .subject-card:hover .icon-wrap{
  transform: scale(1.1) rotate(-4deg);
}

.quiz-app-root .subject-title-group{
  flex: 1;
  min-width: 0;
}

.quiz-app-root .subject-name{
  font-weight: 800;
  font-size: 1.15rem;
  color: var(--ink);
  letter-spacing: -0.01em;
  line-height: 1.3;
}

.quiz-app-root .subject-count{
  font-size: 0.82rem;
  color: var(--ink-muted);
  font-weight: 600;
  margin-top: 2px;
}

.quiz-app-root .subject-prev-score{
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 0.78rem;
  font-weight: 800;
  color: var(--subject-color);
  background: color-mix(in srgb, var(--subject-color) 10%, white);
  padding: 4px 12px;
  border-radius: 999px;
  border: 1px solid color-mix(in srgb, var(--subject-color) 18%, transparent);
  margin-bottom: 16px;
  width: fit-content;
}

/* Full-Width Start Button */
.quiz-app-root .subject-start-btn{
  width: 100%;
  margin-top: auto;
  padding: 14px 20px;
  border: 0;
  border-radius: var(--radius);
  background: var(--subject-color);
  color: #fff;
  font-family: inherit;
  font-weight: 800;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: 0 4px 14px color-mix(in srgb, var(--subject-color) 40%, transparent);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  letter-spacing: 0.01em;
  position: relative;
  overflow: hidden;
}

.quiz-app-root .subject-start-btn::after{
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(255,255,255,0.2) 0%, transparent 100%);
  opacity: 0;
  transition: opacity 0.2s ease;
}

.quiz-app-root .subject-start-btn:hover{
  transform: translateY(-2px);
  box-shadow: 0 8px 24px color-mix(in srgb, var(--subject-color) 55%, transparent);
}

.quiz-app-root .subject-start-btn:hover::after{
  opacity: 1;
}

.quiz-app-root .subject-start-btn:active{
  transform: translateY(0) scale(0.98);
}

/* ---------- Questions ---------- */
.quiz-app-root .questions-wrapper{
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  padding: 32px 24px 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.quiz-app-root .question-card{
  width: 100%;
  padding: 28px;
  background: var(--paper-elevated);
  border: 1px solid var(--line);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
  animation: cardIn 0.5s ease both;
  transition: box-shadow 0.3s ease;
}

.quiz-app-root .question-card:hover{
  box-shadow: var(--shadow);
}

@keyframes cardIn {
  from { opacity: 0; transform: translateY(12px); }
  to { opacity: 1; transform: translateY(0); }
}

.quiz-app-root .q-header{
  display: flex;
  align-items: flex-start;
  gap: 14px;
  margin-bottom: 20px;
}

.quiz-app-root .q-badge{
  flex: 0 0 auto;
  width: 34px;
  height: 34px;
  border-radius: 10px;
  background: var(--accent);
  color: #fff;
  font-weight: 800;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px color-mix(in srgb, var(--accent) 40%, transparent);
}

.quiz-app-root .q-text{
  font-weight: 700;
  font-size: 1.05rem;
  line-height: 1.55;
  color: var(--ink);
  padding-top: 4px;
}

.quiz-app-root .options-grid{
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
}


.quiz-app-root .option-btn{
  width: 100%;
  display: flex;
  align-items: center;
  gap: 12px;
  text-align: left;
  padding: 14px 16px;
  background: var(--paper-sunken);
  border: 1.5px solid var(--line);
  border-radius: var(--radius);
  font-family: inherit;
  font-size: 0.95rem;
  font-weight: 500;
  color: var(--ink);
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;
  overflow: hidden;
}

.quiz-app-root .option-btn::before{
  content: "";
  position: absolute;
  inset: 0;
  background: var(--accent);
  opacity: 0;
  transition: opacity 0.2s ease;
}

.quiz-app-root .option-btn:hover:not(:disabled){
  border-color: var(--accent);
  background: var(--accent-bg);
  transform: translateX(4px);
}

.quiz-app-root .option-btn:hover:not(:disabled)::before{
  opacity: 0.03;
}

.quiz-app-root .option-btn:active:not(:disabled){ transform: translateX(2px) scale(0.99); }

.quiz-app-root .option-btn:disabled{ cursor: default; }

.quiz-app-root .opt-label{
  flex: 0 0 auto;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: var(--paper);
  border: 2px solid var(--line-strong);
  font-weight: 800;
  font-size: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--ink-soft);
  transition: all 0.2s ease;
  position: relative;
  z-index: 1;
}

.quiz-app-root .opt-text{ 
  flex: 1 1 auto; 
  line-height: 1.45; 
  position: relative; 
  z-index: 1;
}

.quiz-app-root .opt-icon{
  flex: 0 0 auto;
  font-weight: 800;
  font-size: 1.1rem;
  width: 24px;
  text-align: center;
  position: relative;
  z-index: 1;
}

/* Option States */
.quiz-app-root .option-btn.correct{
  background: var(--good-bg);
  border-color: var(--good);
  color: #065f46;
}
.quiz-app-root .option-btn.correct .opt-label{ 
  background: var(--good); 
  border-color: var(--good); 
  color: #fff; 
}
.quiz-app-root .option-btn.correct .opt-icon{ color: var(--good); }

.quiz-app-root .option-btn.wrong{
  background: var(--bad-bg);
  border-color: var(--bad);
  color: #991b1b;
}
.quiz-app-root .option-btn.wrong .opt-label{ 
  background: var(--bad); 
  border-color: var(--bad); 
  color: #fff; 
}
.quiz-app-root .option-btn.wrong .opt-icon{ color: var(--bad); }

.quiz-app-root .option-btn.dim{ 
  opacity: 0.45; 
  filter: grayscale(0.3);
}

/* ---------- Explanation ---------- */
.quiz-app-root .toggle-exp-btn{
  margin: 18px 0 0;
  padding: 8px 14px;
  border: 1px solid var(--line);
  background: var(--paper);
  color: var(--accent);
  font-weight: 700;
  font-size: 0.85rem;
  cursor: pointer;
  border-radius: var(--radius-sm);
  transition: all 0.2s ease;
  display: inline-flex;
  align-items: center;
  gap: 6px;
}

.quiz-app-root .toggle-exp-btn:hover{
  background: var(--accent-bg);
  border-color: var(--accent);
}

.quiz-app-root .toggle-exp-btn::after{
  content: "▼";
  font-size: 0.7rem;
  transition: transform 0.3s ease;
}

.quiz-app-root .toggle-exp-btn.expanded::after{
  transform: rotate(180deg);
}

.quiz-app-root .explanation-box{
  width: 100%;
  max-height: 0;
  overflow: hidden;
  opacity: 0;
  font-size: 0.9rem;
  line-height: 1.65;
  color: var(--ink-soft);
  background: linear-gradient(135deg, var(--paper-sunken) 0%, color-mix(in srgb, var(--accent) 3%, white) 100%);
  border-left: 3px solid var(--accent);
  border-radius: 0 var(--radius-sm) var(--radius-sm) 0;
  transition: max-height 0.4s cubic-bezier(0.16, 1, 0.3, 1), 
              opacity 0.3s ease, 
              margin 0.3s ease, 
              padding 0.3s ease;
}

.quiz-app-root .explanation-box.show{
  max-height: 500px;
  opacity: 1;
  margin-top: 14px;
  padding: 16px 18px;
}

/* ---------- Quiz Actions ---------- */
.quiz-app-root .quiz-actions{
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  padding: 12px 24px 56px;
  display: flex;
  gap: 14px;
  justify-content: space-between;
  flex-wrap: wrap;
}

/* ---------- Buttons ---------- */
.quiz-app-root .btn{
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 14px 24px;
  border: 0;
  border-radius: var(--radius);
  font-family: inherit;
  font-weight: 700;
  font-size: 0.95rem;
  cursor: pointer;
  white-space: nowrap;
  transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
  position: relative;
  overflow: hidden;
}

.quiz-app-root .btn::after{
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(255,255,255,0.15) 0%, transparent 100%);
  opacity: 0;
  transition: opacity 0.2s ease;
}

.quiz-app-root .btn:hover::after{ opacity: 1; }
.quiz-app-root .btn:active{ transform: scale(0.97); }

.quiz-app-root .btn-primary{
  background: var(--accent);
  color: #fff;
  box-shadow: 0 4px 14px color-mix(in srgb, var(--accent) 40%, transparent);
}

.quiz-app-root .btn-primary:hover{
  box-shadow: 0 6px 20px color-mix(in srgb, var(--accent) 55%, transparent);
  transform: translateY(-1px);
}

.quiz-app-root .btn-secondary{
  background: var(--paper);
  color: var(--ink-soft);
  border: 1.5px solid var(--line-strong);
}

.quiz-app-root .btn-secondary:hover{
  border-color: var(--ink-muted);
  background: var(--paper-sunken);
  color: var(--ink);
}

/* ---------- Results Screen ---------- */
.quiz-app-root .result-hero{
  width: 100%;
  padding: 56px 24px 40px;
  text-align: center;
  background: linear-gradient(180deg, 
    color-mix(in srgb, var(--accent) 6%, white) 0%, 
    var(--paper) 60%);
  border-bottom: 1px solid var(--line);
  position: relative;
  overflow: hidden;
}

.quiz-app-root .result-hero::before{
  content: "";
  position: absolute;
  top: -60%;
  left: 50%;
  transform: translateX(-50%);
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, var(--accent-soft) 0%, transparent 70%);
  pointer-events: none;
}

.quiz-app-root .score-ring-wrap{
  position: relative;
  z-index: 1;
  margin-bottom: 20px;
}

.quiz-app-root .score-ring{
  width: 150px;
  height: 150px;
  margin: 0 auto;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: var(--paper);
  border: 5px solid var(--line);
  position: relative;
  box-shadow: var(--shadow-lg);
}

.quiz-app-root .score-ring::before{
  content: "";
  position: absolute;
  inset: -5px;
  border-radius: 50%;
  border: 5px solid transparent;
  border-top-color: var(--accent);
  border-right-color: var(--accent);
  transform: rotate(-45deg);
  transition: transform 1s cubic-bezier(0.16, 1, 0.3, 1);
}

.quiz-app-root .score-percent{
  font-weight: 900;
  font-size: 2rem;
  color: var(--ink);
  line-height: 1;
  letter-spacing: -0.02em;
}

.quiz-app-root .score-label{
  margin-top: 6px;
  font-size: 0.75rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--ink-muted);
}

.quiz-app-root .result-hero h2{
  margin: 0 0 20px;
  font-weight: 900;
  font-size: clamp(1.4rem, 3.5vw, 1.9rem);
  color: var(--ink);
  letter-spacing: -0.02em;
  position: relative;
  z-index: 1;
}

.quiz-app-root .stats-row{
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 14px;
  flex-wrap: wrap;
  position: relative;
  z-index: 1;
}

.quiz-app-root .stat-pill{
  min-width: 100px;
  padding: 16px 20px;
  background: var(--paper);
  border: 1px solid var(--line);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.quiz-app-root .stat-pill:hover{
  transform: translateY(-2px);
  box-shadow: var(--shadow);
}

.quiz-app-root .stat-value{
  font-weight: 900;
  font-size: 1.5rem;
  color: var(--ink);
  line-height: 1;
}

.quiz-app-root .stat-label{
  margin-top: 6px;
  font-size: 0.72rem;
  font-weight: 700;
  color: var(--ink-muted);
  text-transform: uppercase;
  letter-spacing: 0.06em;
}

/* ---------- Review Section ---------- */
.quiz-app-root .review-wrapper{
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  padding: 32px 24px 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.quiz-app-root .review-card{
  width: 100%;
  padding: 22px 24px;
  background: var(--paper-elevated);
  border: 1px solid var(--line);
  border-left: 4px solid var(--line);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
  transition: box-shadow 0.2s ease;
}

.quiz-app-root .review-card:hover{
  box-shadow: var(--shadow);
}

.quiz-app-root .review-card.correct-border{ border-left-color: var(--good); }
.quiz-app-root .review-card.wrong-border{ border-left-color: var(--bad); }
.quiz-app-root .review-card.unanswered-border{ border-left-color: var(--warn); }

.quiz-app-root .review-status{
  display: inline-flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 12px;
  padding: 4px 12px;
  border-radius: 999px;
  font-size: 0.72rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.quiz-app-root .review-status.correct{ background: var(--good-soft); color: #065f46; }
.quiz-app-root .review-status.wrong{ background: var(--bad-soft); color: #991b1b; }
.quiz-app-root .review-status.unanswered{ background: var(--warn-soft); color: #92400e; }

.quiz-app-root .review-status::before{
  content: "";
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: currentColor;
}

.quiz-app-root .review-question{
  font-weight: 800;
  margin-bottom: 12px;
  font-size: 1.05rem;
  line-height: 1.45;
  color: var(--ink);
}

.quiz-app-root .review-answer-row{
  width: 100%;
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  margin-bottom: 10px;
}

.quiz-app-root .ans-box{
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.9rem;
}

.quiz-app-root .ans-label{ 
  color: var(--ink-muted); 
  font-weight: 600; 
  font-size: 0.85rem;
}

.quiz-app-root .ans-value{
  font-weight: 800;
  padding: 3px 10px;
  border-radius: 6px;
  font-size: 0.9rem;
}

.quiz-app-root .ans-value.correct-ans{ background: var(--good-soft); color: #065f46; }
.quiz-app-root .ans-value.wrong-ans{ background: var(--bad-soft); color: #991b1b; }
.quiz-app-root .ans-value.unanswered-ans{ background: var(--warn-soft); color: #92400e; }

.quiz-app-root .review-exp{
  margin-top: 10px;
  font-size: 0.9rem;
  line-height: 1.65;
  color: var(--ink-soft);
  padding: 12px 14px;
  background: var(--paper-sunken);
  border-radius: var(--radius-sm);
  border-left: 3px solid var(--line-strong);
}

.quiz-app-root .result-actions{
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  padding: 12px 24px 64px;
  display: flex;
  gap: 14px;
  justify-content: center;
  flex-wrap: wrap;
}

/* ---------- Scrollbar ---------- */
::-webkit-scrollbar{ width: 8px; }
::-webkit-scrollbar-track{ background: var(--paper-sunken); }
::-webkit-scrollbar-thumb{ background: var(--line-strong); border-radius: 4px; }
::-webkit-scrollbar-thumb:hover{ background: var(--ink-muted); }

/* ---------- Reduced Motion ---------- */

/* ---------- Mobile Optimizations ---------- */

/* ---------- Print Styles ---------- */


/* ==========================================================================
   PLUS UI RESPONSIVE INTEGRATION
   Breakpoints: 520px | 640px | 768px | 896px | 1100px
   ========================================================================== */

/* ─── 1100px: Large desktop / Sidebar layouts ─── */
@media screen and (max-width: 1100px) {
.quiz-app-root .subjects-grid{
    grid-template-columns: repeat(2, 1fr);
  }
.quiz-app-root .itemFt .itm{
    --thWd: 50%;
  }
.quiz-app-root .itemFt .pSnpt{
    display: none;
  }
}

/* ─── 896px: Tablet / Mobile nav switch ─── */
@media screen and (max-width: 896px) {
.quiz-app-root .quiz-header-inner{
    padding: 12px 16px 10px;
  }
.quiz-app-root .progress-text{
    padding: 6px 16px 10px;
  }
.quiz-app-root #quiz-sticky-header{
    top: 0;
  }
.quiz-app-root .mainH:not(.s):not(.a){
    position: relative;
  }
.quiz-app-root .subjects-grid{
    grid-template-columns: repeat(2, 1fr);
    padding: 28px 16px 60px;
    gap: 20px;
  }
.quiz-app-root .hero{
    padding: 60px 16px 36px;
  }
.quiz-app-root .itemFt .pSnpt{
    display: -webkit-box;
  }
}



/* ─── 520px: Small phones / Portrait phones ─── */
@media screen and (max-width: 520px) {
.quiz-app-root .subjects-grid{
    grid-template-columns: 1fr;
    gap: 16px;
  }
.quiz-app-root .subject-card{
    border-radius: var(--radius-lg, 16px);
  }
.quiz-app-root .subject-start-btn{
    padding: 12px 16px;
    font-size: 0.9rem;
  }
.quiz-app-root .hero{
    padding: 48px 16px 32px;
  }
.quiz-app-root .hero-badge{
    font-size: 0.75rem;
    padding: 5px 12px;
  }
.quiz-app-root .hero h2{
    font-size: 1.6rem;
  }
.quiz-app-root .q-badge{
    width: 30px;
    height: 30px;
    font-size: 0.8rem;
  }
.quiz-app-root .q-text{
    font-size: 0.95rem;
  }
.quiz-app-root .option-btn{
    padding: 10px 12px;
    gap: 8px;
  }
.quiz-app-root .opt-label{
    width: 24px;
    height: 24px;
    font-size: 0.7rem;
  }
.quiz-app-root .toggle-exp-btn{
    font-size: 0.8rem;
    padding: 6px 10px;
  }
.quiz-app-root .explanation-box.show{
    padding: 12px 14px;
  }
.quiz-app-root .btn{
    padding: 12px 18px;
    font-size: 0.9rem;
  }
.quiz-app-root .result-hero{
    padding: 40px 16px 32px;
  }
.quiz-app-root .stats-row{
    gap: 10px;
  }
.quiz-app-root .stat-pill{
    min-width: 70px;
    padding: 10px 12px;
  }
.quiz-app-root .stat-value{
    font-size: 1.2rem;
  }
.quiz-app-root .review-question{
    font-size: 0.95rem;
  }
.quiz-app-root .ans-value{
    font-size: 0.85rem;
  }
.quiz-app-root .score-ring{
    width: 100px;
    height: 100px;
    border-width: 4px;
  }
.quiz-app-root .score-percent{
    font-size: 1.4rem;
  }
.quiz-app-root .score-label{
    font-size: 0.65rem;
  }
.quiz-app-root .timer{
    font-size: 0.85rem;
    padding: 4px 10px;
  }
.quiz-app-root .progress-text{
    font-size: 0.7rem;
  }
}

/* ─── Print styles (no breakpoint, always active) ─── */
@media print {
  .quiz-app-root #quiz-sticky-header,
  .quiz-app-root .quiz-actions,
.quiz-app-root .result-actions, .quiz-app-root .toggle-exp-btn{
    display: none !important;
  }
.quiz-app-root .screen{
    display: block !important;
  }
.quiz-app-root .question-card, .quiz-app-root .review-card{
    break-inside: avoid;
    box-shadow: none;
    border: 1px solid #ccc;
  }
}

/* ─── Reduced motion ─── */
@media (prefers-reduced-motion: reduce) {
  .quiz-app-root *,
.quiz-app-root *::before, .quiz-app-root *::after{
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
.quiz-app-root html{
    scroll-behavior: auto;
  }
}

`;

  // ─── Inject CSS once ───
  (function injectStyles() {
    if (document.getElementById('mcq-quiz-styles')) return;
    const style = document.createElement('style');
    style.id = 'mcq-quiz-styles';
    style.textContent = QUIZ_CSS;
    document.head.appendChild(style);
  });

  // ─── HTML Template ───
  const QUIZ_HTML = `<div class="quiz-shell">
    <div id="quiz-sticky-header">
      <div class="quiz-header-inner">
        <div id="quiz-subject-title">Subject</div>
        <div id="timer">10:00</div>
      </div>
      <div class="progress-track">
        <div class="progress-fill" id="progress-fill"></div>
      </div>
      <div class="progress-text" id="progress-text">0/0 Answered</div>
    </div>
    <section id="screen-subjects" class="screen active">
      <div class="hero">
        <div class="hero-content">
          <div class="hero-badge">🎯 Practice Mode</div>
          <h2>Choose a Subject</h2>
          <p>Select a subject to start practicing MCQs. Your previous scores are saved automatically in your browser.</p>
        </div>
      </div>
      <div class="subjects-grid" id="subjects-grid"></div>
    </section>
    <section id="screen-quiz" class="screen">
      <div class="questions-wrapper" id="questions-container"></div>
      <div class="quiz-actions">
        <button class="btn btn-secondary" onclick="MCQQuiz.backToSubjects()">
          <span>←</span> Back to Subjects
        </button>
        <button class="btn btn-primary" onclick="MCQQuiz.submitTest()">
          Submit Test <span>✓</span>
        </button>
      </div>
    </section>
    <section id="screen-result" class="screen">
      <div class="result-hero" id="result-hero">
        <div class="score-ring-wrap">
          <div class="score-ring">
            <div class="score-percent" id="score-percent">0%</div>
            <div class="score-label">Score</div>
          </div>
        </div>
        <h2 id="result-subject-name">Subject</h2>
        <div class="stats-row">
          <div class="stat-pill">
            <div class="stat-value" id="stat-correct">0</div>
            <div class="stat-label">Correct</div>
          </div>
          <div class="stat-pill">
            <div class="stat-value" id="stat-wrong">0</div>
            <div class="stat-label">Wrong</div>
          </div>
          <div class="stat-pill">
            <div class="stat-value" id="stat-unanswered">0</div>
            <div class="stat-label">Unanswered</div>
          </div>
        </div>
      </div>
      <div class="review-wrapper" id="review-container"></div>
      <div class="result-actions">
        <button class="btn btn-secondary" onclick="MCQQuiz.chooseAnotherSubject()">
          <span>📚</span> Choose Another Subject
        </button>
        <button class="btn btn-primary" onclick="MCQQuiz.retrySubject()">
          <span>↻</span> Retry Same Subject
        </button>
      </div>
    </section>
  </div>`;

  // ─── Quiz Data ───
  const subjectsData = {
  "Biology": {
    color: "#16a085",
    icon: "🧬",
    image: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&w=600&q=80",
    questions: [
      {
        "Q.No": "1",
        "Question": "What is biodiversity?",
        "Option A": "Variety of life on Earth",
        "Option B": "Only plants diversity",
        "Option C": "Only animal diversity",
        "Option D": "Only microbial diversity",
        "Correct Option": "A",
        "Explanation": "Biodiversity refers to the variety of all life forms on Earth, including plants, animals, fungi, and microorganisms."
      },
      {
        "Q.No": "2",
        "Question": "Which organelle is known as the powerhouse of the cell?",
        "Option A": "Nucleus",
        "Option B": "Mitochondria",
        "Option C": "Ribosome",
        "Option D": "Golgi apparatus",
        "Correct Option": "B",
        "Explanation": "Mitochondria generate most of the cell's supply of ATP, used as a source of chemical energy."
      },
      {
        "Q.No": "3",
        "Question": "What gas do plants absorb from the atmosphere for photosynthesis?",
        "Option A": "Oxygen",
        "Option B": "Nitrogen",
        "Option C": "Carbon Dioxide",
        "Option D": "Hydrogen",
        "Correct Option": "C",
        "Explanation": "Plants absorb carbon dioxide and use it along with sunlight and water to produce glucose and oxygen."
      }
    ]
  },
  "Chemistry": {
    color: "#8e44ad",
    icon: "⚗️",
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=600&q=80",
    questions: [
      {
        "Q.No": "1",
        "Question": "What is the chemical symbol for Gold?",
        "Option A": "Gd",
        "Option B": "Go",
        "Option C": "Au",
        "Option D": "Ag",
        "Correct Option": "C",
        "Explanation": "Gold's chemical symbol 'Au' comes from its Latin name 'Aurum'."
      },
      {
        "Q.No": "2",
        "Question": "What is the pH of a neutral solution?",
        "Option A": "0",
        "Option B": "7",
        "Option C": "14",
        "Option D": "1",
        "Correct Option": "B",
        "Explanation": "A pH of 7 is considered neutral, neither acidic nor basic."
      }
    ]
  },
  "Physics": {
    color: "#2980b9",
    icon: "⚛️",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=600&q=80",
    questions: [
      {
        "Q.No": "1",
        "Question": "What is the SI unit of Force?",
        "Option A": "Joule",
        "Option B": "Watt",
        "Option C": "Newton",
        "Option D": "Pascal",
        "Correct Option": "C",
        "Explanation": "The Newton (N) is the SI unit of force, defined as the force needed to accelerate 1 kg at 1 m/s²."
      },
      {
        "Q.No": "2",
        "Question": "Who proposed the theory of relativity?",
        "Option A": "Isaac Newton",
        "Option B": "Albert Einstein",
        "Option C": "Niels Bohr",
        "Option D": "Galileo Galilei",
        "Correct Option": "B",
        "Explanation": "Albert Einstein proposed the theory of relativity in the early 20th century."
      }
    ]
  },
  "Mathematics": {
    color: "#d35400",
    icon: "📐",
    image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=600&q=80",
    questions: [
      {
        "Q.No": "1",
        "Question": "What is the value of π (Pi) approximately?",
        "Option A": "3.14",
        "Option B": "2.71",
        "Option C": "1.61",
        "Option D": "4.13",
        "Correct Option": "A",
        "Explanation": "Pi (π) is approximately equal to 3.14159, representing the ratio of a circle's circumference to its diameter."
      },
      {
        "Q.No": "2",
        "Question": "What is the square root of 144?",
        "Option A": "10",
        "Option B": "11",
        "Option C": "12",
        "Option D": "14",
        "Correct Option": "C",
        "Explanation": "12 × 12 = 144, so the square root of 144 is 12."
      }
    ]
  },
  "English": {
    color: "#c0392b",
    icon: "📖",
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=600&q=80",
    questions: [
      {
        "Q.No": "1",
        "Question": "Which word is a synonym for 'Happy'?",
        "Option A": "Sad",
        "Option B": "Joyful",
        "Option C": "Angry",
        "Option D": "Tired",
        "Correct Option": "B",
        "Explanation": "'Joyful' means feeling, expressing, or causing great pleasure and happiness."
      },
      {
        "Q.No": "2",
        "Question": "Identify the noun in: 'The cat sat on the mat.'",
        "Option A": "sat",
        "Option B": "on",
        "Option C": "cat",
        "Option D": "the",
        "Correct Option": "C",
        "Explanation": "'Cat' and 'mat' are nouns; 'cat' is the subject noun performing the action."
      }
    ]
  },
  "Computer Science": {
    color: "#2c3e50",
    icon: "💻",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=600&q=80",
    questions: [
      {
        "Q.No": "1",
        "Question": "What does 'CPU' stand for?",
        "Option A": "Central Processing Unit",
        "Option B": "Computer Personal Unit",
        "Option C": "Central Processor Utility",
        "Option D": "Control Processing Unit",
        "Correct Option": "A",
        "Explanation": "CPU stands for Central Processing Unit, the primary component that executes instructions."
      },
      {
        "Q.No": "2",
        "Question": "Which language is primarily used for styling web pages?",
        "Option A": "HTML",
        "Option B": "CSS",
        "Option C": "JavaScript",
        "Option D": "Python",
        "Correct Option": "B",
        "Explanation": "CSS (Cascading Style Sheets) is used to control the visual presentation of web pages."
      }
    ]
  },
  "History": {
    color: "#a0522d",
    icon: "🏛️",
    image: "https://images.unsplash.com/photo-1461360370896-922624d12aa1?auto=format&fit=crop&w=600&q=80",
    questions: [
      {
        "Q.No": "1",
        "Question": "In which year did World War II end?",
        "Option A": "1943",
        "Option B": "1945",
        "Option C": "1947",
        "Option D": "1950",
        "Correct Option": "B",
        "Explanation": "World War II ended in 1945 with the surrender of Japan in September."
      },
      {
        "Q.No": "2",
        "Question": "Who was the first President of the United States?",
        "Option A": "Thomas Jefferson",
        "Option B": "Abraham Lincoln",
        "Option C": "George Washington",
        "Option D": "John Adams",
        "Correct Option": "C",
        "Explanation": "George Washington served as the first President of the United States from 1789 to 1797."
      }
    ]
  },
  "Geography": {
    color: "#27ae60",
    icon: "🌍",
    image: "https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=600&q=80",
    questions: [
      {
        "Q.No": "1",
        "Question": "Which is the largest continent by area?",
        "Option A": "Africa",
        "Option B": "Asia",
        "Option C": "Europe",
        "Option D": "Antarctica",
        "Correct Option": "B",
        "Explanation": "Asia is the largest continent, covering about 30% of Earth's total land area."
      },
      {
        "Q.No": "2",
        "Question": "Which river is the longest in the world?",
        "Option A": "Amazon",
        "Option B": "Yangtze",
        "Option C": "Nile",
        "Option D": "Mississippi",
        "Correct Option": "C",
        "Explanation": "The Nile River, flowing through northeastern Africa, is generally considered the longest river in the world."
      }
    ]
  }
};

  // ─── State ───
  let currentSubjectName = null;
  let currentQuestions = [];
  let userAnswers = {};
  let timerInterval = null;
  let timeLeft = 0;
  const QUIZ_SECONDS = 600;
  let rootElement = null;

  // ─── Utilities ───
  function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function showScreen(id) {
    if (!rootElement) return;
    rootElement.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    const screen = rootElement.querySelector('#' + id);
    if (screen) screen.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function setSubjectColor(color) {
    if (rootElement) {
      rootElement.style.setProperty('--accent', color);
    }
  }

  function formatTime(seconds) {
    const m = Math.floor(seconds / 60).toString().padStart(2, '0');
    const s = (seconds % 60).toString().padStart(2, '0');
    return m + ':' + s;
  }

  // ─── Storage ───
  function getPrevScore(subject) {
    try {
      const scores = JSON.parse(localStorage.getItem('mcq_scores') || '[]');
      const found = scores.filter(s => s.subject === subject).pop();
      return found ? found.percentage + '%' : null;
    } catch (e) {
      return null;
    }
  }

  function saveScore(data) {
    try {
      const scores = JSON.parse(localStorage.getItem('mcq_scores') || '[]');
      scores.push(data);
      localStorage.setItem('mcq_scores', JSON.stringify(scores));
    } catch (e) {
      console.warn('Could not save score to localStorage');
    }
  }

  // ─── Render Subjects ───
  function renderSubjects() {
    if (!rootElement) return;
    const grid = rootElement.querySelector('#subjects-grid');
    if (!grid) return;
    grid.innerHTML = '';

    Object.entries(subjectsData).forEach(([name, data]) => {
      const prev = getPrevScore(name);
      const card = document.createElement('div');
      card.className = 'subject-card';
      card.style.setProperty('--subject-color', data.color);

      card.innerHTML = `
        <div class="subject-image-wrap">
          <img src="${data.image}" alt="${name}" loading="lazy" onerror="this.style.display='none'">
          <div class="subject-image-overlay"></div>
        </div>
        <div class="subject-body">
          <div class="subject-meta">
            <div class="icon-wrap">${data.icon}</div>
            <div class="subject-title-group">
              <div class="subject-name">${name}</div>
              <div class="subject-count">${data.questions.length} MCQs</div>
            </div>
          </div>
          ${prev ? `<div class="subject-prev-score">🏆 Last: ${prev}</div>` : ''}
          <button class="subject-start-btn" data-subject="${name}">
            Start Quiz <span>→</span>
          </button>
        </div>
      `;

      // Use event delegation instead of inline onclick
      const btn = card.querySelector('.subject-start-btn');
      if (btn) {
        btn.addEventListener('click', function() {
          startQuiz(name);
        });
      }

      grid.appendChild(card);
    });
  }

  // ─── Start Quiz ───
  function startQuiz(subjectName) {
    currentSubjectName = subjectName;
    const data = subjectsData[subjectName];
    setSubjectColor(data.color);
    currentQuestions = shuffle(data.questions);
    userAnswers = {};
    timeLeft = QUIZ_SECONDS;

    const header = rootElement.querySelector('#quiz-sticky-header');
    const title = rootElement.querySelector('#quiz-subject-title');
    const timer = rootElement.querySelector('#timer');

    if (title) title.textContent = subjectName;
    if (header) header.classList.add('active');
    if (timer) timer.classList.remove('warning');

    updateTimerDisplay();
    updateProgress();
    renderQuestions();
    showScreen('screen-quiz');

    clearInterval(timerInterval);
    timerInterval = setInterval(function() {
      timeLeft--;
      updateTimerDisplay();
      if (timeLeft <= 0) {
        clearInterval(timerInterval);
        submitTest(true);
      }
    }, 1000);
  }

  // ─── Timer ───
  function updateTimerDisplay() {
    if (!rootElement) return;
    const el = rootElement.querySelector('#timer');
    if (!el) return;
    el.textContent = formatTime(timeLeft);
    if (timeLeft < 60) {
      el.classList.add('warning');
    } else {
      el.classList.remove('warning');
    }
  }

  // ─── Progress ───
  function updateProgress() {
    if (!rootElement) return;
    const total = currentQuestions.length;
    const answered = Object.keys(userAnswers).length;
    const pct = total ? (answered / total) * 100 : 0;
    const fill = rootElement.querySelector('#progress-fill');
    const text = rootElement.querySelector('#progress-text');
    if (fill) fill.style.width = pct + '%';
    if (text) text.textContent = answered + '/' + total + ' Answered';
  }

  // ─── Render Questions ───
  function renderQuestions() {
    if (!rootElement) return;
    const container = rootElement.querySelector('#questions-container');
    if (!container) return;
    container.innerHTML = '';

    currentQuestions.forEach((q, idx) => {
      const card = document.createElement('div');
      card.className = 'question-card';
      card.id = 'qcard-' + idx;
      card.style.animationDelay = (idx * 0.06) + 's';

      const opts = [
        { key: 'A', text: q['Option A'] },
        { key: 'B', text: q['Option B'] },
        { key: 'C', text: q['Option C'] },
        { key: 'D', text: q['Option D'] }
      ];

      const optionsHtml = opts.map(opt => `
        <button class="option-btn" data-opt="${opt.key}" data-qidx="${idx}">
          <span class="opt-label">${opt.key}</span>
          <span class="opt-text">${opt.text}</span>
          <span class="opt-icon"></span>
        </button>
      `).join('');

      card.innerHTML = `
        <div class="q-header">
          <div class="q-badge">${q['Q.No']}</div>
          <div class="q-text">${q['Question']}</div>
        </div>
        <div class="options-grid">${optionsHtml}</div>
        <button class="toggle-exp-btn" id="expbtn-${idx}">Show Explanation</button>
        <div class="explanation-box" id="exp-${idx}">${q['Explanation']}</div>
      `;

      // Add event listeners for options
      card.querySelectorAll('.option-btn').forEach(btn => {
        btn.addEventListener('click', function() {
          const qidx = parseInt(this.dataset.qidx);
          const opt = this.dataset.opt;
          handleAnswer(qidx, opt);
        });
      });

      // Add event listener for explanation toggle
      const expBtn = card.querySelector('.toggle-exp-btn');
      if (expBtn) {
        expBtn.addEventListener('click', function() {
          const idxMatch = this.id.match(/expbtn-(\d+)/);
          if (idxMatch) toggleExplanation(parseInt(idxMatch[1]));
        });
      }

      container.appendChild(card);
    });
  }

  // ─── Handle Answer ───
  function handleAnswer(qIndex, selected) {
    if (userAnswers[qIndex] !== undefined) return;
    userAnswers[qIndex] = selected;

    const q = currentQuestions[qIndex];
    const correct = q['Correct Option'];
    const card = rootElement.querySelector('#qcard-' + qIndex);
    if (!card) return;
    const buttons = card.querySelectorAll('.option-btn');

    buttons.forEach(btn => {
      const key = btn.dataset.opt;
      btn.disabled = true;
      if (key === correct) {
        btn.classList.add('correct');
        btn.querySelector('.opt-icon').textContent = '✓';
      } else if (key === selected && selected !== correct) {
        btn.classList.add('wrong');
        btn.querySelector('.opt-icon').textContent = '✕';
      } else {
        btn.classList.add('dim');
      }
    });

    updateProgress();
  }

  // ─── Toggle Explanation ───
  function toggleExplanation(idx) {
    if (!rootElement) return;
    const box = rootElement.querySelector('#exp-' + idx);
    const btn = rootElement.querySelector('#expbtn-' + idx);
    if (!box || !btn) return;
    if (box.classList.contains('show')) {
      box.classList.remove('show');
      btn.textContent = 'Show Explanation';
      btn.classList.remove('expanded');
    } else {
      box.classList.add('show');
      btn.textContent = 'Hide Explanation';
      btn.classList.add('expanded');
    }
  }

  // ─── Submit Test ───
  function submitTest(auto) {
    clearInterval(timerInterval);
    const total = currentQuestions.length;
    const answered = Object.keys(userAnswers).length;

    if (!auto && answered < total) {
      if (!confirm('You have answered ' + answered + ' out of ' + total + ' questions. Submit anyway?')) {
        timerInterval = setInterval(function() {
          timeLeft--;
          updateTimerDisplay();
          if (timeLeft <= 0) {
            clearInterval(timerInterval);
            submitTest(true);
          }
        }, 1000);
        return;
      }
    }
    showResults();
  }

  // ─── Back to Subjects ───
  function backToSubjects() {
    clearInterval(timerInterval);
    const header = rootElement.querySelector('#quiz-sticky-header');
    if (header) header.classList.remove('active');
    showScreen('screen-subjects');
  }

  // ─── Show Results ───
  function showResults() {
    showScreen('screen-result');
    const header = rootElement.querySelector('#quiz-sticky-header');
    if (header) header.classList.remove('active');

    const total = currentQuestions.length;
    let correct = 0, wrong = 0, unanswered = 0;

    currentQuestions.forEach((q, i) => {
      const ans = userAnswers[i];
      if (!ans) unanswered++;
      else if (ans === q['Correct Option']) correct++;
      else wrong++;
    });

    const pct = total ? ((correct / total) * 100).toFixed(1) : 0;

    saveScore({
      subject: currentSubjectName,
      correct: correct,
      wrong: wrong,
      unanswered: unanswered,
      total: total,
      percentage: pct,
      date: new Date().toISOString()
    });

    const resultName = rootElement.querySelector('#result-subject-name');
    const scorePercent = rootElement.querySelector('#score-percent');
    const statCorrect = rootElement.querySelector('#stat-correct');
    const statWrong = rootElement.querySelector('#stat-wrong');
    const statUnanswered = rootElement.querySelector('#stat-unanswered');

    if (resultName) resultName.textContent = currentSubjectName;
    if (scorePercent) scorePercent.textContent = pct + '%';
    if (statCorrect) statCorrect.textContent = correct;
    if (statWrong) statWrong.textContent = wrong;
    if (statUnanswered) statUnanswered.textContent = unanswered;

    const revContainer = rootElement.querySelector('#review-container');
    if (!revContainer) return;
    revContainer.innerHTML = '';

    currentQuestions.forEach((q, i) => {
      const ans = userAnswers[i];
      const correctKey = q['Correct Option'];
      const isCorrect = ans === correctKey;
      const isUnanswered = !ans;
      const statusClass = isCorrect ? 'correct' : (isUnanswered ? 'unanswered' : 'wrong');
      const borderClass = isCorrect ? 'correct-border' : (isUnanswered ? 'unanswered-border' : 'wrong-border');
      const statusText = isCorrect ? 'Correct' : (isUnanswered ? 'Unanswered' : 'Wrong');
      const yourAnsClass = isCorrect ? 'correct-ans' : (isUnanswered ? 'unanswered-ans' : 'wrong-ans');
      const yourAnsText = ans || '—';

      const card = document.createElement('div');
      card.className = 'review-card ' + borderClass;
      card.innerHTML = `
        <div class="review-status ${statusClass}">${statusText}</div>
        <div class="review-question">${q['Q.No']}. ${q['Question']}</div>
        <div class="review-answer-row">
          <div class="ans-box">
            <span class="ans-label">Your Answer:</span>
            <span class="ans-value ${yourAnsClass}">${yourAnsText}</span>
          </div>
          <div class="ans-box">
            <span class="ans-label">Correct Answer:</span>
            <span class="ans-value correct-ans">${correctKey}</span>
          </div>
        </div>
        <div class="review-exp">${q['Explanation']}</div>
      `;
      revContainer.appendChild(card);
    });
  }

  // ─── Retry / Choose Another ───
  function retrySubject() {
    startQuiz(currentSubjectName);
  }

  function chooseAnotherSubject() {
    renderSubjects();
    showScreen('screen-subjects');
  }

  // ─── Initialize ───
  function init() {
    // Find all quiz containers
    const containers = document.querySelectorAll('.quiz-app-root');
    containers.forEach(function(container) {
      if (container.dataset.quizInitialized) return;
      container.dataset.quizInitialized = 'true';

      // Inject CSS if not already done
      if (!document.getElementById('mcq-quiz-styles')) {
        const style = document.createElement('style');
        style.id = 'mcq-quiz-styles';
        style.textContent = QUIZ_CSS;
        document.head.appendChild(style);
      }

      // Set root element for this instance
      rootElement = container;

      // Inject HTML
      container.innerHTML = QUIZ_HTML;

      // Add event listeners for action buttons
      const backBtn = container.querySelector('.quiz-actions .btn-secondary');
      if (backBtn) {
        backBtn.addEventListener('click', backToSubjects);
      }

      const submitBtn = container.querySelector('.quiz-actions .btn-primary');
      if (submitBtn) {
        submitBtn.addEventListener('click', function() { submitTest(false); });
      }

      const chooseBtn = container.querySelector('.result-actions .btn-secondary');
      if (chooseBtn) {
        chooseBtn.addEventListener('click', chooseAnotherSubject);
      }

      const retryBtn = container.querySelector('.result-actions .btn-primary');
      if (retryBtn) {
        retryBtn.addEventListener('click', retrySubject);
      }

      // Render subjects
      renderSubjects();
    });
  }

  // ─── Auto-init on DOM ready ───
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // ─── Expose public API ───
  window.MCQQuiz = {
    startQuiz: startQuiz,
    backToSubjects: backToSubjects,
    submitTest: function() { submitTest(false); },
    retrySubject: retrySubject,
    chooseAnotherSubject: chooseAnotherSubject
  };

})();
