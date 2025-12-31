import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const TrendingMisinformationCard = ({ item, onVerify }) => {
  const getSeverityConfig = (severity) => {
    const configs = {
      high: {
        icon: 'AlertTriangle',
        color: 'var(--color-destructive)',
        bgColor: 'bg-destructive/10',
        label: 'High Impact'
      },
      medium: {
        icon: 'AlertCircle',
        color: 'var(--color-warning)',
        bgColor: 'bg-warning/10',
        label: 'Medium Impact'
      },
      low: {
        icon: 'Info',
        color: 'var(--color-accent)',
        bgColor: 'bg-accent/10',
        label: 'Low Impact'
      }
    };
    return configs?.[severity] || configs?.medium;
  };

  const severityConfig = getSeverityConfig(item?.severity);

  return (
    <div className="bg-card rounded-lg border border-border p-4 md:p-6 hover:shadow-md transition-shadow duration-300">
      <div className="flex items-start justify-between gap-4 mb-4">
        <div className={`flex items-center gap-2 ${severityConfig?.bgColor} px-3 py-1.5 rounded-full`}>
          <Icon name={severityConfig?.icon} size={14} color={severityConfig?.color} />
          <span className="text-xs font-medium text-foreground">{severityConfig?.label}</span>
        </div>
        <div className="flex items-center gap-2 text-muted-foreground">
          <Icon name="TrendingUp" size={16} />
          <span className="text-xs">{item?.shareCount} shares</span>
        </div>
      </div>
      <h3 className="text-base md:text-lg font-semibold text-foreground mb-3 line-clamp-2">
        {item?.claim}
      </h3>
      <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
        {item?.context}
      </p>
      <div className="flex items-center justify-between pt-4 border-t border-border">
        <div className="flex items-center gap-2 text-muted-foreground">
          <Icon name="Clock" size={14} />
          <span className="text-xs">{item?.timeAgo}</span>
        </div>
        <Button
          variant="outline"
          size="sm"
          iconName="Search"
          iconPosition="left"
          onClick={() => onVerify(item?.claim)}
        >
          Verify Now
        </Button>
      </div>
    </div>
  );
};

export default TrendingMisinformationCard;