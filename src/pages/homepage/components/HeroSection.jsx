import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const HeroSection = ({ onExploreClick, onSearchClick }) => {
  const [currentFactIndex, setCurrentFactIndex] = useState(0);

  const constitutionalFacts = [
    {
      id: 1,
      fact: "The Constitution of India is the longest written constitution of any country in the world, containing 448 articles in 25 parts, 12 schedules, and 105 amendments.",
      source: "Constitution of India, 2024",
      icon: "BookOpen"
    },
    {
      id: 2,
      fact: "Article 324 of the Constitution establishes the Election Commission of India as an autonomous constitutional authority responsible for administering election processes.",
      source: "Constitution of India, Article 324",
      icon: "Scale"
    },
    {
      id: 3,
      fact: "India conducted its first general elections in 1951-52, with 173 million eligible voters participating in the world's largest democratic exercise at that time.",
      source: "Election Commission of India Historical Records",
      icon: "Users"
    },
    {
      id: 4,
      fact: "The concept of 'One Nation, One Election' was the norm in India from 1951 to 1967, when Lok Sabha and State Assembly elections were held simultaneously.",
      source: "Law Commission Report No. 170, 1999",
      icon: "Calendar"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFactIndex((prev) => (prev + 1) % constitutionalFacts?.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const handlePrevFact = () => {
    setCurrentFactIndex((prev) => 
      prev === 0 ? constitutionalFacts?.length - 1 : prev - 1
    );
  };

  const handleNextFact = () => {
    setCurrentFactIndex((prev) => (prev + 1) % constitutionalFacts?.length);
  };

  const currentFact = constitutionalFacts?.[currentFactIndex];

  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-white py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6 md:space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full">
              <Icon name="Shield" size={16} color="var(--color-primary)" />
              <span className="text-sm font-medium text-blue-900">
                Constitutional Clarity for Every Citizen
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Understanding <span className="text-primary">One Nation, One Election</span> Through Constitutional Facts
            </h1>

            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Empowering democratic participation through accessible, verified civic education. Navigate complex electoral processes with confidence and constitutional accuracy.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="default" 
                size="lg"
                iconName="BookOpen"
                iconPosition="left"
                onClick={onExploreClick}
                className="w-full sm:w-auto"
              >
                Explore ONOE
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                iconName="Search"
                iconPosition="left"
                onClick={onSearchClick}
                className="w-full sm:w-auto"
              >
                Verify Claims
              </Button>
            </div>

            <div className="flex flex-wrap items-center gap-6 pt-4">
              <div className="flex items-center gap-2">
                <Icon name="CheckCircle" size={20} color="var(--color-success)" />
                <span className="text-sm text-muted-foreground">ECI Verified Sources</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Shield" size={20} color="var(--color-success)" />
                <span className="text-sm text-muted-foreground">Non-Partisan Content</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Users" size={20} color="var(--color-success)" />
                <span className="text-sm text-muted-foreground">Expert Validated</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-border">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon name={currentFact?.icon} size={24} color="var(--color-primary)" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-semibold text-primary mb-2">
                    Constitutional Fact #{currentFactIndex + 1}
                  </h3>
                  <p className="text-sm md:text-base text-foreground leading-relaxed">
                    {currentFact?.fact}
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-border">
                <div className="flex items-center gap-2 min-w-0 flex-1">
                  <Icon name="FileText" size={16} color="var(--color-muted-foreground)" />
                  <span className="text-xs md:text-sm text-muted-foreground truncate">
                    Source: {currentFact?.source}
                  </span>
                </div>

                <div className="flex items-center gap-2 flex-shrink-0 ml-4">
                  <button
                    onClick={handlePrevFact}
                    className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-muted transition-colors duration-300"
                    aria-label="Previous fact"
                  >
                    <Icon name="ChevronLeft" size={20} color="var(--color-muted-foreground)" />
                  </button>
                  <div className="flex gap-1">
                    {constitutionalFacts?.map((_, index) => (
                      <div
                        key={index}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          index === currentFactIndex ? 'bg-primary w-6' : 'bg-muted'
                        }`}
                      />
                    ))}
                  </div>
                  <button
                    onClick={handleNextFact}
                    className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-muted transition-colors duration-300"
                    aria-label="Next fact"
                  >
                    <Icon name="ChevronRight" size={20} color="var(--color-muted-foreground)" />
                  </button>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 -right-4 w-24 h-24 md:w-32 md:h-32 bg-blue-100 rounded-full opacity-50 blur-2xl" />
            <div className="absolute -top-4 -left-4 w-20 h-20 md:w-28 md:h-28 bg-orange-100 rounded-full opacity-50 blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;