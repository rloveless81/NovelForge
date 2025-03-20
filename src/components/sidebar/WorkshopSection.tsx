import React, { useState } from 'react';

interface WorkshopSectionProps {
  // Add props as needed
}

const WorkshopSection: React.FC<WorkshopSectionProps> = () => {
  const [activeTab, setActiveTab] = useState('wordFamilies');
  
  return (
    <div className="workshop-section">
      <div className="tabs-header flex mb-2 overflow-x-auto">
        <button 
          className={`tab-btn text-xs px-2 py-1 mr-1 rounded-t ${
            activeTab === 'wordFamilies' ? 'bg-[#333333] text-[#e0e0e0]' : 'bg-[#252525] text-[#999999]'
          }`}
          onClick={() => setActiveTab('wordFamilies')}
        >
          Word Families
        </button>
        <button 
          className={`tab-btn text-xs px-2 py-1 mr-1 rounded-t ${
            activeTab === 'phrases' ? 'bg-[#333333] text-[#e0e0e0]' : 'bg-[#252525] text-[#999999]'
          }`}
          onClick={() => setActiveTab('phrases')}
        >
          Phrases
        </button>
        <button 
          className={`tab-btn text-xs px-2 py-1 mr-1 rounded-t ${
            activeTab === 'emotions' ? 'bg-[#333333] text-[#e0e0e0]' : 'bg-[#252525] text-[#999999]'
          }`}
          onClick={() => setActiveTab('emotions')}
        >
          Emotions
        </button>
        <button 
          className={`tab-btn text-xs px-2 py-1 rounded-t ${
            activeTab === 'analyzer' ? 'bg-[#333333] text-[#e0e0e0]' : 'bg-[#252525] text-[#999999]'
          }`}
          onClick={() => setActiveTab('analyzer')}
        >
          Analyzer
        </button>
      </div>
      
      <div className="tab-content p-2 bg-[#333333] rounded">
        {activeTab === 'wordFamilies' && (
          <div className="word-families-tab">
            <div className="search-box mb-2">
              <input 
                type="text" 
                placeholder="Search for a word..." 
                className="w-full bg-[#252525] text-[#e0e0e0] p-2 rounded"
              />
            </div>
            
            <div className="results-section">
              <h5 className="text-sm font-medium text-[#e0e0e0] mb-1">Synonyms</h5>
              <div className="word-list p-1 bg-[#252525] rounded mb-2">
                <span className="text-xs text-[#e0e0e0] mr-1 bg-[#444444] px-1 rounded">happy</span>
                <span className="text-xs text-[#e0e0e0] mr-1 bg-[#444444] px-1 rounded">joyful</span>
                <span className="text-xs text-[#e0e0e0] mr-1 bg-[#444444] px-1 rounded">pleased</span>
                <span className="text-xs text-[#e0e0e0] mr-1 bg-[#444444] px-1 rounded">delighted</span>
                <span className="text-xs text-[#e0e0e0] bg-[#444444] px-1 rounded">content</span>
              </div>
              
              <h5 className="text-sm font-medium text-[#e0e0e0] mb-1">Antonyms</h5>
              <div className="word-list p-1 bg-[#252525] rounded">
                <span className="text-xs text-[#e0e0e0] mr-1 bg-[#444444] px-1 rounded">sad</span>
                <span className="text-xs text-[#e0e0e0] mr-1 bg-[#444444] px-1 rounded">unhappy</span>
                <span className="text-xs text-[#e0e0e0] mr-1 bg-[#444444] px-1 rounded">miserable</span>
                <span className="text-xs text-[#e0e0e0] bg-[#444444] px-1 rounded">gloomy</span>
              </div>
            </div>
          </div>
        )}
        
        {activeTab === 'phrases' && (
          <div className="phrases-tab">
            <div className="search-box mb-2">
              <input 
                type="text" 
                placeholder="Search for phrases & idioms..." 
                className="w-full bg-[#252525] text-[#e0e0e0] p-2 rounded"
              />
            </div>
            
            <div className="results-section">
              <h5 className="text-sm font-medium text-[#e0e0e0] mb-1">Common Phrases</h5>
              <ul className="phrase-list p-1 bg-[#252525] rounded">
                <li className="text-xs text-[#e0e0e0] mb-1">Break a leg</li>
                <li className="text-xs text-[#e0e0e0] mb-1">Cut to the chase</li>
                <li className="text-xs text-[#e0e0e0]">Hit the nail on the head</li>
              </ul>
            </div>
          </div>
        )}
        
        {activeTab === 'emotions' && (
          <div className="emotions-tab">
            <div className="search-box mb-2">
              <input 
                type="text" 
                placeholder="Search emotion expressions..." 
                className="w-full bg-[#252525] text-[#e0e0e0] p-2 rounded"
              />
            </div>
            
            <div className="results-section">
              <h5 className="text-sm font-medium text-[#e0e0e0] mb-1">Anger</h5>
              <div className="emotion-list p-1 bg-[#252525] rounded mb-2">
                <p className="text-xs text-[#e0e0e0] mb-1">
                  <span className="font-medium">Physical signs:</span> clenched fists, reddened face, tight jaw
                </p>
                <p className="text-xs text-[#e0e0e0]">
                  <span className="font-medium">Expressions:</span> fuming, seething, boiling with rage
                </p>
              </div>
              
              <h5 className="text-sm font-medium text-[#e0e0e0] mb-1">Fear</h5>
              <div className="emotion-list p-1 bg-[#252525] rounded">
                <p className="text-xs text-[#e0e0e0] mb-1">
                  <span className="font-medium">Physical signs:</span> trembling, wide eyes, pale face
                </p>
                <p className="text-xs text-[#e0e0e0]">
                  <span className="font-medium">Expressions:</span> terrified, petrified, frozen with fear
                </p>
              </div>
            </div>
          </div>
        )}
        
        {activeTab === 'analyzer' && (
          <div className="analyzer-tab">
            <div className="analyzer-tools">
              <button className="w-full bg-[#7c3aed] text-white p-2 rounded mb-2">
                Analyze Tone
              </button>
              <button className="w-full bg-[#333333] text-[#e0e0e0] p-2 rounded mb-2">
                Check Dialogue
              </button>
              <button className="w-full bg-[#333333] text-[#e0e0e0] p-2 rounded">
                Find Clichés
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WorkshopSection;
