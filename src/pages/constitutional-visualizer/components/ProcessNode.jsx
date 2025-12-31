import React from 'react';
import Icon from '../../../components/AppIcon';

const ProcessNode = ({ node, isActive, isCompleted, onClick }) => {
  const getNodeStyle = () => {
    if (isCompleted) return 'bg-success/10 border-success text-success';
    if (isActive) return 'bg-primary/10 border-primary text-primary';
    return 'bg-muted border-border text-muted-foreground';
  };

  const getIconName = () => {
    if (isCompleted) return 'CheckCircle2';
    if (node?.type === 'start') return 'Play';
    if (node?.type === 'decision') return 'GitBranch';
    if (node?.type === 'process') return 'FileText';
    if (node?.type === 'end') return 'Flag';
    return 'Circle';
  };

  return (
    <button
      onClick={() => onClick(node)}
      className={`relative w-full p-4 md:p-6 rounded-lg border-2 transition-all duration-300 hover:shadow-lg ${getNodeStyle()}`}
      aria-label={`${node?.title} - ${node?.description}`}
    >
      <div className="flex items-start gap-3 md:gap-4">
        <div className={`flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center ${isActive ? 'bg-primary' : isCompleted ? 'bg-success' : 'bg-muted'}`}>
          <Icon 
            name={getIconName()} 
            size={20} 
            color={isActive || isCompleted ? '#FFFFFF' : 'var(--color-muted-foreground)'} 
          />
        </div>
        <div className="flex-1 text-left">
          <h3 className="text-sm md:text-base font-semibold mb-1">{node?.title}</h3>
          <p className="text-xs md:text-sm opacity-80 line-clamp-2">{node?.description}</p>
          {node?.duration && (
            <div className="flex items-center gap-2 mt-2">
              <Icon name="Clock" size={14} />
              <span className="text-xs">{node?.duration}</span>
            </div>
          )}
        </div>
      </div>
      {node?.requirements && (
        <div className="mt-3 pt-3 border-t border-current/20">
          <p className="text-xs opacity-70">{node?.requirements}</p>
        </div>
      )}
    </button>
  );
};

export default ProcessNode;