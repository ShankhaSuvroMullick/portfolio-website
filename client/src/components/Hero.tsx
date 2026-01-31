import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Link as ScrollLink } from "react-scroll";

export function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-20 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30 -translate-x-1/2 translate-y-1/2 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-6 order-1 text-center md:text-left"
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-semibold text-xs tracking-wide uppercase">
            Available for new projects
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-foreground leading-tight">
            I'm <br />
            <span className="text-gradient">Shankha Suvro</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground font-medium max-w-lg mx-auto md:mx-0 leading-relaxed">
            AI/ML & Software Engineer crafting high-performance, accessible web experiences.
          </p>

          <div className="flex flex-wrap gap-4 pt-4 justify-center md:justify-start">
            <ScrollLink
              to="projects"
              smooth={true}
              offset={-100}
              className="cursor-pointer px-8 py-3.5 rounded-full bg-foreground text-background font-semibold hover:bg-foreground/90 transition-all flex items-center gap-2 group"
            >
              View Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </ScrollLink>
            
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="p-3.5 rounded-full border border-border hover:border-foreground/20 hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="p-3.5 rounded-full border border-border hover:border-foreground/20 hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:contact@example.com"
              className="p-3.5 rounded-full border border-border hover:border-foreground/20 hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative order-2 flex justify-center md:justify-end"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-full transform rotate-6 scale-105 blur-sm" />
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-white/10 shadow-2xl bg-muted">
              <img 
                src="/images/profile.jpg" 
                alt="Shankha Suvro Mullick" 
                className="w-full h-full object-cover object-center scale-150"
              />
            </div>
            {/* Floating Achievement */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -bottom-2 -left-2 bg-white dark:bg-card p-3 rounded-2xl shadow-xl border border-border/50 flex items-center gap-3 z-10"
            >
              <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600">
                <Github className="w-4 h-4" />
              </div>
              <div>
                <p className="text-[10px] text-muted-foreground font-medium uppercase tracking-wider">Experience</p>
                <p className="text-xs font-bold whitespace-nowrap">Building Scalable Web Apps</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
            <ScrollLink
              to="projects"
              smooth={true}
              offset={-100}
              className="cursor-pointer px-8 py-3.5 rounded-full bg-foreground text-background font-semibold hover:bg-foreground/90 transition-all flex items-center gap-2 group"
            >
              View Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </ScrollLink>
            
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="p-3.5 rounded-full border border-border hover:border-foreground/20 hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="p-3.5 rounded-full border border-border hover:border-foreground/20 hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:contact@example.com"
              className="p-3.5 rounded-full border border-border hover:border-foreground/20 hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
