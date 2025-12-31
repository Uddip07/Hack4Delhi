import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ShareableFactCheckCard = ({ factCheck }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    const shareUrl = `https://onoeclarity.in/verify/${factCheck?.id}`;
    navigator.clipboard?.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShare = (platform) => {
    const shareUrl = `https://onoeclarity.in/verify/${factCheck?.id}`;
    const shareText = `Fact Check: ${factCheck?.claim} - ${factCheck?.verdict}`;
    
    const urls = {
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
      whatsapp: `https://wa.me/?text=${encodeURIComponent(shareText + ' ' + shareUrl)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`
    };

    window.open(urls?.[platform], '_blank', 'width=600,height=400');
  };

  const getVerdictConfig = (verdict) => {
    const configs = {
      'True': { color: 'var(--color-success)', bgColor: 'bg-success/10', icon: 'CheckCircle' },
      'False': { color: 'var(--color-destructive)', bgColor: 'bg-destructive/10', icon: 'XCircle' },
      'Partially True': { color: 'var(--color-warning)', bgColor: 'bg-warning/10', icon: 'AlertTriangle' },
      'Needs Context': { color: 'var(--color-accent)', bgColor: 'bg-accent/10', icon: 'Info' }
    };
    return configs?.[verdict] || configs?.['Needs Context'];
  };

  const verdictConfig = getVerdictConfig(factCheck?.verdict);

  return (
    <div className="bg-card rounded-lg border border-border overflow-hidden">
      <div className={`${verdictConfig?.bgColor} p-4 md:p-6 border-b border-border`}>
        <div className="flex items-center gap-3 mb-3">
          <Icon name={verdictConfig?.icon} size={24} color={verdictConfig?.color} />
          <span className="text-lg font-semibold text-foreground">{factCheck?.verdict}</span>
        </div>
        <p className="text-sm md:text-base text-foreground leading-relaxed line-clamp-3">
          {factCheck?.claim}
        </p>
      </div>
      <div className="p-4 md:p-6 space-y-4">
        <div>
          <h4 className="text-sm font-medium text-muted-foreground mb-2">Quick Summary</h4>
          <p className="text-sm text-foreground leading-relaxed line-clamp-3">
            {factCheck?.summary}
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <Icon name="Calendar" size={14} />
          <span>Verified on {factCheck?.verifiedDate}</span>
        </div>

        <div className="pt-4 border-t border-border">
          <p className="text-xs text-muted-foreground mb-3">Share this fact-check:</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-3">
            <Button
              variant="outline"
              size="sm"
              iconName="Twitter"
              iconPosition="left"
              onClick={() => handleShare('twitter')}
            >
              Twitter
            </Button>
            <Button
              variant="outline"
              size="sm"
              iconName="Facebook"
              iconPosition="left"
              onClick={() => handleShare('facebook')}
            >
              Facebook
            </Button>
            <Button
              variant="outline"
              size="sm"
              iconName="MessageCircle"
              iconPosition="left"
              onClick={() => handleShare('whatsapp')}
            >
              WhatsApp
            </Button>
            <Button
              variant="outline"
              size="sm"
              iconName="Linkedin"
              iconPosition="left"
              onClick={() => handleShare('linkedin')}
            >
              LinkedIn
            </Button>
          </div>
          <Button
            variant="secondary"
            size="sm"
            fullWidth
            iconName={copied ? 'Check' : 'Copy'}
            iconPosition="left"
            onClick={handleCopyLink}
          >
            {copied ? 'Link Copied!' : 'Copy Link'}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ShareableFactCheckCard;