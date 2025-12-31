import React from 'react';
import Icon from '../../../components/AppIcon';

const TimelineSimulator = ({ phases, currentPhase, onPhaseChange }) => {
  return (
    <div className="space-y-6 md:space-y-8">
      <div className="relative">
        <div className="absolute left-4 md:left-6 top-0 bottom-0 w-0.5 bg-border" />
        <div className="space-y-6 md:space-y-8">
          {phases?.map((phase, index) => {
            const isActive = currentPhase === index;
            const isCompleted = currentPhase > index;
            
            return (
              <button
                key={phase?.id}
                onClick={() => onPhaseChange(index)}
                className="relative w-full text-left"
                aria-label={`Phase ${index + 1}: ${phase?.title}`}
              >
                <div className="flex items-start gap-4 md:gap-6">
                  <div className={`relative z-10 flex-shrink-0 w-8 h-8 md:w-12 md:h-12 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                    isCompleted 
                      ? 'bg-success border-success' 
                      : isActive 
                      ? 'bg-primary border-primary' :'bg-card border-border'
                  }`}>
                    <Icon 
                      name={isCompleted ? 'Check' : isActive ? 'Circle' : 'Circle'} 
                      size={16} 
                      color={isCompleted || isActive ? '#FFFFFF' : 'var(--color-muted-foreground)'} 
                    />
                  </div>
                  <div className={`flex-1 p-4 md:p-6 rounded-lg border transition-all duration-300 ${
                    isActive 
                      ? 'bg-primary/5 border-primary' :'bg-card border-border hover:border-primary/50'
                  }`}>
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <h3 className="text-sm md:text-base font-semibold text-foreground">
                        {phase?.title}
                      </h3>
                      <span className="text-xs md:text-sm text-muted-foreground whitespace-nowrap">
                        {phase?.duration}
                      </span>
                    </div>
                    <p className="text-xs md:text-sm text-muted-foreground mb-3">
                      {phase?.description}
                    </p>
                    <div className="space-y-2">
                      {phase?.milestones?.map((milestone, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <Icon name="ChevronRight" size={14} className="flex-shrink-0 mt-0.5 text-primary" />
                          <span className="text-xs text-muted-foreground">{milestone}</span>
                        </div>
                      ))}
                    </div>
                    {phase?.requirements && (
                      <div className="mt-3 pt-3 border-t border-border">
                        <p className="text-xs text-muted-foreground">
                          <span className="font-medium">Requirements:</span> {phase?.requirements}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TimelineSimulator;