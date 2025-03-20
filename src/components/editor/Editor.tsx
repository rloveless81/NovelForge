import React, { useState, useEffect, useRef } from 'react';
import EditorToolbar from './EditorToolbar';
import EditorFooter from './EditorFooter';
import { calculateReadingTime } from '@/utils/helpers';

interface EditorProps {
  // Add props as needed
  onContentChange?: (content: string) => void;
}

const Editor: React.FC<EditorProps> = ({ onContentChange }) => {
  const [wordCount, setWordCount] = useState(0);
  const [readingTime, setReadingTime] = useState(0);
  const [lastSaved, setLastSaved] = useState<Date>(new Date());
  const [isFocusMode, setIsFocusMode] = useState(false);
  const [fontSize, setFontSize] = useState('16px');
  const [fontFamily, setFontFamily] = useState('Georgia, serif');
  const [lineHeight, setLineHeight] = useState(1.6);
  
  const editorRef = useRef<HTMLDivElement>(null);
  
  // Calculate word count and reading time
  const updateStats = () => {
    if (editorRef.current) {
      const text = editorRef.current.innerText || '';
      const words = text.trim().split(/\s+/).filter(word => word.length > 0);
      setWordCount(words.length);
      setReadingTime(calculateReadingTime(words.length));
      
      // Call the onContentChange callback if provided
      if (onContentChange) {
        onContentChange(text);
      }
    }
  };
  
  // Auto-save functionality
  useEffect(() => {
    const autoSaveInterval = setInterval(() => {
      if (editorRef.current) {
        const content = editorRef.current.innerHTML;
        localStorage.setItem('novelforge-editor-content', content);
        setLastSaved(new Date());
      }
    }, 30000); // Auto-save every 30 seconds
    
    return () => clearInterval(autoSaveInterval);
  }, []);
  
  // Load saved content on initial render
  useEffect(() => {
    const savedContent = localStorage.getItem('novelforge-editor-content');
    if (savedContent && editorRef.current) {
      editorRef.current.innerHTML = savedContent;
      updateStats();
    }
  }, []);
  
  // Handle formatting commands
  const formatText = (command: string, value: string = '') => {
    document.execCommand(command, false, value);
    updateStats();
  };
  
  // Toggle focus mode
  const toggleFocusMode = () => {
    setIsFocusMode(!isFocusMode);
  };

  // Handle font family change
  const handleFontFamilyChange = (newFontFamily: string) => {
    setFontFamily(newFontFamily);
  };

  // Handle font size change
  const handleFontSizeChange = (newFontSize: string) => {
    setFontSize(newFontSize);
  };
  
  return (
    <div className={`editor-container h-full flex flex-col ${isFocusMode ? 'focus-mode' : ''}`}>
      <EditorToolbar 
        onFormatText={formatText}
        onFontFamilyChange={handleFontFamilyChange}
        onFontSizeChange={handleFontSizeChange}
        onToggleFocusMode={toggleFocusMode}
        isFocusMode={isFocusMode}
        fontFamily={fontFamily}
        fontSize={fontSize}
      />
      
      <div 
        className={`editor-content flex-grow p-4 bg-[#1a1a1a] overflow-y-auto ${
          isFocusMode ? 'focus-mode-content' : ''
        }`}
      >
        <div 
          ref={editorRef}
          className="min-h-full w-full outline-none text-[#e0e0e0]" 
          contentEditable={true}
          suppressContentEditableWarning={true}
          onInput={updateStats}
          onBlur={updateStats}
          style={{ 
            fontFamily,
            fontSize,
            lineHeight,
            maxWidth: isFocusMode ? '650px' : '100%',
            margin: isFocusMode ? '0 auto' : '0'
          }}
        >
          <p>Begin your novel here...</p>
        </div>
      </div>
      
      <EditorFooter 
        wordCount={wordCount}
        readingTime={readingTime}
        lastSaved={lastSaved}
        isFocusMode={isFocusMode}
      />
    </div>
  );
};

export default Editor;
