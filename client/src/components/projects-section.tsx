import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export default function ProjectsSection() {
  const { ref, isVisible } = useScrollAnimation();

  const projects = [
    {
      id: "agentic-ai-workflow",
      title: "Agentic AI Workflow Automation",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      imageAlt: "AI agent workflow graph with connected nodes representing multi-step automation",
      description: "An AI agent built with LangGraph for stateful, multi-step workflows, using LangChain tool calling to connect the LLM to APIs and operational data — containerized and deployed on Kubernetes with full CI/CD and observability.",
      features: [
        "LangGraph for stateful, multi-step agent workflows",
        "LangChain tool calling to connect the LLM to APIs",
        "GitHub Actions + FluxCD for automated deployment",
        "Metrics and logs in Prometheus, Grafana and Loki"
      ],
      technologies: ["LangChain", "LangGraph", "Kubernetes", "Python"]
    },
    {
      id: "gitops-pipeline",
      title: "GitOps CI/CD with Argo CD",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      imageAlt: "Modern cloud infrastructure with server racks and network visualization",
      description: "Microservice voting application with GitOps deployment strategy using Argo CD for automated Kubernetes deployments and synchronization.",
      features: [
        "Kubernetes cluster on Minikube",
        "Argo CD for GitOps deployment",
        "GitHub Actions for CI/CD automation",
        "Docker containerization strategy"
      ],
      technologies: ["Kubernetes", "Argo CD", "GitHub Actions", "Docker"]
    },
    {
      id: "monitoring-automation",
      title: "Monitoring & Automation on EKS",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      imageAlt: "Global cloud infrastructure network with interconnected nodes and data centers",
      description: "Provisioned EKS clusters and AWS Fargate profiles with Terraform and Terragrunt for consistent dev/test/prod environments, with full metrics, dashboards and alerting — cutting operational overhead by ~30%.",
      features: [
        "EKS + Fargate provisioned with Terraform & Terragrunt",
        "Ingress controllers for load balancing & fault tolerance",
        "Prometheus & Grafana dashboards for latency and resource use",
        "ECR for Docker image management"
      ],
      technologies: ["AWS EKS", "Terraform", "Terragrunt", "Prometheus"]
    }
  ];

  return (
    <section 
      id="projects" 
      className="py-20 bg-slate-50"
      aria-labelledby="projects-title"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={ref}
          className={`animate-on-scroll ${isVisible ? 'animated' : ''}`}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16 section-heading justify-center" data-testid="projects-title">Featured Projects</h2>
          <div className="grid lg:grid-cols-2 gap-6">
            {projects.map((project) => (
              <div 
                key={project.id} 
                className="project-card panel p-8"
                data-testid={`project-${project.id}`}
              >
                <div className="mb-6">
                  <img 
                    src={project.image} 
                    alt={project.imageAlt}
                    className="w-full h-44 object-cover rounded-md border border-gray-200"
                    data-testid={`project-image-${project.id}`}
                    loading="lazy"
                    width="800"
                    height="400"
                    decoding="async"
                  />
                </div>
                <h3 className="text-xl font-display font-semibold mb-3 text-gray-900" data-testid={`project-title-${project.id}`}>
                  {project.title}
                </h3>
                <p className="text-gray-700 mb-4" data-testid={`project-description-${project.id}`}>
                  {project.description}
                </p>
                <ul className="space-y-2 text-gray-600 mb-6">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start" data-testid={`project-feature-${project.id}-${index}`}>
                      <span className="w-1 h-1 rounded-full bg-primary mt-2.5 mr-3 flex-shrink-0"></span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index} 
                      className="tech-tag"
                      data-testid={`project-tech-${project.id}-${tech.toLowerCase().replace(/\s/g, '-')}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
