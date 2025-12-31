import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/ui/Header';
import Footer from '../../components/ui/Footer';
import Breadcrumb from '../../components/ui/Breadcrumb';
import HeroSection from './components/HeroSection';
import TrendingTopics from './components/TrendingTopics';
import LearningPaths from './components/LearningPaths';
import TrustIndicators from './components/TrustIndicators';
import QuickAccessNav from './components/QuickAccessNav';

const Homepage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const breadcrumbItems = [
    { label: 'Home', path: '/homepage' }
  ];

  const handleNavigation = (path) => {
    navigate(path);
  };

  const handleExploreClick = () => {
    navigate('/learn-hub');
  };

  const handleSearchClick = () => {
    navigate('/verify-center');
  };

  const handleTopicClick = (path) => {
    navigate(path);
  };

  const handlePathSelect = (path) => {
    navigate(path);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1 pt-16">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-4 md:py-6">
          <Breadcrumb items={breadcrumbItems} />
        </div>

        <HeroSection 
          onExploreClick={handleExploreClick}
          onSearchClick={handleSearchClick}
        />

        <TrendingTopics onTopicClick={handleTopicClick} />

        <LearningPaths onPathSelect={handlePathSelect} />

        <TrustIndicators />

        <QuickAccessNav onNavigate={handleNavigation} />
      </main>

      <Footer />
    </div>
  );
};

export default Homepage;