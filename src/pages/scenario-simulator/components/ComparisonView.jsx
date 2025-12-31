import React from 'react';
import Icon from '../../../components/AppIcon';

const ComparisonView = ({ currentSystem, onoeSystem }) => {
  const comparisonMetrics = [
    {
      label: 'Election Frequency',
      current: currentSystem?.frequency,
      onoe: onoeSystem?.frequency,
      icon: 'Calendar'
    },
    {
      label: 'Estimated Cost',
      current: currentSystem?.cost,
      onoe: onoeSystem?.cost,
      icon: 'IndianRupee'
    },
    {
      label: 'Campaign Duration',
      current: currentSystem?.campaignDuration,
      onoe: onoeSystem?.campaignDuration,
      icon: 'Clock'
    },
    {
      label: 'Administrative Burden',
      current: currentSystem?.adminBurden,
      onoe: onoeSystem?.adminBurden,
      icon: 'FileText'
    },
    {
      label: 'Voter Turnout Impact',
      current: currentSystem?.turnout,
      onoe: onoeSystem?.turnout,
      icon: 'Users'
    },
    {
      label: 'Constitutional Amendments',
      current: currentSystem?.amendments,
      onoe: onoeSystem?.amendments,
      icon: 'Scale'
    }
  ];

  return (
    <div className="bg-card border border-border rounded-lg p-4 md:p-6">
      <h3 className="text-lg md:text-xl font-semibold text-foreground mb-4 md:mb-6">
        Current System vs ONOE Comparison
      </h3>
      <div className="space-y-4 md:space-y-6">
        {comparisonMetrics?.map((metric, index) => (
          <div key={index} className="border-b border-border pb-4 md:pb-6 last:border-0">
            <div className="flex items-center gap-2 mb-3">
              <Icon name={metric?.icon} size={18} color="var(--color-primary)" />
              <h4 className="text-sm md:text-base font-medium text-foreground">
                {metric?.label}
              </h4>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
              <div className="bg-muted/50 rounded-lg p-3 md:p-4">
                <p className="text-xs text-muted-foreground mb-1">Current System</p>
                <p className="text-sm md:text-base font-medium text-foreground">
                  {metric?.current}
                </p>
              </div>

              <div className="bg-primary/5 rounded-lg p-3 md:p-4">
                <p className="text-xs text-muted-foreground mb-1">ONOE System</p>
                <p className="text-sm md:text-base font-medium text-primary">
                  {metric?.onoe}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 md:mt-6 p-3 md:p-4 bg-accent/10 rounded-lg">
        <div className="flex items-start gap-2">
          <Icon name="Info" size={18} color="var(--color-accent)" className="flex-shrink-0 mt-0.5" />
          <p className="text-xs md:text-sm text-muted-foreground">
            All comparisons are based on constitutional provisions, ECI reports, and Law Commission recommendations. Data represents estimated scenarios and may vary based on implementation details.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ComparisonView;