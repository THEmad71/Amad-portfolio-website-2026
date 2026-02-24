import { Card } from './ui/Card';
import { Tag } from './ui/Tag';
import { ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  year: string;
  description?: string;
  tags: string[];
  image?: string;
  link?: string;
  variant?: 'list' | 'preview';
}

export function ProjectCard({ title, year, description, tags, image, link, variant = 'list' }: ProjectCardProps) {
  if (variant === 'preview') {
    return (
      <Card hover glow className="overflow-hidden group">
        {image && (
          <div className="aspect-video bg-gradient-to-br from-blue-500/20 to-purple-500/20 mb-4 rounded-xl overflow-hidden">
            <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
          </div>
        )}
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-semibold text-white">{title}</h3>
          {link && (
            <a href={link} className="text-gray-400 hover:text-white transition-colors">
              <ExternalLink className="w-5 h-5" />
            </a>
          )}
        </div>
        {description && <p className="text-gray-400 text-sm mb-4">{description}</p>}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
      </Card>
    );
  }

  return (
    <div className="group p-4 hover:bg-[#1a1a1a] rounded-xl transition-all border border-transparent hover:border-[#2a2a2a]">
      <div className="flex items-start justify-between mb-2">
        <h4 className="font-semibold text-white group-hover:text-white transition-colors">{title}</h4>
        <span className="text-xs text-gray-500">{year}</span>
      </div>
      <div className="flex flex-wrap gap-1.5">
        {tags.map((tag) => (
          <Tag key={tag} size="sm">{tag}</Tag>
        ))}
      </div>
    </div>
  );
}
