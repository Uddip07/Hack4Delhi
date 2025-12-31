import React from 'react';
import Icon from '../../../components/AppIcon';

const ProgressDashboard = ({ stats }) => {
  return (
    <div className="bg-gradient-to-br from-primary/5 to-accent/5 border border-border rounded-lg p-4 md:p-6 lg:p-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
          <Icon name="TrendingUp" size={24} color="var(--color-primary)" />
        </div>
        <div>
          <h2 className="text-lg md:text-xl lg:text-2xl font-semibold text-foreground">
            Your Learning Progress
          </h2>
          <p className="text-sm md:text-base text-muted-foreground">
            Track your constitutional literacy journey
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 lg:gap-6">
        <div className="bg-card rounded-lg p-4 md:p-5">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-success/10 rounded-lg flex items-center justify-center">
              <Icon name="CheckCircle" size={20} color="var(--color-success)" />
            </div>
            <span className="text-sm text-muted-foreground">Completed</span>
          </div>
          <p className="text-2xl md:text-3xl font-bold text-foreground mb-1">
            {stats?.completed}
          </p>
          <p className="text-xs md:text-sm text-muted-foreground">modules finished</p>
        </div>

        <div className="bg-card rounded-lg p-4 md:p-5">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-warning/10 rounded-lg flex items-center justify-center">
              <Icon name="Clock" size={20} color="var(--color-warning)" />
            </div>
            <span className="text-sm text-muted-foreground">In Progress</span>
          </div>
          <p className="text-2xl md:text-3xl font-bold text-foreground mb-1">
            {stats?.inProgress}
          </p>
          <p className="text-xs md:text-sm text-muted-foreground">modules ongoing</p>
        </div>

        <div className="bg-card rounded-lg p-4 md:p-5">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
              <Icon name="Award" size={20} color="var(--color-accent)" />
            </div>
            <span className="text-sm text-muted-foreground">Quiz Score</span>
          </div>
          <p className="text-2xl md:text-3xl font-bold text-foreground mb-1">
            {stats?.quizScore}%
          </p>
          <p className="text-xs md:text-sm text-muted-foreground">average accuracy</p>
        </div>

        <div className="bg-card rounded-lg p-4 md:p-5">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
              <Icon name="Flame" size={20} color="var(--color-primary)" />
            </div>
            <span className="text-sm text-muted-foreground">Streak</span>
          </div>
          <p className="text-2xl md:text-3xl font-bold text-foreground mb-1">
            {stats?.streak}
          </p>
          <p className="text-xs md:text-sm text-muted-foreground">days learning</p>
        </div>
      </div>
      <div className="mt-6">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm md:text-base font-medium text-foreground">
            Overall Progress
          </span>
          <span className="text-sm md:text-base font-semibold text-primary">
            {stats?.overallProgress}%
          </span>
        </div>
        <div className="w-full bg-muted rounded-full h-3">
          <div
            className="bg-gradient-to-r from-primary to-accent rounded-full h-3 transition-all duration-500"
            style={{ width: `${stats?.overallProgress}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default ProgressDashboard;