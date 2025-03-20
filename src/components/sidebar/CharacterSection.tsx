import React, { useState } from 'react';

interface CharacterSectionProps {
  // Add props as needed
}

const CharacterSection: React.FC<CharacterSectionProps> = () => {
  const [characters, setCharacters] = useState([
    { id: 1, name: 'Protagonist', role: 'Main Character', notes: 'The hero of our story' },
    { id: 2, name: 'Antagonist', role: 'Villain', notes: 'The main opposition' },
    { id: 3, name: 'Supporting Character', role: 'Ally', notes: 'Helps the protagonist' },
  ]);
  
  const [selectedCharacter, setSelectedCharacter] = useState<number | null>(null);
  
  return (
    <div className="character-section">
      <div className="section-header flex justify-between items-center mb-2">
        <h4 className="text-md font-medium text-[#e0e0e0]">Character Profiles</h4>
        <button className="text-sm bg-[#7c3aed] text-white px-2 py-1 rounded">
          + Add
        </button>
      </div>
      
      <div className="characters-list">
        {characters.map(character => (
          <div 
            key={character.id}
            className={`character-item p-2 mb-1 rounded cursor-pointer ${
              selectedCharacter === character.id ? 'bg-[#333333]' : 'hover:bg-[#252525]'
            }`}
            onClick={() => setSelectedCharacter(character.id)}
          >
            <div className="flex justify-between items-center">
              <span className="text-[#e0e0e0]">{character.name}</span>
              <span className="text-xs text-[#999999]">{character.role}</span>
            </div>
          </div>
        ))}
      </div>
      
      {selectedCharacter && (
        <div className="character-details mt-4 p-2 bg-[#252525] rounded">
          <h5 className="text-md font-medium text-[#e0e0e0] mb-2">
            {characters.find(c => c.id === selectedCharacter)?.name}
          </h5>
          
          <div className="detail-item mb-2">
            <label className="block text-xs text-[#999999] mb-1">Role</label>
            <input 
              type="text" 
              className="w-full bg-[#333333] text-[#e0e0e0] p-1 rounded"
              value={characters.find(c => c.id === selectedCharacter)?.role || ''}
              readOnly
            />
          </div>
          
          <div className="detail-item mb-2">
            <label className="block text-xs text-[#999999] mb-1">Notes</label>
            <textarea 
              className="w-full bg-[#333333] text-[#e0e0e0] p-1 rounded"
              rows={3}
              value={characters.find(c => c.id === selectedCharacter)?.notes || ''}
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
        <h4 className="text-md font-medium text-[#e0e0e0]">Relationships</h4>
        <button className="text-sm bg-[#7c3aed] text-white px-2 py-1 rounded">
          Map
        </button>
      </div>
      
      <div className="relationships-content p-2 bg-[#252525] rounded">
        <p className="text-sm text-[#e0e0e0]">
          Click to map character relationships...
        </p>
      </div>
    </div>
  );
};

export default CharacterSection;
