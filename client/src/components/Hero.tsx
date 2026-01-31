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
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative order-2 md:order-1"
        >
          <div className="relative w-full aspect-square max-w-md mx-auto">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-[2rem] transform rotate-3" />
            <img 
              src="/images/profile.jpg" 
              alt="Shankha Suvro Mullick" 
              className="absolute inset-0 w-full h-full object-cover rounded-[2rem] shadow-2xl border border-white/50 object-top"
            />
            {/* Floating Card */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -bottom-6 -right-6 bg-white dark:bg-card p-4 rounded-xl shadow-xl border border-border/50 flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600">
                <Github className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground font-medium">Commits</p>
                <p className="text-sm font-bold">1,200+ This Year</p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-6 order-1 md:order-2"
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-medium text-sm">
            Available for opportunities
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground leading-[1.1]">
            Hi, I'm <br />
            <span className="text-gradient">Shankha Suvro</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-lg">
            Software Engineer & CS Student building clean, scalable solutions for the modern web.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
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
