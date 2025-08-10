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
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16 gradient-text" data-testid="about-title">About Me</h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed" data-testid="about-description-1">
                DevOps Engineer with 2 years of hands-on experience in automating infrastructure provisioning, 
                building scalable CI/CD pipelines, and deploying microservices on Kubernetes. I specialize in 
                AWS services, GitHub Actions, Terraform, and container orchestration.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed" data-testid="about-description-2">
                Recently expanding into MLOps, I've developed expertise in machine learning pipelines, 
                model deployment automation, and integrating ML workflows with traditional DevOps practices.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed" data-testid="about-description-3">
                Additionally, I have experience as a programming instructor, having taught Python and Flutter/Dart 
                to aspiring developers, combining my technical expertise with a passion for knowledge sharing 
                and mentoring the next generation of developers.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2" data-testid="about-focus-label">Current Focus</h4>
                  <p className="text-gray-600" data-testid="about-focus-value">MLOps & Cloud Automation</p>
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
                className="rounded-xl shadow-lg"
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
