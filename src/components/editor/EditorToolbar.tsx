import React, { useState } from 'react';

interface EditorToolbarProps {
  onFormatText: (command: string, value?: string) => void;
  onFontFamilyChange: (fontFamily: string) => void;
  onFontSizeChange: (fontSize: string) => void;
  onToggleFocusMode: () => void;
  isFocusMode: boolean;
  fontFamily: string;
  fontSize: string;
}

const EditorToolbar: React.FC<EditorToolbarProps> = ({
  onFormatText,
  onFontFamilyChange,
  onFontSizeChange,
  onToggleFocusMode,
  isFocusMode,
  fontFamily,
  fontSize
}) => {
  return (
    <div className={`editor-toolbar p-2 bg-[#252525] border-b border-[#333333] flex items-center flex-wrap ${isFocusMode ? 'opacity-0 hover:opacity-100 transition-opacity' : ''}`}>
      <button 
        className="p-1 mx-1 text-[#e0e0e0] hover:bg-[#333333] rounded"
        onClick={() => onFormatText('bold')}
        title="Bold"
      >
        <span className="font-bold">B</span>
      </button>
      <button 
        className="p-1 mx-1 text-[#e0e0e0] hover:bg-[#333333] rounded"
        onClick={() => onFormatText('italic')}
        title="Italic"
      >
        <span className="italic">I</span>
      </button>
      <button 
        className="p-1 mx-1 text-[#e0e0e0] hover:bg-[#333333] rounded"
        onClick={() => onFormatText('underline')}
        title="Underline"
      >
        <span className="underline">U</span>
      </button>
      
      <div className="h-4 mx-2 border-r border-[#444444]"></div>
      
      <button 
        className="p-1 mx-1 text-[#e0e0e0] hover:bg-[#333333] rounded"
        onClick={() => onFormatText('formatBlock', '<h1>')}
        title="Heading 1"
      >
        H1
      </button>
      <button 
        className="p-1 mx-1 text-[#e0e0e0] hover:bg-[#333333] rounded"
        onClick={() => onFormatText('formatBlock', '<h2>')}
        title="Heading 2"
      >
        H2
      </button>
      <button 
        className="p-1 mx-1 text-[#e0e0e0] hover:bg-[#333333] rounded"
        onClick={() => onFormatText('formatBlock', '<h3>')}
        title="Heading 3"
      >
        H3
      </button>
      
      <div className="h-4 mx-2 border-r border-[#444444]"></div>
      
      <button 
        className="p-1 mx-1 text-[#e0e0e0] hover:bg-[#333333] rounded"
        onClick={() => onFormatText('insertParagraph')}
        title="Paragraph"
      >
        ¶
      </button>
      <button 
        className="p-1 mx-1 text-[#e0e0e0] hover:bg-[#333333] rounded"
        onClick={() => onFormatText('insertUnorderedList')}
        title="Bullet List"
      >
        • List
      </button>
      <button 
        className="p-1 mx-1 text-[#e0e0e0] hover:bg-[#333333] rounded"
        onClick={() => onFormatText('insertOrderedList')}
        title="Numbered List"
      >
        1. List
      </button>
      
      <div className="h-4 mx-2 border-r border-[#444444]"></div>
      
      <select 
        className="p-1 mx-1 bg-[#333333] text-[#e0e0e0] rounded"
        value={fontFamily}
        onChange={(e) => onFontFamilyChange(e.target.value)}
        title="Font Family"
      >
        <option value="Georgia, serif">Georgia</option>
        <option value="'Times New Roman', serif">Times New Roman</option>
        <option value="Arial, sans-serif">Arial</option>
        <option value="Verdana, sans-serif">Verdana</option>
      </select>
      
      <select 
        className="p-1 mx-1 bg-[#333333] text-[#e0e0e0] rounded"
        value={fontSize}
        onChange={(e) => onFontSizeChange(e.target.value)}
        title="Font Size"
      >
        <option value="12px">12px</option>
        <option value="14px">14px</option>
        <option value="16px">16px</option>
        <option value="18px">18px</option>
        <option value="20px">20px</option>
      </select>
      
      <div className="flex-grow"></div>
      
      <button 
        className={`p-1 mx-1 text-[#e0e0e0] hover:bg-[#333333] rounded ${isFocusMode ? 'bg-[#7c3aed]' : ''}`}
        onClick={onToggleFocusMode}
        title="Focus Mode"
      >
        <span>Focus</span>
      </button>
    </div>
  );
};

export default EditorToolbar;
