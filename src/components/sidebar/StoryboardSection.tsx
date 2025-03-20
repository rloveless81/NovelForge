import React, { useState } from 'react';

interface StoryboardSectionProps {
  // Add props as needed
}

const StoryboardSection: React.FC<StoryboardSectionProps> = () => {
  const [scenes, setScenes] = useState([
    { id: 1, title: 'Opening Scene', status: 'Draft', notes: 'Introduce protagonist' },
    { id: 2, title: 'Inciting Incident', status: 'Draft', notes: 'Call to adventure' },
    { id: 3, title: 'First Plot Point', status: 'Outline', notes: 'Protagonist commits to journey' },
  ]);
  
  const [selectedScene, setSelectedScene] = useState<number | null>(null);
  
  return (
    <div className="storyboard-section">
      <div className="section-header flex justify-between items-center mb-2">
        <h4 className="text-md font-medium text-[#e0e0e0]">Scene List</h4>
        <button className="text-sm bg-[#7c3aed] text-white px-2 py-1 rounded">
          + Add
        </button>
      </div>
      
      <div className="scenes-list">
        {scenes.map(scene => (
          <div 
            key={scene.id}
            className={`scene-item p-2 mb-1 rounded cursor-pointer ${
              selectedScene === scene.id ? 'bg-[#333333]' : 'hover:bg-[#252525]'
            }`}
            onClick={() => setSelectedScene(scene.id)}
          >
            <div className="flex justify-between items-center">
              <span className="text-[#e0e0e0]">{scene.title}</span>
              <span className={`text-xs px-1 py-0.5 rounded ${
                scene.status === 'Draft' ? 'bg-[#7c3aed] text-white' : 
                scene.status === 'Outline' ? 'bg-[#444444] text-[#e0e0e0]' : 
                'bg-[#2d6a4f] text-white'
              }`}>
                {scene.status}
              </span>
            </div>
          </div>
        ))}
      </div>
      
      {selectedScene && (
        <div className="scene-details mt-4 p-2 bg-[#252525] rounded">
          <h5 className="text-md font-medium text-[#e0e0e0] mb-2">
            {scenes.find(s => s.id === selectedScene)?.title}
          </h5>
          
          <div className="detail-item mb-2">
            <label className="block text-xs text-[#999999] mb-1">Status</label>
            <select className="w-full bg-[#333333] text-[#e0e0e0] p-1 rounded">
              <option>Outline</option>
              <option>Draft</option>
              <option>Revised</option>
              <option>Final</option>
            </select>
          </div>
          
          <div className="detail-item mb-2">
            <label className="block text-xs text-[#999999] mb-1">Notes</label>
            <textarea 
              className="w-full bg-[#333333] text-[#e0e0e0] p-1 rounded"
              rows={3}
              value={scenes.find(s => s.id === selectedScene)?.notes || ''}
              readOnly
            />
          </div>
          
          <div className="detail-actions flex justify-end">
            <button className="text-sm bg-[#7c3aed] text-white px-2 py-1 rounded mr-2">
              Edit
            </button>
            <button className="text-sm bg-[#333333] text-[#e0e0e0] px-2 py-1 rounded">
              Delete
            </button>
          </div>
        </div>
      )}
      
      <div className="section-header flex justify-between items-center mt-4 mb-2">
        <h4 className="text-md font-medium text-[#e0e0e0]">Plot Points</h4>
        <button className="text-sm bg-[#7c3aed] text-white px-2 py-1 rounded">
          Timeline
        </button>
      </div>
      
      <div className="plot-points-content p-2 bg-[#252525] rounded">
        <div className="plot-point-item mb-2 p-1 border-l-2 border-[#7c3aed] pl-2">
          <h6 className="text-sm font-medium text-[#e0e0e0]">Inciting Incident</h6>
          <p className="text-xs text-[#999999]">Chapter 1</p>
        </div>
        <div className="plot-point-item mb-2 p-1 border-l-2 border-[#7c3aed] pl-2">
          <h6 className="text-sm font-medium text-[#e0e0e0]">First Plot Point</h6>
          <p className="text-xs text-[#999999]">Chapter 3</p>
        </div>
        <div className="plot-point-item p-1 border-l-2 border-[#7c3aed] pl-2">
          <h6 className="text-sm font-medium text-[#e0e0e0]">Midpoint</h6>
          <p className="text-xs text-[#999999]">Chapter 7</p>
        </div>
      </div>
    </div>
  );
};

export default StoryboardSection;
