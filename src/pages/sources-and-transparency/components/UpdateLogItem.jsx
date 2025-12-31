import React from 'react';
import Icon from '../../../components/AppIcon';

const UpdateLogItem = ({ date, title, description, type }) => {
  const typeConfig = {
    content: { icon: 'FileText', color: 'text-primary', bg: 'bg-primary/10' },
    methodology: { icon: 'Settings', color: 'text-accent', bg: 'bg-accent/10' },
    partnership: { icon: 'Users', color: 'text-success', bg: 'bg-success/10' },
    system: { icon: 'Cpu', color: 'text-warning', bg: 'bg-warning/10' }
  };

  const config = typeConfig?.[type] || typeConfig?.content;

  return (
    <div className="flex items-start gap-3 md:gap-4 pb-4 md:pb-6 border-b border-border last:border-0 last:pb-0">
      <div className={`w-8 h-8 md:w-10 md:h-10 ${config?.bg} rounded-lg flex items-center justify-center flex-shrink-0`}>
        <Icon name={config?.icon} size={20} className={config?.color} />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1 md:gap-2 mb-2">
          <h4 className="text-sm md:text-base font-semibold text-foreground">
            {title}
          </h4>
          <span className="text-xs md:text-sm text-muted-foreground whitespace-nowrap">
            {date}
          </span>
        </div>
        <p className="text-xs md:text-sm text-muted-foreground">
          {description}
        </p>
      </div>
    </div>
  );
};

export default UpdateLogItem;