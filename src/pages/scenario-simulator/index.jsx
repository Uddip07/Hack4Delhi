import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Breadcrumb from '../../components/ui/Breadcrumb';
import Footer from '../../components/ui/Footer';
import Icon from '../../components/AppIcon';
import ScenarioCard from './components/ScenarioCard';
import ComparisonView from './components/ComparisonView';
import EmergencyProvisionSimulator from './components/EmergencyProvisionSimulator';
import HistoricalDataChart from './components/HistoricalDataChart';
import EdgeCaseAnalysis from './components/EdgeCaseAnalysis';
import SimulationResults from './components/SimulationResults';

const ScenarioSimulator = () => {
  const [activeTab, setActiveTab] = useState('scenarios');
  const [selectedScenario, setSelectedScenario] = useState(null);
  const [showResults, setShowResults] = useState(false);

  const breadcrumbItems = [
    { label: 'Home', path: '/homepage' },
    { label: 'Scenario Simulator' }
  ];

  const scenarios = [
    {
      id: 1,
      title: 'Basic ONOE Implementation',
      icon: 'Vote',
      difficulty: 'Beginner',
      description: 'Understand the fundamental process of implementing One Nation One Election across India.',
      duration: '15 mins',
      participants: '1 player',
      scenarios: 5
    },
    {
      id: 2,
      title: 'State Emergency Handling',
      icon: 'AlertTriangle',
      difficulty: 'Intermediate',
      description: 'Navigate constitutional challenges when a state faces mid-term assembly dissolution.',
      duration: '25 mins',
      participants: '1 player',
      scenarios: 8
    },
    {
      id: 3,
      title: 'Coalition Government Formation',
      icon: 'Users',
      difficulty: 'Intermediate',
      description: 'Experience the complexities of forming stable governments in hung parliament scenarios.',
      duration: '30 mins',
      participants: '1 player',
      scenarios: 10
    },
    {
      id: 4,
      title: 'Constitutional Amendment Process',
      icon: 'Scale',
      difficulty: 'Advanced',
      description: 'Navigate the complete process of amending the Constitution for ONOE implementation.',
      duration: '40 mins',
      participants: '1 player',
      scenarios: 12
    },
    {
      id: 5,
      title: 'Multi-State Crisis Management',
      icon: 'MapPin',
      difficulty: 'Advanced',
      description: 'Handle simultaneous constitutional crises across multiple states under ONOE.',
      duration: '45 mins',
      participants: '1 player',
      scenarios: 15
    },
    {
      id: 6,
      title: 'Electoral Logistics Planning',
      icon: 'Truck',
      difficulty: 'Intermediate',
      description: 'Plan and execute the massive logistical operation of synchronized national elections.',
      duration: '35 mins',
      participants: '1 player',
      scenarios: 10
    }
  ];

  const currentSystemData = {
    frequency: 'Staggered (State + National)',
    cost: '₹60,000+ Crores (5 years)',
    campaignDuration: 'Continuous (Model Code)',
    adminBurden: 'High (Multiple cycles)',
    turnout: '65-70% (Average)',
    amendments: 'Not Required'
  };

  const onoeSystemData = {
    frequency: 'Synchronized (Every 5 years)',
    cost: '₹40,000-45,000 Crores (5 years)',
    campaignDuration: 'Concentrated (2-3 months)',
    adminBurden: 'Moderate (Single cycle)',
    turnout: '70-75% (Projected)',
    amendments: 'Multiple Required'
  };

  const mockResults = {
    scenarioTitle: 'Basic ONOE Implementation',
    score: 85,
    timeTaken: '12:34',
    decisionsCorrect: 4,
    totalDecisions: 5,
    breakdown: [
      { category: 'Constitutional Knowledge', score: 90 },
      { category: 'Decision Making', score: 85 },
      { category: 'Time Management', score: 80 },
      { category: 'Strategic Planning', score: 85 }
    ],
    learnings: [
      'ONOE requires constitutional amendments to Articles 83, 85, 172, and 174',
      'Synchronization needs careful planning for state assembly terms',
      'Emergency provisions must be adapted for ONOE framework',
      'ECI requires enhanced resources for simultaneous elections'
    ],
    recommendation: 'Excellent performance! You demonstrated strong understanding of ONOE constitutional requirements. Consider exploring advanced scenarios to deepen your knowledge of edge cases and emergency provisions.'
  };

  const handleScenarioSelect = (scenario) => {
    setSelectedScenario(scenario);
    setTimeout(() => {
      setShowResults(true);
    }, 2000);
  };

  const handleShareResults = () => {
    console.log('Sharing results...');
  };

  const handleResetSimulation = () => {
    setSelectedScenario(null);
    setShowResults(false);
  };

  const tabs = [
    { id: 'scenarios', label: 'Scenarios', icon: 'Play' },
    { id: 'comparison', label: 'Comparison', icon: 'GitCompare' },
    { id: 'emergency', label: 'Emergency', icon: 'AlertTriangle' },
    { id: 'historical', label: 'Historical Data', icon: 'BarChart3' },
    { id: 'edge-cases', label: 'Edge Cases', icon: 'AlertCircle' }
  ];

  return (
    <>
      <Helmet>
        <title>Scenario Simulator - ONOE Clarity</title>
        <meta
          name="description"
          content="Interactive scenario simulator for understanding ONOE implementation complexities, emergency provisions, and constitutional challenges through gamified learning experiences."
        />
      </Helmet>
      <div className="min-h-screen bg-background flex flex-col">
        <Header />

        <main className="flex-1 pt-20 pb-8 md:pb-12">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <Breadcrumb items={breadcrumbItems} />

            <div className="mt-6 md:mt-8 mb-6 md:mb-8">
              <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Layers" size={24} color="var(--color-primary)" />
                </div>
                <div>
                  <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
                    Scenario Simulator
                  </h1>
                  <p className="text-sm md:text-base text-muted-foreground mt-1">
                    Interactive learning through constitutional scenario modeling
                  </p>
                </div>
              </div>

              <div className="p-3 md:p-4 bg-primary/5 rounded-lg">
                <div className="flex items-start gap-2">
                  <Icon name="Info" size={18} color="var(--color-primary)" className="flex-shrink-0 mt-0.5" />
                  <p className="text-xs md:text-sm text-muted-foreground">
                    All scenarios are based on constitutional provisions, ECI guidelines, and Law Commission recommendations. This simulator is designed for educational purposes to help citizens understand ONOE implementation complexities.
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-6 md:mb-8">
              <div className="border-b border-border overflow-x-auto">
                <div className="flex gap-1 min-w-max">
                  {tabs?.map((tab) => (
                    <button
                      key={tab?.id}
                      onClick={() => setActiveTab(tab?.id)}
                      className={`flex items-center gap-2 px-4 md:px-6 py-3 text-sm md:text-base font-medium transition-all duration-300 border-b-2 flex-shrink-0 ${
                        activeTab === tab?.id
                          ? 'border-primary text-primary' :'border-transparent text-muted-foreground hover:text-foreground'
                      }`}
                    >
                      <Icon name={tab?.icon} size={18} />
                      <span>{tab?.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {activeTab === 'scenarios' && (
              <div className="space-y-6 md:space-y-8">
                {!selectedScenario && !showResults && (
                  <>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                      {scenarios?.map((scenario) => (
                        <ScenarioCard
                          key={scenario?.id}
                          scenario={scenario}
                          onSelect={handleScenarioSelect}
                        />
                      ))}
                    </div>

                    <div className="p-4 md:p-6 bg-accent/10 rounded-lg">
                      <div className="flex items-start gap-3">
                        <Icon name="Lightbulb" size={24} color="var(--color-accent)" className="flex-shrink-0" />
                        <div>
                          <h3 className="text-base md:text-lg font-semibold text-foreground mb-2">
                            How Scenarios Work
                          </h3>
                          <ul className="space-y-2 text-xs md:text-sm text-muted-foreground">
                            <li className="flex items-start gap-2">
                              <Icon name="Check" size={16} color="var(--color-success)" className="flex-shrink-0 mt-0.5" />
                              <span>Each scenario presents real constitutional challenges faced during ONOE implementation</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <Icon name="Check" size={16} color="var(--color-success)" className="flex-shrink-0 mt-0.5" />
                              <span>Make decisions based on constitutional provisions and democratic principles</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <Icon name="Check" size={16} color="var(--color-success)" className="flex-shrink-0 mt-0.5" />
                              <span>Receive detailed feedback on your choices with constitutional references</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <Icon name="Check" size={16} color="var(--color-success)" className="flex-shrink-0 mt-0.5" />
                              <span>Track your progress and improve your constitutional literacy</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </>
                )}

                {selectedScenario && !showResults && (
                  <div className="flex items-center justify-center min-h-[400px]">
                    <div className="text-center">
                      <div className="w-16 h-16 md:w-20 md:h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                        <Icon name="Loader" size={32} color="var(--color-primary)" />
                      </div>
                      <h3 className="text-lg md:text-xl font-semibold text-foreground mb-2">
                        Loading Scenario
                      </h3>
                      <p className="text-sm md:text-base text-muted-foreground">
                        Preparing {selectedScenario?.title}...
                      </p>
                    </div>
                  </div>
                )}

                {showResults && (
                  <SimulationResults
                    results={mockResults}
                    onShare={handleShareResults}
                    onReset={handleResetSimulation}
                  />
                )}
              </div>
            )}

            {activeTab === 'comparison' && (
              <ComparisonView
                currentSystem={currentSystemData}
                onoeSystem={onoeSystemData}
              />
            )}

            {activeTab === 'emergency' && <EmergencyProvisionSimulator />}

            {activeTab === 'historical' && <HistoricalDataChart />}

            {activeTab === 'edge-cases' && <EdgeCaseAnalysis />}
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default ScenarioSimulator;