import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const EdgeCaseAnalysis = () => {
  const [selectedCase, setSelectedCase] = useState(null);

  const edgeCases = [
    {
      id: 1,
      title: 'Mid-Term State Assembly Dissolution',
      icon: 'AlertCircle',
      scenario: 'A state assembly is dissolved 2 years before the scheduled ONOE cycle due to constitutional machinery failure.',
      constitutionalProvision: 'Article 356 (President\'s Rule)',
      currentSystem: 'Fresh elections held within 6 months independently',
      onoeChallenge: 'Maintaining synchronized election cycle while addressing immediate governance needs',
      proposedSolution: [
        'Temporary President\'s Rule until next ONOE cycle',
        'Constitutional amendment for extended President\'s Rule in ONOE context',
        'Special provision for by-elections with limited term',
        'Hung assembly provisions with coalition government formation'
      ],
      legalComplexity: 'High',
      implementationFeasibility: 'Requires constitutional amendment'
    },
    {
      id: 2,
      title: 'Hung Parliament Scenario',
      icon: 'Users',
      scenario: 'No party or coalition achieves majority in Lok Sabha elections under ONOE system.',
      constitutionalProvision: 'Article 75 (Council of Ministers)',
      currentSystem: 'President invites largest party/coalition to form government',
      onoeChallenge: 'Simultaneous hung assemblies in multiple states complicating governance',
      proposedSolution: [
        'Enhanced coalition formation protocols',
        'Time-bound government formation process',
        'Confidence vote within specified period',
        'Re-election provisions if government formation fails'
      ],
      legalComplexity: 'Medium',
      implementationFeasibility: 'Manageable with procedural amendments'
    },
    {
      id: 3,
      title: 'Natural Disaster During Elections',
      icon: 'CloudRain',
      scenario: 'Major natural disaster affects multiple states during synchronized ONOE elections.',
      constitutionalProvision: 'Article 324 (ECI Powers)',
      currentSystem: 'ECI postpones elections in affected areas independently',
      onoeChallenge: 'Maintaining national synchronization while addressing regional emergencies',
      proposedSolution: [
        'Phased polling with extended timeline',
        'Emergency re-polling provisions',
        'Postal ballot expansion for displaced voters',
        'Special provisions for disaster-affected constituencies'
      ],
      legalComplexity: 'Medium',
      implementationFeasibility: 'Feasible with ECI operational guidelines'
    },
    {
      id: 4,
      title: 'Defection Leading to Government Fall',
      icon: 'UserX',
      scenario: 'Mass defection causes government collapse 3 years into ONOE cycle.',
      constitutionalProvision: 'Tenth Schedule (Anti-Defection Law)',
      currentSystem: 'Fresh elections called for affected legislature',
      onoeChallenge: 'Preventing mid-cycle elections while ensuring democratic accountability',
      proposedSolution: [
        'Strengthened anti-defection provisions',
        'Constructive vote of no confidence mechanism',
        'Mandatory coalition agreements with legal binding',
        'Limited-term caretaker government until next ONOE'
      ],
      legalComplexity: 'High',
      implementationFeasibility: 'Requires constitutional and legal reforms'
    },
    {
      id: 5,
      title: 'New State Formation',
      icon: 'Map',
      scenario: 'Parliament approves creation of new state from existing state(s) mid-ONOE cycle.',
      constitutionalProvision: 'Article 3 (Formation of New States)',
      currentSystem: 'Elections held for new state assembly independently',
      onoeChallenge: 'Integrating new state into synchronized election cycle',
      proposedSolution: [
        'Temporary nominated assembly until next ONOE',
        'Special provision for new state elections',
        'Phased integration into ONOE cycle',
        'Constitutional amendment for state formation timing'
      ],
      legalComplexity: 'High',
      implementationFeasibility: 'Complex, requires multiple amendments'
    },
    {
      id: 6,
      title: 'Supreme Court Invalidates Election',
      icon: 'Gavel',
      scenario: 'Supreme Court invalidates election results in multiple constituencies post-ONOE.',
      constitutionalProvision: 'Article 329 (Election Disputes)',
      currentSystem: 'By-elections held in affected constituencies',
      onoeChallenge: 'Maintaining government stability with multiple by-elections',
      proposedSolution: [
        'Expedited judicial review process',
        'Consolidated by-election schedule',
        'Temporary seat allocation mechanisms',
        'Enhanced election dispute resolution framework'
      ],
      legalComplexity: 'Medium',
      implementationFeasibility: 'Feasible with judicial cooperation'
    }
  ];

  return (
    <div className="bg-card border border-border rounded-lg p-4 md:p-6">
      <div className="flex items-center gap-3 mb-4 md:mb-6">
        <div className="w-10 h-10 md:w-12 md:h-12 bg-warning/10 rounded-lg flex items-center justify-center flex-shrink-0">
          <Icon name="AlertTriangle" size={20} color="var(--color-warning)" />
        </div>
        <div>
          <h3 className="text-lg md:text-xl font-semibold text-foreground">
            Edge Case Analysis
          </h3>
          <p className="text-xs md:text-sm text-muted-foreground">
            Constitutional challenges in ONOE implementation
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 mb-4 md:mb-6">
        {edgeCases?.map((edgeCase) => (
          <button
            key={edgeCase?.id}
            onClick={() => setSelectedCase(edgeCase)}
            className={`p-3 md:p-4 rounded-lg border transition-all duration-300 text-left ${
              selectedCase?.id === edgeCase?.id
                ? 'border-primary bg-primary/5' :'border-border bg-card hover:border-primary/50'
            }`}
          >
            <div className="flex items-start gap-2 md:gap-3">
              <Icon
                name={edgeCase?.icon}
                size={18}
                color={selectedCase?.id === edgeCase?.id ? 'var(--color-primary)' : 'var(--color-muted-foreground)'}
                className="flex-shrink-0 mt-0.5"
              />
              <div>
                <h4 className="text-sm md:text-base font-medium text-foreground mb-1">
                  {edgeCase?.title}
                </h4>
                <p className="text-xs text-muted-foreground line-clamp-2">
                  {edgeCase?.scenario}
                </p>
              </div>
            </div>
          </button>
        ))}
      </div>
      {selectedCase && (
        <div className="space-y-4 md:space-y-6 p-4 md:p-6 bg-muted/30 rounded-lg">
          <div className="flex items-start gap-3">
            <Icon name={selectedCase?.icon} size={24} color="var(--color-primary)" className="flex-shrink-0" />
            <div>
              <h4 className="text-base md:text-lg font-semibold text-foreground mb-2">
                {selectedCase?.title}
              </h4>
              <p className="text-sm md:text-base text-muted-foreground">
                {selectedCase?.scenario}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
            <div className="p-3 md:p-4 bg-card rounded-lg">
              <h5 className="text-xs md:text-sm font-medium text-foreground mb-2">
                Constitutional Provision
              </h5>
              <p className="text-xs md:text-sm text-muted-foreground">
                {selectedCase?.constitutionalProvision}
              </p>
            </div>

            <div className="p-3 md:p-4 bg-card rounded-lg">
              <h5 className="text-xs md:text-sm font-medium text-foreground mb-2">
                Current System Approach
              </h5>
              <p className="text-xs md:text-sm text-muted-foreground">
                {selectedCase?.currentSystem}
              </p>
            </div>
          </div>

          <div className="p-3 md:p-4 bg-warning/10 rounded-lg">
            <h5 className="text-sm md:text-base font-medium text-foreground mb-2">
              ONOE Challenge
            </h5>
            <p className="text-xs md:text-sm text-muted-foreground">
              {selectedCase?.onoeChallenge}
            </p>
          </div>

          <div className="space-y-2 md:space-y-3">
            <h5 className="text-sm md:text-base font-medium text-foreground">
              Proposed Solutions
            </h5>
            {selectedCase?.proposedSolution?.map((solution, index) => (
              <div key={index} className="flex items-start gap-2 md:gap-3 p-2 md:p-3 bg-card rounded-lg">
                <div className="w-5 h-5 md:w-6 md:h-6 bg-success/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="Check" size={12} color="var(--color-success)" />
                </div>
                <p className="text-xs md:text-sm text-foreground">
                  {solution}
                </p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
            <div className="p-3 md:p-4 bg-card rounded-lg">
              <h5 className="text-xs md:text-sm font-medium text-foreground mb-2">
                Legal Complexity
              </h5>
              <span className={`text-xs md:text-sm px-2 py-1 rounded-full ${
                selectedCase?.legalComplexity === 'High' ?'bg-error/10 text-error' :'bg-warning/10 text-warning'
              }`}>
                {selectedCase?.legalComplexity}
              </span>
            </div>

            <div className="p-3 md:p-4 bg-card rounded-lg">
              <h5 className="text-xs md:text-sm font-medium text-foreground mb-2">
                Implementation Feasibility
              </h5>
              <p className="text-xs md:text-sm text-muted-foreground">
                {selectedCase?.implementationFeasibility}
              </p>
            </div>
          </div>

          <Button
            variant="outline"
            fullWidth
            onClick={() => setSelectedCase(null)}
            iconName="X"
            iconPosition="left"
          >
            Close Analysis
          </Button>
        </div>
      )}
    </div>
  );
};

export default EdgeCaseAnalysis;