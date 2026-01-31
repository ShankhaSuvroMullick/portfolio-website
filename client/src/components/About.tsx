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
    <section id="about" className="py-24 bg-white dark:bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-5xl font-extrabold text-foreground leading-tight">
              Passionate about <br />
              <span className="text-gradient">Problem Solving</span>
            </h2>
            <div className="w-20 h-1.5 bg-primary rounded-full" />
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              I am an <strong>AI/ML & Software Engineer</strong> dedicated to mastering 
              intelligent systems and robust architectures. I focus on creating 
              clean, efficient solutions that solve real-world problems with elegant code.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl bg-secondary/30 border border-border/50 shadow-xl shadow-primary/5 space-y-6"
          >
            <h3 className="text-2xl font-bold text-foreground">Snapshot</h3>
            <div className="grid grid-cols-2 gap-6">
              <div className="p-5 rounded-2xl bg-white dark:bg-card border border-border/50 shadow-sm">
                <p className="text-3xl font-black text-primary">3+</p>
                <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold mt-1">Years Coding</p>
              </div>
              <div className="p-5 rounded-2xl bg-white dark:bg-card border border-border/50 shadow-sm">
                <p className="text-3xl font-black text-primary">15+</p>
                <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold mt-1">Projects Built</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground italic font-medium">
              "Every line of code is an opportunity to make a positive impact."
            </p>
          </motion.div>
        </div>

        <div id="skills" className="max-w-5xl mx-auto pt-12 border-t border-border/50">
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
