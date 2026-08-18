import React, { useState } from 'react';
import { 
  FileText, 
  ExternalLink, 
  Youtube, 
  BookOpen, 
  Search,
  Eye,
  Github,
  Layers,
  Sparkles,
  Video
} from 'lucide-react';
import { CuratedResource } from '../types/exam';
import { CURATED_RESOURCES } from '../data/seed/study_resources_catalogue';
import { ResourceEmbedModal } from './modals/ResourceEmbedModal';

export const StudyResources: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedSubtopic, setSelectedSubtopic] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedResource, setSelectedResource] = useState<CuratedResource | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const categories = ['All', 'Management', 'Strategy', 'Technology'];
  const subtopics = ['All', ...Array.from(new Set(CURATED_RESOURCES.map(r => r.subtopic)))];

  const filteredResources = CURATED_RESOURCES.filter(res => {
    const matchesCategory = selectedCategory === 'All' || res.category === selectedCategory;
    const matchesSubtopic = selectedSubtopic === 'All' || res.subtopic === selectedSubtopic;
    const matchesSearch = 
      res.resource_title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      res.summary_of_content.toLowerCase().includes(searchQuery.toLowerCase()) ||
      res.subtopic.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSubtopic && matchesSearch;
  });

  // Group filtered resources by type (PDF, SlideDeck, VideoEmbed, GitHub Repo, Web Article)
  const groupedResources: Record<string, CuratedResource[]> = {};
  filteredResources.forEach(res => {
    const typeKey = res.resource_type === 'PDF' ? 'PDF Documents & Lectures' :
                    res.resource_type === 'SlideDeck' ? 'Slide Decks' :
                    res.resource_type === 'VideoEmbed' ? 'Video Tutorials' :
                    res.resource_type === 'GitHub Repo' ? 'Repositories & Code' : 'Web Articles';
    if (!groupedResources[typeKey]) {
      groupedResources[typeKey] = [];
    }
    groupedResources[typeKey].push(res);
  });

  const getResourceTypeIcon = (type: string) => {
    switch (type) {
      case 'PDF':
        return <FileText className="w-4 h-4 text-rose-500 dark:text-rose-400" />;
      case 'SlideDeck':
        return <BookOpen className="w-4 h-4 text-amber-500 dark:text-amber-400" />;
      case 'GitHub Repo':
        return <Github className="w-4 h-4 text-indigo-500 dark:text-indigo-400" />;
      case 'VideoEmbed':
        return <Youtube className="w-4 h-4 text-red-500" />;
      default:
        return <ExternalLink className="w-4 h-4 text-cyan-500 dark:text-cyan-400" />;
    }
  };

  return (
    <div className="space-y-8 animate-fadeIn pb-12">
      {/* Header Banner */}
      <div className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-2xl p-6 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-2 bg-[var(--accent-cyan)]/10 text-[var(--accent-cyan)] rounded-lg">
              <Sparkles className="w-5 h-5" />
            </span>
            <h2 className="text-2xl font-bold text-[var(--text-primary)]">Curated Resource Catalogue Hub</h2>
          </div>
          <p className="text-[var(--text-secondary)] text-sm mt-1">
            Comprehensive reference materials, official ITPEC syllabi, academic papers, and video tutorials grouped by material type.
          </p>
        </div>
        <div className="flex items-center gap-2 bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-xl px-4 py-2 text-xs text-[var(--text-secondary)]">
          <span className="font-bold text-[var(--accent-cyan)]">{filteredResources.length}</span> Resources Available
        </div>
      </div>

      {/* Filter & Search Toolbar */}
      <div className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-xl p-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-1 bg-[var(--bg-secondary)] p-1 rounded-xl border border-[var(--border-color)] w-full md:w-auto overflow-x-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => { setSelectedCategory(cat); setSelectedSubtopic('All'); }}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition cursor-pointer whitespace-nowrap ${
                selectedCategory === cat
                  ? 'bg-[var(--accent-cyan)] text-slate-950 shadow'
                  : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-card)]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3 w-full md:w-auto">
          <select
            value={selectedSubtopic}
            onChange={(e) => setSelectedSubtopic(e.target.value)}
            className="bg-[var(--bg-secondary)] border border-[var(--border-color)] text-[var(--text-primary)] text-xs rounded-xl px-3 py-2.5 focus:outline-none focus:border-[var(--accent-cyan)]"
          >
            {subtopics.map(sub => (
              <option key={sub} value={sub}>{sub === 'All' ? 'All Subtopics' : sub}</option>
            ))}
          </select>

          <div className="relative flex-1 md:w-64">
            <Search className="absolute left-3 top-2.5 w-4 h-4 text-[var(--text-muted)]" />
            <input
              type="text"
              placeholder="Search resources..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-xl pl-9 pr-4 py-2 text-xs text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--accent-cyan)]"
            />
          </div>
        </div>
      </div>

      {/* Grouped Resource Sections */}
      {Object.entries(groupedResources).map(([groupTitle, resources]) => (
        <div key={groupTitle} className="space-y-4">
          <div className="flex items-center gap-2 border-b border-[var(--border-color)] pb-2">
            <Layers className="w-4 h-4 text-[var(--accent-cyan)]" />
            <h3 className="text-base font-bold text-[var(--text-primary)]">{groupTitle}</h3>
            <span className="text-xs font-semibold px-2 py-0.5 bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-full text-[var(--text-secondary)]">
              {resources.length}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {resources.map((res) => (
              <div
                key={res.id}
                className="bg-[var(--bg-card)] border border-[var(--border-color)] hover:border-[var(--accent-cyan)]/50 rounded-2xl p-5 shadow-lg flex flex-col justify-between transition-all group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1.5 px-2.5 py-1 bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-lg text-[11px] font-semibold text-[var(--text-primary)]">
                      {getResourceTypeIcon(res.resource_type)}
                      {res.resource_type}
                    </span>
                    {res.badge && (
                      <span className="text-[10px] font-bold px-2 py-0.5 bg-[var(--accent-cyan)]/10 text-[var(--accent-cyan)] border border-[var(--accent-cyan)]/30 rounded-full">
                        {res.badge}
                      </span>
                    )}
                  </div>

                  <div>
                    <span className="text-[10px] font-medium text-[var(--text-muted)] uppercase tracking-wider">
                      {res.category} &bull; {res.subtopic}
                    </span>
                    <h4 className="text-base font-bold text-[var(--text-primary)] mt-1 group-hover:text-[var(--accent-cyan)] transition line-clamp-2">
                      {res.resource_title}
                    </h4>
                  </div>

                  <p className="text-xs text-[var(--text-secondary)] line-clamp-3">
                    {res.summary_of_content}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-[var(--border-color)] flex items-center justify-between gap-2">
                  <button
                    onClick={() => { setSelectedResource(res); setIsModalOpen(true); }}
                    className="flex-1 flex items-center justify-center gap-1.5 px-4 py-2 bg-[var(--accent-cyan)] hover:opacity-90 text-slate-950 rounded-xl text-xs font-bold transition cursor-pointer shadow"
                  >
                    <Eye className="w-3.5 h-3.5" /> Preview Embed
                  </button>
                  <a
                    href={res.embed_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-[var(--bg-secondary)] hover:bg-[var(--border-color)] text-[var(--text-primary)] rounded-xl transition"
                    title="Open External URL"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      {filteredResources.length === 0 && (
        <div className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-2xl p-12 text-center space-y-3">
          <Layers className="w-10 h-10 text-[var(--text-muted)] mx-auto" />
          <h3 className="text-lg font-bold text-[var(--text-primary)]">No resources found</h3>
          <p className="text-sm text-[var(--text-secondary)]">Try adjusting your category filters or search query.</p>
        </div>
      )}

      {/* Resource Embed Modal */}
      <ResourceEmbedModal
        resource={selectedResource}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};
