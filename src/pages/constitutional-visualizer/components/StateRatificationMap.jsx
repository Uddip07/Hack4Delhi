import React from 'react';
import Icon from '../../../components/AppIcon';

const StateRatificationMap = ({ states, onStateClick }) => {
  const getStateStatus = (status) => {
    switch (status) {
      case 'ratified':
        return 'bg-success/20 border-success text-success';
      case 'pending':
        return 'bg-warning/20 border-warning text-warning';
      case 'rejected':
        return 'bg-destructive/20 border-destructive text-destructive';
      default:
        return 'bg-muted border-border text-muted-foreground';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'ratified':
        return 'CheckCircle2';
      case 'pending':
        return 'Clock';
      case 'rejected':
        return 'XCircle';
      default:
        return 'Circle';
    }
  };

  const groupedStates = {
    north: states?.filter(s => s?.region === 'north'),
    south: states?.filter(s => s?.region === 'south'),
    east: states?.filter(s => s?.region === 'east'),
    west: states?.filter(s => s?.region === 'west'),
    central: states?.filter(s => s?.region === 'central'),
    northeast: states?.filter(s => s?.region === 'northeast')
  };

  return (
    <div className="space-y-6 md:space-y-8">
      {Object.entries(groupedStates)?.map(([region, regionStates]) => (
        <div key={region} className="space-y-3 md:space-y-4">
          <h3 className="text-base md:text-lg font-semibold text-foreground capitalize">
            {region} India
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
            {regionStates?.map((state) => (
              <button
                key={state?.id}
                onClick={() => onStateClick(state)}
                className={`p-4 rounded-lg border-2 transition-all duration-300 hover:shadow-md ${getStateStatus(state?.status)}`}
                aria-label={`${state?.name} - ${state?.status}`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm md:text-base font-medium">{state?.name}</span>
                  <Icon name={getStatusIcon(state?.status)} size={18} />
                </div>
                <div className="text-xs opacity-80">
                  <p>Population: {state?.population}</p>
                  {state?.ratificationDate && (
                    <p className="mt-1">Date: {state?.ratificationDate}</p>
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default StateRatificationMap;