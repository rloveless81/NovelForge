import React, { useState } from 'react';

interface AIAssistantProps {
  // Add props as needed
  onSuggestionApply?: (suggestion: string) => void;
}

const AIAssistant: React.FC<AIAssistantProps> = ({ onSuggestionApply }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  
  // Simulate AI processing
  const handleGetSuggestions = () => {
    setIsLoading(true);
    setSuggestions([]);
    
    // Simulate API call delay
    setTimeout(() => {
      setSuggestions([
        'Consider adding more sensory details to make the scene more vivid.',
        'The dialogue could be more natural by adding speech mannerisms unique to each character.',
        'Try varying sentence length to create better rhythm in your prose.'
      ]);
      setIsLoading(false);
    }, 1500);
  };
  
  const handleImproveProse = () => {
    setIsLoading(true);
    setSuggestions([]);
    
    // Simulate API call delay
    setTimeout(() => {
      setSuggestions([
        'Replace generic verbs with more specific ones to add impact.',
        'Consider removing unnecessary adverbs and strengthening your verbs instead.',
        'Look for opportunities to replace clichés with fresh metaphors.'
      ]);
      setIsLoading(false);
    }, 1500);
  };
  
  const handleCheckConsistency = () => {
    setIsLoading(true);
    setSuggestions([]);
    
    // Simulate API call delay
    setTimeout(() => {
      setSuggestions([
        'Character names are consistent throughout the text.',
        'Timeline appears consistent with no obvious contradictions.',
        'Setting details remain consistent across scenes.'
      ]);
      setIsLoading(false);
    }, 1500);
  };
  
  const handleAnalyzePacing = () => {
    setIsLoading(true);
    setSuggestions([]);
    
    // Simulate API call delay
    setTimeout(() => {
      setSuggestions([
        'The opening scene moves quickly, which engages the reader well.',
        'Consider adding more tension in the middle section to maintain interest.',
        'The climactic scene could be expanded to increase emotional impact.'
      ]);
      setIsLoading(false);
    }, 1500);
  };
  
  const applySuggestion = (suggestion: string) => {
    if (onSuggestionApply) {
      onSuggestionApply(suggestion);
    }
  };
  
  return (
    <div className="ai-assistant-section mb-4 bg-[#252525] rounded p-2">
      <h4 className="text-md font-medium text-[#e0e0e0] mb-2">AI Assistant</h4>
      <div className="ai-content">
        <button 
          className="w-full bg-[#7c3aed] text-white p-2 rounded mb-2"
          onClick={handleGetSuggestions}
          disabled={isLoading}
        >
          {isLoading ? 'Processing...' : 'Get Suggestions'}
        </button>
        <button 
          className="w-full bg-[#333333] text-[#e0e0e0] p-2 rounded mb-2"
          onClick={handleImproveProse}
          disabled={isLoading}
        >
          Improve Prose
        </button>
        <button 
          className="w-full bg-[#333333] text-[#e0e0e0] p-2 rounded mb-2"
          onClick={handleCheckConsistency}
          disabled={isLoading}
        >
          Check Consistency
        </button>
        <button 
          className="w-full bg-[#333333] text-[#e0e0e0] p-2 rounded mb-2"
          onClick={handleAnalyzePacing}
          disabled={isLoading}
        >
          Analyze Pacing
        </button>
      </div>
      
      {suggestions.length > 0 && (
        <div className="suggestions-section mt-3">
          <h5 className="text-sm font-medium text-[#e0e0e0] mb-2">Suggestions</h5>
          <div className="bg-[#1a1a1a] p-2 rounded">
            {suggestions.map((suggestion, index) => (
              <div 
                key={index} 
                className={`suggestion-item p-2 ${
                  index < suggestions.length - 1 ? 'border-b border-[#333333] mb-2' : ''
                }`}
              >
                <p className="text-xs text-[#e0e0e0]">{suggestion}</p>
                <div className="flex justify-end mt-1">
                  <button 
                    className="text-xs bg-[#7c3aed] text-white px-2 py-0.5 rounded mr-1"
                    onClick={() => applySuggestion(suggestion)}
                  >
                    Apply
                  </button>
                  <button className="text-xs bg-[#333333] text-[#e0e0e0] px-2 py-0.5 rounded">
                    Ignore
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      
      <div className="ai-info mt-3">
        <p className="text-xs text-[#999999]">Powered by Open Router</p>
      </div>
    </div>
  );
};

export default AIAssistant;
