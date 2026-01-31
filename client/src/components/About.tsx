import { motion } from "framer-motion";
import { useSkills } from "@/hooks/use-portfolio";
import { Skeleton } from "@/components/ui/skeleton";

export function About() {
  const { data: skills, isLoading } = useSkills();

  // Group skills by category if needed, or just display all
  const categories = skills 
    ? Array.from(new Set(skills.map(s => s.category || "General")))
    : [];

  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6" />
          <p className="text-lg text-muted-foreground leading-relaxed">
            I am a Computer Science student with a deep passion for building software that solves real-world problems. 
            My journey involves exploring Full Stack Development, Artificial Intelligence, and System Design. 
            I love turning complex ideas into clean, efficient, and user-friendly applications.
          </p>
        </motion.div>

        <div id="skills" className="max-w-5xl mx-auto">
          <h3 className="text-2xl font-bold mb-8 text-center">Technical Skills</h3>
          
          {isLoading ? (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <Skeleton key={i} className="h-12 w-full rounded-xl" />
              ))}
            </div>
          ) : (
            <div className="space-y-8">
              {categories.map((category) => (
                <div key={category} className="bg-white p-6 rounded-2xl shadow-sm border border-border/50">
                  <h4 className="text-sm uppercase tracking-wider text-muted-foreground font-semibold mb-4">{category}</h4>
                  <div className="flex flex-wrap gap-3">
                    {skills
                      ?.filter(skill => (skill.category || "General") === category)
                      .map((skill) => (
                        <span 
                          key={skill.id}
                          className="px-4 py-2 bg-secondary rounded-lg text-sm font-medium text-foreground hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                        >
                          {skill.name}
                        </span>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
