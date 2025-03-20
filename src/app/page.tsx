"use client";

import React, { useState, useEffect } from 'react';
import ThreePanelLayout from '@/components/layout/ThreePanelLayout';
import LeftSidebar from '@/components/sidebar/LeftSidebar';
import Editor from '@/components/editor/Editor';
import RightTools from '@/components/tools/RightTools';

export default function Home() {
  // Editor state
  const [wordCount, setWordCount] = useState(0);
  const [characterCount, setCharacterCount] = useState(0);
  const [paragraphCount, setParagraphCount] = useState(0);
  const [readingTime, setReadingTime] = useState(0);
  const [editorContent, setEditorContent] = useState('');
  
  // Editor formatting state
  const [fontFamily, setFontFamily] = useState('Georgia, serif');
  const [fontSize, setFontSize] = useState('16px');
  const [lineHeight, setLineHeight] = useState('1.6');
  
  // Handle editor content change
  const handleContentChange = (content: string) => {
    setEditorContent(content);
    
    // Calculate stats
    const words = content.trim().split(/\s+/).filter(word => word.length > 0);
    setWordCount(words.length);
    setCharacterCount(content.length);
    
    // Calculate paragraphs
    const paragraphs = content.split(/\n\n+/).filter(p => p.trim().length > 0);
    setParagraphCount(paragraphs.length);
    
    // Calculate reading time (average reading speed: 225 words per minute)
    setReadingTime(Math.ceil(words.length / 225));
  };
  
  // Handle font family change
  const handleFontFamilyChange = (newFontFamily: string) => {
    setFontFamily(newFontFamily);
  };
  
  // Handle font size change
  const handleFontSizeChange = (newFontSize: string) => {
    setFontSize(newFontSize);
  };
  
  // Handle line height change
  const handleLineHeightChange = (newLineHeight: string) => {
    setLineHeight(newLineHeight);
  };
  
  // Handle AI suggestion apply
  const handleSuggestionApply = (suggestion: string) => {
    // In a real implementation, this would modify the editor content
    console.log('Applying suggestion:', suggestion);
  };
  
  return (
    <main className="min-h-screen bg-[#1a1a1a] text-[#e0e0e0]">
      <ThreePanelLayout
        leftSidebar={<LeftSidebar />}
        editor={
          <Editor 
            onContentChange={handleContentChange}
          />
        }
        rightTools={
          <RightTools 
            wordCount={wordCount}
            characterCount={characterCount}
            readingTime={readingTime}
            paragraphCount={paragraphCount}
            onFontFamilyChange={handleFontFamilyChange}
            onFontSizeChange={handleFontSizeChange}
            onLineHeightChange={handleLineHeightChange}
            fontFamily={fontFamily}
            fontSize={fontSize}
            lineHeight={lineHeight}
            onSuggestionApply={handleSuggestionApply}
          />
        }
      />
    </main>
  );
}
