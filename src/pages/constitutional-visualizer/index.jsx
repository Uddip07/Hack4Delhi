import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Footer from '../../components/ui/Footer';
import Breadcrumb from '../../components/ui/Breadcrumb';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import Select from '../../components/ui/Select';
import ProcessNode from './components/ProcessNode';
import StateRatificationMap from './components/StateRatificationMap';
import TimelineSimulator from './components/TimelineSimulator';
import ExplanationPanel from './components/ExplanationPanel';
import FlowchartControls from './components/FlowchartControls';
import StatisticsCard from './components/StatisticsCard';

const ConstitutionalVisualizer = () => {
  const [selectedProcess, setSelectedProcess] = useState('amendment');
  const [activeNode, setActiveNode] = useState(null);
  const [selectedState, setSelectedState] = useState(null);
  const [currentPhase, setCurrentPhase] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(100);
  const [selectedView, setSelectedView] = useState('flowchart');

  const processOptions = [
    { value: 'amendment', label: 'Constitutional Amendment Process' },
    { value: 'onoe', label: 'ONOE Implementation Pathway' },
    { value: 'emergency', label: 'Emergency Provisions Process' },
    { value: 'ratification', label: 'State Ratification Requirements' }
  ];

  const viewOptions = [
    { value: 'flowchart', label: 'Process Flowchart' },
    { value: 'states', label: 'State Ratification Map' },
    { value: 'timeline', label: 'Implementation Timeline' }
  ];

  const amendmentNodes = [
    {
      id: 1,
      type: 'start',
      title: "Bill Introduction",
      description: "Amendment bill introduced in either House of Parliament",
      duration: "Day 1",
      requirements: "Requires prior approval of President for certain amendments"
    },
    {
      id: 2,
      type: 'process',
      title: "Parliamentary Debate",
      description: "Detailed discussion and clause-by-clause consideration",
      duration: "2-4 weeks",
      requirements: "Open debate in both Lok Sabha and Rajya Sabha"
    },
    {
      id: 3,
      type: 'decision',
      title: "Special Majority Vote",
      description: "Requires 2/3rd majority of members present and voting",
      duration: "1-2 days",
      requirements: "Minimum 50% of total membership must be present"
    },
    {
      id: 4,
      type: 'process',
      title: "Second House Approval",
      description: "Bill passed to other House for consideration",
      duration: "2-3 weeks",
      requirements: "Same special majority required in second House"
    },
    {
      id: 5,
      type: 'decision',
      title: "State Ratification",
      description: "For certain amendments, requires approval by 50% of state legislatures",
      duration: "Variable (no time limit)",
      requirements: "Simple majority in state legislatures sufficient"
    },
    {
      id: 6,
      type: 'end',
      title: "Presidential Assent",
      description: "President must give assent to the amendment bill",
      duration: "Within reasonable time",
      requirements: "President cannot withhold assent to constitutional amendments"
    }
  ];

  const statesData = [
    {
      id: 1,
      name: "Uttar Pradesh",
      region: "north",
      status: "ratified",
      population: "241 million",
      ratificationDate: "15 Jan 2025"
    },
    {
      id: 2,
      name: "Maharashtra",
      region: "west",
      status: "ratified",
      population: "123 million",
      ratificationDate: "18 Jan 2025"
    },
    {
      id: 3,
      name: "Bihar",
      region: "east",
      status: "pending",
      population: "128 million",
      ratificationDate: null
    },
    {
      id: 4,
      name: "West Bengal",
      region: "east",
      status: "ratified",
      population: "100 million",
      ratificationDate: "20 Jan 2025"
    },
    {
      id: 5,
      name: "Madhya Pradesh",
      region: "central",
      status: "ratified",
      population: "85 million",
      ratificationDate: "22 Jan 2025"
    },
    {
      id: 6,
      name: "Tamil Nadu",
      region: "south",
      status: "ratified",
      population: "77 million",
      ratificationDate: "16 Jan 2025"
    },
    {
      id: 7,
      name: "Rajasthan",
      region: "west",
      status: "pending",
      population: "81 million",
      ratificationDate: null
    },
    {
      id: 8,
      name: "Karnataka",
      region: "south",
      status: "ratified",
      population: "68 million",
      ratificationDate: "19 Jan 2025"
    },
    {
      id: 9,
      name: "Gujarat",
      region: "west",
      status: "ratified",
      population: "70 million",
      ratificationDate: "17 Jan 2025"
    },
    {
      id: 10,
      name: "Andhra Pradesh",
      region: "south",
      status: "pending",
      population: "53 million",
      ratificationDate: null
    },
    {
      id: 11,
      name: "Odisha",
      region: "east",
      status: "ratified",
      population: "47 million",
      ratificationDate: "21 Jan 2025"
    },
    {
      id: 12,
      name: "Kerala",
      region: "south",
      status: "ratified",
      population: "35 million",
      ratificationDate: "14 Jan 2025"
    },
    {
      id: 13,
      name: "Telangana",
      region: "south",
      status: "ratified",
      population: "39 million",
      ratificationDate: "23 Jan 2025"
    },
    {
      id: 14,
      name: "Assam",
      region: "northeast",
      status: "pending",
      population: "35 million",
      ratificationDate: null
    },
    {
      id: 15,
      name: "Punjab",
      region: "north",
      status: "ratified",
      population: "30 million",
      ratificationDate: "24 Jan 2025"
    },
    {
      id: 16,
      name: "Haryana",
      region: "north",
      status: "ratified",
      population: "29 million",
      ratificationDate: "25 Jan 2025"
    },
    {
      id: 17,
      name: "Chhattisgarh",
      region: "central",
      status: "pending",
      population: "30 million",
      ratificationDate: null
    },
    {
      id: 18,
      name: "Jharkhand",
      region: "east",
      status: "ratified",
      population: "38 million",
      ratificationDate: "26 Jan 2025"
    }
  ];

  const timelinePhases = [
    {
      id: 1,
      title: "Legislative Preparation Phase",
      description: "Drafting of amendment bill, consultation with legal experts, and stakeholder engagement",
      duration: "3-6 months",
      milestones: [
        "Formation of expert committee",
        "Public consultation process",
        "Draft bill preparation",
        "Cabinet approval"
      ],
      requirements: "Constitutional law experts, parliamentary draftsmen, stakeholder inputs"
    },
    {
      id: 2,
      title: "Parliamentary Introduction",
      description: "Bill introduced in Parliament, assigned to standing committee for detailed examination",
      duration: "1-2 months",
      milestones: [
        "Bill tabled in Lok Sabha/Rajya Sabha",
        "Standing committee examination",
        "Committee report submission",
        "Government response preparation"
      ],
      requirements: "Parliamentary procedures, committee scrutiny, public hearings"
    },
    {
      id: 3,
      title: "Parliamentary Debate & Voting",
      description: "Comprehensive debate in both Houses followed by special majority voting",
      duration: "2-4 months",
      milestones: [
        "First House debate and voting",
        "Second House consideration",
        "Joint sitting if required",
        "Final passage with special majority"
      ],
      requirements: "2/3rd majority of members present, 50% total membership quorum"
    },
    {
      id: 4,
      title: "State Ratification Process",
      description: "For amendments affecting federal structure, requires approval by state legislatures",
      duration: "6-12 months",
      milestones: [
        "Bill sent to state legislatures",
        "State assembly debates",
        "Simple majority votes in states",
        "Minimum 50% states must ratify"
      ],
      requirements: "Simple majority in at least half of state legislatures"
    },
    {
      id: 5,
      title: "Presidential Assent & Notification",
      description: "President gives assent and amendment is officially notified in the Gazette",
      duration: "1-2 weeks",
      milestones: [
        "Bill presented to President",
        "Presidential assent granted",
        "Official gazette notification",
        "Amendment comes into force"
      ],
      requirements: "Presidential assent mandatory, cannot be withheld"
    }
  ];

  const explanationContent = {
    title: "Understanding Constitutional Amendment Process",
    sections: [
      {
        icon: "BookOpen",
        heading: "Constitutional Basis",
        content: "Article 368 of the Indian Constitution provides the procedure for amendment. It empowers Parliament to amend any provision of the Constitution through a special procedure that ensures both flexibility and stability in our constitutional framework.",
        reference: "Article 368, Constitution of India"
      },
      {
        icon: "Users",
        heading: "Special Majority Requirement",
        content: "A constitutional amendment requires a special majority, which means the bill must be passed by a majority of not less than two-thirds of the members present and voting in each House of Parliament. Additionally, the majority must also constitute more than 50% of the total membership of that House.",
        points: [
          "2/3rd majority of members present and voting",
          "Majority must exceed 50% of total House strength",
          "Same procedure applies to both Lok Sabha and Rajya Sabha",
          "No joint sitting provision for constitutional amendments"
        ]
      },
      {
        icon: "MapPin",
        heading: "State Ratification",
        content: "Certain amendments affecting the federal structure require ratification by at least half of the state legislatures. This includes amendments related to distribution of legislative powers, representation in Parliament, and provisions related to state governments.",
        points: [
          "Simple majority sufficient in state legislatures",
          "No time limit for state ratification",
          "Once ratified, state cannot withdraw consent",
          "Applies to amendments affecting federal balance"
        ],
        reference: "Article 368(2), Constitution of India"
      },
      {
        icon: "Shield",
        heading: "Basic Structure Doctrine",
        content: "The Supreme Court has held that Parliament cannot amend the basic structure of the Constitution. This doctrine, established in the Kesavananda Bharati case (1973), ensures that fundamental features like democracy, secularism, and federalism remain protected.",
        reference: "Kesavananda Bharati v. State of Kerala (1973)"
      }
    ],
    relatedArticles: [
      "Article 368",
      "Article 13",
      "Article 245",
      "Article 246"
    ]
  };

  const statistics = [
    {
      icon: "FileText",
      label: "Total Amendments",
      value: "106",
      description: "Since 1950",
      trend: { direction: 'up', value: '+1 in 2023' }
    },
    {
      icon: "Users",
      label: "States Required",
      value: "14/28",
      description: "For federal amendments",
      trend: null
    },
    {
      icon: "Clock",
      label: "Average Duration",
      value: "8-12",
      description: "Months for completion",
      trend: null
    },
    {
      icon: "CheckCircle2",
      label: "Success Rate",
      value: "94%",
      description: "Bills passed",
      trend: { direction: 'up', value: '+2%' }
    }
  ];

  const handleNodeClick = (node) => {
    setActiveNode(node);
    setShowExplanation(true);
  };

  const handleStateClick = (state) => {
    setSelectedState(state);
    setShowExplanation(true);
  };

  const handleZoomIn = () => {
    setZoomLevel(prev => Math.min(prev + 10, 200));
  };

  const handleZoomOut = () => {
    setZoomLevel(prev => Math.max(prev - 10, 50));
  };

  const handleReset = () => {
    setZoomLevel(100);
  };

  const handleDownload = () => {
    console.log('Downloading flowchart PDF...');
  };

  const breadcrumbItems = [
    { label: 'Home', path: '/homepage' },
    { label: 'Constitutional Visualizer' }
  ];

  const ratifiedCount = statesData?.filter(s => s?.status === 'ratified')?.length;
  const pendingCount = statesData?.filter(s => s?.status === 'pending')?.length;
  const ratificationPercentage = Math.round((ratifiedCount / statesData?.length) * 100);

  return (
    <>
      <Helmet>
        <title>Constitutional Visualizer - ONOE Clarity</title>
        <meta name="description" content="Interactive visualization of constitutional amendment processes, state ratification requirements, and implementation timelines with plain-language explanations." />
      </Helmet>
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        
        <main className="flex-1 pt-20 pb-12">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="mb-6 md:mb-8">
              <Breadcrumb items={breadcrumbItems} />
            </div>

            <div className="mb-8 md:mb-12">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">
                <div>
                  <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-2">
                    Constitutional Visualizer
                  </h1>
                  <p className="text-sm md:text-base text-muted-foreground">
                    Interactive exploration of constitutional amendment processes and legal requirements
                  </p>
                </div>
                <Button
                  variant="outline"
                  iconName="Info"
                  iconPosition="left"
                  onClick={() => setShowExplanation(true)}
                  className="w-full lg:w-auto"
                >
                  Learn More
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                {statistics?.map((stat, index) => (
                  <StatisticsCard key={index} {...stat} />
                ))}
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-4 md:p-6 lg:p-8 mb-6 md:mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <Select
                  label="Select Process"
                  options={processOptions}
                  value={selectedProcess}
                  onChange={setSelectedProcess}
                />
                <Select
                  label="View Type"
                  options={viewOptions}
                  value={selectedView}
                  onChange={setSelectedView}
                />
              </div>

              {selectedView === 'flowchart' && (
                <div className="space-y-6 md:space-y-8">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-lg md:text-xl font-semibold text-foreground">
                      Amendment Process Flow
                    </h2>
                    <div className="flex items-center gap-2">
                      <Icon name="Info" size={16} className="text-muted-foreground" />
                      <span className="text-xs md:text-sm text-muted-foreground">
                        Click on any step for detailed explanation
                      </span>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                    {amendmentNodes?.map((node, index) => (
                      <ProcessNode
                        key={node?.id}
                        node={node}
                        isActive={activeNode?.id === node?.id}
                        isCompleted={activeNode && node?.id < activeNode?.id}
                        onClick={handleNodeClick}
                      />
                    ))}
                  </div>
                </div>
              )}

              {selectedView === 'states' && (
                <div className="space-y-6 md:space-y-8">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                    <h2 className="text-lg md:text-xl font-semibold text-foreground">
                      State Ratification Status
                    </h2>
                    <div className="flex items-center gap-4 md:gap-6 text-sm">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-success rounded-full" />
                        <span className="text-muted-foreground">Ratified: {ratifiedCount}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-warning rounded-full" />
                        <span className="text-muted-foreground">Pending: {pendingCount}</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-muted rounded-lg p-4 mb-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-foreground">
                        Overall Progress
                      </span>
                      <span className="text-sm font-semibold text-foreground">
                        {ratificationPercentage}%
                      </span>
                    </div>
                    <div className="w-full h-2 bg-background rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-success transition-all duration-500"
                        style={{ width: `${ratificationPercentage}%` }}
                      />
                    </div>
                  </div>
                  <StateRatificationMap 
                    states={statesData} 
                    onStateClick={handleStateClick}
                  />
                </div>
              )}

              {selectedView === 'timeline' && (
                <div className="space-y-6 md:space-y-8">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-lg md:text-xl font-semibold text-foreground">
                      Implementation Timeline
                    </h2>
                    <div className="flex items-center gap-2">
                      <span className="text-xs md:text-sm text-muted-foreground">
                        Phase {currentPhase + 1} of {timelinePhases?.length}
                      </span>
                    </div>
                  </div>
                  <TimelineSimulator
                    phases={timelinePhases}
                    currentPhase={currentPhase}
                    onPhaseChange={setCurrentPhase}
                  />
                </div>
              )}
            </div>

            <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 md:p-6">
              <div className="flex items-start gap-3 md:gap-4">
                <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Icon name="Lightbulb" size={20} color="var(--color-primary)" />
                </div>
                <div className="flex-1">
                  <h3 className="text-base md:text-lg font-semibold text-foreground mb-2">
                    Understanding Constitutional Amendments
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground mb-4">
                    The Indian Constitution provides a balanced mechanism for amendments that ensures both flexibility and stability. The process requires broad consensus through special majorities and, in certain cases, state ratification to protect the federal structure.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Button variant="outline" size="sm" iconName="BookOpen" iconPosition="left">
                      Read Full Guide
                    </Button>
                    <Button variant="ghost" size="sm" iconName="Download" iconPosition="left">
                      Download PDF
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        {selectedView === 'flowchart' && (
          <FlowchartControls
            onZoomIn={handleZoomIn}
            onZoomOut={handleZoomOut}
            onReset={handleReset}
            onDownload={handleDownload}
            currentZoom={zoomLevel}
          />
        )}

        {showExplanation && (
          <ExplanationPanel
            content={explanationContent}
            onClose={() => setShowExplanation(false)}
          />
        )}

        <Footer />
      </div>
    </>
  );
};

export default ConstitutionalVisualizer;