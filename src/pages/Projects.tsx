import Navigation from "@/components/Navigation";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "ConvoManage (Full Stack)",
    description:
      "A complete full-stack conference management platform with attendee, speaker, and session management using Node.js, Express, MongoDB, and EJS.",
    tech: ["Node.js", "Express", "MongoDB", "EJS", "Bootstrap"],
    emoji: "🎤",
    github: "https://github.com/revanth05-tech/convomanage_full_stack",
    demo: "https://convomanage-fullstack.vercel.app"
  },
  {
    title: "ConvoManage Frontend Dashboard",
    description:
      "Interactive conference dashboard UI built with HTML, CSS, and JavaScript for managing events, sessions, and analytics seamlessly.",
    tech: ["HTML", "CSS", "JavaScript"],
    emoji: "📊",
    github: "https://github.com/revanth05-tech/ConvoManage_frontend_Dashboard",
    demo: "https://convomanage-dashboard.vercel.app"
  },
  {
    title: "Personal Portfolio",
    description:
      "A Batman-themed dark glassmorphism portfolio highlighting my skills, projects, and contact information with smooth animations.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    emoji: "🦇",
    github: "https://github.com/revanth05-tech/my-portfolio",
    demo: "https://revanth-portfolio.vercel.app"
  },
  {
    title: "Pinterest Clone",
    description:
      "A modern Pinterest-style image-sharing web app clone where users can explore, pin, and view creative inspirations.",
    tech: ["React", "Tailwind CSS", "Firebase", "Vite"],
    emoji: "📌",
    github: "https://github.com/revanth05-tech/pintrest",
    demo: "https://revanth-pinterest.vercel.app"
  },
  {
    title: "PinEntry UI",
    description:
      "A sleek and secure PIN entry interface component built using modern web technologies, focusing on simplicity and user experience.",
    tech: ["HTML", "CSS", "JavaScript"],
    emoji: "🔢",
    github: "https://github.com/revanth05-tech/Pinentry",
    demo: "https://revanth-pinentry.vercel.app"
  },
  {
    title: "System Info Logger",
    description:
      "A Node.js utility that logs and displays system information such as CPU, RAM, and storage — useful for backend monitoring and analysis.",
    tech: ["Node.js", "OS Module", "CLI"],
    emoji: "💻",
    github: "https://github.com/revanth05-tech/systeminfologger",
    demo: "https://systeminfologger.vercel.app"
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
              Showcasing what I’ve built with passion and code 💫
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
