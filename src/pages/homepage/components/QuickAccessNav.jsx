import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const QuickAccessNav = ({ onNavigate }) => {
  const quickAccessItems = [
    {
      id: 1,
      title: "Learn Hub",
      description: "Comprehensive educational content from basics to advanced constitutional law",
      icon: "BookOpen",
      color: "blue",
      path: "/learn-hub",
      features: ["Interactive modules", "Video explainers", "Progress tracking"]
    },
    {
      id: 2,
      title: "Verify Center",
      description: "AI-powered fact-checking and claim verification with source attribution",
      icon: "ShieldCheck",
      color: "green",
      path: "/verify-center",
      features: ["Real-time verification", "Source validation", "Misinformation tracker"]
    },
    {
      id: 3,
      title: "Constitutional Visualizer",
      description: "Interactive flowcharts showing amendment processes and legal requirements",
      icon: "Eye",
      color: "purple",
      path: "/constitutional-visualizer",
      features: ["Amendment pathways", "State ratification", "Plain-language guides"]
    },
    {
      id: 4,
      title: "Scenario Simulator",
      description: "Understanding implementation complexities through interactive modeling",
      icon: "Layers",
      color: "orange",
      path: "/scenario-simulator",
      features: ["Historical data", "Edge case analysis", "Emergency provisions"]
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: {
        bg: 'bg-blue-50',
        icon: 'bg-blue-100',
        text: 'text-blue-700',
        border: 'border-blue-200',
        hover: 'hover:border-blue-300'
      },
      green: {
        bg: 'bg-green-50',
        icon: 'bg-green-100',
        text: 'text-green-700',
        border: 'border-green-200',
        hover: 'hover:border-green-300'
      },
      purple: {
        bg: 'bg-purple-50',
        icon: 'bg-purple-100',
        text: 'text-purple-700',
        border: 'border-purple-200',
        hover: 'hover:border-purple-300'
      },
      orange: {
        bg: 'bg-orange-50',
        icon: 'bg-orange-100',
        text: 'text-orange-700',
        border: 'border-orange-200',
        hover: 'hover:border-orange-300'
      }
    };
    return colors?.[color];
  };

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
            <Icon name="Zap" size={16} color="var(--color-primary)" />
            <span className="text-sm font-medium text-primary">
              Quick Access
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Explore Platform Features
          </h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
            Navigate to key sections designed to enhance your constitutional understanding and civic engagement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {quickAccessItems?.map((item) => {
            const colors = getColorClasses(item?.color);

            return (
              <div
                key={item?.id}
                className={`bg-card border-2 border-border rounded-2xl p-6 md:p-8 ${colors?.hover} hover:shadow-lg transition-all duration-300 cursor-pointer group`}
                onClick={() => onNavigate(item?.path)}
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className={`w-14 h-14 md:w-16 md:h-16 ${colors?.icon} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon name={item?.icon} size={28} color={`var(--color-${item?.color})`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                      {item?.title}
                    </h3>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed line-clamp-2">
                      {item?.description}
                    </p>
                  </div>
                </div>
                <div className="space-y-2 mb-6">
                  <p className="text-xs font-semibold text-foreground mb-3">Key Features:</p>
                  {item?.features?.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className={`w-1.5 h-1.5 rounded-full ${colors?.bg}`} />
                      <span className="text-xs md:text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
                <Button
                  variant="outline"
                  fullWidth
                  iconName="ArrowRight"
                  iconPosition="right"
                  onClick={(e) => {
                    e?.stopPropagation();
                    onNavigate(item?.path);
                  }}
                >
                  Explore {item?.title}
                </Button>
              </div>
            );
          })}
        </div>

        <div className="mt-8 md:mt-12 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 md:p-8 lg:p-10 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 shadow-md">
              <Icon name="Lightbulb" size={32} color="var(--color-primary)" />
            </div>
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground mb-3 md:mb-4">
              New to Constitutional Learning?
            </h3>
            <p className="text-sm md:text-base text-muted-foreground mb-6 md:mb-8 leading-relaxed">
              Start with our guided tour to understand how ONOE Clarity can help you become a more informed citizen. We'll walk you through each feature and show you how to make the most of our platform.
            </p>
            <Button
              variant="default"
              size="lg"
              iconName="Play"
              iconPosition="left"
              onClick={() => onNavigate('/learn-hub')}
            >
              Start Guided Tour
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickAccessNav;