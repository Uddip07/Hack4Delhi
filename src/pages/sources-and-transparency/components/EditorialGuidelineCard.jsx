import React from 'react';
import Icon from '../../../components/AppIcon';

const EditorialGuidelineCard = ({ title, principles }) => {
  return (
    <div className="bg-card border border-border rounded-lg p-4 md:p-6 lg:p-8">
      <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-foreground mb-4 md:mb-6 font-heading">
        {title}
      </h3>
      <div className="space-y-3 md:space-y-4">
        {principles?.map((principle, index) => (
          <div key={index} className="flex items-start gap-3">
            <div className="w-6 h-6 bg-success/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <Icon name="Check" size={14} className="text-success" />
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="text-sm md:text-base font-semibold text-foreground mb-1">
                {principle?.title}
              </h4>
              <p className="text-xs md:text-sm text-muted-foreground">
                {principle?.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EditorialGuidelineCard;