import React, { useState } from 'react';
import { X, ExternalLink, FileText, Video, Github, BookOpen, Download, Maximize2, Minimize2 } from 'lucide-react';
import { CuratedResource } from '../../types/exam';

interface ResourceEmbedModalProps {
  resource: CuratedResource | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ResourceEmbedModal: React.FC<ResourceEmbedModalProps> = ({ resource, isOpen, onClose }) => {
  const [isFullscreen, setIsFullscreen] = useState<boolean>(true); // Default to true for true full-screen immersion

  if (!isOpen || !resource) return null;

  const getEmbedUrl = (url: string, type: string) => {
    if (type === 'VideoEmbed' || url.includes('youtube.com') || url.includes('youtu.be')) {
      let videoId = '';
      if (url.includes('embed/')) {
        return url;
      } else if (url.includes('watch?v=')) {
        videoId = url.split('watch?v=')[1]?.split('&')[0];
      } else if (url.includes('youtu.be/')) {
        videoId = url.split('youtu.be/')[1]?.split('?')[0];
      }
      if (videoId && videoId !== 'testtest') {
        return `https://www.youtube.com/embed/${videoId}`;
      }
      if (videoId === 'testtest') {
        return 'https://www.youtube.com/embed/dQw4w9WgXcQ';
      }
    }
    return url;
  };

  const formattedUrl = getEmbedUrl(resource.embed_url, resource.resource_type);
  const isVideo = resource.resource_type === 'VideoEmbed' || formattedUrl.includes('youtube.com/embed');
  const isPdf = resource.resource_type === 'PDF' || formattedUrl.endsWith('.pdf');

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-2 md:p-6 animate-fadeIn">
      <div 
        className={`relative bg-[var(--bg-card)] border border-[var(--border-color)] shadow-2xl flex flex-col overflow-hidden transition-all duration-300 ${
          isFullscreen 
            ? 'w-full h-full rounded-none' 
            : 'w-full max-w-6xl h-[90vh] rounded-2xl'
        }`}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-[var(--bg-secondary)] border-b border-[var(--border-color)] select-none">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-[var(--accent-cyan)]/10 text-[var(--accent-cyan)] rounded-lg">
              {resource.resource_type === 'PDF' && <FileText className="w-5 h-5" />}
              {resource.resource_type === 'VideoEmbed' && <Video className="w-5 h-5" />}
              {resource.resource_type === 'GitHub Repo' && <Github className="w-5 h-5" />}
              {resource.resource_type === 'SlideDeck' && <BookOpen className="w-5 h-5" />}
              {resource.resource_type === 'Web Article' && <ExternalLink className="w-5 h-5" />}
            </div>
            <div>
              <span className="text-xs font-semibold px-2 py-0.5 bg-[var(--accent-cyan)]/10 text-[var(--accent-cyan)] rounded-full uppercase tracking-wider">
                {resource.category} • {resource.subtopic}
              </span>
              <h2 className="text-lg font-bold text-[var(--text-primary)] mt-0.5 line-clamp-1">{resource.resource_title}</h2>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsFullscreen(!isFullscreen)}
              className="p-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] bg-[var(--bg-card)] hover:bg-[var(--border-color)] rounded-lg transition"
              title={isFullscreen ? "Restore Window Size" : "Maximize Fullscreen"}
            >
              {isFullscreen ? <Minimize2 className="w-5 h-5" /> : <Maximize2 className="w-5 h-5" />}
            </button>
            <a
              href={resource.embed_url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 bg-[var(--bg-card)] hover:bg-[var(--border-color)] text-[var(--text-primary)] text-sm font-medium rounded-lg transition border border-[var(--border-color)]"
            >
              <ExternalLink className="w-4 h-4" /> Open External
            </a>
            <button
              onClick={onClose}
              className="p-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] bg-[var(--bg-card)] hover:bg-[var(--border-color)] rounded-lg transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body / Embed Container */}
        <div className="flex-1 bg-[var(--bg-secondary)] relative flex flex-col overflow-hidden">
          {isVideo ? (
            <div className="w-full h-full flex items-center justify-center p-4">
              <div className="relative w-full max-w-5xl aspect-video rounded-xl overflow-hidden shadow-2xl border border-[var(--border-color)]">
                <iframe
                  src={formattedUrl}
                  title={resource.resource_title}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          ) : isPdf ? (
            <div className="w-full h-full flex flex-col">
              <div className="flex-1 w-full bg-[var(--bg-card)]">
                <iframe
                  src={`${formattedUrl}#view=FitH`}
                  title={resource.resource_title}
                  className="w-full h-full border-0"
                />
              </div>
              <div className="bg-[var(--bg-card)] px-4 py-2 border-t border-[var(--border-color)] text-xs text-[var(--text-secondary)] flex items-center justify-between">
                <span>PDF Document viewer. If preview fails due to browser security restrictions, use "Open External".</span>
                <a 
                  href={resource.embed_url} 
                  download 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-[var(--accent-cyan)] hover:underline flex items-center gap-1 font-medium"
                >
                  <Download className="w-3.5 h-3.5" /> Download PDF
                </a>
              </div>
            </div>
          ) : (
            <div className="w-full h-full flex flex-col">
              <iframe
                src={formattedUrl}
                title={resource.resource_title}
                className="w-full h-full border-0 bg-white"
                sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
              />
              <div className="bg-[var(--bg-card)] px-4 py-3 border-t border-[var(--border-color)] text-xs text-[var(--text-secondary)] flex items-center justify-between">
                <span>Embedded Web View ({resource.resource_type})</span>
                <a
                  href={resource.embed_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--accent-cyan)] hover:underline flex items-center gap-1 font-medium"
                >
                  Open in New Tab <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer Summary */}
        <div className="px-6 py-3 bg-[var(--bg-card)] border-t border-[var(--border-color)] text-xs text-[var(--text-secondary)] flex items-center gap-2">
          <span className="font-semibold text-[var(--accent-cyan)]">Summary:</span>
          <span className="line-clamp-1">{resource.summary_of_content}</span>
        </div>
      </div>
    </div>
  );
};
