import React, { useState } from 'react';

interface StatsDisplayProps {
  wordCount: number;
  characterCount: number;
  readingTime: number;
  paragraphCount: number;
}

const StatsDisplay: React.FC<StatsDisplayProps> = ({
  wordCount,
  characterCount,
  readingTime,
  paragraphCount
}) => {
  // Format numbers with commas
  const formatNumber = (num: number): string => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  return (
    <div className="stats-section mb-4 bg-[#252525] rounded p-2">
      <h4 className="text-md font-medium text-[#e0e0e0] mb-2">Stats</h4>
      <div className="stats-content text-sm text-[#e0e0e0]">
        <div className="stat-item flex justify-between mb-1">
          <span>Words:</span>
          <span>{formatNumber(wordCount)}</span>
        </div>
        <div className="stat-item flex justify-between mb-1">
          <span>Characters:</span>
          <span>{formatNumber(characterCount)}</span>
        </div>
        <div className="stat-item flex justify-between mb-1">
          <span>Reading time:</span>
          <span>{readingTime} min</span>
        </div>
        <div className="stat-item flex justify-between mb-1">
          <span>Paragraphs:</span>
          <span>{formatNumber(paragraphCount)}</span>
        </div>
      </div>
    </div>
  );
};

export default StatsDisplay;
