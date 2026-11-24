import { useState, useEffect } from "react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');

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

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'teaching', label: 'Teaching' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-gray-200 z-50" data-testid="navigation-header" role="navigation" aria-label="Main navigation">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2 font-display font-semibold text-lg text-gray-900" data-testid="logo-text">
              <span className="inline-block w-2 h-2 bg-primary rounded-sm"></span>
              Shorya Dwivedi
            </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleLinkClick(`#${item.id}`)}
                className={`nav-link text-sm transition-colors ${activeSection === item.id ? 'text-primary font-semibold' : 'text-gray-700 hover:text-primary'}`}
                data-testid={`nav-${item.id}`}
              >
                {item.label}
              </button>
            ))}
            <a 
              href="https://docs.google.com/document/d/1XOhMqRMHKeuElAQWg_eayg_gvDUQRL2PxV6tQH8GSdk/export?format=pdf"
              download="Shorya_Dwivedi_Resume.pdf"
              className="border border-gray-900 text-gray-900 px-4 py-1.5 rounded-md hover:bg-gray-900 hover:text-white transition-colors text-sm inline-flex items-center gap-2"
              data-testid="nav-download-resume"
            >
              Resume
            </a>
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
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleLinkClick(`#${item.id}`)}
                  className="block w-full text-left px-3 py-2 text-gray-700 hover:text-primary transition-colors text-sm"
                  data-testid={`mobile-nav-${item.id}`}
                >
                  {item.label}
                </button>
              ))}
              <a 
                href="/Shorya_Dwivedi_Resume.pdf"
                download="Shorya_Dwivedi_Resume.pdf"
                className="block w-full text-left px-3 py-2 border border-gray-900 text-gray-900 rounded-md mx-3 my-2 text-center text-sm"
                data-testid="mobile-nav-download-resume"
              >
                Download Resume
              </a>
            </div>
          </div>
        )}
        </div>
      </nav>
    </>
  );
}
