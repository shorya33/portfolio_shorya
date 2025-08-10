import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export default function ProjectsSection() {
  const { ref, isVisible } = useScrollAnimation();

  const projects = [
    {
      id: "mlops-pipeline",
      title: "MLOps CI/CD Pipeline",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      imageAlt: "MLOps pipeline visualization with data flow diagrams and ML model architecture",
      description: "Comprehensive machine learning operations pipeline implementing automated model training, deployment, and monitoring using modern MLOps tools and practices.",
      features: [
        { icon: "fas fa-cogs", text: "GitHub Actions for automated ML workflows" },
        { icon: "fas fa-database", text: "DVC for data versioning and pipeline reproducibility" },
        { icon: "fas fa-chart-line", text: "MLflow for experiment tracking and model registry" },
        { icon: "fab fa-aws", text: "AWS SageMaker for scalable model deployment" }
      ],
      technologies: ["MLflow", "DVC", "SageMaker", "Python"],
      gradientClass: "from-secondary/5 to-primary/5"
    },
    {
      id: "gitops-pipeline",
      title: "GitOps CI/CD with Argo CD",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      imageAlt: "Modern cloud ML infrastructure with server racks and network visualization",
      description: "Microservice voting application with GitOps deployment strategy using Argo CD for automated Kubernetes deployments and synchronization.",
      features: [
        { icon: "fas fa-dharmachakra", text: "Kubernetes cluster on Minikube" },
        { icon: "fas fa-sync", text: "Argo CD for GitOps deployment" },
        { icon: "fab fa-github", text: "GitHub Actions for CI/CD automation" },
        { icon: "fab fa-docker", text: "Docker containerization strategy" }
      ],
      technologies: ["Kubernetes", "Argo CD", "GitHub Actions", "Docker"],
      gradientClass: "from-accent/5 to-green-50"
    },
    {
      id: "aws-eks-automation",
      title: "Automated Kubernetes Deployment",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      imageAlt: "Global cloud infrastructure network with interconnected nodes and data centers",
      description: "Full-stack infrastructure automation using Terraform to provision EKS clusters, Fargate profiles, and ECR for serverless container workloads.",
      features: [
        { icon: "fab fa-aws", text: "AWS EKS cluster provisioning" },
        { icon: "fas fa-server", text: "Fargate serverless containers" },
        { icon: "fas fa-cube", text: "Terraform Infrastructure as Code" },
        { icon: "fas fa-cloud", text: "ECR image registry management" }
      ],
      technologies: ["AWS EKS", "Terraform", "Fargate", "ECR"],
      gradientClass: "from-orange-50 to-yellow-50"
    },
    {
      id: "monitoring-solution",
      title: "Monitoring & Automation",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      imageAlt: "Advanced data analytics dashboard with multiple charts and real-time monitoring displays",
      description: "Comprehensive monitoring solution with Prometheus and Grafana for Kubernetes workloads on AWS, including custom dashboards and automated scaling.",
      features: [
        { icon: "fas fa-chart-bar", text: "Prometheus metrics collection" },
        { icon: "fas fa-tachometer-alt", text: "Grafana visualization dashboards" },
        { icon: "fas fa-bell", text: "Automated alerting system" },
        { icon: "fas fa-expand-arrows-alt", text: "Auto-scaling implementation" }
      ],
      technologies: ["Prometheus", "Grafana", "Kubernetes", "AWS"],
      gradientClass: "from-green-50 to-blue-50"
    }
  ];

  const getTechColor = (tech: string) => {
    const colors: { [key: string]: string } = {
      "MLflow": "bg-primary/10 text-primary",
      "DVC": "bg-secondary/10 text-secondary", 
      "SageMaker": "bg-accent/10 text-accent",
      "Python": "bg-green-100 text-green-700",
      "Kubernetes": "bg-blue-100 text-blue-700",
      "Argo CD": "bg-purple-100 text-purple-700",
      "GitHub Actions": "bg-gray-100 text-gray-700",
      "Docker": "bg-blue-100 text-blue-600",
      "AWS EKS": "bg-orange-100 text-orange-700",
      "Terraform": "bg-purple-100 text-purple-700",
      "Fargate": "bg-blue-100 text-blue-700",
      "ECR": "bg-green-100 text-green-700",
      "Prometheus": "bg-red-100 text-red-700",
      "Grafana": "bg-orange-100 text-orange-700",
      "AWS": "bg-yellow-100 text-yellow-700"
    };
    return colors[tech] || "bg-gray-100 text-gray-700";
  };

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={ref}
          className={`animate-on-scroll ${isVisible ? 'animated' : ''}`}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16 gradient-text" data-testid="projects-title">Featured Projects</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div 
                key={project.id} 
                className={`project-card bg-gradient-to-br ${project.gradientClass} p-8 rounded-xl shadow-lg`}
                data-testid={`project-${project.id}`}
              >
                <div className="mb-6">
                  <img 
                    src={project.image} 
                    alt={project.imageAlt}
                    className="w-full h-48 object-cover rounded-lg"
                    data-testid={`project-image-${project.id}`}
                  />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-900" data-testid={`project-title-${project.id}`}>
                  {project.title}
                </h3>
                <p className="text-gray-700 mb-4" data-testid={`project-description-${project.id}`}>
                  {project.description}
                </p>
                <ul className="space-y-2 text-gray-600 mb-6">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start" data-testid={`project-feature-${project.id}-${index}`}>
                      <i className={`${feature.icon} text-primary mt-1 mr-2 flex-shrink-0`}></i>
                      <span>{feature.text}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index} 
                      className={`px-3 py-1 ${getTechColor(tech)} rounded-full text-sm`}
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
