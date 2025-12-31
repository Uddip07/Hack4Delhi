import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const InteractiveQuizCard = ({ quiz }) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);

  const handleAnswerSelect = (optionIndex) => {
    if (!showResult) {
      setSelectedAnswer(optionIndex);
    }
  };

  const handleSubmit = () => {
    if (selectedAnswer !== null) {
      setShowResult(true);
    }
  };

  const handleReset = () => {
    setSelectedAnswer(null);
    setShowResult(false);
  };

  const isCorrect = selectedAnswer === quiz?.correctAnswer;

  return (
    <div className="bg-card border border-border rounded-lg p-4 md:p-5 lg:p-6">
      <div className="flex items-start gap-3 mb-4">
        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
          <Icon name="HelpCircle" size={20} color="var(--color-primary)" />
        </div>
        <div className="flex-grow">
          <h3 className="text-base md:text-lg font-semibold text-foreground mb-2">
            {quiz?.question}
          </h3>
          <p className="text-xs md:text-sm text-muted-foreground">
            Select the correct answer
          </p>
        </div>
      </div>
      <div className="space-y-3 mb-4">
        {quiz?.options?.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswerSelect(index)}
            disabled={showResult}
            className={`w-full text-left p-3 md:p-4 rounded-lg border-2 transition-all duration-300 ${
              selectedAnswer === index
                ? showResult
                  ? isCorrect
                    ? 'border-success bg-success/10' :'border-error bg-error/10' :'border-primary bg-primary/5' :'border-border hover:border-muted-foreground'
            } ${showResult && index === quiz?.correctAnswer ? 'border-success bg-success/10' : ''}`}
          >
            <div className="flex items-center gap-3">
              <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                selectedAnswer === index
                  ? showResult
                    ? isCorrect
                      ? 'border-success bg-success' :'border-error bg-error' :'border-primary bg-primary' :'border-border'
              } ${showResult && index === quiz?.correctAnswer ? 'border-success bg-success' : ''}`}>
                {selectedAnswer === index && (
                  <Icon 
                    name={showResult ? (isCorrect ? "Check" : "X") : "Check"} 
                    size={14} 
                    color="white" 
                  />
                )}
                {showResult && index === quiz?.correctAnswer && selectedAnswer !== index && (
                  <Icon name="Check" size={14} color="white" />
                )}
              </div>
              <span className="text-sm md:text-base text-foreground">{option}</span>
            </div>
          </button>
        ))}
      </div>
      {showResult && (
        <div className={`p-4 rounded-lg mb-4 ${isCorrect ? 'bg-success/10' : 'bg-error/10'}`}>
          <div className="flex items-start gap-3">
            <Icon 
              name={isCorrect ? "CheckCircle" : "XCircle"} 
              size={20} 
              color={isCorrect ? "var(--color-success)" : "var(--color-error)"} 
            />
            <div>
              <p className={`text-sm md:text-base font-medium mb-1 ${isCorrect ? 'text-success' : 'text-error'}`}>
                {isCorrect ? 'Correct!' : 'Incorrect'}
              </p>
              <p className="text-xs md:text-sm text-muted-foreground">
                {quiz?.explanation}
              </p>
            </div>
          </div>
        </div>
      )}
      <div className="flex gap-3">
        {!showResult ? (
          <Button
            variant="default"
            fullWidth
            onClick={handleSubmit}
            disabled={selectedAnswer === null}
            iconName="Send"
            iconPosition="right"
          >
            Submit Answer
          </Button>
        ) : (
          <Button
            variant="outline"
            fullWidth
            onClick={handleReset}
            iconName="RotateCcw"
            iconPosition="left"
          >
            Try Again
          </Button>
        )}
      </div>
    </div>
  );
};

export default InteractiveQuizCard;