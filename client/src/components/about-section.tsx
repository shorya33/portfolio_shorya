import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export default function AboutSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section 
      id="about" 
      className="py-20 bg-white"
      aria-labelledby="about-title"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={ref}
          className={`animate-on-scroll ${isVisible ? 'animated' : ''}`}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16 section-heading justify-center" data-testid="about-title">About Me</h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed" data-testid="about-description-1">
                Agentic AI Engineer with 1.5 years of hands-on experience building AI agents and LLM-powered
                workflows using LangChain and LangGraph — tool/function calling, RAG, multi-agent orchestration,
                and vector databases — on top of a strong DevOps and SRE foundation.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed" data-testid="about-description-2">
                On the modeling side, I've trained and evaluated ML models directly, applied techniques like
                oversampling (e.g. SMOTE) for imbalanced datasets, and work comfortably with the math underneath —
                linear algebra, probability and statistics, and gradient-based optimization — rather than
                treating models as black boxes.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed" data-testid="about-description-3">
                I deploy and operate these systems reliably on AWS and Kubernetes, with CI/CD, observability
                and infrastructure-as-code. AWS Certified (Developer &amp; Solutions Architect Associate) and
                Oracle Cloud Generative AI Professional, focused on production-ready, scalable and observable
                agentic applications.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed" data-testid="about-description-4">
                I also have experience as a programming instructor, having taught Python and Flutter/Dart to
                aspiring developers, combining technical depth with a passion for mentoring.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2" data-testid="about-focus-label">Current Focus</h4>
                  <p className="text-gray-600" data-testid="about-focus-value">Agentic AI & LLM Systems</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2" data-testid="about-location-label">Location</h4>
                  <p className="text-gray-600" data-testid="about-location-value">Navi Mumbai, India</p>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="Modern data science and AI workspace with multiple monitors showing code and analytics" 
                className="rounded-lg border border-gray-200"
                data-testid="about-workspace-image"
                loading="lazy"
                width="800"
                height="600"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
