import { useMemo } from "react";
import { useNavigate, useParams } from "react-router";
import { Card } from "../components/ui/Card";
import { Tag } from "../components/ui/Tag";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { posts } from "../posts.ts";

export function ThoughtDetails() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const post = useMemo(
    () => posts.find((p) => p.slug === slug),
    [slug]
  );

  if (!post) {
    return (
      <Card className="mt-8">
        <p className="text-gray-300 mb-4">Post not found.</p>
        <button
          onClick={() => navigate("/thoughts")}
          className="text-gray-400 hover:text-white flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Thoughts
        </button>
      </Card>
    );
  }

  return (
    <div className="min-h-screen">
      <Card className="mb-6">
        <button
          onClick={() =>
            window.history.length > 1
              ? navigate(-1)
              : navigate("/thoughts")
          }
          className="mb-6 text-gray-400 hover:text-white flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </button>

        <div className="flex items-center gap-2 mb-4">
          {post.tags.map((tag) => (
            <Tag key={tag} variant="accent" size="sm">
              {tag}
            </Tag>
          ))}
        </div>

        <h1 className="text-3xl font-bold text-white mb-4">
          {post.title}
        </h1>

        <div className="flex gap-6 text-sm text-gray-500 mb-6">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            {post.date}
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            {post.readTime}
          </div>
        </div>

        <img
          src={post.image}
          alt={post.title}
          className="w-full h-[320px] object-cover rounded-2xl mb-8"
        />

        <div className="text-gray-300 whitespace-pre-line leading-relaxed">
          {post.content}
        </div>
      </Card>
    </div>
  );
}