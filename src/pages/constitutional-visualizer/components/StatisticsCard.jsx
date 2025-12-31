import React from 'react';
import Icon from '../../../components/AppIcon';

const StatisticsCard = ({ icon, label, value, description, trend }) => {
  return (
    <div className="bg-card border border-border rounded-lg p-4 md:p-6 hover:shadow-md transition-shadow duration-300">
      <div className="flex items-start justify-between mb-3">
        <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-lg flex items-center justify-center">
          <Icon name={icon} size={20} color="var(--color-primary)" />
        </div>
        {trend && (
          <div className={`flex items-center gap-1 text-xs ${trend?.direction === 'up' ? 'text-success' : 'text-destructive'}`}>
            <Icon name={trend?.direction === 'up' ? 'TrendingUp' : 'TrendingDown'} size={14} />
            <span>{trend?.value}</span>
          </div>
        )}
      </div>
      <div className="space-y-1">
        <p className="text-2xl md:text-3xl font-bold text-foreground">{value}</p>
        <p className="text-sm md:text-base font-medium text-foreground">{label}</p>
        {description && (
          <p className="text-xs md:text-sm text-muted-foreground">{description}</p>
        )}
      </div>
    </div>
  );
};

export default StatisticsCard;