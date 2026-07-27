import { useRef, useState } from "react";
import { AnimatePresence } from "framer-motion";
import ScanlineOverlay from "./components/ScanlineOverlay";
import Logo from "./components/Logo";
import Hero from "./components/Hero";
import Quote from "./components/Quote";
import DomainCards from "./components/DomainCards";
import CandidateForm from "./components/CandidateForm";
import SkillsChips from "./components/SkillsChips";
import Questions from "./components/Questions";
import FinalChoice from "./components/FinalChoice";
import SubmissionOverlay from "./components/SubmissionOverlay";
import Footer from "./components/Footer";

const INITIAL_CANDIDATE = { name: "", regNumber: "", email: "", phone: "" };
const INITIAL_ANSWERS = { whyJoin: "", whyYou: "", projects: "" };

function App() {
  const [domains, setDomains] = useState([]);
  const [candidate, setCandidate] = useState(INITIAL_CANDIDATE);
  const [skills, setSkills] = useState([]);
  const [answers, setAnswers] = useState(INITIAL_ANSWERS);
  const [submitted, setSubmitted] = useState(false);

  const formRef = useRef(null);

  const toggleDomain = (id) =>
    setDomains((prev) =>
      prev.includes(id) ? prev.filter((d) => d !== id) : [...prev, id]
    );

  const toggleSkill = (skill) =>
    setSkills((prev) =>
      prev.includes(skill) ? prev.filter((s) => s !== skill) : [...prev, skill]
    );

  const updateCandidate = (name, value) =>
    setCandidate((prev) => ({ ...prev, [name]: value }));

  const updateAnswer = (name, value) =>
    setAnswers((prev) => ({ ...prev, [name]: value }));

  const requiredFilled =
    candidate.name.trim() &&
    candidate.regNumber.trim() &&
    candidate.email.trim() &&
    candidate.phone.trim() &&
    domains.length > 0;

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative min-h-screen w-full bg-matrix-bg">
      <ScanlineOverlay />
      <Logo />

      <Hero onEnter={scrollToForm} />
      <Quote />
      <div ref={formRef}>
        <DomainCards selected={domains} onToggle={toggleDomain} />
      </div>
      <CandidateForm data={candidate} onChange={updateCandidate} />
      <SkillsChips selected={skills} onToggle={toggleSkill} />
      <Questions data={answers} onChange={updateAnswer} />
      <FinalChoice disabled={!requiredFilled} onRedPill={() => setSubmitted(true)} />
      <Footer />

      <AnimatePresence>
        {submitted && (
          <SubmissionOverlay
            payload={{ candidate, domains, skills, answers }}
            onClose={() => setSubmitted(false)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
