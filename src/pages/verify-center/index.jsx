import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Footer from '../../components/ui/Footer';
import Breadcrumb from '../../components/ui/Breadcrumb';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import ClaimSubmissionForm from './components/ClaimSubmissionForm';
import VerificationResultCard from './components/VerificationResultCard';
import TrendingMisinformationCard from './components/TrendingMisinformationCard';
import SourceCredibilityRating from './components/SourceCredibilityRating';
import ShareableFactCheckCard from './components/ShareableFactCheckCard';
import BulkClaimChecker from './components/BulkClaimChecker';

const VerifyCenter = () => {
  const [activeTab, setActiveTab] = useState('verify');
  const [verificationResult, setVerificationResult] = useState(null);
  const [isVerifying, setIsVerifying] = useState(false);

  const breadcrumbItems = [
    { label: 'Home', path: '/homepage' },
    { label: 'Verify Center' }
  ];

  const trendingMisinformation = [
    {
      id: 1,
      claim: "ONOE will reduce election costs by 50% according to Election Commission",
      context: "This claim misrepresents ECI's position. While cost savings are expected, no official 50% figure has been provided by the Election Commission of India.",
      severity: 'high',
      shareCount: 12453,
      timeAgo: '2 hours ago'
    },
    {
      id: 2,
      claim: "Simultaneous elections violate the basic structure of the Constitution",
      context: "This is a legal opinion, not a verified fact. The Supreme Court has not ruled on this specific aspect of ONOE.",
      severity: 'medium',
      shareCount: 8921,
      timeAgo: '5 hours ago'
    },
    {
      id: 3,
      claim: "ONOE was successfully implemented in India from 1952 to 1967",
      context: "Partially true. While elections were held simultaneously during this period, it was not by design but circumstance. The system evolved differently.",
      severity: 'medium',
      shareCount: 6734,
      timeAgo: '8 hours ago'
    },
    {
      id: 4,
      claim: "All political parties support One Nation One Election",
      context: "False. Multiple political parties have expressed concerns and opposition to ONOE in parliamentary committee hearings.",
      severity: 'high',
      shareCount: 15678,
      timeAgo: '12 hours ago'
    }
  ];

  const credibleSources = [
    {
      id: 1,
      name: "Election Commission of India",
      type: "Constitutional Authority",
      rating: 5.0,
      factChecks: 1247,
      accuracyRate: 99.8
    },
    {
      id: 2,
      name: "Law Commission of India",
      type: "Legal Advisory Body",
      rating: 4.9,
      factChecks: 892,
      accuracyRate: 99.5
    },
    {
      id: 3,
      name: "PRS Legislative Research",
      type: "Independent Research",
      rating: 4.8,
      factChecks: 1534,
      accuracyRate: 98.9
    },
    {
      id: 4,
      name: "Supreme Court of India",
      type: "Judicial Authority",
      rating: 5.0,
      factChecks: 678,
      accuracyRate: 100
    }
  ];

  const recentFactChecks = [
    {
      id: 1,
      claim: "ONOE requires constitutional amendments to Articles 83, 85, 172, and 174",
      verdict: "True",
      summary: "The Law Commission's 170th Report (1999) and subsequent analysis confirm that implementing ONOE would require amendments to these specific constitutional articles governing the tenure of Parliament and State Assemblies.",
      verifiedDate: "December 28, 2025"
    },
    {
      id: 2,
      claim: "ONOE will eliminate the need for by-elections completely",
      verdict: "False",
      summary: "By-elections would still be necessary for casual vacancies. The proposal includes provisions for handling mid-term vacancies through mechanisms like appointing nominated members or holding limited by-elections.",
      verifiedDate: "December 27, 2025"
    },
    {
      id: 3,
      claim: "Germany and South Africa successfully conduct simultaneous elections",
      verdict: "Partially True",
      summary: "While these countries have fixed election cycles, their federal structures and constitutional frameworks differ significantly from India's. Direct comparisons require contextual understanding of each system.",
      verifiedDate: "December 26, 2025"
    }
  ];

  const handleClaimSubmit = async (claimData) => {
    setIsVerifying(true);
    
    // Simulate AI verification process
    await new Promise(resolve => setTimeout(resolve, 2500));
    
    const mockResult = {
      claim: claimData?.claimText || "Claim from URL: " + claimData?.claimUrl,
      status: 'partially-true',
      summary: "This claim contains elements of truth but requires important context. While the Law Commission has recommended ONOE in multiple reports (170th Report in 1999 and 255th Report in 2015), the implementation timeline and specific mechanisms are still under parliamentary review. The claim oversimplifies a complex constitutional process that requires extensive amendments and stakeholder consensus.",
      sources: [
        {
          title: "Law Commission of India - 170th Report (1999)",
          url: "https://lawcommissionofindia.nic.in/reports/170th-report.pdf"
        },
        {
          title: "Constitution of India - Article 83 (Duration of Houses of Parliament)",
          url: "https://legislative.gov.in/constitution-of-india"
        },
        {
          title: "Election Commission of India - ONOE Feasibility Study",
          url: "https://eci.gov.in/onoe-study-2023"
        }
      ]
    };
    
    setVerificationResult(mockResult);
    setIsVerifying(false);
    setActiveTab('result');
  };

  const handleShare = (result) => {
    console.log('Sharing result:', result);
    alert('Share functionality would open social media sharing options');
  };

  const handleExplore = (result) => {
    console.log('Exploring related topics for:', result);
    window.location.href = '/learn-hub';
  };

  const handleVerifyTrending = (claim) => {
    handleClaimSubmit({ claimText: claim });
  };

  const handleBulkSubmit = async (claimList) => {
    console.log('Processing bulk claims:', claimList);
    await new Promise(resolve => setTimeout(resolve, 3000));
    alert(`Successfully verified ${claimList?.length} claims. Results would be available for download.`);
  };

  const tabs = [
    { id: 'verify', label: 'Verify Claim', icon: 'Search' },
    { id: 'trending', label: 'Trending Misinformation', icon: 'TrendingUp' },
    { id: 'sources', label: 'Source Ratings', icon: 'Shield' },
    { id: 'recent', label: 'Recent Fact-Checks', icon: 'Clock' },
    { id: 'bulk', label: 'Bulk Checker', icon: 'List' }
  ];

  return (
    <>
      <Helmet>
        <title>Verify Center - ONOE Clarity | Constitutional Fact-Checking</title>
        <meta name="description" content="AI-powered fact-checking system for ONOE claims. Verify constitutional claims against authentic sources with real-time verification and source attribution." />
      </Helmet>
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        
        <main className="flex-1 pt-20 pb-12">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="mb-6 md:mb-8">
              <Breadcrumb items={breadcrumbItems} />
            </div>

            <div className="mb-8 md:mb-12">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Icon name="ShieldCheck" size={28} color="var(--color-primary)" />
                </div>
                <div>
                  <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">Verify Center</h1>
                  <p className="text-sm md:text-base text-muted-foreground mt-1">
                    Constitutional fact-checking powered by verified sources
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 md:p-6 bg-primary/5 border border-primary/20 rounded-lg">
                <Icon name="Info" size={20} color="var(--color-primary)" className="mt-0.5 flex-shrink-0" />
                <div className="text-sm md:text-base text-foreground">
                  <p className="font-medium mb-2">How Our Verification Works:</p>
                  <p className="text-muted-foreground leading-relaxed">
                    Our AI-powered system checks claims against a curated database of constitutional articles, Election Commission reports, Law Commission documents, and Supreme Court judgments. Every verification includes direct source citations and plain-language explanations.
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-6 md:mb-8 overflow-x-auto">
              <div className="flex gap-2 min-w-max pb-2">
                {tabs?.map((tab) => (
                  <button
                    key={tab?.id}
                    onClick={() => setActiveTab(tab?.id)}
                    className={`flex items-center gap-2 px-4 md:px-6 py-3 rounded-lg font-medium transition-all duration-300 whitespace-nowrap ${
                      activeTab === tab?.id
                        ? 'bg-primary text-primary-foreground shadow-md'
                        : 'bg-card text-muted-foreground hover:bg-muted border border-border'
                    }`}
                  >
                    <Icon name={tab?.icon} size={18} />
                    <span className="text-sm md:text-base">{tab?.label}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-6 md:space-y-8">
              {activeTab === 'verify' && (
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
                  <div className="lg:col-span-2">
                    <ClaimSubmissionForm onSubmit={handleClaimSubmit} />
                  </div>
                  <div className="space-y-6">
                    <div className="bg-card rounded-lg border border-border p-6">
                      <h3 className="text-lg font-semibold text-foreground mb-4">Verification Stats</h3>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-muted-foreground">Claims Verified Today</span>
                          <span className="text-lg font-semibold text-foreground">1,247</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-muted-foreground">Average Response Time</span>
                          <span className="text-lg font-semibold text-foreground">3.2s</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-muted-foreground">Accuracy Rate</span>
                          <span className="text-lg font-semibold text-success">99.4%</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-card rounded-lg border border-border p-6">
                      <h3 className="text-lg font-semibold text-foreground mb-4">Quick Tips</h3>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <Icon name="CheckCircle" size={18} color="var(--color-success)" className="mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">Paste exact claim text for best results</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <Icon name="CheckCircle" size={18} color="var(--color-success)" className="mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">Include source URL when available</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <Icon name="CheckCircle" size={18} color="var(--color-success)" className="mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">Check trending misinformation tab</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'result' && verificationResult && (
                <div className="max-w-4xl mx-auto">
                  <VerificationResultCard
                    result={verificationResult}
                    onShare={handleShare}
                    onExplore={handleExplore}
                  />
                  <div className="mt-6 text-center">
                    <Button
                      variant="outline"
                      iconName="ArrowLeft"
                      iconPosition="left"
                      onClick={() => setActiveTab('verify')}
                    >
                      Verify Another Claim
                    </Button>
                  </div>
                </div>
              )}

              {activeTab === 'trending' && (
                <div>
                  <div className="mb-6 p-4 md:p-6 bg-warning/10 border border-warning/20 rounded-lg">
                    <div className="flex items-start gap-3">
                      <Icon name="AlertTriangle" size={20} color="var(--color-warning)" className="mt-0.5 flex-shrink-0" />
                      <div>
                        <h3 className="text-base font-semibold text-foreground mb-2">Trending Misinformation Alert</h3>
                        <p className="text-sm text-muted-foreground">
                          These claims are currently circulating widely on social media. Click "Verify Now" to see detailed fact-checks with constitutional sources.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    {trendingMisinformation?.map((item) => (
                      <TrendingMisinformationCard
                        key={item?.id}
                        item={item}
                        onVerify={handleVerifyTrending}
                      />
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'sources' && (
                <div>
                  <div className="mb-6 p-4 md:p-6 bg-primary/5 border border-primary/20 rounded-lg">
                    <div className="flex items-start gap-3">
                      <Icon name="Shield" size={20} color="var(--color-primary)" className="mt-0.5 flex-shrink-0" />
                      <div>
                        <h3 className="text-base font-semibold text-foreground mb-2">Source Credibility System</h3>
                        <p className="text-sm text-muted-foreground">
                          Our ratings are based on institutional authority, historical accuracy, constitutional backing, and verification track record. All sources are regularly audited for reliability.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                    {credibleSources?.map((source) => (
                      <SourceCredibilityRating key={source?.id} source={source} />
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'recent' && (
                <div>
                  <div className="mb-6 flex items-center justify-between">
                    <h2 className="text-xl md:text-2xl font-semibold text-foreground">Recent Fact-Checks</h2>
                    <Button variant="outline" size="sm" iconName="Download" iconPosition="left">
                      Export All
                    </Button>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                    {recentFactChecks?.map((factCheck) => (
                      <ShareableFactCheckCard key={factCheck?.id} factCheck={factCheck} />
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'bulk' && (
                <div className="max-w-4xl mx-auto">
                  <BulkClaimChecker onBulkSubmit={handleBulkSubmit} />
                </div>
              )}
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default VerifyCenter;