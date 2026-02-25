import { TopBar } from "../components/TopBar";
import { Card } from "../components/ui/Card";
import { Tag } from "../components/ui/Tag";
import {
  AnimatedSection,
  StaggerContainer,
  itemVariants,
} from "../components/AnimatedSection";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { useNavigate } from "react-router";
import { posts } from "../posts";

export function Thoughts() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      <TopBar title="Thoughts & Writing" />

      <AnimatedSection>
        <Card className="mb-12">
          <h2 className="text-3xl font-semibold text-white mb-4">
            Ideas & Reflections
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            Sharing my thoughts on design, technology, research, and the
            intersection of creativity and innovation. Occasional musings on
            building products that matter.
          </p>
        </Card>
      </AnimatedSection>

      <StaggerContainer className="space-y-6">
        {posts.map((post) => (
          <motion.div key={post.slug} variants={itemVariants}>
            {/* ✅ wrapper div এ onClick দিলে Card props issue থাকলেও click কাজ করবে */}
            <div
              role="button"
              tabIndex={0}
              className="cursor-pointer"
              onClick={() => navigate(`/thoughts/${post.slug}`)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  navigate(`/thoughts/${post.slug}`);
                }
              }}
            >
              <Card hover className="group overflow-hidden">
                <div className="flex flex-col md:flex-row gap-6">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                    className="md:w-72 aspect-video md:aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-[#2a2a2a] flex-shrink-0"
                  >
                    {post.image ? (
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    ) : (
                      <div className="w-full h-full" />
                    )}
                  </motion.div>

                  <div className="flex-1 flex flex-col">
                    <div className="flex items-center gap-2 mb-3">
                      {(post.tags ?? []).slice(0, 1).map((tag) => (
                        <Tag key={tag} variant="accent" size="sm">
                          {tag}
                        </Tag>
                      ))}
                    </div>

                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
                      {post.title}
                    </h3>

                    {/* ✅ posts.ts এ excerpt must have */}
                    <p className="text-gray-400 leading-relaxed mb-6 flex-1">
                      {post.excerpt}
                    </p>

                    <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>

                      <motion.div
                        whileHover={{ x: 5 }}
                        className="ml-auto flex items-center gap-2 text-gray-400 group-hover:text-white transition-colors"
                      >
                        <span>Read more</span>
                        <ArrowRight className="w-4 h-4" />
                      </motion.div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </motion.div>
        ))}
      </StaggerContainer>
    </div>
  );
}