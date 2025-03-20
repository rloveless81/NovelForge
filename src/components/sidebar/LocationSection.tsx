import React, { useState } from 'react';

interface LocationSectionProps {
  // Add props as needed
}

const LocationSection: React.FC<LocationSectionProps> = () => {
  const [locations, setLocations] = useState([
    { id: 1, name: 'Main City', type: 'Urban', notes: 'Where most of the story takes place' },
    { id: 2, name: 'Forest', type: 'Wilderness', notes: 'Important for chapter 2' },
    { id: 3, name: 'Ancient Temple', type: 'Historical', notes: 'Final confrontation scene' },
  ]);
  
  const [selectedLocation, setSelectedLocation] = useState<number | null>(null);
  
  return (
    <div className="location-section">
      <div className="section-header flex justify-between items-center mb-2">
        <h4 className="text-md font-medium text-[#e0e0e0]">Location Profiles</h4>
        <button className="text-sm bg-[#7c3aed] text-white px-2 py-1 rounded">
          + Add
        </button>
      </div>
      
      <div className="locations-list">
        {locations.map(location => (
          <div 
            key={location.id}
            className={`location-item p-2 mb-1 rounded cursor-pointer ${
              selectedLocation === location.id ? 'bg-[#333333]' : 'hover:bg-[#252525]'
            }`}
            onClick={() => setSelectedLocation(location.id)}
          >
            <div className="flex justify-between items-center">
              <span className="text-[#e0e0e0]">{location.name}</span>
              <span className="text-xs text-[#999999]">{location.type}</span>
            </div>
          </div>
        ))}
      </div>
      
      {selectedLocation && (
        <div className="location-details mt-4 p-2 bg-[#252525] rounded">
          <h5 className="text-md font-medium text-[#e0e0e0] mb-2">
            {locations.find(l => l.id === selectedLocation)?.name}
          </h5>
          
          <div className="detail-item mb-2">
            <label className="block text-xs text-[#999999] mb-1">Type</label>
            <input 
              type="text" 
              className="w-full bg-[#333333] text-[#e0e0e0] p-1 rounded"
              value={locations.find(l => l.id === selectedLocation)?.type || ''}
              readOnly
            />
          </div>
          
          <div className="detail-item mb-2">
            <label className="block text-xs text-[#999999] mb-1">Notes</label>
            <textarea 
              className="w-full bg-[#333333] text-[#e0e0e0] p-1 rounded"
              rows={3}
              value={locations.find(l => l.id === selectedLocation)?.notes || ''}
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
        <h4 className="text-md font-medium text-[#e0e0e0]">Map Integration</h4>
        <button className="text-sm bg-[#7c3aed] text-white px-2 py-1 rounded">
          View Map
        </button>
      </div>
      
      <div className="map-content p-2 bg-[#252525] rounded">
        <p className="text-sm text-[#e0e0e0]">
          Click to view and edit location map...
        </p>
      </div>
    </div>
  );
};

export default LocationSection;
