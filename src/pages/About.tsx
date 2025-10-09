import Navigation from "@/components/Navigation";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-4 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold">
              About <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Me</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Developer, Problem Solver, Tech Enthusiast 🎯
            </p>
          </div>

          {/* Main Content */}
          <div className="glass p-8 md:p-12 rounded-2xl space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold flex items-center gap-3">
                <span>👨‍💻</span> Background
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a passionate full-stack developer with a love for creating beautiful, 
                functional web applications. With years of experience in modern web technologies, 
                I specialize in building scalable solutions that make a difference.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-3xl font-bold flex items-center gap-3">
                <span>🎓</span> Education
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Bachelor's Degree in Computer Science<br />
                Specialized in Software Engineering and Web Development
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-3xl font-bold flex items-center gap-3">
                <span>💼</span> Experience
              </h2>
              <div className="space-y-6">
                <div className="glass p-6 rounded-xl">
                  <h3 className="text-xl font-semibold mb-2">Senior Full-Stack Developer</h3>
                  <p className="text-primary mb-2">Tech Company • 2020 - Present</p>
                  <p className="text-muted-foreground">
                    Leading development of enterprise-level web applications, 
                    mentoring junior developers, and implementing best practices.
                  </p>
                </div>
                
                <div className="glass p-6 rounded-xl">
                  <h3 className="text-xl font-semibold mb-2">Full-Stack Developer</h3>
                  <p className="text-primary mb-2">Startup Inc • 2018 - 2020</p>
                  <p className="text-muted-foreground">
                    Built and maintained multiple client projects using React, Node.js, 
                    and modern web technologies.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-3xl font-bold flex items-center gap-3">
                <span>🎯</span> What I Do
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="glass p-4 rounded-lg">
                  <p className="text-lg">✨ Frontend Development</p>
                </div>
                <div className="glass p-4 rounded-lg">
                  <p className="text-lg">⚡ Backend Development</p>
                </div>
                <div className="glass p-4 rounded-lg">
                  <p className="text-lg">📱 Responsive Design</p>
                </div>
                <div className="glass p-4 rounded-lg">
                  <p className="text-lg">🎨 UI/UX Design</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
