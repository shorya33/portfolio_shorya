import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export default function EducationSection() {
  const { ref, isVisible } = useScrollAnimation();

  const educationData = [
    {
      id: "mca",
      degree: "Master of Computer Applications",
      institution: "Jain University",
      status: "Ongoing",
      icon: "fas fa-graduation-cap",
      description: "Advanced studies in computer applications with focus on software engineering and cloud technologies."
    },
    {
      id: "bsc",
      degree: "B.Sc. in Computer Science",
      institution: "MGM College of Science & Technology",
      status: "Completed",
      icon: "fas fa-university",
      description: "Foundation in computer science principles, programming, and information technology systems."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={ref}
          className={`animate-on-scroll ${isVisible ? 'animated' : ''}`}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12 section-heading justify-center" data-testid="education-title">Education</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {educationData.map((edu) => (
              <div key={edu.id} className="panel p-8" data-testid={`education-${edu.id}`}>
                <div className="flex items-center mb-4">
                  <i className={`${edu.icon} text-2xl text-primary mr-4`}></i>
                  <div>
                    <h3 className="text-lg font-display font-semibold text-gray-900" data-testid={`education-degree-${edu.id}`}>{edu.degree}</h3>
                    <p className="text-gray-600 text-sm" data-testid={`education-institution-${edu.id}`}>{edu.institution}</p>
                    <p className="text-gray-500 text-sm font-mono" data-testid={`education-status-${edu.id}`}>{edu.status}</p>
                  </div>
                </div>
                <p className="text-gray-700" data-testid={`education-description-${edu.id}`}>{edu.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
