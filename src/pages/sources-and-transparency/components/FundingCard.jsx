import React from 'react';
import Icon from '../../../components/AppIcon';

const FundingCard = ({ source, amount, percentage, description, icon }) => {
  return (
    <div className="bg-card border border-border rounded-lg p-4 md:p-6">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
            <Icon name={icon} size={24} className="text-primary" />
          </div>
          <div>
            <h4 className="text-base md:text-lg font-semibold text-foreground font-heading">
              {source}
            </h4>
            <p className="text-xs md:text-sm text-muted-foreground">
              {percentage} of total funding
            </p>
          </div>
        </div>
        <div className="text-right">
          <div className="text-lg md:text-xl lg:text-2xl font-bold text-foreground whitespace-nowrap">
            {amount}
          </div>
        </div>
      </div>
      <div className="w-full bg-muted rounded-full h-2 mb-3">
        <div 
          className="bg-primary h-2 rounded-full transition-all duration-500"
          style={{ width: percentage }}
        />
      </div>
      <p className="text-xs md:text-sm text-muted-foreground">
        {description}
      </p>
    </div>
  );
};

export default FundingCard;