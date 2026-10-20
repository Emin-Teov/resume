import { StrictMode, Suspense, lazy } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import i18n from './i18n';
import App from './App.jsx'
import { EMAIL, PHONE } from './contact-info'

// /?print=en or /?print=az renders the printable A4 resume used to generate the PDFs
const printLang = new URLSearchParams(window.location.search).get('print');
const ResumeDoc = lazy(() => import('./pages/resume-doc.jsx'));

if (printLang) i18n.changeLanguage(printLang);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {printLang
      ? <Suspense fallback={null}><ResumeDoc EMAIL={EMAIL} PHONE={PHONE} /></Suspense>
      : <App />}
  </StrictMode>,
)
