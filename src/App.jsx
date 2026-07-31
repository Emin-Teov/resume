import logo from './assets/logo.svg';

import { useTranslation } from 'react-i18next'

import './App.css';
import Nav from './pages/nav';
import Hero from './pages/hero';
import Skills from './pages/skills';
import Experience from './pages/experience';
import Projects from './pages/projects';
import Contact from './pages/contact';


import React, {useState} from 'react';

function App() {
  const { t, i18n } = useTranslation();
  const LANGUAGES = ["az", "en", "ru"];
  const TABS = ["skills", "experience", /* "projects", */ "contact"];

  const PHONE = "+994 77 597 53 19";
  const EMAIL = "e1000.tavakkulov@gmail.com"

  // ── data ────────────────────────────────────────────────────────
  const STACK_LINES = [
    "const developer = 'Emin Tavakkulov';",
    "const role      = 'Full-Stack Developer';",
    "const stack     = ['React','Vue','Node.js','Laravel','Flutter'];",
    "const research  = 'PhD @ ASOIU — IT & Management Systems';",
    "console.log('Open to opportunities →');",
  ];

  const SKILLS = [
    { cat: "Frontend",  items: ["React", "Vue", "JavaScript", "HTML5", "CSS3", "Bootstrap", "jQuery"] },
    { cat: "Backend",   items: ["Node.js", "PHP", "Laravel", "Spring", "Python", "Java"] },
    { cat: "Mobile",    items: ["Flutter", "Dart", "Android Studio"] },
    { cat: "CMS",       items: ["WordPress", "Joomla"] },
    { cat: "Tools",     items: ["Git", "Jira", "Agile", "C/C++"] },
  ];

  const EXPERIENCE = [
    {
      period:  "Oct 2025 — Present",
      role:    "PhD Researcher",
      company: "Azerbaijan State Oil & Industry University",
      detail:  "Information-Measurement & Management Systems. Faculty of Information Technology and Management.",
      type:    "edu",
    },
    {
      period:  "Ongoing",
      role:    "Freelance Full-Stack Developer",
      company: "Independent",
      detail:  "End-to-end delivery across React, Vue, Node.js, Flutter, WordPress and Laravel projects for clients across varied industries.",
      type:    "work",
    },
    {
      period:  "Apr 2021 — Sep 2022",
      role:    "Back-End Developer",
      company: "FANFI LLC — Baku, Azerbaijan",
      detail:  "Built and maintained CMS-based backend systems (Joomla, WordPress) with custom PHP/Java/Python modules. Delivered features in Agile sprints tracked via Jira.",
      type:    "work",
    },
    {
      period:  "Sep 2017 — Jun 2019",
      role:    "Master's Degree — Biomedical Technology Engineering",
      company: "Azerbaijan State Oil & Industry University",
      detail:  "Graduated with Honours. Faculty of Information Technology and Management.",
      type:    "edu",
    },
    {
      period:  "Jun 2019 — Sep 2019",
      role:    "IT Intern",
      company: "Central Bank of the Republic of Azerbaijan",
      detail:  "Rotated through the IT department, building internal tooling and gaining production exposure in a regulated financial environment.",
      type:    "work",
    },
    {
      period:  "Sep 2013 — Jul 2017",
      role:    "Bachelor's Degree — Biomedical Technology Engineering",
      company: "Azerbaijan State Oil & Industry University",
      detail:  "Faculty of Information Technology and Management.",
      type:    "edu",
    },
  ];

  const PROJECTS = [
    {
      name:  "MedLupa",
      desc:  "Medical short-video social network — Flutter mobile app + React web app, real REST API integration, i18n (EN / AZ / RU), video player, follow/like/save system.",
      tags:  ["React", "Flutter", "Node.js", "REST API"],
      color: "#2D7EFF",
    },
    {
      name:  "PVC Window Configurator",
      desc:  "Interactive window-shop configurator with asymmetric L-shaped pane layouts, per-panel pricing, CAD-style dimension previews and PDF quote generation.",
      tags:  ["React", "SVG", "react-pdf", "i18n"],
      color: "#00C9A7",
    },
    {
      name:  "Real-estate Scraper",
      desc:  "Puppeteer-based Node.js scraper for bina.az with stealth mode, multipage traversal, and structured JSON output for listings including images, price and location.",
      tags:  ["Node.js", "Puppeteer", "Cheerio"],
      color: "#FF6B6B",
    },
    {
      name:  "Restaurant QR Menu",
      desc:  "Multilingual React/Vite restaurant menu with QR code entry, animated categories, and a fully responsive dark-mode UI deployed on Render.",
      tags:  ["React", "Vite", "i18n", "CSS"],
      color: "#FFB800",
    },
  ];

  return (
    <>
      <div style={{ maxWidth: 1400, margin: "0 auto" }}>
        <Nav LANGUAGES={LANGUAGES} TABS={TABS}/>
        <Hero STACK_LINES={STACK_LINES} />
        <Skills SKILLS={SKILLS}/>
        <Experience EXPERIENCE={EXPERIENCE} />
        {/* <Projects PROJECTS={PROJECTS}/> */}
        <Contact EMAIL={EMAIL} PHONE={PHONE}/>
      </div>
    </>
  );
}

export default App;

/*

  git add .
  git commit -m "restore front"
  git push origin master
 
*/