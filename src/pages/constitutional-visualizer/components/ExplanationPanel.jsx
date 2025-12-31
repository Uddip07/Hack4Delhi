import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ExplanationPanel = ({ content, onClose }) => {
  if (!content) return null;

  return (
    <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-card border border-border rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-card border-b border-border p-4 md:p-6 flex items-center justify-between">
          <h2 className="text-lg md:text-xl font-semibold text-foreground">
            {content?.title}
          </h2>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <Icon name="X" size={20} />
          </Button>
        </div>
        
        <div className="p-4 md:p-6 space-y-4 md:space-y-6">
          {content?.sections?.map((section, index) => (
            <div key={index} className="space-y-3">
              <h3 className="text-base md:text-lg font-semibold text-foreground flex items-center gap-2">
                <Icon name={section?.icon} size={20} className="text-primary" />
                {section?.heading}
              </h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                {section?.content}
              </p>
              {section?.points && (
                <ul className="space-y-2 ml-4">
                  {section?.points?.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Icon name="CheckCircle2" size={16} className="flex-shrink-0 mt-0.5 text-success" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              )}
              {section?.reference && (
                <div className="mt-3 p-3 bg-muted rounded-lg">
                  <p className="text-xs text-muted-foreground">
                    <span className="font-medium">Constitutional Reference:</span> {section?.reference}
                  </p>
                </div>
              )}
            </div>
          ))}
          
          {content?.relatedArticles && (
            <div className="pt-4 border-t border-border">
              <h4 className="text-sm font-semibold text-foreground mb-3">Related Articles</h4>
              <div className="flex flex-wrap gap-2">
                {content?.relatedArticles?.map((article, idx) => (
                  <span key={idx} className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">
                    {article}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExplanationPanel;