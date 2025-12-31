import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const PartnerCard = ({ name, role, image, imageAlt, expertise, contribution }) => {
  return (
    <div className="bg-card border border-border rounded-lg p-4 md:p-6 hover:shadow-lg transition-all duration-300">
      <div className="flex items-start gap-3 md:gap-4 mb-4">
        <div className="w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden flex-shrink-0 bg-muted">
          <Image 
            src={image} 
            alt={imageAlt}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="text-base md:text-lg font-semibold text-foreground mb-1 font-heading">
            {name}
          </h4>
          <p className="text-xs md:text-sm text-primary font-medium mb-2">
            {role}
          </p>
          <p className="text-xs md:text-sm text-muted-foreground">
            {expertise}
          </p>
        </div>
      </div>
      <div className="flex items-start gap-2 bg-muted rounded-lg p-3">
        <Icon name="Quote" size={16} className="text-primary flex-shrink-0 mt-1" />
        <p className="text-xs md:text-sm text-foreground italic">
          {contribution}
        </p>
      </div>
    </div>
  );
};

export default PartnerCard;