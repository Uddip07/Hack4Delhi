import React from 'react';
import Icon from '../../../components/AppIcon';

const MethodologySection = ({ icon, title, description, steps }) => {
  return (
    <div className="bg-muted rounded-lg p-4 md:p-6 lg:p-8">
      <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
        <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
          <Icon name={icon} size={24} className="text-primary" />
        </div>
        <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-foreground font-heading">
          {title}
        </h3>
      </div>
      <p className="text-sm md:text-base text-muted-foreground mb-4 md:mb-6">
        {description}
      </p>
      <div className="space-y-3 md:space-y-4">
        {steps?.map((step, index) => (
          <div key={index} className="flex items-start gap-3 md:gap-4">
            <div className="w-6 h-6 md:w-8 md:h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center flex-shrink-0 text-xs md:text-sm font-semibold">
              {index + 1}
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="text-sm md:text-base font-semibold text-foreground mb-1">
                {step?.title}
              </h4>
              <p className="text-xs md:text-sm text-muted-foreground">
                {step?.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MethodologySection;