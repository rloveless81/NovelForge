import React, { useState } from 'react';

interface FormattingToolsProps {
  onFontFamilyChange: (fontFamily: string) => void;
  onFontSizeChange: (fontSize: string) => void;
  onLineHeightChange: (lineHeight: string) => void;
  fontFamily: string;
  fontSize: string;
  lineHeight: string;
}

const FormattingTools: React.FC<FormattingToolsProps> = ({
  onFontFamilyChange,
  onFontSizeChange,
  onLineHeightChange,
  fontFamily,
  fontSize,
  lineHeight
}) => {
  return (
    <div className="formatting-section mb-4 bg-[#252525] rounded p-2">
      <h4 className="text-md font-medium text-[#e0e0e0] mb-2">Formatting</h4>
      <div className="formatting-content">
        <div className="format-item mb-2">
          <label className="block text-sm text-[#e0e0e0] mb-1">Font</label>
          <select 
            className="w-full bg-[#333333] text-[#e0e0e0] p-1 rounded"
            value={fontFamily}
            onChange={(e) => onFontFamilyChange(e.target.value)}
          >
            <option value="Georgia, serif">Georgia</option>
            <option value="'Times New Roman', serif">Times New Roman</option>
            <option value="Arial, sans-serif">Arial</option>
            <option value="Verdana, sans-serif">Verdana</option>
          </select>
        </div>
        <div className="format-item mb-2">
          <label className="block text-sm text-[#e0e0e0] mb-1">Size</label>
          <select 
            className="w-full bg-[#333333] text-[#e0e0e0] p-1 rounded"
            value={fontSize}
            onChange={(e) => onFontSizeChange(e.target.value)}
          >
            <option value="12px">12px</option>
            <option value="14px">14px</option>
            <option value="16px">16px</option>
            <option value="18px">18px</option>
            <option value="20px">20px</option>
          </select>
        </div>
        <div className="format-item mb-2">
          <label className="block text-sm text-[#e0e0e0] mb-1">Line Height</label>
          <select 
            className="w-full bg-[#333333] text-[#e0e0e0] p-1 rounded"
            value={lineHeight}
            onChange={(e) => onLineHeightChange(e.target.value)}
          >
            <option value="1.0">1.0</option>
            <option value="1.2">1.2</option>
            <option value="1.4">1.4</option>
            <option value="1.6">1.6</option>
            <option value="1.8">1.8</option>
            <option value="2.0">2.0</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default FormattingTools;
