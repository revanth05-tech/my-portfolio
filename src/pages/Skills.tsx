import Navigation from "@/components/Navigation";

const skillCategories = [
  {
    title: "Frontend Development",
    emoji: "🎨",
    skills: [
      { name: "React", level: 20 },
      { name: "JavaScript", level: 70 },
      { name: "Tailwind CSS", level: 30 },
      { name: "Next.js", level: 15 },
      { name: "HTML/CSS", level: 98 }
    ]
  },
  {
    title: "Backend Development",
    emoji: "⚙️",
    skills: [
      { name: "Node.js", level: 80 },
      { name: "Express", level: 78 },
      { name: "Python", level: 40 },
      { name: "MongoDB", level: 67 }
    ]
  },
  {
    title: "Tools & Technologies",
    emoji: "🛠️",
    skills: [
      { name: "Git", level: 93 },
      { name: "Docker", level: 80 },
      { name: "AWS", level: 78 },
      { name: "Figma", level: 85 },
      { name: "CI/CD", level: 82 }
    ]
  },
  {
    title: "Soft Skills",
    emoji: "💡",
    skills: [
      { name: "Problem Solving", level: 95 },
      { name: "Communication", level: 90 },
      { name: "Team Leadership", level: 88 },
      { name: "Agile/Scrum", level: 92 },
      { name: "Code Review", level: 90 }
    ]
  }
];

const Skills = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-4 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold">
              My <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Skills</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Technologies I work with 💻
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <div 
                key={index}
                className="glass p-8 rounded-2xl space-y-6 hover-scale hover-glow transition-all"
              >
                <h2 className="text-3xl font-bold flex items-center gap-3">
                  <span>{category.emoji}</span>
                  {category.title}
                </h2>
                
                <div className="space-y-4">
                  {category.skills.map((skill, i) => (
                    <div key={i} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-medium">{skill.name}</span>
                        <span className="text-primary font-semibold">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-secondary rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="glass p-8 rounded-2xl text-center space-y-4">
            <h3 className="text-2xl font-bold">Always Learning 📚</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Technology is constantly evolving, and so am I. I'm always exploring new tools, 
              frameworks, and best practices to stay at the cutting edge of web development.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Skills;
