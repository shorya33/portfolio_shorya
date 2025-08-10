import { useState, useEffect } from "react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    function highlightNav() {
      let current = '';
      sections.forEach(section => {
        const sectionTop = (section as HTMLElement).offsetTop;
        if (window.scrollY >= (sectionTop - 100)) {
          current = section.getAttribute('id') || '';
        }
      });
      setActiveSection(current);
    }

    window.addEventListener('scroll', highlightNav);
    return () => window.removeEventListener('scroll', highlightNav);
  }, []);

  const handleLinkClick = (href: string) => {
    setIsMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const headerOffset = 80;
      const elementPosition = (target as HTMLElement).offsetTop;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 z-50" data-testid="navigation-header">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="font-bold text-xl gradient-text" data-testid="logo-text">Shorya Dwivedi</div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <button 
              onClick={() => handleLinkClick('#about')} 
              className={`nav-link transition-colors ${activeSection === 'about' ? 'text-primary font-semibold' : 'text-gray-700 hover:text-primary'}`}
              data-testid="nav-about"
            >
              About
            </button>
            <button 
              onClick={() => handleLinkClick('#skills')} 
              className={`nav-link transition-colors ${activeSection === 'skills' ? 'text-primary font-semibold' : 'text-gray-700 hover:text-primary'}`}
              data-testid="nav-skills"
            >
              Skills
            </button>
            <button 
              onClick={() => handleLinkClick('#experience')} 
              className={`nav-link transition-colors ${activeSection === 'experience' ? 'text-primary font-semibold' : 'text-gray-700 hover:text-primary'}`}
              data-testid="nav-experience"
            >
              Experience
            </button>
            <button 
              onClick={() => handleLinkClick('#teaching')} 
              className={`nav-link transition-colors ${activeSection === 'teaching' ? 'text-primary font-semibold' : 'text-gray-700 hover:text-primary'}`}
              data-testid="nav-teaching"
            >
              Teaching
            </button>
            <button 
              onClick={() => handleLinkClick('#projects')} 
              className={`nav-link transition-colors ${activeSection === 'projects' ? 'text-primary font-semibold' : 'text-gray-700 hover:text-primary'}`}
              data-testid="nav-projects"
            >
              Projects
            </button>
            <button 
              onClick={() => handleLinkClick('#contact')} 
              className={`nav-link transition-colors ${activeSection === 'contact' ? 'text-primary font-semibold' : 'text-gray-700 hover:text-primary'}`}
              data-testid="nav-contact"
            >
              Contact
            </button>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            data-testid="mobile-menu-toggle"
          >
            <i className="fas fa-bars text-xl"></i>
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200" data-testid="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button 
                onClick={() => handleLinkClick('#about')} 
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-primary transition-colors"
                data-testid="mobile-nav-about"
              >
                About
              </button>
              <button 
                onClick={() => handleLinkClick('#skills')} 
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-primary transition-colors"
                data-testid="mobile-nav-skills"
              >
                Skills
              </button>
              <button 
                onClick={() => handleLinkClick('#experience')} 
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-primary transition-colors"
                data-testid="mobile-nav-experience"
              >
                Experience
              </button>
              <button 
                onClick={() => handleLinkClick('#teaching')} 
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-primary transition-colors"
                data-testid="mobile-nav-teaching"
              >
                Teaching
              </button>
              <button 
                onClick={() => handleLinkClick('#projects')} 
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-primary transition-colors"
                data-testid="mobile-nav-projects"
              >
                Projects
              </button>
              <button 
                onClick={() => handleLinkClick('#contact')} 
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-primary transition-colors"
                data-testid="mobile-nav-contact"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
