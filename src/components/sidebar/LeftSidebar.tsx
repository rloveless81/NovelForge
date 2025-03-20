import React, { useState } from 'react';
import SidebarSection from './SidebarSection';

interface LeftSidebarProps {
  // Add props as needed
}

const LeftSidebar: React.FC<LeftSidebarProps> = () => {
  const [openSections, setOpenSections] = useState({
    manuscript: true,
    characters: true,
    locations: true,
    storyboard: true,
    workshop: true,
    forge: true,
    assistant: true
  });

  const toggleSection = (section: string) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section as keyof typeof prev]
    }));
  };

  return (
    <div className="left-sidebar-content p-2 overflow-y-auto h-full bg-[#1a1a1a]">
      <h2 className="text-xl font-bold text-[#e0e0e0] mb-4 px-2">NovelForge</h2>
      
      <SidebarSection 
        title="Manuscript" 
        isOpen={openSections.manuscript}
        onToggle={() => toggleSection('manuscript')}
      >
        <ul className="text-[#e0e0e0]">
          <li className="py-1 px-2 hover:bg-[#252525] cursor-pointer">Chapters</li>
          <li className="py-1 px-2 hover:bg-[#252525] cursor-pointer">Outline</li>
          <li className="py-1 px-2 hover:bg-[#252525] cursor-pointer">Goals</li>
          <li className="py-1 px-2 hover:bg-[#252525] cursor-pointer">Deadlines</li>
          <li className="py-1 px-2 hover:bg-[#252525] cursor-pointer">Framework</li>
        </ul>
      </SidebarSection>
      
      <SidebarSection 
        title="Characters" 
        isOpen={openSections.characters}
        onToggle={() => toggleSection('characters')}
      >
        <ul className="text-[#e0e0e0]">
          <li className="py-1 px-2 hover:bg-[#252525] cursor-pointer">Profiles</li>
          <li className="py-1 px-2 hover:bg-[#252525] cursor-pointer">Character Sheets</li>
          <li className="py-1 px-2 hover:bg-[#252525] cursor-pointer">Relationships</li>
          <li className="py-1 px-2 hover:bg-[#252525] cursor-pointer">Timeline</li>
          <li className="py-1 px-2 hover:bg-[#252525] cursor-pointer">Tags</li>
          <li className="py-1 px-2 hover:bg-[#252525] cursor-pointer">Notes</li>
          <li className="py-1 px-2 hover:bg-[#252525] cursor-pointer">Emotion Mapping</li>
          <li className="py-1 px-2 hover:bg-[#252525] cursor-pointer">Family Trees</li>
        </ul>
      </SidebarSection>
      
      <SidebarSection 
        title="Locations" 
        isOpen={openSections.locations}
        onToggle={() => toggleSection('locations')}
      >
        <ul className="text-[#e0e0e0]">
          <li className="py-1 px-2 hover:bg-[#252525] cursor-pointer">Location Profiles</li>
          <li className="py-1 px-2 hover:bg-[#252525] cursor-pointer">Setting Details</li>
          <li className="py-1 px-2 hover:bg-[#252525] cursor-pointer">Map Integration</li>
          <li className="py-1 px-2 hover:bg-[#252525] cursor-pointer">Timeline of Events</li>
          <li className="py-1 px-2 hover:bg-[#252525] cursor-pointer">Related Elements</li>
          <li className="py-1 px-2 hover:bg-[#252525] cursor-pointer">Notes</li>
        </ul>
      </SidebarSection>
      
      <SidebarSection 
        title="Storyboard" 
        isOpen={openSections.storyboard}
        onToggle={() => toggleSection('storyboard')}
      >
        <ul className="text-[#e0e0e0]">
          <li className="py-1 px-2 hover:bg-[#252525] cursor-pointer">Scene List</li>
          <li className="py-1 px-2 hover:bg-[#252525] cursor-pointer">Timeline</li>
          <li className="py-1 px-2 hover:bg-[#252525] cursor-pointer">Plot Points</li>
          <li className="py-1 px-2 hover:bg-[#252525] cursor-pointer">Arcs & Themes</li>
          <li className="py-1 px-2 hover:bg-[#252525] cursor-pointer">Scene Cards</li>
          <li className="py-1 px-2 hover:bg-[#252525] cursor-pointer">Notes</li>
          <li className="py-1 px-2 hover:bg-[#252525] cursor-pointer">Event Timeline</li>
          <li className="py-1 px-2 hover:bg-[#252525] cursor-pointer">Conflict Detection</li>
          <li className="py-1 px-2 hover:bg-[#252525] cursor-pointer">Mood Board</li>
        </ul>
      </SidebarSection>
      
      <SidebarSection 
        title="Workshop" 
        isOpen={openSections.workshop}
        onToggle={() => toggleSection('workshop')}
      >
        <ul className="text-[#e0e0e0]">
          <li className="py-1 px-2 hover:bg-[#252525] cursor-pointer">Word Families</li>
          <li className="py-1 px-2 hover:bg-[#252525] cursor-pointer">Phrases & Idioms</li>
          <li className="py-1 px-2 hover:bg-[#252525] cursor-pointer">Speech Types</li>
          <li className="py-1 px-2 hover:bg-[#252525] cursor-pointer">Rhyming Dictionary</li>
          <li className="py-1 px-2 hover:bg-[#252525] cursor-pointer">Extended Entries</li>
          <li className="py-1 px-2 hover:bg-[#252525] cursor-pointer">Emotion Thesaurus</li>
          <li className="py-1 px-2 hover:bg-[#252525] cursor-pointer">Cliché Finder</li>
          <li className="py-1 px-2 hover:bg-[#252525] cursor-pointer">Alliteration Tool</li>
          <li className="py-1 px-2 hover:bg-[#252525] cursor-pointer">Tone Analyzer</li>
          <li className="py-1 px-2 hover:bg-[#252525] cursor-pointer">Dialogue Analyzer</li>
          <li className="py-1 px-2 hover:bg-[#252525] cursor-pointer">Theme Suggestions</li>
        </ul>
      </SidebarSection>
      
      <SidebarSection 
        title="The Forge" 
        isOpen={openSections.forge}
        onToggle={() => toggleSection('forge')}
      >
        <ul className="text-[#e0e0e0]">
          <li className="py-1 px-2 hover:bg-[#252525] cursor-pointer">World-Building</li>
          <li className="py-1 px-2 hover:bg-[#252525] cursor-pointer">Research Library</li>
          <li className="py-1 px-2 hover:bg-[#252525] cursor-pointer">Glossary</li>
          <li className="py-1 px-2 hover:bg-[#252525] cursor-pointer">Inspiration</li>
          <li className="py-1 px-2 hover:bg-[#252525] cursor-pointer">Historical Timeline</li>
          <li className="py-1 px-2 hover:bg-[#252525] cursor-pointer">Lore Database</li>
          <li className="py-1 px-2 hover:bg-[#252525] cursor-pointer">Research Sync</li>
          <li className="py-1 px-2 hover:bg-[#252525] cursor-pointer">Web Clipper</li>
        </ul>
      </SidebarSection>
      
      <SidebarSection 
        title="Assistant" 
        isOpen={openSections.assistant}
        onToggle={() => toggleSection('assistant')}
      >
        <ul className="text-[#e0e0e0]">
          <li className="py-1 px-2 hover:bg-[#252525] cursor-pointer">Writing Suggestions</li>
          <li className="py-1 px-2 hover:bg-[#252525] cursor-pointer">Idea Generator</li>
          <li className="py-1 px-2 hover:bg-[#252525] cursor-pointer">Dialogue Enhancer</li>
          <li className="py-1 px-2 hover:bg-[#252525] cursor-pointer">Consistency Checker</li>
          <li className="py-1 px-2 hover:bg-[#252525] cursor-pointer">Pacing Analysis</li>
          <li className="py-1 px-2 hover:bg-[#252525] cursor-pointer">Plot Summarizer</li>
          <li className="py-1 px-2 hover:bg-[#252525] cursor-pointer">Genre Advice</li>
        </ul>
      </SidebarSection>
    </div>
  );
};

export default LeftSidebar;
