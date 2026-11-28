import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export default function CertificationsSection() {
  const { ref, isVisible } = useScrollAnimation();

  const certifications = [
    {
      id: "oci-genai",
      icon: "fas fa-robot",
      title: "OCI 2025 Certified Generative AI Professional",
      issuer: "Oracle Cloud Infrastructure",
      description: "Validated expertise in generative AI concepts, large language models, and building GenAI-powered applications on Oracle Cloud."
    },
    {
      id: "aws-developer",
      icon: "fab fa-aws",
      title: "AWS Certified Developer",
      issuer: "Associate Level",
      description: "Validated expertise in developing, deploying, and debugging cloud-based applications using AWS services."
    },
    {
      id: "github",
      icon: "fab fa-github",
      title: "GitHub Actions Certification",
      issuer: "GitHub",
      description: "Demonstrated proficiency in automation and CI/CD pipeline development using GitHub Actions."
    }
  ];

  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={ref}
          className={`animate-on-scroll ${isVisible ? 'animated' : ''}`}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12 section-heading justify-center" data-testid="certifications-title">Certifications</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert) => (
              <div
                key={cert.id}
                className="panel p-8"
                data-testid={`certification-${cert.id}`}
              >
                <div className="flex items-center mb-4">
                  <i className={`${cert.icon} text-2xl text-primary mr-4`}></i>
                  <div>
                    <h3 className="text-lg font-display font-semibold text-gray-900" data-testid={`certification-${cert.id}-title`}>{cert.title}</h3>
                    <p className="text-gray-500 text-sm" data-testid={`certification-${cert.id}-issuer`}>{cert.issuer}</p>
                  </div>
                </div>
                <p className="text-gray-700" data-testid={`certification-${cert.id}-description`}>
                  {cert.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
