import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding relative" ref={ref}>
      <div className="container-custom">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4">
            Projects
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            My <span className="text-gradient">Work</span>
          </h2>

          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Projects section will be updated soon.
          </p>
        </motion.div>

        {/* Better Empty UI */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="flex flex-col items-center justify-center py-24"
        >
          <div className="w-24 h-24 rounded-full bg-accent flex items-center justify-center mb-6">
            <span className="text-3xl">🚀</span>
          </div>

          <h3 className="text-xl font-semibold mb-2">
            Coming Soon
          </h3>

          <p className="text-muted-foreground text-center max-w-md">
            I'm currently working on competitive programming and development projects.
            Stay tuned for updates.
          </p>
        </motion.div>

      </div>
    </section>
  );
};