import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export default function ExperienceSection() {
  const { ref, isVisible } = useScrollAnimation();

  const experiences = [
    {
      id: "v2solutions",
      title: "DevOps Engineer",
      company: "V2Solutions",
      location: "Navi Mumbai, India",
      duration: "Jul 2025 – Present",
      achievements: [
        "Provisioned scalable AWS infrastructure using Terraform workspaces to support isolated dev, staging, and prod environments",
        "Developed reusable GitHub Actions workflows to unify CI/CD pipelines for multiple microservices",
        "Integrated OIDC with GitHub Actions for secure, credential-free AWS authentication",
        "Built custom Docker version controller for consistent base image management using centralized ARG-based templates"
      ]
    },
    {
      id: "sarb-alliance",
      title: "DevOps Engineer (Contract)",
      company: "Sarb Alliance Hospitality P.V.T",
      location: "India (Remote)",
      duration: "Jun 2023 – May 2025",
      achievements: [
        "Automated static site deployment pipelines using Amazon S3, CloudFront, and GitHub Actions",
        "Deployed and managed EKS clusters and IAM policies for secure microservice orchestration",
        "Provisioned cloud infrastructure using Terraform, ensuring environment consistency",
        "Orchestrated event-driven integrations with AWS services (Cognito, EventBridge, SQS, SNS) for backend automation"
      ]
    }
  ];

  return (
    <section 
      id="experience" 
      className="py-20 bg-slate-50"
      aria-labelledby="experience-title"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={ref}
          className={`animate-on-scroll ${isVisible ? 'animated' : ''}`}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16 gradient-text" data-testid="experience-title">Work Experience</h2>
          <div className="space-y-12">
            {experiences.map((exp) => (
              <div key={exp.id} className="bg-white p-8 rounded-xl shadow-lg" data-testid={`experience-${exp.id}`}>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900" data-testid={`experience-title-${exp.id}`}>{exp.title}</h3>
                    <p className="text-lg text-primary font-medium" data-testid={`experience-company-${exp.id}`}>{exp.company}</p>
                    <p className="text-gray-600" data-testid={`experience-location-${exp.id}`}>{exp.location}</p>
                  </div>
                  <div className="text-gray-500 mt-2 md:mt-0">
                    <p className="font-medium" data-testid={`experience-duration-${exp.id}`}>{exp.duration}</p>
                  </div>
                </div>
                <ul className="space-y-3 text-gray-700">
                  {exp.achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start" data-testid={`experience-achievement-${exp.id}-${index}`}>
                      <i className="fas fa-check-circle text-green-500 mt-1 mr-3 flex-shrink-0"></i>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
