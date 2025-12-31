import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TimelineCard = ({ event, isLast }) => {
  return (
    <div className="flex gap-4 md:gap-6">
      <div className="flex flex-col items-center flex-shrink-0">
        <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-full flex items-center justify-center">
          <Icon name="Calendar" size={20} color="var(--color-primary)" />
        </div>
        {!isLast && (
          <div className="w-0.5 h-full bg-border mt-2" />
        )}
      </div>
      <div className="flex-grow pb-8 md:pb-10 lg:pb-12">
        <div className="bg-card border border-border rounded-lg p-4 md:p-5 lg:p-6">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs md:text-sm font-semibold text-primary">
              {event?.year}
            </span>
            <span className="text-xs md:text-sm text-muted-foreground">
              {event?.date}
            </span>
          </div>

          <h3 className="text-base md:text-lg lg:text-xl font-semibold text-foreground mb-3">
            {event?.title}
          </h3>

          {event?.image && (
            <div className="mb-4 rounded-lg overflow-hidden">
              <Image
                src={event?.image}
                alt={event?.imageAlt}
                className="w-full h-48 md:h-56 object-cover"
              />
            </div>
          )}

          <p className="text-sm md:text-base text-muted-foreground mb-4">
            {event?.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {event?.tags?.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-muted text-muted-foreground text-xs rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineCard;