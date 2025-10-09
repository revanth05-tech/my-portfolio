import Navigation from "@/components/Navigation";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Full-featured e-commerce solution with payment integration, admin dashboard, and real-time inventory management.",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    emoji: "🛒",
    github: "https://github.com",
    demo: "https://demo.com"
  },
  {
    title: "Task Management App",
    description: "Collaborative task management tool with real-time updates, team collaboration features, and analytics dashboard.",
    tech: ["React", "TypeScript", "Firebase", "Tailwind"],
    emoji: "✅",
    github: "https://github.com",
    demo: "https://demo.com"
  },
  {
    title: "Weather Dashboard",
    description: "Real-time weather application with interactive maps, forecasts, and location-based alerts.",
    tech: ["React", "OpenWeather API", "Mapbox", "Chart.js"],
    emoji: "🌤️",
    github: "https://github.com",
    demo: "https://demo.com"
  },
  {
    title: "Social Media Platform",
    description: "Modern social networking platform with posts, stories, messaging, and user profiles.",
    tech: ["Next.js", "PostgreSQL", "Redis", "AWS"],
    emoji: "📱",
    github: "https://github.com",
    demo: "https://demo.com"
  },
  {
    title: "Portfolio Builder",
    description: "No-code portfolio builder with drag-and-drop interface, templates, and custom domain support.",
    tech: ["React", "Express", "MongoDB", "Cloudinary"],
    emoji: "🎨",
    github: "https://github.com",
    demo: "https://demo.com"
  },
  {
    title: "AI Chatbot",
    description: "Intelligent chatbot with natural language processing, context awareness, and multi-language support.",
    tech: ["Python", "TensorFlow", "React", "FastAPI"],
    emoji: "🤖",
    github: "https://github.com",
    demo: "https://demo.com"
  }
];

const Projects = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-4 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold">
              My <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Projects</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Building innovative solutions 🚀
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="glass p-6 rounded-xl hover-scale hover-glow transition-all space-y-4"
              >
                <div className="text-5xl mb-4">{project.emoji}</div>
                
                <h3 className="text-2xl font-bold">{project.title}</h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 bg-secondary rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3 pt-2">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm" className="glass gap-2">
                      <Github size={16} /> Code
                    </Button>
                  </a>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    <Button size="sm" className="gap-2">
                      <ExternalLink size={16} /> Demo
                    </Button>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Projects;
