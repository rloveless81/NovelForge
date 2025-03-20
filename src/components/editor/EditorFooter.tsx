import React, { useState } from 'react';

interface EditorFooterProps {
  wordCount: number;
  readingTime: number;
  lastSaved: Date;
  isFocusMode: boolean;
}

const EditorFooter: React.FC<EditorFooterProps> = ({
  wordCount,
  readingTime,
  lastSaved,
  isFocusMode
}) => {
  // Format word count with commas
  const formatWordCount = (count: number): string => {
    return count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  return (
    <div className={`editor-footer p-2 bg-[#252525] border-t border-[#333333] flex justify-between items-center ${isFocusMode ? 'opacity-0 hover:opacity-100 transition-opacity' : ''}`}>
      <div className="stats text-sm text-[#e0e0e0]">
        <span className="mr-3">Words: {formatWordCount(wordCount)}</span>
        <span>Reading time: {readingTime} min</span>
      </div>
      <div className="auto-save text-sm text-[#e0e0e0]">
        Auto-saved at: {lastSaved.toLocaleTimeString()}
      </div>
    </div>
  );
};

export default EditorFooter;
