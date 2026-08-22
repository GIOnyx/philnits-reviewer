import React, { useState } from 'react';
import { StudyDomainSection, CuratedResource } from '../types/exam';
import { STUDY_DOMAINS, CURATED_RESOURCES } from '../data/seed/study_resources_catalogue';
import { HammingCodeVisualizer } from './visuals/HammingCodeVisualizer';
import { SubnetCalculator } from './visuals/SubnetCalculator';
import { DbNormalizationFlowchart } from './visuals/DbNormalizationFlowchart';
import { EvmGraphVisualizer } from './visuals/EvmGraphVisualizer';
import { ResourceEmbedModal } from './modals/ResourceEmbedModal';
import { BookOpen, Briefcase, Code, Database, Layers, Globe, Cpu, Sparkles, ChevronRight, CheckCircle2, FileText, Video, ExternalLink, Eye } from 'lucide-react';

export const StudyHub: React.FC = () => {
  const [activeDomainId, setActiveDomainId] = useState<string>(STUDY_DOMAINS[0].id);
  const [selectedResource, setSelectedResource] = useState<CuratedResource | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const activeDomain = STUDY_DOMAINS.find(d => d.id === activeDomainId) || STUDY_DOMAINS[0];

  const domainResources = CURATED_RESOURCES.filter(res => {
    const matchesSubtopic = activeDomain.subtopics.some(sub => 
      res.subtopic.toLowerCase().includes(sub.toLowerCase()) || 
      sub.toLowerCase().includes(res.subtopic.toLowerCase()) ||
      res.summary_of_content.toLowerCase().includes(sub.toLowerCase())
    );
    const matchesCategory = res.category.toLowerCase().includes('database') && (activeDomain.id === 'relational-db' || activeDomain.id === 'transaction-mgmt');
    const matchesKeyword = activeDomain.id === 'transaction-mgmt' && (res.summary_of_content.toLowerCase().includes('lock') || res.summary_of_content.toLowerCase().includes('transaction') || res.summary_of_content.toLowerCase().includes('recovery') || res.summary_of_content.toLowerCase().includes('aries'));
    return matchesSubtopic || matchesCategory || matchesKeyword;
  });

  // Group resources for this domain into PDFs, Slide Decks / PPTs, and Video Embeds
  const pdfResources = domainResources.filter(r => r.resource_type === 'PDF');
  const slideDeckResources = domainResources.filter(r => r.resource_type === 'SlideDeck');
  const videoResources = domainResources.filter(r => r.resource_type === 'VideoEmbed');
  const otherResources = domainResources.filter(r => r.resource_type !== 'PDF' && r.resource_type !== 'SlideDeck' && r.resource_type !== 'VideoEmbed');

  const getDomainIcon = (iconName: string) => {
    switch (iconName) {
      case 'Briefcase': return <Briefcase className="w-5 h-5 text-emerald-500 dark:text-emerald-400" />;
      case 'Code': return <Code className="w-5 h-5 text-indigo-500 dark:text-indigo-400" />;
      case 'Database': return <Database className="w-5 h-5 text-purple-500 dark:text-purple-400" />;
      case 'Layers': return <Layers className="w-5 h-5 text-amber-500 dark:text-amber-400" />;
      case 'Globe': return <Globe className="w-5 h-5 text-cyan-500 dark:text-cyan-400" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-rose-500 dark:text-rose-400" />;
      default: return <BookOpen className="w-5 h-5 text-indigo-500 dark:text-indigo-400" />;
    }
  };

  const getResourceTypeIcon = (type: string) => {
    switch (type) {
      case 'PDF': return <FileText className="w-4 h-4 text-rose-500 dark:text-rose-400" />;
      case 'SlideDeck': return <BookOpen className="w-4 h-4 text-amber-500 dark:text-amber-400" />;
      case 'VideoEmbed': return <Video className="w-4 h-4 text-red-500 dark:text-red-400" />;
      default: return <ExternalLink className="w-4 h-4 text-cyan-500 dark:text-cyan-400" />;
    }
  };

  const renderWidget = (widgetType?: string) => {
    switch (widgetType) {
      case 'evm': return <EvmGraphVisualizer />;
      case 'normalization': return <DbNormalizationFlowchart />;
      case 'subnet': return <SubnetCalculator />;
      case 'hamming': return <HammingCodeVisualizer />;
      default: return null;
    }
  };

  const renderResourceCard = (res: CuratedResource) => (
    <div
      key={res.id}
      className="bg-[var(--bg-card)] border border-[var(--border-color)] hover:border-[var(--accent-cyan)]/50 rounded-xl p-4 shadow-md flex flex-col justify-between transition-all group"
    >
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <span className="flex items-center gap-1.5 px-2 py-0.5 bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-md text-[10px] font-semibold text-[var(--text-primary)]">
            {getResourceTypeIcon(res.resource_type)}
            {res.resource_type}
          </span>
          {res.badge && (
            <span className="text-[10px] font-bold px-2 py-0.5 bg-[var(--accent-cyan)]/10 text-[var(--accent-cyan)] border border-[var(--accent-cyan)]/30 rounded-full">
              {res.badge}
            </span>
          )}
        </div>
        <h4 className="text-sm font-bold text-[var(--text-primary)] group-hover:text-[var(--accent-cyan)] transition line-clamp-2">
          {res.resource_title}
        </h4>
        <p className="text-xs text-[var(--text-secondary)] line-clamp-2">
          {res.summary_of_content}
        </p>
      </div>

      <div className="pt-3 mt-3 border-t border-[var(--border-color)] flex items-center justify-between gap-2">
        <button
          onClick={() => { setSelectedResource(res); setIsModalOpen(true); }}
          className="flex-1 flex items-center justify-center gap-1.5 px-3 py-1.5 bg-[var(--accent-cyan)] hover:opacity-90 text-slate-950 rounded-lg text-xs font-bold transition cursor-pointer shadow"
        >
          <Eye className="w-3.5 h-3.5" /> Preview Embed
        </button>
        <a
          href={res.embed_url}
          target="_blank"
          rel="noopener noreferrer"
          className="p-1.5 bg-[var(--bg-secondary)] hover:bg-[var(--border-color)] text-[var(--text-primary)] rounded-lg transition"
          title="Open External URL"
        >
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </div>
  );

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start animate-fadeIn pb-12">
      {/* Left Sidebar: 6 Theoretical Domains Taxonomy */}
      <div className="lg:col-span-4 space-y-4 lg:sticky lg:top-24">
        <div className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-2xl p-5 shadow-[var(--shadow-subtle)] space-y-4">
          <div className="flex items-center gap-2 border-b border-[var(--border-color)] pb-3">
            <span className="p-2 bg-[var(--accent-cyan)]/10 text-[var(--accent-cyan)] rounded-lg">
              <BookOpen className="w-5 h-5" />
            </span>
            <div>
              <h3 className="text-base font-bold text-[var(--text-primary)]">Interactive Study Hub</h3>
              <p className="text-xs text-[var(--text-secondary)]">PhilNITS FE 6 Core Theoretical Pillars</p>
            </div>
          </div>

          <div className="space-y-2">
            {STUDY_DOMAINS.map((domain) => {
              const isActive = activeDomainId === domain.id;
              return (
                <button
                  key={domain.id}
                  onClick={() => setActiveDomainId(domain.id)}
                  className={`w-full text-left p-3.5 rounded-xl border transition-all flex items-center justify-between cursor-pointer ${
                    isActive
                      ? 'bg-[var(--accent-cyan)]/10 border-[var(--accent-cyan)]/30 text-[var(--text-primary)] shadow-[var(--shadow-glow)] font-bold'
                      : 'bg-transparent border-transparent text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-card-hover)]'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${isActive ? 'bg-[var(--accent-cyan)]/20 text-[var(--accent-cyan)]' : 'bg-[var(--bg-main)] text-[var(--text-muted)]'}`}>
                      {getDomainIcon(domain.iconName)}
                    </div>
                    <div>
                      <div className="text-xs font-bold leading-snug line-clamp-1">{domain.title}</div>
                      <div className="text-[10px] text-[var(--text-muted)] mt-0.5">{domain.subtopics.length} Subtopics & Interactive Widget</div>
                    </div>
                  </div>
                  <ChevronRight className={`w-4 h-4 transition-transform ${isActive ? 'text-[var(--accent-cyan)] translate-x-0.5' : 'text-[var(--text-muted)] opacity-0'}`} />
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Right Content Area: Detailed Theory, Interactive Widget, and Categorized Embedded Resources */}
      <div className="lg:col-span-8 space-y-6">
        {/* Domain Overview Banner */}
        <div className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-2xl p-6 shadow-[var(--shadow-subtle)] space-y-4">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-[var(--accent-cyan)]/10 text-[var(--accent-cyan)] rounded-xl">
              {getDomainIcon(activeDomain.iconName)}
            </div>
            <div>
              <span className="text-xs font-semibold px-2.5 py-1 bg-[var(--accent-cyan)]/10 text-[var(--accent-cyan)] rounded-full uppercase tracking-wider">
                PhilNITS FE Core Pillar
              </span>
              <h2 className="text-2xl font-bold text-[var(--text-primary)] mt-1">{activeDomain.title}</h2>
            </div>
          </div>

          <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
            {activeDomain.description}
          </p>

          <div className="pt-2 flex flex-wrap gap-2">
            {activeDomain.subtopics.map((sub, idx) => (
              <span key={idx} className="flex items-center gap-1.5 px-3 py-1 bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-lg text-xs font-medium text-[var(--text-primary)]">
                <CheckCircle2 className="w-3.5 h-3.5 text-[var(--accent-emerald)]" /> {sub}
              </span>
            ))}
          </div>
        </div>

        {/* Interactive Visualization Widget Container */}
        {activeDomain.widgetType && (
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="p-1.5 bg-[var(--accent-emerald)]/10 text-[var(--accent-emerald)] rounded-lg">
                <Sparkles className="w-4 h-4" />
              </span>
              <h3 className="text-sm font-bold uppercase tracking-wider text-[var(--text-primary)]">Interactive Visualization Widget</h3>
            </div>
            {renderWidget(activeDomain.widgetType)}
          </div>
        )}

        {/* Categorized Embedded Resources by Subtopic for this Domain */}
        <div className="space-y-8 pt-4">
          <div className="flex items-center justify-between border-b border-[var(--border-color)] pb-3">
            <h3 className="text-base font-bold text-[var(--text-primary)] flex items-center gap-2">
              <FileText className="w-5 h-5 text-[var(--accent-cyan)]" /> Subtopic-Categorized Reference Materials & Tutorials
            </h3>
            <span className="text-xs font-semibold px-2.5 py-1 bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-full text-[var(--text-secondary)]">
              {domainResources.length} Total Items
            </span>
          </div>

          {activeDomain.subtopics.map(subtopicName => {
            const subtopicResources = domainResources.filter(res =>
              res.subtopic.toLowerCase().includes(subtopicName.toLowerCase()) ||
              subtopicName.toLowerCase().includes(res.subtopic.toLowerCase()) ||
              res.summary_of_content.toLowerCase().includes(subtopicName.toLowerCase())
            );

            if (subtopicResources.length === 0) return null;

            return (
              <div key={subtopicName} className="space-y-4 bg-[var(--bg-card)]/50 border border-[var(--border-color)] rounded-2xl p-5 shadow-sm">
                <div className="flex items-center justify-between border-b border-[var(--border-color)] pb-2">
                  <h4 className="text-sm font-bold text-[var(--accent-cyan)] flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[var(--accent-emerald)]" /> {subtopicName}
                  </h4>
                  <span className="text-[11px] font-semibold px-2 py-0.5 bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-md text-[var(--text-secondary)]">
                    {subtopicResources.length} {subtopicResources.length === 1 ? 'Resource' : 'Resources'}
                  </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {subtopicResources.map(renderResourceCard)}
                </div>
              </div>
            );
          })}

          {domainResources.length === 0 && (
            <div className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-xl p-6 text-center text-xs text-[var(--text-secondary)]">
              General curated resources apply across all study modules. Visit the Curated Resource Catalogue tab for the complete library.
            </div>
          )}
        </div>
      </div>

      {/* Resource Embed Modal */}
      <ResourceEmbedModal
        resource={selectedResource}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};
