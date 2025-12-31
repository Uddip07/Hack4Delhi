import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const LearningPaths = ({ onPathSelect }) => {
  const [selectedLevel, setSelectedLevel] = useState(null);

  const learningPaths = [
    {
      id: 1,
      level: "Beginner",
      title: "Constitutional Basics",
      description: "Start your journey with fundamental concepts of Indian democracy and electoral processes.",
      duration: "2-3 hours",
      modules: 8,
      icon: "BookOpen",
      color: "green",
      topics: [
        "What is the Constitution?",
        "Basic Electoral Process",
        "Role of Election Commission",
        "Voting Rights & Responsibilities"
      ],
      progress: 0
    },
    {
      id: 2,
      level: "Intermediate",
      title: "ONOE Deep Dive",
      description: "Explore the complexities of simultaneous elections and constitutional requirements.",
      duration: "4-5 hours",
      modules: 12,
      icon: "Layers",
      color: "blue",
      topics: [
        "Historical Context (1951-1967)",
        "Constitutional Amendment Process",
        "State Ratification Requirements",
        "Implementation Challenges"
      ],
      progress: 0
    },
    {
      id: 3,
      level: "Advanced",
      title: "Constitutional Law Expert",
      description: "Master complex constitutional provisions, emergency scenarios, and legal frameworks.",
      duration: "6-8 hours",
      modules: 16,
      icon: "Award",
      color: "purple",
      topics: [
        "Emergency Provisions Analysis",
        "Federal Structure Implications",
        "Judicial Review Mechanisms",
        "International Comparisons"
      ],
      progress: 0
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      green: {
        bg: 'bg-green-50',
        icon: 'bg-green-100',
        text: 'text-green-700',
        border: 'border-green-200',
        hover: 'hover:border-green-300'
      },
      blue: {
        bg: 'bg-blue-50',
        icon: 'bg-blue-100',
        text: 'text-blue-700',
        border: 'border-blue-200',
        hover: 'hover:border-blue-300'
      },
      purple: {
        bg: 'bg-purple-50',
        icon: 'bg-purple-100',
        text: 'text-purple-700',
        border: 'border-purple-200',
        hover: 'hover:border-purple-300'
      }
    };
    return colors?.[color];
  };

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
            <Icon name="Target" size={16} color="var(--color-primary)" />
            <span className="text-sm font-medium text-primary">
              Personalized Learning
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Choose Your Learning Path
          </h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
            Select a path based on your current civic knowledge level. Each path is designed to build your understanding progressively.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {learningPaths?.map((path) => {
            const colors = getColorClasses(path?.color);
            const isSelected = selectedLevel === path?.id;

            return (
              <div
                key={path?.id}
                className={`bg-card border-2 rounded-2xl p-6 md:p-8 transition-all duration-300 cursor-pointer ${
                  isSelected 
                    ? `${colors?.border} shadow-lg scale-105` 
                    : `border-border ${colors?.hover} hover:shadow-md`
                }`}
                onClick={() => setSelectedLevel(path?.id)}
              >
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-14 h-14 md:w-16 md:h-16 ${colors?.icon} rounded-xl flex items-center justify-center`}>
                    <Icon name={path?.icon} size={28} color={`var(--color-${path?.color})`} />
                  </div>
                  <span className={`text-xs font-semibold ${colors?.text} ${colors?.bg} px-3 py-1 rounded-full`}>
                    {path?.level}
                  </span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">
                  {path?.title}
                </h3>
                <p className="text-sm md:text-base text-muted-foreground mb-6 leading-relaxed line-clamp-2">
                  {path?.description}
                </p>
                <div className="flex items-center gap-4 mb-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Icon name="Clock" size={16} />
                    <span>{path?.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Icon name="BookOpen" size={16} />
                    <span>{path?.modules} modules</span>
                  </div>
                </div>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-2">
                    <span>Progress</span>
                    <span>{path?.progress}%</span>
                  </div>
                  <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                    <div 
                      className={`h-full ${colors?.bg} transition-all duration-300`}
                      style={{ width: `${path?.progress}%` }}
                    />
                  </div>
                </div>
                <div className="space-y-2 mb-6">
                  <p className="text-xs font-semibold text-foreground mb-3">Key Topics:</p>
                  {path?.topics?.map((topic, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <Icon name="CheckCircle" size={16} color="var(--color-success)" className="flex-shrink-0 mt-0.5" />
                      <span className="text-xs md:text-sm text-muted-foreground">{topic}</span>
                    </div>
                  ))}
                </div>
                <Button
                  variant={isSelected ? "default" : "outline"}
                  fullWidth
                  iconName="ArrowRight"
                  iconPosition="right"
                  onClick={(e) => {
                    e?.stopPropagation();
                    onPathSelect('/learn-hub');
                  }}
                >
                  {isSelected ? 'Continue Learning' : 'Start Path'}
                </Button>
              </div>
            );
          })}
        </div>

        <div className="mt-8 md:mt-12 text-center">
          <p className="text-sm text-muted-foreground mb-4">
            Not sure which path to choose? Take our quick assessment
          </p>
          <Button 
            variant="outline"
            iconName="HelpCircle"
            iconPosition="left"
            onClick={() => onPathSelect('/learn-hub')}
          >
            Take Knowledge Assessment
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LearningPaths;