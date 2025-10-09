import { Link } from "react-router-dom";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Hero Section */}
          <div className="space-y-4 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Hi, I'm <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Your Name</span>
            </h1>
            <p className="text-2xl md:text-3xl text-muted-foreground">
              Full-Stack Developer 💻
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Crafting elegant solutions to complex problems. 
              Building the future, one line of code at a time. ✨
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center pt-8">
            <Link to="/projects">
              <Button size="lg" className="bg-primary hover:bg-primary/90 gap-2 hover-scale">
                View My Work <ArrowRight size={20} />
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="glass hover-scale">
                Get In Touch
              </Button>
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 justify-center pt-12">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="glass p-4 rounded-full hover-scale hover-glow transition-all"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="glass p-4 rounded-full hover-scale hover-glow transition-all"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="mailto:your.email@example.com"
              className="glass p-4 rounded-full hover-scale hover-glow transition-all"
            >
              <Mail size={24} />
            </a>
          </div>

          {/* Floating Cards */}
          <div className="grid md:grid-cols-3 gap-6 pt-20">
            <div className="glass p-6 rounded-xl hover-scale hover-glow transition-all">
              <div className="text-4xl mb-3">🎯</div>
              <h3 className="text-xl font-semibold mb-2">Focused</h3>
              <p className="text-muted-foreground">Delivering pixel-perfect, performant applications</p>
            </div>
            <div className="glass p-6 rounded-xl hover-scale hover-glow transition-all">
              <div className="text-4xl mb-3">🚀</div>
              <h3 className="text-xl font-semibold mb-2">Fast</h3>
              <p className="text-muted-foreground">Optimized for speed and user experience</p>
            </div>
            <div className="glass p-6 rounded-xl hover-scale hover-glow transition-all">
              <div className="text-4xl mb-3">💡</div>
              <h3 className="text-xl font-semibold mb-2">Innovative</h3>
              <p className="text-muted-foreground">Using cutting-edge technologies</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
