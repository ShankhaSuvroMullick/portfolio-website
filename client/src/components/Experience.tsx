import { motion } from "framer-motion";
import { useExperience } from "@/hooks/use-portfolio";
import { Skeleton } from "@/components/ui/skeleton";
import { Briefcase } from "lucide-react";

export function Experience() {
  const { data: experiences, isLoading } = useExperience();

  return (
    <section id="experience" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience & Education</h2>
        </div>

        <div className="max-w-3xl mx-auto">
          {isLoading ? (
            <div className="space-y-8">
              {[1, 2].map((i) => (
                <div key={i} className="flex gap-4">
                  <Skeleton className="w-12 h-12 rounded-full flex-shrink-0" />
                  <div className="space-y-2 w-full">
                    <Skeleton className="h-6 w-1/3" />
                    <Skeleton className="h-4 w-1/4" />
                    <Skeleton className="h-20 w-full" />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-12">
              {experiences?.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative pl-8 md:pl-0"
                >
                  <div className="md:flex gap-6 items-start">
                    {/* Icon / Timeline dot */}
                    <div className="hidden md:flex flex-shrink-0 w-12 h-12 rounded-full bg-white border border-border items-center justify-center text-primary shadow-sm z-10 relative">
                      <Briefcase className="w-5 h-5" />
                    </div>
                    
                    {/* Content */}
                    <div className="bg-white p-6 rounded-2xl border border-border/50 shadow-sm flex-grow hover:shadow-md transition-shadow">
                      <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-foreground">{exp.role}</h3>
                          <p className="text-primary font-medium">{exp.company}</p>
                        </div>
                        <span className="inline-block mt-2 md:mt-0 px-3 py-1 bg-secondary rounded-full text-xs font-semibold text-muted-foreground whitespace-nowrap">
                          {exp.duration}
                        </span>
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed whitespace-pre-line">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Vertical Line Connector */}
                  {index !== experiences.length - 1 && (
                    <div className="absolute left-6 top-12 bottom-[-48px] w-px bg-border hidden md:block" />
                  )}
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
