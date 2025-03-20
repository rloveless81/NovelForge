import React, { useState } from 'react';

interface ManuscriptSectionProps {
  // Add props as needed
}

const ManuscriptSection: React.FC<ManuscriptSectionProps> = () => {
  const [chapters, setChapters] = useState([
    { id: 1, title: 'Chapter 1: The Beginning', wordCount: 0 },
    { id: 2, title: 'Chapter 2: The Middle', wordCount: 0 },
    { id: 3, title: 'Chapter 3: The End', wordCount: 0 },
  ]);
  
  const [selectedChapter, setSelectedChapter] = useState<number | null>(null);
  
  return (
    <div className="manuscript-section">
      <div className="section-header flex justify-between items-center mb-2">
        <h4 className="text-md font-medium text-[#e0e0e0]">Chapters</h4>
        <button className="text-sm bg-[#7c3aed] text-white px-2 py-1 rounded">
          + Add
        </button>
      </div>
      
      <div className="chapters-list">
        {chapters.map(chapter => (
          <div 
            key={chapter.id}
            className={`chapter-item p-2 mb-1 rounded cursor-pointer ${
              selectedChapter === chapter.id ? 'bg-[#333333]' : 'hover:bg-[#252525]'
            }`}
            onClick={() => setSelectedChapter(chapter.id)}
          >
            <div className="flex justify-between items-center">
              <span className="text-[#e0e0e0]">{chapter.title}</span>
              <span className="text-xs text-[#999999]">{chapter.wordCount} words</span>
            </div>
          </div>
        ))}
      </div>
      
      <div className="section-header flex justify-between items-center mt-4 mb-2">
        <h4 className="text-md font-medium text-[#e0e0e0]">Outline</h4>
        <button className="text-sm bg-[#7c3aed] text-white px-2 py-1 rounded">
          Edit
        </button>
      </div>
      
      <div className="outline-content p-2 bg-[#252525] rounded">
        <p className="text-sm text-[#e0e0e0]">
          Click to edit your novel's outline...
        </p>
      </div>
      
      <div className="section-header flex justify-between items-center mt-4 mb-2">
        <h4 className="text-md font-medium text-[#e0e0e0]">Goals</h4>
      </div>
      
      <div className="goals-content">
        <div className="goal-item p-2 bg-[#252525] rounded mb-2">
          <div className="flex justify-between items-center">
            <span className="text-sm text-[#e0e0e0]">Daily Word Count</span>
            <span className="text-sm text-[#e0e0e0]">0/500</span>
          </div>
          <div className="w-full bg-[#333333] rounded-full h-2 mt-1">
            <div className="bg-[#7c3aed] h-2 rounded-full" style={{ width: '0%' }}></div>
          </div>
        </div>
        
        <div className="goal-item p-2 bg-[#252525] rounded">
          <div className="flex justify-between items-center">
            <span className="text-sm text-[#e0e0e0]">Manuscript Target</span>
            <span className="text-sm text-[#e0e0e0]">0/50,000</span>
          </div>
          <div className="w-full bg-[#333333] rounded-full h-2 mt-1">
            <div className="bg-[#7c3aed] h-2 rounded-full" style={{ width: '0%' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManuscriptSection;
