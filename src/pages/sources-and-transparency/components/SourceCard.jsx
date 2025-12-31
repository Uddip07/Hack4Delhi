import React from 'react';
import Icon from '../../../components/AppIcon';

const SourceCard = ({ icon, title, description, items, iconColor }) => {
  return (
    <div className="bg-card border border-border rounded-lg p-4 md:p-6 lg:p-8 hover:shadow-lg transition-all duration-300">
      <div className="flex items-start gap-3 md:gap-4 mb-4">
        <div className={`w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 ${iconColor} rounded-lg flex items-center justify-center flex-shrink-0`}>
          <Icon name={icon} size={24} className="md:w-7 md:h-7 lg:w-8 lg:h-8" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-base md:text-lg lg:text-xl font-semibold text-foreground mb-2 font-heading">
            {title}
          </h3>
          <p className="text-sm md:text-base text-muted-foreground">
            {description}
          </p>
        </div>
      </div>
      <ul className="space-y-2 md:space-y-3">
        {items?.map((item, index) => (
          <li key={index} className="flex items-start gap-2 md:gap-3">
            <Icon name="CheckCircle2" size={16} className="text-success flex-shrink-0 mt-1" />
            <span className="text-sm md:text-base text-foreground">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SourceCard;