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

  const skillGroups = [
    {
      id: "agentic-ai",
      title: "Agentic AI & LLMs",
      items: ["LangChain", "LangGraph", "Multi-Agent Orchestration", "Tool/Function Calling", "RAG", "Vector Databases", "Prompt Engineering", "MCP"]
    },
    {
      id: "ml-fundamentals",
      title: "Machine Learning Fundamentals",
      items: ["Model Training", "Oversampling / SMOTE", "Linear Algebra", "Probability & Statistics", "Gradient Descent", "Feature Engineering"]
    },
    {
      id: "devops",
      title: "DevOps & Infrastructure",
      items: ["Docker", "Kubernetes (EKS)", "Terraform", "Terragrunt", "GitHub Actions", "GitOps (FluxCD)", "CI/CD"]
    },
    {
      id: "cloud",
      title: "Cloud & AWS",
      items: ["EC2", "EKS", "S3", "Lambda", "API Gateway", "DynamoDB", "IAM", "ECR"]
    }
  ];

  const programmingSkills = [
    { name: "Python", level: 90 },
    { name: "LangChain/LangGraph", level: 80 },
    { name: "Bash/Shell", level: 85 }
  ];

  const monitoringSkills = [
    { name: "Prometheus", level: 80 },
    { name: "Grafana", level: 75 },
    { name: "CloudWatch", level: 85 }
  ];

  return (
    <section 
      id="skills" 
      className="py-20 bg-white"
      aria-labelledby="skills-title"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={ref}
          className={`animate-on-scroll ${isVisible ? 'animated' : ''}`}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16 section-heading justify-center" data-testid="skills-title">Skills & Technologies</h2>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-10 mb-16">
            {skillGroups.map((group) => (
              <div key={group.id} className="border-l-2 border-primary/30 pl-6" data-testid={`skills-group-${group.id}`}>
                <h3 className="text-lg font-display font-semibold mb-4 text-gray-900" data-testid={`skills-${group.id}-title`}>{group.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item, index) => (
                    <span key={index} className="tech-tag" data-testid={`tech-tag-${group.id}-${item.toLowerCase().replace(/[\s/]/g, '-')}`}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Programming & Monitoring */}
          <div className="grid md:grid-cols-2 gap-12 pt-4 border-t border-gray-200">
            <div className="pt-10">
              <h3 className="text-xl font-display font-semibold mb-6 text-gray-900" data-testid="skills-programming-title">Programming & Scripting</h3>
              <div className="space-y-4">
                {programmingSkills.map((skill, index) => (
                  <div key={index} data-testid={`skill-${skill.name.toLowerCase().replace(/[\s/]/g, '-')}`}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700" data-testid={`skill-name-${skill.name.toLowerCase().replace(/[\s/]/g, '-')}`}>{skill.name}</span>
                      <span className="text-gray-500 font-mono text-sm" data-testid={`skill-level-${skill.name.toLowerCase().replace(/[\s/]/g, '-')}`}>{skill.level}%</span>
                    </div>
                    <Progress 
                      value={animateProgress ? skill.level : 0} 
                      className="h-1.5"
                      data-testid={`skill-progress-${skill.name.toLowerCase().replace(/[\s/]/g, '-')}`}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="pt-10">
              <h3 className="text-xl font-display font-semibold mb-6 text-gray-900" data-testid="skills-monitoring-title">Monitoring & Observability</h3>
              <div className="space-y-4">
                {monitoringSkills.map((skill, index) => (
                  <div key={index} data-testid={`skill-${skill.name.toLowerCase()}`}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700" data-testid={`skill-name-${skill.name.toLowerCase()}`}>{skill.name}</span>
                      <span className="text-gray-500 font-mono text-sm" data-testid={`skill-level-${skill.name.toLowerCase()}`}>{skill.level}%</span>
                    </div>
                    <Progress 
                      value={animateProgress ? skill.level : 0} 
                      className="h-1.5"
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
