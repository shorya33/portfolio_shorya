import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import SkillsSection from "@/components/skills-section";
import CertificationsSection from "@/components/certifications-section";
import ExperienceSection from "@/components/experience-section";
import ProjectsSection from "@/components/projects-section";
import EducationSection from "@/components/education-section";
import ContactSection from "@/components/contact-section";

export default function Home() {
  return (
    <div className="font-sans bg-slate-50 text-gray-800">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <CertificationsSection />
      <ExperienceSection />
      <ProjectsSection />
      <EducationSection />
      <ContactSection />
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-400 mb-4">
              © 2024 Shorya Dwivedi. Built with passion for DevOps and MLOps.
            </p>
            <div className="flex justify-center gap-6">
              <a 
                href="https://linkedin.com/in/shoryadubey" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                data-testid="footer-linkedin-link"
              >
                <i className="fab fa-linkedin text-xl"></i>
              </a>
              <a 
                href="https://github.com/shorya33" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                data-testid="footer-github-link"
              >
                <i className="fab fa-github text-xl"></i>
              </a>
              <a 
                href="mailto:shoryadwivedi00@gmail.com" 
                className="text-gray-400 hover:text-white transition-colors"
                data-testid="footer-email-link"
              >
                <i className="fas fa-envelope text-xl"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
