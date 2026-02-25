import { Card } from './ui/Card';
import { Tag } from './ui/Tag';
import { FileText, Code, Link as LinkIcon, Quote, ExternalLink, Download } from 'lucide-react';
import { motion } from 'motion/react';

interface PublicationItemProps {
  title: string;
  authors: string;
  venue: string;
  year: string;
  description?: string;
  tags: string[];
  paperUrl?: string;
  pdfUrl?: string;
  doiUrl?: string;
  codeUrl?: string;
  type: 'conference' | 'journal' | 'preprint';
  status?: string;
}

export function PublicationItem({
  title,
  authors,
  venue,
  year,
  description,
  tags,
  paperUrl,
  pdfUrl,
  doiUrl,
  codeUrl,
  type,
  status,
}: PublicationItemProps) {
  const typeColors = {
    conference: 'accent',
    journal: 'success',
    preprint: 'default',
  } as const;

  return (
    <Card hover className="group">
      <div className="flex items-start gap-4">
        <div className="p-3 bg-[#1a1a1a] rounded-xl border border-[#2a2a2a] group-hover:border-[#333] transition-colors flex-shrink-0">
          <FileText className="w-5 h-5 text-gray-400" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <Tag variant={typeColors[type]} size="sm">{type}</Tag>
            {status && (
              <span className="text-xs text-gray-500 italic">
                {status}
              </span>
            )}
          </div>
          <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-white transition-colors">
            {title}
          </h3>
          <p className="text-sm text-gray-500 mb-2">{authors}</p>
          <p className="text-sm text-gray-400 mb-3">
            {venue} • {year}
          </p>
          {description && (
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              {description}
            </p>
          )}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {tags.map((tag) => (
              <Tag key={tag} size="sm">{tag}</Tag>
            ))}
          </div>
          
          {/* Primary Action Links */}
          <div className="flex flex-wrap items-center gap-4 mb-3 pb-4 border-b border-[#222]">
            {paperUrl && (
              <motion.a
                whileHover={{ x: 3 }}
                href={paperUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-white transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                View conference
              </motion.a>
            )}
            {pdfUrl && (
              <motion.a
                whileHover={{ x: 3 }}
                href={pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-white transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                Download PDF
              </motion.a>
            )}
          </div>

          {/* Secondary Action Links */}
          <div className="flex flex-wrap gap-2">
            {doiUrl && (
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={doiUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg text-sm text-gray-400 hover:text-white hover:border-[#333] transition-all"
              >
                <LinkIcon className="w-4 h-4" />
                DOI
              </motion.a>
            )}
            {codeUrl && (
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={codeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg text-sm text-gray-400 hover:text-white hover:border-[#333] transition-all"
              >
                <Code className="w-4 h-4" />
                Code
              </motion.a>
            )}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg text-sm text-gray-400 hover:text-white hover:border-[#333] transition-all"
            >
              <Quote className="w-4 h-4" />
              Cite
            </motion.button>
          </div>
        </div>
      </div>
    </Card>
  );
}