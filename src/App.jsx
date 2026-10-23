import './App.css';
import Nav from './pages/nav';
import Hero from './pages/hero';
import About from './pages/about';
import Skills from './pages/skills';
import Experience from './pages/experience';
import Education from './pages/education';
import Contact from './pages/contact';
import { EMAIL, PHONE } from './contact-info';

const TABS = ["about", "skills", "experience", "education", "contact"];

const STACK_LINES = [
  "const engineer = 'Emin Tavakkulov';",
  "const role     = 'AI Engineer | Software Developer';",
  "const ai       = ['LLMs','RAG','AI Agents','Vector DBs'];",
  "const stack    = ['Python','PHP','React','Node.js'];",
  "const research = 'PhD @ ASOIU — Info-measurement systems';",
];

function App() {
  return (
    <div className="page">
      <Nav TABS={TABS} />
      <Hero STACK_LINES={STACK_LINES} EMAIL={EMAIL} />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Contact EMAIL={EMAIL} PHONE={PHONE} />
    </div>
  );
}

export default App;

/**
 git a
 */
