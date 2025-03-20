import React, { useState } from 'react';

interface ForgeProps {
  // Add props as needed
}

const ForgeSection: React.FC<ForgeProps> = () => {
  const [activeTab, setActiveTab] = useState('worldbuilding');
  
  return (
    <div className="forge-section">
      <div className="tabs-header flex mb-2 overflow-x-auto">
        <button 
          className={`tab-btn text-xs px-2 py-1 mr-1 rounded-t ${
            activeTab === 'worldbuilding' ? 'bg-[#333333] text-[#e0e0e0]' : 'bg-[#252525] text-[#999999]'
          }`}
          onClick={() => setActiveTab('worldbuilding')}
        >
          World-Building
        </button>
        <button 
          className={`tab-btn text-xs px-2 py-1 mr-1 rounded-t ${
            activeTab === 'research' ? 'bg-[#333333] text-[#e0e0e0]' : 'bg-[#252525] text-[#999999]'
          }`}
          onClick={() => setActiveTab('research')}
        >
          Research
        </button>
        <button 
          className={`tab-btn text-xs px-2 py-1 rounded-t ${
            activeTab === 'glossary' ? 'bg-[#333333] text-[#e0e0e0]' : 'bg-[#252525] text-[#999999]'
          }`}
          onClick={() => setActiveTab('glossary')}
        >
          Glossary
        </button>
      </div>
      
      <div className="tab-content p-2 bg-[#333333] rounded">
        {activeTab === 'worldbuilding' && (
          <div className="worldbuilding-tab">
            <div className="section-header flex justify-between items-center mb-2">
              <h5 className="text-sm font-medium text-[#e0e0e0]">World Elements</h5>
              <button className="text-xs bg-[#7c3aed] text-white px-2 py-1 rounded">
                + Add
              </button>
            </div>
            
            <div className="world-elements">
              <div className="element-item p-2 mb-1 bg-[#252525] rounded cursor-pointer hover:bg-[#2a2a2a]">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-[#e0e0e0]">Magic System</span>
                  <span className="text-xs text-[#999999]">Fantasy</span>
                </div>
              </div>
              <div className="element-item p-2 mb-1 bg-[#252525] rounded cursor-pointer hover:bg-[#2a2a2a]">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-[#e0e0e0]">Political Structure</span>
                  <span className="text-xs text-[#999999]">Government</span>
                </div>
              </div>
              <div className="element-item p-2 bg-[#252525] rounded cursor-pointer hover:bg-[#2a2a2a]">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-[#e0e0e0]">Cultural Traditions</span>
                  <span className="text-xs text-[#999999]">Society</span>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {activeTab === 'research' && (
          <div className="research-tab">
            <div className="section-header flex justify-between items-center mb-2">
              <h5 className="text-sm font-medium text-[#e0e0e0]">Research Library</h5>
              <button className="text-xs bg-[#7c3aed] text-white px-2 py-1 rounded">
                + Add
              </button>
            </div>
            
            <div className="research-items">
              <div className="research-item p-2 mb-1 bg-[#252525] rounded cursor-pointer hover:bg-[#2a2a2a]">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-[#e0e0e0]">Medieval Weapons</span>
                  <span className="text-xs text-[#999999]">Reference</span>
                </div>
              </div>
              <div className="research-item p-2 mb-1 bg-[#252525] rounded cursor-pointer hover:bg-[#2a2a2a]">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-[#e0e0e0]">Victorian Era Fashion</span>
                  <span className="text-xs text-[#999999]">Historical</span>
                </div>
              </div>
              <div className="research-item p-2 bg-[#252525] rounded cursor-pointer hover:bg-[#2a2a2a]">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-[#e0e0e0]">Sailing Terminology</span>
                  <span className="text-xs text-[#999999]">Technical</span>
                </div>
              </div>
            </div>
            
            <div className="web-clipper mt-3">
              <button className="w-full bg-[#333333] text-[#e0e0e0] border border-[#444444] p-2 rounded">
                Web Clipper
              </button>
            </div>
          </div>
        )}
        
        {activeTab === 'glossary' && (
          <div className="glossary-tab">
            <div className="section-header flex justify-between items-center mb-2">
              <h5 className="text-sm font-medium text-[#e0e0e0]">Terms & Definitions</h5>
              <button className="text-xs bg-[#7c3aed] text-white px-2 py-1 rounded">
                + Add
              </button>
            </div>
            
            <div className="search-box mb-2">
              <input 
                type="text" 
                placeholder="Search glossary..." 
                className="w-full bg-[#252525] text-[#e0e0e0] p-1 rounded"
              />
            </div>
            
            <div className="glossary-items">
              <div className="glossary-item p-2 mb-1 bg-[#252525] rounded">
                <h6 className="text-sm font-medium text-[#e0e0e0]">Aether</h6>
                <p className="text-xs text-[#999999]">The magical energy that flows through the world.</p>
              </div>
              <div className="glossary-item p-2 mb-1 bg-[#252525] rounded">
                <h6 className="text-sm font-medium text-[#e0e0e0]">Luminary</h6>
                <p className="text-xs text-[#999999]">A person who can manipulate aether to create light.</p>
              </div>
              <div className="glossary-item p-2 bg-[#252525] rounded">
                <h6 className="text-sm font-medium text-[#e0e0e0]">Shadowmancer</h6>
                <p className="text-xs text-[#999999]">A person who can manipulate aether to create darkness.</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ForgeSection;
