import React from 'react';
import Icon from '../../../components/AppIcon';

const StatCard = ({ icon, value, label, trend, iconColor }) => {
  return (
    <div className="bg-card border border-border rounded-lg p-4 md:p-6 hover:shadow-lg transition-all duration-300">
      <div className="flex items-center justify-between mb-3 md:mb-4">
        <div className={`w-10 h-10 md:w-12 md:h-12 ${iconColor} rounded-lg flex items-center justify-center`}>
          <Icon name={icon} size={24} />
        </div>
        {trend && (
          <div className="flex items-center gap-1 text-success">
            <Icon name="TrendingUp" size={16} />
            <span className="text-xs md:text-sm font-medium">{trend}</span>
          </div>
        )}
      </div>
      <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-1 whitespace-nowrap">
        {value}
      </div>
      <p className="text-xs md:text-sm text-muted-foreground">
        {label}
      </p>
    </div>
  );
};

export default StatCard;