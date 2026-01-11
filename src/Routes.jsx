import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
import NotFound from "pages/NotFound";
import SourcesAndTransparency from './pages/sources-and-transparency';
import ConstitutionalVisualizer from './pages/constitutional-visualizer';
import ScenarioSimulator from './pages/scenario-simulator';
import VerifyCenter from './pages/verify-center';
import LearnHub from './pages/learn-hub';
import Homepage from './pages/homepage';

const Routes = () => {
  return (
      <ErrorBoundary>
      <ScrollToTop />
      <RouterRoutes>
        {/* Define your route here */}
        <Route path="/" element={<Homepage />} />
        <Route path="/sources-and-transparency" element={<SourcesAndTransparency />} />
        <Route path="/constitutional-visualizer" element={<ConstitutionalVisualizer />} />
        <Route path="/scenario-simulator" element={<ScenarioSimulator />} />
        <Route path="/verify-center" element={<VerifyCenter />} />
        <Route path="/learn-hub" element={<LearnHub />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      </ErrorBoundary>
  );
};

export default Routes;
