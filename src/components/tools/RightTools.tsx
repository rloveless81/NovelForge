import React, { useState } from 'react';
import StatsDisplay from './StatsDisplay';
import FormattingTools from './FormattingTools';
import AIAssistant from './AIAssistant';

interface RightToolsProps {
  wordCount?: number;
  characterCount?: number;
  readingTime?: number;
  paragraphCount?: number;
  onFontFamilyChange?: (fontFamily: string) => void;
  onFontSizeChange?: (fontSize: string) => void;
  onLineHeightChange?: (lineHeight: string) => void;
  fontFamily?: string;
  fontSize?: string;
  lineHeight?: string;
  onSuggestionApply?: (suggestion: string) => void;
}

const RightTools: React.FC<RightToolsProps> = ({
  wordCount = 0,
  characterCount = 0,
  readingTime = 0,
  paragraphCount = 0,
  onFontFamilyChange = () => {},
  onFontSizeChange = () => {},
  onLineHeightChange = () => {},
  fontFamily = 'Georgia, serif',
  fontSize = '16px',
  lineHeight = '1.6',
  onSuggestionApply
}) => {
  return (
    <div className="right-tools-content p-2 overflow-y-auto h-full bg-[#1a1a1a]">
      <h3 className="text-lg font-bold text-[#e0e0e0] mb-4 px-2">Tools</h3>
      
      {/* Stats Section */}
      <StatsDisplay 
        wordCount={wordCount}
        characterCount={characterCount}
        readingTime={readingTime}
        paragraphCount={paragraphCount}
      />
      
      {/* Formatting Section */}
      <FormattingTools 
        onFontFamilyChange={onFontFamilyChange}
        onFontSizeChange={onFontSizeChange}
        onLineHeightChange={onLineHeightChange}
        fontFamily={fontFamily}
        fontSize={fontSize}
        lineHeight={lineHeight}
      />
      
      {/* AI Assistant Section */}
      <AIAssistant 
        onSuggestionApply={onSuggestionApply}
      />
    </div>
  );
};

export default RightTools;
