import React from 'react';

interface SidebarSectionProps {
  title: string;
  children: React.ReactNode;
  isOpen?: boolean;
  onToggle?: () => void;
}

const SidebarSection: React.FC<SidebarSectionProps> = ({
  title,
  children,
  isOpen = true,
  onToggle
}) => {
  return (
    <div className="sidebar-section mb-4">
      <div 
        className="section-header flex justify-between items-center p-2 bg-[#252525] cursor-pointer"
        onClick={onToggle}
      >
        <h3 className="text-[#e0e0e0] font-medium">{title}</h3>
        <span className="text-[#e0e0e0]">{isOpen ? '▼' : '►'}</span>
      </div>
      {isOpen && (
        <div className="section-content p-2 bg-[#1e1e1e]">
          {children}
        </div>
      )}
    </div>
  );
};

export default SidebarSection;
