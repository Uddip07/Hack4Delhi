import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const VerificationResultCard = ({ result, onShare, onExplore }) => {
  const getStatusConfig = (status) => {
    const configs = {
      verified: {
        icon: 'CheckCircle',
        color: 'var(--color-success)',
        bgColor: 'bg-success/10',
        borderColor: 'border-success/20',
        label: 'Verified True'
      },
      false: {
        icon: 'XCircle',
        color: 'var(--color-destructive)',
        bgColor: 'bg-destructive/10',
        borderColor: 'border-destructive/20',
        label: 'False'
      },
      'partially-true': {
        icon: 'AlertTriangle',
        color: 'var(--color-warning)',
        bgColor: 'bg-warning/10',
        borderColor: 'border-warning/20',
        label: 'Partially True'
      },
      'needs-context': {
        icon: 'Info',
        color: 'var(--color-accent)',
        bgColor: 'bg-accent/10',
        borderColor: 'border-accent/20',
        label: 'Needs Context'
      }
    };
    return configs?.[status] || configs?.['needs-context'];
  };

  const statusConfig = getStatusConfig(result?.status);

  return (
    <div className={`bg-card rounded-lg border ${statusConfig?.borderColor} p-6 md:p-8`}>
      <div className={`flex items-center gap-3 ${statusConfig?.bgColor} p-4 rounded-lg mb-6`}>
        <Icon name={statusConfig?.icon} size={24} color={statusConfig?.color} />
        <span className="text-lg font-semibold text-foreground">{statusConfig?.label}</span>
      </div>
      <div className="space-y-6">
        <div>
          <h3 className="text-sm font-medium text-muted-foreground mb-2">Claim Analyzed</h3>
          <p className="text-base text-foreground leading-relaxed">{result?.claim}</p>
        </div>

        <div>
          <h3 className="text-sm font-medium text-muted-foreground mb-3">Verification Summary</h3>
          <p className="text-base text-foreground leading-relaxed">{result?.summary}</p>
        </div>

        <div>
          <h3 className="text-sm font-medium text-muted-foreground mb-3">Constitutional Sources</h3>
          <div className="space-y-3">
            {result?.sources?.map((source, index) => (
              <div key={index} className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                <Icon name="FileText" size={18} color="var(--color-primary)" className="mt-0.5 flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-foreground mb-1">{source?.title}</p>
                  <a
                    href={source?.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-primary hover:underline break-all"
                  >
                    {source?.url}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-border">
          <Button
            variant="outline"
            iconName="Share2"
            iconPosition="left"
            onClick={() => onShare(result)}
            className="flex-1"
          >
            Share Result
          </Button>
          <Button
            variant="default"
            iconName="BookOpen"
            iconPosition="left"
            onClick={() => onExplore(result)}
            className="flex-1"
          >
            Explore Related Topics
          </Button>
        </div>
      </div>
    </div>
  );
};

export default VerificationResultCard;