import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export default function ExperienceSection() {
  const { ref, isVisible } = useScrollAnimation();

  const experiences = [
    {
      id: "v2solutions",
      title: "DevOps / Site Reliability Engineer & AI Agent Developer",
      company: "V2Solutions",
      location: "Mumbai, India",
      duration: "Jul 2025 – Present",
      achievements: [
        "Designed and built AI agents using LangChain and LangGraph with tool calling and multi-step workflows to automate operational and engineering tasks",
        "Deployed and operated agentic AI services on AWS and Kubernetes (EKS), applying CI/CD, monitoring and autoscaling to keep them reliable in production",
        "Ensured high availability of production systems on AWS and Kubernetes, minimizing downtime and improving performance",
        "Defined SLIs, SLOs and alerting strategies, improving visibility into system health and reliability metrics",
        "Led incident response and RCA, running post-incident reviews and implementing preventive fixes to reduce recurring failures",
        "Built proactive monitoring and alerting pipelines with Prometheus, Grafana and CloudWatch for early anomaly detection",
        "Automated operational tasks with Python and Bash, and built self-healing mechanisms and automated recovery workflows for common failures",
        "Managed scalable, multi-region AWS infrastructure for high availability and disaster recovery",
        "Implemented CI/CD with GitHub Actions and GitOps (FluxCD) for safe, frequent and reliable deployments",
        "Worked with security teams to enforce secure infrastructure practices and compliance standards"
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
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16 section-heading justify-center" data-testid="experience-title">Work Experience</h2>
          <div className="space-y-12 max-w-4xl mx-auto">
            {experiences.map((exp) => (
              <div key={exp.id} className="timeline-item" data-testid={`experience-${exp.id}`}>
                <div className="panel p-8" data-testid={`experience-panel-${exp.id}`}>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                    <div>
                      <h3 className="text-xl font-display font-semibold text-gray-900" data-testid={`experience-title-${exp.id}`}>{exp.title}</h3>
                      <p className="text-primary font-medium" data-testid={`experience-company-${exp.id}`}>{exp.company}</p>
                      <p className="text-gray-500 text-sm" data-testid={`experience-location-${exp.id}`}>{exp.location}</p>
                    </div>
                    <div className="text-gray-500 mt-2 md:mt-0">
                      <p className="font-mono text-sm" data-testid={`experience-duration-${exp.id}`}>{exp.duration}</p>
                    </div>
                  </div>
                  <ul className="space-y-3 text-gray-700">
                    {exp.achievements.map((achievement, index) => (
                      <li key={index} className="flex items-start" data-testid={`experience-achievement-${exp.id}-${index}`}>
                        <span className="w-1 h-1 rounded-full bg-primary mt-2.5 mr-3 flex-shrink-0"></span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
