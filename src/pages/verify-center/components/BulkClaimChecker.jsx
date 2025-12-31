import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const BulkClaimChecker = ({ onBulkSubmit }) => {
  const [claims, setClaims] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async () => {
    const claimList = claims?.split('\n')?.filter(claim => claim?.trim())?.map(claim => claim?.trim());

    if (claimList?.length === 0) {
      return;
    }

    setIsProcessing(true);
    await onBulkSubmit(claimList);
    setIsProcessing(false);
    setClaims('');
  };

  const claimCount = claims?.split('\n')?.filter(claim => claim?.trim())?.length;

  return (
    <div className="bg-card rounded-lg border border-border p-6 md:p-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
          <Icon name="List" size={20} color="var(--color-primary)" />
        </div>
        <div className="flex-1">
          <h2 className="text-xl md:text-2xl font-semibold text-foreground">Bulk Claim Checker</h2>
          <p className="text-sm text-muted-foreground">For journalists and researchers</p>
        </div>
      </div>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Enter Claims (One per line)
          </label>
          <textarea
            value={claims}
            onChange={(e) => setClaims(e?.target?.value)}
            placeholder="ONOE will reduce election costs by 50%&#10;Simultaneous elections violate federalism&#10;ONOE was recommended by Law Commission"
            className="w-full h-48 px-4 py-3 bg-background border border-input rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
          />
          <p className="text-xs text-muted-foreground mt-2">
            {claimCount} claim{claimCount !== 1 ? 's' : ''} entered
          </p>
        </div>

        <div className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg">
          <Icon name="Info" size={18} color="var(--color-primary)" className="mt-0.5 flex-shrink-0" />
          <div className="text-sm text-muted-foreground">
            <p className="font-medium text-foreground mb-1">Bulk verification features:</p>
            <ul className="space-y-1 list-disc list-inside">
              <li>Process up to 50 claims at once</li>
              <li>Download results as CSV or PDF</li>
              <li>Priority processing for verified journalists</li>
            </ul>
          </div>
        </div>

        <Button
          variant="default"
          fullWidth
          iconName="CheckCircle"
          iconPosition="left"
          onClick={handleSubmit}
          disabled={claimCount === 0 || isProcessing}
          loading={isProcessing}
        >
          {isProcessing ? 'Processing Claims...' : `Verify ${claimCount} Claim${claimCount !== 1 ? 's' : ''}`}
        </Button>
      </div>
    </div>
  );
};

export default BulkClaimChecker;