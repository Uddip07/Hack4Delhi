import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const QuickAccessCard = ({ item }) => {
  const handleClick = () => {
    console.log('Quick access clicked:', item?.id);
  };

  return (
    <div className="bg-card border border-border rounded-lg p-4 md:p-5 lg:p-6 hover:shadow-md transition-all duration-300">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
          <Icon name={item?.icon} size={24} color="var(--color-primary)" />
        </div>
        <div className="flex-grow min-w-0">
          <h3 className="text-base md:text-lg font-semibold text-foreground mb-2">
            {item?.title}
          </h3>
          <p className="text-sm md:text-base text-muted-foreground mb-4 line-clamp-2">
            {item?.description}
          </p>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleClick}
            iconName="ArrowRight"
            iconPosition="right"
          >
            {item?.action}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default QuickAccessCard;