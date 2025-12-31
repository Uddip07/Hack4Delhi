import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Input from '../../../components/ui/Input';
import Button from '../../../components/ui/Button';

const ClaimSubmissionForm = ({ onSubmit }) => {
  const [claimText, setClaimText] = useState('');
  const [claimUrl, setClaimUrl] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!claimText?.trim() && !claimUrl?.trim()) {
      newErrors.general = 'Please provide either claim text or a URL';
    }
    if (claimUrl && !claimUrl?.match(/^https?:\/\/.+/)) {
      newErrors.url = 'Please enter a valid URL';
    }
    setErrors(newErrors);
    return Object.keys(newErrors)?.length === 0;
  };

  const handleSubmit = (e) => {
    e?.preventDefault();
    if (validateForm()) {
      onSubmit({ claimText, claimUrl });
      setClaimText('');
      setClaimUrl('');
      setErrors({});
    }
  };

  return (
    <div className="bg-card rounded-lg border border-border p-6 md:p-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
          <Icon name="Search" size={20} color="var(--color-primary)" />
        </div>
        <h2 className="text-xl md:text-2xl font-semibold text-foreground">Submit Claim for Verification</h2>
      </div>
      <form onSubmit={handleSubmit} className="space-y-6">
        <Input
          label="Claim Text"
          type="text"
          placeholder="Enter the claim you want to verify (e.g., 'ONOE will reduce election costs by 50%')"
          value={claimText}
          onChange={(e) => setClaimText(e?.target?.value)}
          description="Paste the exact claim as you saw it"
          className="mb-4"
        />

        <div className="flex items-center gap-4 my-4">
          <div className="flex-1 h-px bg-border"></div>
          <span className="text-sm text-muted-foreground">OR</span>
          <div className="flex-1 h-px bg-border"></div>
        </div>

        <Input
          label="Source URL"
          type="url"
          placeholder="https://example.com/article"
          value={claimUrl}
          onChange={(e) => setClaimUrl(e?.target?.value)}
          error={errors?.url}
          description="Provide the URL where you found this claim"
          className="mb-4"
        />

        {errors?.general && (
          <div className="flex items-center gap-2 p-3 bg-destructive/10 border border-destructive/20 rounded-lg">
            <Icon name="AlertCircle" size={18} color="var(--color-destructive)" />
            <p className="text-sm text-destructive">{errors?.general}</p>
          </div>
        )}

        <Button
          type="submit"
          variant="default"
          fullWidth
          iconName="CheckCircle"
          iconPosition="left"
          className="mt-6"
        >
          Verify Claim
        </Button>
      </form>
      <div className="mt-6 p-4 bg-muted/50 rounded-lg">
        <div className="flex items-start gap-3">
          <Icon name="Info" size={18} color="var(--color-primary)" className="mt-0.5 flex-shrink-0" />
          <div className="text-sm text-muted-foreground">
            <p className="font-medium text-foreground mb-1">How it works:</p>
            <ul className="space-y-1 list-disc list-inside">
              <li>Our AI checks claims against constitutional articles and ECI reports</li>
              <li>Verification typically takes 2-5 seconds</li>
              <li>All sources are cited with direct links</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClaimSubmissionForm;