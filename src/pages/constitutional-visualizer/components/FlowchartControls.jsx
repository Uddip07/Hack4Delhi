import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const FlowchartControls = ({ onZoomIn, onZoomOut, onReset, onDownload, currentZoom }) => {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-2 bg-card border border-border rounded-lg shadow-lg p-2">
      <Button
        variant="ghost"
        size="icon"
        onClick={onZoomIn}
        aria-label="Zoom in"
        className="hover:bg-primary/10"
      >
        <Icon name="ZoomIn" size={20} />
      </Button>
      
      <div className="px-2 py-1 text-xs text-center text-muted-foreground whitespace-nowrap">
        {currentZoom}%
      </div>
      
      <Button
        variant="ghost"
        size="icon"
        onClick={onZoomOut}
        aria-label="Zoom out"
        className="hover:bg-primary/10"
      >
        <Icon name="ZoomOut" size={20} />
      </Button>
      
      <div className="h-px bg-border my-1" />
      
      <Button
        variant="ghost"
        size="icon"
        onClick={onReset}
        aria-label="Reset view"
        className="hover:bg-primary/10"
      >
        <Icon name="Maximize2" size={20} />
      </Button>
      
      <Button
        variant="ghost"
        size="icon"
        onClick={onDownload}
        aria-label="Download flowchart"
        className="hover:bg-primary/10"
      >
        <Icon name="Download" size={20} />
      </Button>
    </div>
  );
};

export default FlowchartControls;