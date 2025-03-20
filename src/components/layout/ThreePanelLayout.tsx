import React, { useState } from 'react';

interface LayoutProps {
  leftSidebar: React.ReactNode;
  editor: React.ReactNode;
  rightTools: React.ReactNode;
}

const ThreePanelLayout: React.FC<LayoutProps> = ({
  leftSidebar,
  editor,
  rightTools
}) => {
  const [leftSidebarVisible, setLeftSidebarVisible] = useState(true);
  const [rightToolsVisible, setRightToolsVisible] = useState(true);

  return (
    <div className="novelforge-container">
      {/* Left Sidebar */}
      <div 
        className={`left-sidebar ${!leftSidebarVisible ? 'hidden' : ''}`}
        style={{ width: leftSidebarVisible ? '25%' : '0%' }}
      >
        {leftSidebar}
        <button 
          className="absolute top-4 right-2 bg-accent p-1 rounded-full"
          onClick={() => setLeftSidebarVisible(!leftSidebarVisible)}
          aria-label="Toggle left sidebar"
        >
          {leftSidebarVisible ? '←' : '→'}
        </button>
      </div>

      {/* Central Editor */}
      <div 
        className="central-editor"
        style={{ 
          width: `calc(100% - ${leftSidebarVisible ? '25%' : '0%'} - ${rightToolsVisible ? '15%' : '0%'})` 
        }}
      >
        {editor}
      </div>

      {/* Right Tools Panel */}
      <div 
        className={`right-tools ${!rightToolsVisible ? 'hidden' : ''}`}
        style={{ width: rightToolsVisible ? '15%' : '0%' }}
      >
        {rightTools}
        <button 
          className="absolute top-4 left-2 bg-accent p-1 rounded-full"
          onClick={() => setRightToolsVisible(!rightToolsVisible)}
          aria-label="Toggle right tools"
        >
          {rightToolsVisible ? '→' : '←'}
        </button>
      </div>
    </div>
  );
};

export default ThreePanelLayout;
