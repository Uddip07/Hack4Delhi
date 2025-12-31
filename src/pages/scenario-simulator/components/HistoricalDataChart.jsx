import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';
import Icon from '../../../components/AppIcon';
import Select from '../../../components/ui/Select';

const HistoricalDataChart = () => {
  const [chartType, setChartType] = useState('voter-turnout');

  const chartOptions = [
    { value: 'voter-turnout', label: 'Voter Turnout (1952-1967)' },
    { value: 'election-cost', label: 'Election Expenditure Trends' },
    { value: 'seats-contested', label: 'Seats Contested Analysis' }
  ];

  const voterTurnoutData = [
    { year: '1952', turnout: 45.7, seats: 489 },
    { year: '1957', turnout: 47.7, seats: 494 },
    { year: '1962', turnout: 55.4, seats: 494 },
    { year: '1967', turnout: 61.3, seats: 520 }
  ];

  const electionCostData = [
    { year: '1952', cost: 10.5, inflation: 100 },
    { year: '1957', cost: 15.8, inflation: 112 },
    { year: '1962', cost: 22.3, inflation: 128 },
    { year: '1967', cost: 35.6, inflation: 145 }
  ];

  const seatsContestedData = [
    { year: '1952', contested: 489, uncontested: 37 },
    { year: '1957', contested: 494, uncontested: 31 },
    { year: '1962', contested: 494, uncontested: 28 },
    { year: '1967', contested: 520, uncontested: 22 }
  ];

  const getChartData = () => {
    switch (chartType) {
      case 'voter-turnout':
        return voterTurnoutData;
      case 'election-cost':
        return electionCostData;
      case 'seats-contested':
        return seatsContestedData;
      default:
        return voterTurnoutData;
    }
  };

  const renderChart = () => {
    const data = getChartData();

    if (chartType === 'voter-turnout') {
      return (
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
            <XAxis dataKey="year" stroke="var(--color-muted-foreground)" />
            <YAxis stroke="var(--color-muted-foreground)" />
            <Tooltip
              contentStyle={{
                backgroundColor: 'var(--color-card)',
                border: '1px solid var(--color-border)',
                borderRadius: '0.5rem'
              }}
            />
            <Legend />
            <Line
              type="monotone"
              dataKey="turnout"
              stroke="var(--color-primary)"
              strokeWidth={2}
              name="Voter Turnout (%)"
            />
            <Line
              type="monotone"
              dataKey="seats"
              stroke="var(--color-accent)"
              strokeWidth={2}
              name="Total Seats"
            />
          </LineChart>
        </ResponsiveContainer>
      );
    }

    if (chartType === 'election-cost') {
      return (
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
            <XAxis dataKey="year" stroke="var(--color-muted-foreground)" />
            <YAxis stroke="var(--color-muted-foreground)" />
            <Tooltip
              contentStyle={{
                backgroundColor: 'var(--color-card)',
                border: '1px solid var(--color-border)',
                borderRadius: '0.5rem'
              }}
            />
            <Legend />
            <Bar dataKey="cost" fill="var(--color-primary)" name="Cost (Crores ₹)" />
            <Bar dataKey="inflation" fill="var(--color-accent)" name="Inflation Index" />
          </BarChart>
        </ResponsiveContainer>
      );
    }

    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
          <XAxis dataKey="year" stroke="var(--color-muted-foreground)" />
          <YAxis stroke="var(--color-muted-foreground)" />
          <Tooltip
            contentStyle={{
              backgroundColor: 'var(--color-card)',
              border: '1px solid var(--color-border)',
              borderRadius: '0.5rem'
            }}
          />
          <Legend />
          <Bar dataKey="contested" fill="var(--color-success)" name="Contested Seats" />
          <Bar dataKey="uncontested" fill="var(--color-muted)" name="Uncontested Seats" />
        </BarChart>
      </ResponsiveContainer>
    );
  };

  return (
    <div className="bg-card border border-border rounded-lg p-4 md:p-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 md:gap-4 mb-4 md:mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
            <Icon name="BarChart3" size={20} color="var(--color-primary)" />
          </div>
          <div>
            <h3 className="text-lg md:text-xl font-semibold text-foreground">
              Historical Election Data
            </h3>
            <p className="text-xs md:text-sm text-muted-foreground">
              1952-1967 Analysis
            </p>
          </div>
        </div>

        <div className="w-full md:w-64">
          <Select
            options={chartOptions}
            value={chartType}
            onChange={setChartType}
            placeholder="Select data type"
          />
        </div>
      </div>

      <div className="w-full h-64 md:h-80" aria-label="Historical Election Data Visualization">
        {renderChart()}
      </div>

      <div className="mt-4 md:mt-6 p-3 md:p-4 bg-muted/50 rounded-lg">
        <div className="flex items-start gap-2">
          <Icon name="Info" size={18} color="var(--color-primary)" className="flex-shrink-0 mt-0.5" />
          <p className="text-xs md:text-sm text-muted-foreground">
            Data sourced from Election Commission of India historical records. All figures are adjusted for constituency changes and represent national-level statistics for Lok Sabha elections.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HistoricalDataChart;