import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const TrendingTopics = ({ onTopicClick }) => {
  const trendingTopics = [
    {
      id: 1,
      title: "Constitutional Requirements for ONOE",
      description: "Understanding the constitutional amendments needed to implement simultaneous elections across India.",
      category: "Constitutional Law",
      readTime: "5 min read",
      views: "12.5K",
      icon: "Scale",
      trending: true,
      lastUpdated: "2 hours ago"
    },
    {
      id: 2,
      title: "Historical Context: 1951-1967 Elections",
      description: "Exploring India\'s experience with simultaneous elections during the first two decades of independence.",
      category: "Historical Analysis",
      readTime: "8 min read",
      views: "9.8K",
      icon: "Clock",
      trending: true,
      lastUpdated: "5 hours ago"
    },
    {
      id: 3,
      title: "State Ratification Process Explained",
      description: "Step-by-step breakdown of how constitutional amendments require state legislature approval.",
      category: "Electoral Process",
      readTime: "6 min read",
      views: "8.2K",
      icon: "MapPin",
      trending: false,
      lastUpdated: "1 day ago"
    },
    {
      id: 4,
      title: "Emergency Provisions & ONOE",
      description: "How constitutional emergency provisions interact with simultaneous election schedules.",
      category: "Constitutional Law",
      readTime: "7 min read",
      views: "7.1K",
      icon: "AlertTriangle",
      trending: false,
      lastUpdated: "2 days ago"
    }
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8 md:mb-12">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Icon name="TrendingUp" size={24} color="var(--color-primary)" />
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
                Trending ONOE Topics
              </h2>
            </div>
            <p className="text-sm md:text-base text-muted-foreground">
              Most accessed constitutional information this week
            </p>
          </div>

          <Button 
            variant="outline"
            iconName="ArrowRight"
            iconPosition="right"
            onClick={() => onTopicClick('/learn-hub')}
          >
            View All Topics
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {trendingTopics?.map((topic) => (
            <div
              key={topic?.id}
              className="bg-card border border-border rounded-xl p-6 md:p-8 hover:shadow-lg transition-all duration-300 cursor-pointer group"
              onClick={() => onTopicClick('/learn-hub')}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                  <Icon name={topic?.icon} size={24} color="var(--color-primary)" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2 flex-wrap">
                    <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {topic?.category}
                    </span>
                    {topic?.trending && (
                      <span className="text-xs font-medium text-orange-600 bg-orange-50 px-3 py-1 rounded-full flex items-center gap-1">
                        <Icon name="Flame" size={12} />
                        Trending
                      </span>
                    )}
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                    {topic?.title}
                  </h3>
                </div>
              </div>

              <p className="text-sm md:text-base text-muted-foreground mb-4 leading-relaxed line-clamp-2">
                {topic?.description}
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-border">
                <div className="flex items-center gap-4 text-xs md:text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Icon name="Clock" size={16} />
                    <span>{topic?.readTime}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Icon name="Eye" size={16} />
                    <span>{topic?.views}</span>
                  </div>
                </div>
                <span className="text-xs text-muted-foreground whitespace-nowrap">
                  Updated {topic?.lastUpdated}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingTopics;