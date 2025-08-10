import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Progress } from "@/components/ui/progress";
import { useEffect, useState } from "react";

export default function SkillsSection() {
  const { ref, isVisible } = useScrollAnimation();
  const [animateProgress, setAnimateProgress] = useState(false);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setAnimateProgress(true);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  const mlopsTools = [
    { icon: "fas fa-brain", name: "MLflow", color: "text-secondary" },
    { icon: "fas fa-database", name: "DVC", color: "text-accent" },
    { icon: "fab fa-aws", name: "SageMaker", color: "text-orange-500" },
    { icon: "fas fa-chart-line", name: "Jupyter", color: "text-blue-500" },
    { icon: "fas fa-table", name: "Pandas", color: "text-green-500" },
    { icon: "fas fa-eye", name: "OpenCV", color: "text-purple-500" }
  ];

  const devopsTools = [
    { icon: "fab fa-docker", name: "Docker", color: "text-blue-600" },
    { icon: "fas fa-dharmachakra", name: "Kubernetes", color: "text-blue-700" },
    { icon: "fas fa-cube", name: "Terraform", color: "text-purple-600" },
    { icon: "fab fa-github", name: "GitHub Actions", color: "text-gray-900" },
    { icon: "fab fa-jenkins", name: "Jenkins", color: "text-red-600" },
    { icon: "fas fa-terminal", name: "CI/CD", color: "text-green-600" }
  ];

  const cloudServices = [
    { icon: "fab fa-aws", name: "EC2", color: "text-orange-500" },
    { icon: "fas fa-server", name: "EKS", color: "text-green-600" },
    { icon: "fas fa-cloud", name: "S3", color: "text-blue-500" },
    { icon: "fas fa-bolt", name: "Lambda", color: "text-yellow-500" },
    { icon: "fas fa-network-wired", name: "VPC", color: "text-purple-500" },
    { icon: "fas fa-database", name: "RDS", color: "text-blue-700" }
  ];

  const programmingSkills = [
    { name: "Python", level: 90 },
    { name: "Bash/Shell", level: 85 },
    { name: "YAML/JSON", level: 95 }
  ];

  const monitoringSkills = [
    { name: "Prometheus", level: 80 },
    { name: "Grafana", level: 75 },
    { name: "CloudWatch", level: 85 }
  ];

  return (
    <section 
      id="skills" 
      className="py-20 bg-slate-50"
      aria-labelledby="skills-title"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={ref}
          className={`animate-on-scroll ${isVisible ? 'animated' : ''}`}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16 gradient-text" data-testid="skills-title">Skills & Technologies</h2>
          
          {/* MLOps & ML Tools */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-8 text-gray-900" data-testid="skills-mlops-title">MLOps & Machine Learning</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {mlopsTools.map((tool, index) => (
                <div key={index} className="tech-icon bg-white p-6 rounded-xl shadow-md text-center" data-testid={`tech-icon-${tool.name.toLowerCase()}`}>
                  <i className={`${tool.icon} text-3xl ${tool.color} mb-2`}></i>
                  <p className="text-sm font-medium">{tool.name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* DevOps & Infrastructure */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-8 text-gray-900" data-testid="skills-devops-title">DevOps & Infrastructure</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {devopsTools.map((tool, index) => (
                <div key={index} className="tech-icon bg-white p-6 rounded-xl shadow-md text-center" data-testid={`tech-icon-${tool.name.toLowerCase().replace(/\s/g, '-')}`}>
                  <i className={`${tool.icon} text-3xl ${tool.color} mb-2`}></i>
                  <p className="text-sm font-medium">{tool.name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Cloud & AWS */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-8 text-gray-900" data-testid="skills-cloud-title">Cloud & AWS Services</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {cloudServices.map((service, index) => (
                <div key={index} className="tech-icon bg-white p-6 rounded-xl shadow-md text-center" data-testid={`tech-icon-${service.name.toLowerCase()}`}>
                  <i className={`${service.icon} text-3xl ${service.color} mb-2`}></i>
                  <p className="text-sm font-medium">{service.name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Programming & Monitoring */}
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-6 text-gray-900" data-testid="skills-programming-title">Programming & Scripting</h3>
              <div className="space-y-4">
                {programmingSkills.map((skill, index) => (
                  <div key={index} data-testid={`skill-${skill.name.toLowerCase().replace(/\//g, '-')}`}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700" data-testid={`skill-name-${skill.name.toLowerCase().replace(/\//g, '-')}`}>{skill.name}</span>
                      <span className="text-gray-500" data-testid={`skill-level-${skill.name.toLowerCase().replace(/\//g, '-')}`}>{skill.level}%</span>
                    </div>
                    <Progress 
                      value={animateProgress ? skill.level : 0} 
                      className="h-2"
                      data-testid={`skill-progress-${skill.name.toLowerCase().replace(/\//g, '-')}`}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-6 text-gray-900" data-testid="skills-monitoring-title">Monitoring & Observability</h3>
              <div className="space-y-4">
                {monitoringSkills.map((skill, index) => (
                  <div key={index} data-testid={`skill-${skill.name.toLowerCase()}`}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700" data-testid={`skill-name-${skill.name.toLowerCase()}`}>{skill.name}</span>
                      <span className="text-gray-500" data-testid={`skill-level-${skill.name.toLowerCase()}`}>{skill.level}%</span>
                    </div>
                    <Progress 
                      value={animateProgress ? skill.level : 0} 
                      className="h-2"
                      data-testid={`skill-progress-${skill.name.toLowerCase()}`}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
