import { useTypingAnimation } from "@/hooks/use-typing-animation";

export default function HeroSection() {
  const typedText = useTypingAnimation([
    'DevOps & MLOps Engineer',
    'Cloud Infrastructure Specialist', 
    'Kubernetes Expert',
    'AWS Solutions Architect'
  ], {
    typeSpeed: 100,
    deleteSpeed: 50,
    delayBetweenTexts: 2000,
    startDelay: 1000
  });

  return (
    <section className="pt-16 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6" data-testid="hero-title">
              Hi, I'm <span className="gradient-text">Shorya</span>
            </h1>
            <h2 className="text-2xl lg:text-3xl text-gray-700 mb-6 min-h-[3rem]" data-testid="hero-subtitle">
              {typedText}
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed" data-testid="hero-description">
              Specializing in cloud automation, CI/CD pipelines, and machine learning operations. 
              2+ years of experience in AWS, Kubernetes, and building scalable infrastructure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors text-center"
                data-testid="button-get-in-touch"
              >
                Get In Touch
              </button>
              <button 
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-primary text-primary px-8 py-3 rounded-lg hover:bg-primary hover:text-white transition-colors text-center"
                data-testid="button-view-projects"
              >
                View Projects
              </button>
            </div>
            <div className="flex gap-6 mt-8">
              <a 
                href="https://linkedin.com/in/shoryadubey" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary transition-colors"
                data-testid="hero-linkedin-link"
              >
                <i className="fab fa-linkedin text-2xl"></i>
              </a>
              <a 
                href="https://github.com/shorya33" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary transition-colors"
                data-testid="hero-github-link"
              >
                <i className="fab fa-github text-2xl"></i>
              </a>
              <a 
                href="mailto:shoryadwivedi00@gmail.com" 
                className="text-gray-600 hover:text-primary transition-colors"
                data-testid="hero-email-link"
              >
                <i className="fas fa-envelope text-2xl"></i>
              </a>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end animate-scale-in">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400" 
              alt="Shorya Dwivedi - Professional Developer Portrait" 
              className="w-80 h-80 object-cover rounded-2xl shadow-2xl"
              data-testid="hero-profile-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
