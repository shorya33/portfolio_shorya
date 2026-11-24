import { useTypingAnimation } from "@/hooks/use-typing-animation";

export default function HeroSection() {
  const typedText = useTypingAnimation([
    'Agentic AI Engineer',
    'LLM & Multi-Agent Systems',
    'DevOps & SRE Specialist',
    'AWS & Kubernetes Engineer'
  ], {
    typeSpeed: 100,
    deleteSpeed: 50,
    delayBetweenTexts: 2000,
    startDelay: 1000
  });

  return (
    <section 
      className="pt-16 bg-slate-50 min-h-screen flex items-center"
      aria-label="Hero section introducing Shorya Dwivedi"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 items-center">
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-2 text-sm font-mono text-accent mb-6" data-testid="hero-status">
              <span className="w-2 h-2 rounded-full bg-accent"></span>
              Available for agentic AI & DevOps roles
            </div>
            <h1 className="text-4xl lg:text-6xl font-display font-semibold text-gray-900 mb-6 leading-tight" data-testid="hero-title">
              Hi, I'm Shorya
            </h1>
            <h2 className="text-2xl lg:text-3xl font-display text-primary mb-6 min-h-[3rem]" data-testid="hero-subtitle">
              {typedText}
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-xl" data-testid="hero-description">
              I build AI agents and LLM-powered workflows with LangChain and LangGraph, backed by a strong
              DevOps and SRE foundation. 1.5+ years deploying and operating production systems on AWS and
              Kubernetes — AWS Certified (Developer &amp; Solutions Architect Associate) and Oracle Cloud
              Generative AI Professional.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gray-900 text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-colors text-center font-medium"
                data-testid="button-get-in-touch"
              >
                Get In Touch
              </button>
              <a 
                href="https://docs.google.com/document/d/1XOhMqRMHKeuElAQWg_eayg_gvDUQRL2PxV6tQH8GSdk/export?format=pdf"
                download="Shorya_Dwivedi_Resume.pdf"
                className="border border-gray-900 text-gray-900 px-6 py-3 rounded-md hover:bg-gray-900 hover:text-white transition-colors text-center inline-flex items-center justify-center gap-2 font-medium"
                data-testid="button-download-resume"
              >
                <i className="fas fa-download text-sm"></i>
                Download Resume
              </a>
              <button 
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="border border-gray-300 text-gray-700 px-6 py-3 rounded-md hover:border-primary hover:text-primary transition-colors text-center font-medium"
                data-testid="button-view-projects"
              >
                View Projects
              </button>
            </div>
            <div className="flex gap-6 mt-8">
              <a 
                href="https://linkedin.com/in/shoryadwivedi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-primary transition-colors"
                data-testid="hero-linkedin-link"
              >
                <i className="fab fa-linkedin text-2xl"></i>
              </a>
              <a 
                href="https://github.com/shorya33" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-primary transition-colors"
                data-testid="hero-github-link"
              >
                <i className="fab fa-github text-2xl"></i>
              </a>
              <a 
                href="mailto:shoryadwivedi00@gmail.com" 
                className="text-gray-500 hover:text-primary transition-colors"
                data-testid="hero-email-link"
              >
                <i className="fas fa-envelope text-2xl"></i>
              </a>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end animate-scale-in">
            <div className="relative">
              <div className="absolute -inset-3 border border-gray-200 rounded-lg -z-10"></div>
              <img 
                src={`${import.meta.env.BASE_URL}shorya-profile.png`}
                alt="Shorya Dwivedi - Agentic AI Engineer" 
                className="w-72 h-72 lg:w-80 lg:h-80 object-cover object-top rounded-lg border border-gray-200 shadow-sm"
                data-testid="hero-profile-image"
                loading="eager"
                width="320"
                height="320"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
