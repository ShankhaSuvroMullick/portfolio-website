import { motion } from "framer-motion";
import { useProjects } from "@/hooks/use-portfolio";
import { Skeleton } from "@/components/ui/skeleton";
import { Github, ExternalLink } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

export function Projects() {
  const { data: projects, isLoading } = useProjects();

  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground">
            A selection of my recent work, side projects, and open source contributions.
          </p>
        </div>

        {isLoading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="space-y-4">
                <Skeleton className="h-48 w-full rounded-2xl" />
                <Skeleton className="h-6 w-3/4" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-2/3" />
              </div>
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects?.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full flex flex-col overflow-hidden border-border/50 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 group">
                  <div className="relative h-48 overflow-hidden bg-secondary">
                    {/* Placeholder image if none provided */}
                    <img 
                      src={project.imageUrl || `https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=80`} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4 backdrop-blur-sm">
                      {project.githubUrl && (
                        <a 
                          href={project.githubUrl} 
                          target="_blank" 
                          rel="noreferrer"
                          className="p-2 bg-white rounded-full text-foreground hover:bg-primary hover:text-white transition-colors"
                        >
                          <Github className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </div>
                  
                  <CardHeader className="pb-2">
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{project.title}</h3>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.tags?.map((tag) => (
                        <span key={tag} className="text-xs px-2 py-1 bg-secondary rounded-md text-secondary-foreground font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardHeader>
                  
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </CardContent>
                  
                  <CardFooter className="pt-0 pb-6">
                    <a 
                      href={project.githubUrl || "#"} 
                      className="text-sm font-semibold text-primary hover:underline flex items-center gap-1"
                    >
                      View Code <Github className="w-3 h-3" />
                    </a>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
