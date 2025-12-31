import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const DownloadableResourceCard = ({ resource }) => {
  const handleDownload = () => {
    console.log('Downloading:', resource?.title);
  };

  const formatFileSize = (bytes) => {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024)?.toFixed(1) + ' KB';
    return (bytes / (1024 * 1024))?.toFixed(1) + ' MB';
  };

  const getFileIcon = (type) => {
    const icons = {
      pdf: 'FileText',
      doc: 'FileText',
      ppt: 'Presentation',
      video: 'Video'
    };
    return icons?.[type] || 'File';
  };

  return (
    <div className="bg-card border border-border rounded-lg p-4 md:p-5 hover:shadow-md transition-all duration-300">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 md:w-14 md:h-14 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
          <Icon name={getFileIcon(resource?.type)} size={24} color="var(--color-accent)" />
        </div>

        <div className="flex-grow min-w-0">
          <h4 className="text-sm md:text-base font-semibold text-foreground mb-1 line-clamp-2">
            {resource?.title}
          </h4>
          <div className="flex items-center gap-3 mb-3">
            <span className="text-xs text-muted-foreground uppercase">
              {resource?.type}
            </span>
            <span className="text-xs text-muted-foreground">
              {formatFileSize(resource?.size)}
            </span>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleDownload}
            iconName="Download"
            iconPosition="left"
          >
            Download
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DownloadableResourceCard;