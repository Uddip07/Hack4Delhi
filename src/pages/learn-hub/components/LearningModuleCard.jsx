import React from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const LearningModuleCard = ({ module }) => {
  const navigate = useNavigate();

  const difficultyColors = {
    beginner: 'bg-success/10 text-success',
    intermediate: 'bg-warning/10 text-warning',
    advanced: 'bg-error/10 text-error'
  };

  const handleModuleClick = () => {
    console.log('Module clicked:', module.id);
  };

  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 h-full flex flex-col">
      <div className="relative h-48 md:h-56 lg:h-64 overflow-hidden">
        <Image
          src={module.image}
          alt={module.imageAlt}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-3 right-3">
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${difficultyColors?.[module.difficulty]}`}>
            {module.difficulty?.charAt(0)?.toUpperCase() + module.difficulty?.slice(1)}
          </span>
        </div>
      </div>
      <div className="p-4 md:p-5 lg:p-6 flex flex-col flex-grow">
        <div className="flex items-center gap-2 mb-3">
          <Icon name={module.categoryIcon} size={16} color="var(--color-primary)" />
          <span className="text-xs md:text-sm text-muted-foreground font-medium">
            {module.category}
          </span>
        </div>

        <h3 className="text-base md:text-lg lg:text-xl font-semibold text-foreground mb-2 line-clamp-2">
          {module.title}
        </h3>

        <p className="text-sm md:text-base text-muted-foreground mb-4 line-clamp-3 flex-grow">
          {module.description}
        </p>

        <div className="flex items-center justify-between mb-4 pb-4 border-b border-border">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5">
              <Icon name="Clock" size={16} color="var(--color-muted-foreground)" />
              <span className="text-xs md:text-sm text-muted-foreground whitespace-nowrap">
                {module.duration}
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <Icon name="BookOpen" size={16} color="var(--color-muted-foreground)" />
              <span className="text-xs md:text-sm text-muted-foreground whitespace-nowrap">
                {module.lessons} lessons
              </span>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs md:text-sm text-muted-foreground">Progress</span>
            <span className="text-xs md:text-sm font-medium text-foreground">{module.progress}%</span>
          </div>
          <div className="w-full bg-muted rounded-full h-2">
            <div
              className="bg-primary rounded-full h-2 transition-all duration-300"
              style={{ width: `${module.progress}%` }}
            />
          </div>
        </div>

        <Button
          variant="outline"
          fullWidth
          onClick={handleModuleClick}
          className="mt-4"
          iconName={module.progress > 0 ? "PlayCircle" : "BookOpen"}
          iconPosition="left"
        >
          {module.progress > 0 ? 'Continue Learning' : 'Start Module'}
        </Button>
      </div>
    </div>
  );
};

export default LearningModuleCard;