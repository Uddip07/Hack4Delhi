import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const SimulationResults = ({ results, onShare, onReset }) => {
  const getScoreColor = (score) => {
    if (score >= 80) return 'text-success';
    if (score >= 60) return 'text-warning';
    return 'text-error';
  };

  const getScoreBgColor = (score) => {
    if (score >= 80) return 'bg-success/10';
    if (score >= 60) return 'bg-warning/10';
    return 'bg-error/10';
  };

  return (
    <div className="bg-card border border-border rounded-lg p-4 md:p-6">
      <div className="flex items-center justify-between mb-4 md:mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 md:w-12 md:h-12 bg-success/10 rounded-lg flex items-center justify-center flex-shrink-0">
            <Icon name="Trophy" size={20} color="var(--color-success)" />
          </div>
          <div>
            <h3 className="text-lg md:text-xl font-semibold text-foreground">
              Simulation Complete
            </h3>
            <p className="text-xs md:text-sm text-muted-foreground">
              {results?.scenarioTitle}
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 mb-4 md:mb-6">
        <div className={`p-4 md:p-6 rounded-lg ${getScoreBgColor(results?.score)}`}>
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs md:text-sm text-muted-foreground">Overall Score</span>
            <Icon name="Award" size={18} color="var(--color-primary)" />
          </div>
          <p className={`text-2xl md:text-3xl font-bold ${getScoreColor(results?.score)}`}>
            {results?.score}%
          </p>
        </div>

        <div className="p-4 md:p-6 bg-primary/5 rounded-lg">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs md:text-sm text-muted-foreground">Time Taken</span>
            <Icon name="Clock" size={18} color="var(--color-primary)" />
          </div>
          <p className="text-2xl md:text-3xl font-bold text-foreground">
            {results?.timeTaken}
          </p>
        </div>

        <div className="p-4 md:p-6 bg-accent/5 rounded-lg">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs md:text-sm text-muted-foreground">Decisions Made</span>
            <Icon name="CheckCircle" size={18} color="var(--color-accent)" />
          </div>
          <p className="text-2xl md:text-3xl font-bold text-foreground">
            {results?.decisionsCorrect}/{results?.totalDecisions}
          </p>
        </div>
      </div>
      <div className="space-y-3 md:space-y-4 mb-4 md:mb-6">
        <h4 className="text-sm md:text-base font-semibold text-foreground">
          Performance Breakdown
        </h4>

        {results?.breakdown?.map((item, index) => (
          <div key={index} className="p-3 md:p-4 bg-muted/50 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs md:text-sm font-medium text-foreground">
                {item?.category}
              </span>
              <span className={`text-xs md:text-sm font-semibold ${getScoreColor(item?.score)}`}>
                {item?.score}%
              </span>
            </div>
            <div className="w-full bg-muted rounded-full h-2">
              <div
                className={`h-2 rounded-full transition-all duration-500 ${
                  item?.score >= 80 ? 'bg-success' : item?.score >= 60 ? 'bg-warning' : 'bg-error'
                }`}
                style={{ width: `${item?.score}%` }}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="p-3 md:p-4 bg-primary/5 rounded-lg mb-4 md:mb-6">
        <h4 className="text-sm md:text-base font-semibold text-foreground mb-2">
          Key Learnings
        </h4>
        <ul className="space-y-2">
          {results?.learnings?.map((learning, index) => (
            <li key={index} className="flex items-start gap-2">
              <Icon name="Check" size={16} color="var(--color-success)" className="flex-shrink-0 mt-0.5" />
              <span className="text-xs md:text-sm text-muted-foreground">
                {learning}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="p-3 md:p-4 bg-accent/10 rounded-lg mb-4 md:mb-6">
        <div className="flex items-start gap-2">
          <Icon name="Lightbulb" size={18} color="var(--color-accent)" className="flex-shrink-0 mt-0.5" />
          <div>
            <h5 className="text-sm font-medium text-foreground mb-1">
              Recommendation
            </h5>
            <p className="text-xs md:text-sm text-muted-foreground">
              {results?.recommendation}
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
        <Button
          variant="outline"
          fullWidth
          onClick={onShare}
          iconName="Share2"
          iconPosition="left"
        >
          Share Results
        </Button>
        <Button
          variant="default"
          fullWidth
          onClick={onReset}
          iconName="RotateCcw"
          iconPosition="left"
        >
          Try Another Scenario
        </Button>
      </div>
    </div>
  );
};

export default SimulationResults;