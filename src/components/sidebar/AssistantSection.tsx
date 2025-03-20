import React, { useState } from 'react';

interface AssistantSectionProps {
  // Add props as needed
}

const AssistantSection: React.FC<AssistantSectionProps> = () => {
  const [prompt, setPrompt] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  
  const handleSubmit = () => {
    if (!prompt.trim()) return;
    
    // Simulate AI processing
    setIsLoading(true);
    setTimeout(() => {
      setSuggestions([
        'Consider adding more sensory details to make the scene more vivid.',
        'The dialogue could be more natural by adding speech mannerisms unique to each character.',
        'Try varying sentence length to create better rhythm in your prose.'
      ]);
      setIsLoading(false);
    }, 1500);
  };
  
  return (
    <div className="assistant-section">
      <div className="section-header mb-2">
        <h4 className="text-md font-medium text-[#e0e0e0]">AI Writing Assistant</h4>
        <p className="text-xs text-[#999999]">Powered by Open Router</p>
      </div>
      
      <div className="prompt-section mb-3">
        <textarea 
          className="w-full bg-[#252525] text-[#e0e0e0] p-2 rounded mb-2"
          rows={4}
          placeholder="What would you like help with? (e.g., 'Suggest a better opening paragraph', 'Help me describe this character')"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
        
        <div className="flex justify-between">
          <select className="bg-[#333333] text-[#e0e0e0] p-1 rounded text-sm">
            <option>Writing Suggestions</option>
            <option>Idea Generator</option>
            <option>Dialogue Enhancer</option>
            <option>Consistency Check</option>
            <option>Pacing Analysis</option>
            <option>Plot Summarizer</option>
            <option>Genre Advice</option>
          </select>
          
          <button 
            className="bg-[#7c3aed] text-white px-3 py-1 rounded text-sm"
            onClick={handleSubmit}
            disabled={isLoading}
          >
            {isLoading ? 'Processing...' : 'Submit'}
          </button>
        </div>
      </div>
      
      {suggestions.length > 0 && (
        <div className="suggestions-section">
          <h5 className="text-sm font-medium text-[#e0e0e0] mb-1">Suggestions</h5>
          <div className="bg-[#252525] p-2 rounded">
            {suggestions.map((suggestion, index) => (
              <div 
                key={index} 
                className={`suggestion-item p-2 ${
                  index < suggestions.length - 1 ? 'border-b border-[#333333] mb-2' : ''
                }`}
              >
                <p className="text-xs text-[#e0e0e0]">{suggestion}</p>
                <div className="flex justify-end mt-1">
                  <button className="text-xs bg-[#333333] text-[#e0e0e0] px-2 py-0.5 rounded mr-1">
                    Apply
                  </button>
                  <button className="text-xs bg-[#333333] text-[#e0e0e0] px-2 py-0.5 rounded">
                    Modify
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      
      <div className="quick-tools mt-3">
        <h5 className="text-sm font-medium text-[#e0e0e0] mb-1">Quick Tools</h5>
        <div className="grid grid-cols-2 gap-1">
          <button className="text-xs bg-[#333333] text-[#e0e0e0] p-1 rounded">
            Improve Scene
          </button>
          <button className="text-xs bg-[#333333] text-[#e0e0e0] p-1 rounded">
            Fix Dialogue
          </button>
          <button className="text-xs bg-[#333333] text-[#e0e0e0] p-1 rounded">
            Enhance Description
          </button>
          <button className="text-xs bg-[#333333] text-[#e0e0e0] p-1 rounded">
            Plot Ideas
          </button>
        </div>
      </div>
    </div>
  );
};

export default AssistantSection;
