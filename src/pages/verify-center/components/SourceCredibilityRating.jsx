import React from 'react';
import Icon from '../../../components/AppIcon';

const SourceCredibilityRating = ({ source }) => {
  const getRatingConfig = (rating) => {
    if (rating >= 4.5) {
      return {
        color: 'var(--color-success)',
        bgColor: 'bg-success/10',
        label: 'Highly Credible',
        icon: 'ShieldCheck'
      };
    } else if (rating >= 3.5) {
      return {
        color: 'var(--color-primary)',
        bgColor: 'bg-primary/10',
        label: 'Credible',
        icon: 'Shield'
      };
    } else if (rating >= 2.5) {
      return {
        color: 'var(--color-warning)',
        bgColor: 'bg-warning/10',
        label: 'Moderate',
        icon: 'AlertTriangle'
      };
    } else {
      return {
        color: 'var(--color-destructive)',
        bgColor: 'bg-destructive/10',
        label: 'Low Credibility',
        icon: 'AlertCircle'
      };
    }
  };

  const ratingConfig = getRatingConfig(source?.rating);

  return (
    <div className="bg-card rounded-lg border border-border p-4 md:p-6">
      <div className="flex items-start gap-4 mb-4">
        <div className={`w-12 h-12 ${ratingConfig?.bgColor} rounded-lg flex items-center justify-center flex-shrink-0`}>
          <Icon name={ratingConfig?.icon} size={24} color={ratingConfig?.color} />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-base md:text-lg font-semibold text-foreground mb-1 line-clamp-1">
            {source?.name}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-1">{source?.type}</p>
        </div>
      </div>
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">Credibility Rating</span>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5]?.map((star) => (
                <Icon
                  key={star}
                  name="Star"
                  size={14}
                  color={star <= source?.rating ? ratingConfig?.color : 'var(--color-muted)'}
                  className={star <= source?.rating ? 'fill-current' : ''}
                />
              ))}
            </div>
            <span className="text-sm font-semibold text-foreground">{source?.rating?.toFixed(1)}</span>
          </div>
        </div>

        <div className={`flex items-center gap-2 ${ratingConfig?.bgColor} px-3 py-2 rounded-lg`}>
          <Icon name={ratingConfig?.icon} size={16} color={ratingConfig?.color} />
          <span className="text-sm font-medium text-foreground">{ratingConfig?.label}</span>
        </div>

        <div className="grid grid-cols-2 gap-3 pt-3 border-t border-border">
          <div>
            <p className="text-xs text-muted-foreground mb-1">Fact Checks</p>
            <p className="text-sm font-semibold text-foreground">{source?.factChecks}</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground mb-1">Accuracy Rate</p>
            <p className="text-sm font-semibold text-foreground">{source?.accuracyRate}%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SourceCredibilityRating;