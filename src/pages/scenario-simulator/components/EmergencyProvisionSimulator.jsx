import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Select from '../../../components/ui/Select';

const EmergencyProvisionSimulator = () => {
  const [selectedProvision, setSelectedProvision] = useState('');
  const [simulationStarted, setSimulationStarted] = useState(false);

  const emergencyProvisions = [
    {
      value: 'national-emergency',
      label: 'National Emergency (Article 352)',
      description: 'War, external aggression, or armed rebellion'
    },
    {
      value: 'state-emergency',
      label: 'State Emergency (Article 356)',
      description: 'Constitutional machinery failure in states'
    },
    {
      value: 'financial-emergency',
      label: 'Financial Emergency (Article 360)',
      description: 'Threat to financial stability of India'
    }
  ];

  const provisionDetails = {
    'national-emergency': {
      title: 'National Emergency Simulation',
      icon: 'AlertTriangle',
      steps: [
        'President receives Cabinet recommendation for emergency declaration',
        'Parliamentary approval required within one month',
        'Fundamental Rights under Articles 19, 20, 21 may be suspended',
        'Elections can be postponed during emergency period',
        'ONOE implementation timeline would be affected',
        'Constitutional safeguards remain in place for election conduct'
      ],
      impact: 'Under ONOE, synchronized elections would be postponed uniformly across all levels. Current system allows state elections to continue independently.',
      constitutionalBasis: 'Article 352 of the Constitution of India'
    },
    'state-emergency': {
      title: 'State Emergency Simulation',
      icon: 'Building',
      steps: [
        'Governor reports constitutional machinery failure',
        'President imposes President\'s Rule under Article 356',
        'State Assembly dissolved or kept in suspended animation',
        'Parliament assumes state legislative powers',
        'Fresh elections must be held within six months',
        'ONOE system would require special provisions for such scenarios'
      ],
      impact: 'ONOE implementation requires constitutional amendments to handle mid-term state emergencies while maintaining synchronized election cycles.',
      constitutionalBasis: 'Article 356 of the Constitution of India'
    },
    'financial-emergency': {
      title: 'Financial Emergency Simulation',
      icon: 'DollarSign',
      steps: [
        'President declares financial emergency on Cabinet advice',
        'Union can direct states on financial matters',
        'Salaries of government employees may be reduced',
        'Money bills passed by state legislatures reserved for President',
        'Election expenditure limits may be revised',
        'ONOE cost benefits would be evaluated against emergency needs'
      ],
      impact: 'Financial emergency provisions remain unchanged under ONOE. Election timing and expenditure would follow constitutional emergency protocols.',
      constitutionalBasis: 'Article 360 of the Constitution of India'
    }
  };

  const handleStartSimulation = () => {
    if (selectedProvision) {
      setSimulationStarted(true);
    }
  };

  const handleReset = () => {
    setSelectedProvision('');
    setSimulationStarted(false);
  };

  return (
    <div className="bg-card border border-border rounded-lg p-4 md:p-6">
      <div className="flex items-center gap-3 mb-4 md:mb-6">
        <div className="w-10 h-10 md:w-12 md:h-12 bg-error/10 rounded-lg flex items-center justify-center flex-shrink-0">
          <Icon name="AlertTriangle" size={20} color="var(--color-error)" />
        </div>
        <div>
          <h3 className="text-lg md:text-xl font-semibold text-foreground">
            Emergency Provision Simulator
          </h3>
          <p className="text-xs md:text-sm text-muted-foreground">
            Understand constitutional emergency scenarios
          </p>
        </div>
      </div>
      {!simulationStarted ? (
        <div className="space-y-4 md:space-y-6">
          <Select
            label="Select Emergency Provision"
            description="Choose a constitutional emergency scenario to simulate"
            options={emergencyProvisions}
            value={selectedProvision}
            onChange={setSelectedProvision}
            placeholder="Select emergency type"
          />

          <Button
            variant="default"
            fullWidth
            onClick={handleStartSimulation}
            disabled={!selectedProvision}
            iconName="Play"
            iconPosition="left"
          >
            Start Emergency Simulation
          </Button>
        </div>
      ) : (
        <div className="space-y-4 md:space-y-6">
          <div className="flex items-center gap-3 p-3 md:p-4 bg-error/5 rounded-lg">
            <Icon name={provisionDetails?.[selectedProvision]?.icon} size={24} color="var(--color-error)" />
            <h4 className="text-base md:text-lg font-semibold text-foreground">
              {provisionDetails?.[selectedProvision]?.title}
            </h4>
          </div>

          <div className="space-y-3 md:space-y-4">
            <h5 className="text-sm md:text-base font-medium text-foreground">
              Constitutional Process Steps:
            </h5>
            {provisionDetails?.[selectedProvision]?.steps?.map((step, index) => (
              <div key={index} className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                <div className="w-6 h-6 md:w-8 md:h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-xs md:text-sm font-semibold text-primary">
                    {index + 1}
                  </span>
                </div>
                <p className="text-xs md:text-sm text-foreground pt-1">
                  {step}
                </p>
              </div>
            ))}
          </div>

          <div className="p-3 md:p-4 bg-accent/10 rounded-lg">
            <h5 className="text-sm md:text-base font-medium text-foreground mb-2">
              Impact on ONOE Implementation:
            </h5>
            <p className="text-xs md:text-sm text-muted-foreground">
              {provisionDetails?.[selectedProvision]?.impact}
            </p>
          </div>

          <div className="p-3 md:p-4 bg-primary/5 rounded-lg">
            <div className="flex items-start gap-2">
              <Icon name="Scale" size={18} color="var(--color-primary)" className="flex-shrink-0 mt-0.5" />
              <div>
                <h5 className="text-sm font-medium text-foreground mb-1">
                  Constitutional Basis:
                </h5>
                <p className="text-xs md:text-sm text-muted-foreground">
                  {provisionDetails?.[selectedProvision]?.constitutionalBasis}
                </p>
              </div>
            </div>
          </div>

          <Button
            variant="outline"
            fullWidth
            onClick={handleReset}
            iconName="RotateCcw"
            iconPosition="left"
          >
            Reset Simulation
          </Button>
        </div>
      )}
    </div>
  );
};

export default EmergencyProvisionSimulator;