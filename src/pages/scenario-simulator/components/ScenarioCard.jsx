import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ScenarioCard = ({ scenario, onSelect }) => {
  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Beginner':
        return 'bg-success/10 text-success';
      case 'Intermediate':
        return 'bg-warning/10 text-warning';
      case 'Advanced':
        return 'bg-error/10 text-error';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <div className="bg-card border border-border rounded-lg p-4 md:p-6 hover:shadow-lg transition-all duration-300">
      <div className="flex items-start justify-between mb-3 md:mb-4">
        <div className="flex items-center gap-2 md:gap-3">
          <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
            <Icon name={scenario?.icon} size={20} color="var(--color-primary)" />
          </div>
          <div>
            <h3 className="text-base md:text-lg font-semibold text-foreground">
              {scenario?.title}
            </h3>
            <span className={`text-xs md:text-sm px-2 py-1 rounded-full ${getDifficultyColor(scenario?.difficulty)}`}>
              {scenario?.difficulty}
            </span>
          </div>
        </div>
      </div>
      <p className="text-sm md:text-base text-muted-foreground mb-3 md:mb-4 line-clamp-2">
        {scenario?.description}
      </p>
      <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-3 md:mb-4">
        <div className="flex items-center gap-1 text-xs md:text-sm text-muted-foreground">
          <Icon name="Clock" size={14} />
          <span>{scenario?.duration}</span>
        </div>
        <div className="flex items-center gap-1 text-xs md:text-sm text-muted-foreground">
          <Icon name="Users" size={14} />
          <span>{scenario?.participants}</span>
        </div>
        <div className="flex items-center gap-1 text-xs md:text-sm text-muted-foreground">
          <Icon name="Target" size={14} />
          <span>{scenario?.scenarios} scenarios</span>
        </div>
      </div>
      <Button
        variant="outline"
        fullWidth
        onClick={() => onSelect(scenario)}
        iconName="Play"
        iconPosition="left"
        className="mt-2"
      >
        Start Simulation
      </Button>
    </div>
  );
};

export default ScenarioCard;