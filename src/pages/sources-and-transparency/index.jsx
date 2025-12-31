import React, { useState } from 'react';
import Header from '../../components/ui/Header';
import Breadcrumb from '../../components/ui/Breadcrumb';
import Footer from '../../components/ui/Footer';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import SourceCard from './components/SourceCard';
import MethodologySection from './components/MethodologySection';
import PartnerCard from './components/PartnerCard';
import StatCard from './components/StatCard';
import UpdateLogItem from './components/UpdateLogItem';
import FundingCard from './components/FundingCard';
import EditorialGuidelineCard from './components/EditorialGuidelineCard';
import ContactSection from './components/ContactSection';

const SourcesAndTransparency = () => {
  const [activeTab, setActiveTab] = useState('sources');

  const breadcrumbItems = [
  { label: 'Home', path: '/homepage' },
  { label: 'Sources & Transparency' }];


  const tabs = [
  { id: 'sources', label: 'Primary Sources', icon: 'BookOpen' },
  { id: 'methodology', label: 'Methodology', icon: 'Settings' },
  { id: 'partners', label: 'Partners & Experts', icon: 'Users' },
  { id: 'funding', label: 'Funding', icon: 'DollarSign' },
  { id: 'editorial', label: 'Editorial Guidelines', icon: 'FileText' },
  { id: 'updates', label: 'Update Logs', icon: 'Clock' },
  { id: 'contact', label: 'Contact', icon: 'Mail' }];


  const primarySources = [
  {
    icon: 'Scale',
    title: 'Constitution of India',
    description: 'All constitutional references are sourced directly from the official Constitution of India as amended up to December 2024.',
    items: [
    'Complete text of all 470 articles across 25 parts',
    'All 106 constitutional amendments with dates and contexts',
    'Schedules 1-12 with current provisions',
    'Appendices including historical documents'],

    iconColor: 'bg-primary/10 text-primary'
  },
  {
    icon: 'Vote',
    title: 'Election Commission of India',
    description: 'Electoral data and procedures verified through official ECI reports, statistical handbooks, and press releases.',
    items: [
    'Statistical Reports (1952-2024)',
    'Model Code of Conduct documentation',
    'Electoral Roll management guidelines',
    'ECI press releases and official statements'],

    iconColor: 'bg-success/10 text-success'
  },
  {
    icon: 'Gavel',
    title: 'Law Commission Reports',
    description: 'Constitutional analysis based on Law Commission of India reports and recommendations.',
    items: [
    'Report No. 255 on Electoral Reforms (2015)',
    'Report No. 170 on Reform of Electoral Laws (1999)',
    'Subsequent reports on democratic processes',
    'Expert committee recommendations'],

    iconColor: 'bg-accent/10 text-accent'
  },
  {
    icon: 'Building',
    title: 'Parliamentary Records',
    description: 'Legislative debates, committee reports, and parliamentary proceedings from official Lok Sabha and Rajya Sabha records.',
    items: [
    'Parliamentary Standing Committee reports',
    'Lok Sabha and Rajya Sabha debates',
    'Question Hour responses on electoral matters',
    'Bills and amendments related to elections'],

    iconColor: 'bg-warning/10 text-warning'
  }];


  const methodologySteps = [
  {
    icon: 'Database',
    title: 'Content Verification Process',
    description: 'Our multi-stage verification ensures constitutional accuracy and neutrality.',
    steps: [
    {
      title: 'Source Identification',
      description: 'Every claim is traced to primary constitutional documents, ECI reports, or Law Commission findings.'
    },
    {
      title: 'Expert Review',
      description: 'Constitutional law experts and former Election Commissioners review all content for accuracy.'
    },
    {
      title: 'Cross-Verification',
      description: 'Multiple independent sources confirm each fact before publication.'
    },
    {
      title: 'Plain Language Translation',
      description: 'Legal terminology is translated to accessible language while maintaining constitutional accuracy.'
    }]

  },
  {
    icon: 'Cpu',
    title: 'AI System Methodology',
    description: 'Our retrieval-based AI system operates within strict constitutional boundaries.',
    steps: [
    {
      title: 'Controlled Corpus',
      description: 'AI responses are limited to pre-approved constitutional documents and verified sources only.'
    },
    {
      title: 'No Generative Content',
      description: 'System retrieves existing information rather than generating new interpretations.'
    },
    {
      title: 'Source Attribution',
      description: 'Every AI response includes direct citations to constitutional articles or official reports.'
    },
    {
      title: 'Human Oversight',
      description: 'Constitutional experts review AI outputs before publication to ensure accuracy.'
    }]

  }];


  const partners = [
  {
    name: 'Dr. Rajesh Kumar',
    role: 'Constitutional Law Expert',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1a04865b7-1763296635893.png",
    imageAlt: 'Professional headshot of Indian male constitutional law expert with gray hair wearing formal black suit and red tie',
    expertise: 'Former Supreme Court advocate with 30+ years in constitutional law',
    contribution: 'Validates all constitutional interpretations and ensures legal accuracy across platform content.'
  },
  {
    name: 'Prof. Meera Sharma',
    role: 'Electoral Systems Researcher',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_13d421101-1763296687784.png",
    imageAlt: 'Professional portrait of Indian female professor with shoulder-length black hair wearing blue blazer and white blouse',
    expertise: 'Professor of Political Science, specializing in comparative electoral systems',
    contribution: 'Provides research insights on electoral processes and international comparisons for ONOE analysis.'
  },
  {
    name: 'Shri Anil Verma',
    role: 'Former Election Commissioner',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1ed4c2fc5-1763294753675.png",
    imageAlt: 'Formal photograph of senior Indian male official with white hair and mustache wearing traditional white kurta',
    expertise: 'Served as Election Commissioner from 2010-2015',
    contribution: 'Offers practical insights into electoral administration and implementation challenges.'
  },
  {
    name: 'Dr. Priya Nair',
    role: 'Civic Education Specialist',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_18e23b0ba-1763300956208.png",
    imageAlt: 'Professional headshot of young Indian female educator with long black hair wearing green saree',
    expertise: 'PhD in Education, focus on democratic literacy programs',
    contribution: 'Designs accessible learning modules and ensures content reaches diverse audiences effectively.'
  }];


  const statistics = [
  {
    icon: 'CheckCircle2',
    value: '2,847',
    label: 'Fact-Checks Performed',
    trend: '+12% this month',
    iconColor: 'bg-success/10 text-success'
  },
  {
    icon: 'FileCheck',
    value: '1,523',
    label: 'Claims Verified',
    trend: '+8% this month',
    iconColor: 'bg-primary/10 text-primary'
  },
  {
    icon: 'BookOpen',
    value: '456',
    label: 'Educational Modules',
    trend: '+15 new',
    iconColor: 'bg-accent/10 text-accent'
  },
  {
    icon: 'Users',
    value: '89,234',
    label: 'Active Users',
    trend: '+23% this month',
    iconColor: 'bg-warning/10 text-warning'
  }];


  const fundingSources = [
  {
    source: 'Institutional Grants',
    amount: '₹45,00,000',
    percentage: '45%',
    description: 'Grants from non-partisan civic education foundations and academic institutions',
    icon: 'Building'
  },
  {
    source: 'Individual Donations',
    amount: '₹30,00,000',
    percentage: '30%',
    description: 'Small donations from citizens supporting constitutional literacy (average ₹500)',
    icon: 'Heart'
  },
  {
    source: 'Corporate CSR',
    amount: '₹15,00,000',
    percentage: '15%',
    description: 'Corporate Social Responsibility funds from non-political entities',
    icon: 'Briefcase'
  },
  {
    source: 'Government Grants',
    amount: '₹10,00,000',
    percentage: '10%',
    description: 'Non-partisan civic education grants from Ministry of Education',
    icon: 'Landmark'
  }];


  const editorialGuidelines = [
  {
    title: 'Neutrality Standards',
    principles: [
    {
      title: 'No Political Bias',
      description: 'Content presents constitutional facts without favoring any political party or ideology.'
    },
    {
      title: 'Balanced Perspectives',
      description: 'Multiple viewpoints on ONOE are presented with equal weight and constitutional backing.'
    },
    {
      title: 'Fact-Based Analysis',
      description: 'All analysis is grounded in constitutional provisions and verified historical data.'
    },
    {
      title: 'No Advocacy',
      description: 'Platform educates about ONOE without advocating for or against its implementation.'
    }]

  },
  {
    title: 'Content Standards',
    principles: [
    {
      title: 'Source Attribution',
      description: 'Every claim includes direct citation to constitutional articles or official reports.'
    },
    {
      title: 'Plain Language',
      description: 'Legal terminology is translated to accessible language while maintaining accuracy.'
    },
    {
      title: 'Regular Updates',
      description: 'Content is updated within 48 hours of any constitutional amendments or ECI announcements.'
    },
    {
      title: 'Accessibility First',
      description: 'All content meets WCAG 2.1 AA standards with multi-language support.'
    }]

  }];


  const updateLogs = [
  {
    date: '28 Dec 2024',
    title: 'Constitutional Amendment Database Updated',
    description: 'Added analysis of 106th Constitutional Amendment with historical context and implementation timeline.',
    type: 'content'
  },
  {
    date: '25 Dec 2024',
    title: 'AI Methodology Documentation Enhanced',
    description: 'Published detailed explanation of retrieval-based AI system limitations and safeguards.',
    type: 'methodology'
  },
  {
    date: '20 Dec 2024',
    title: 'New Expert Partnership Announced',
    description: 'Dr. Rajesh Kumar joins as Constitutional Law Advisor, bringing 30+ years of Supreme Court experience.',
    type: 'partnership'
  },
  {
    date: '15 Dec 2024',
    title: 'Fact-Checking System Upgrade',
    description: 'Implemented real-time claim verification against expanded constitutional corpus.',
    type: 'system'
  },
  {
    date: '10 Dec 2024',
    title: 'Electoral Timeline Visualizer Launched',
    description: 'New interactive tool showing historical election schedules from 1952-2024.',
    type: 'content'
  },
  {
    date: '05 Dec 2024',
    title: 'Funding Transparency Report Published',
    description: 'Q4 2024 financial report with detailed breakdown of all funding sources and expenditures.',
    type: 'methodology'
  }];


  const renderTabContent = () => {
    switch (activeTab) {
      case 'sources':
        return (
          <div className="space-y-6 md:space-y-8">
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 md:p-6">
              <div className="flex items-start gap-3 md:gap-4">
                <Icon name="ShieldCheck" size={24} className="text-primary flex-shrink-0" />
                <div>
                  <h3 className="text-base md:text-lg font-semibold text-foreground mb-2 font-heading">
                    Source Verification Guarantee
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground">
                    Every piece of information on ONOE Clarity is traceable to official constitutional documents, ECI reports, Law Commission findings, or Parliamentary records. We never use secondary sources or unverified claims.
                  </p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
              {primarySources?.map((source, index) =>
              <SourceCard key={index} {...source} />
              )}
            </div>
            <div className="bg-muted rounded-lg p-4 md:p-6 lg:p-8">
              <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-foreground mb-4 md:mb-6 font-heading">
                Additional Reference Materials
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <Icon name="BookMarked" size={20} className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-sm md:text-base font-semibold text-foreground mb-1">
                      Supreme Court Judgments
                    </h4>
                    <p className="text-xs md:text-sm text-muted-foreground">
                      Landmark cases on electoral processes and constitutional amendments
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Globe" size={20} className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-sm md:text-base font-semibold text-foreground mb-1">
                      International Comparisons
                    </h4>
                    <p className="text-xs md:text-sm text-muted-foreground">
                      Electoral systems from established democracies for context
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="FileText" size={20} className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-sm md:text-base font-semibold text-foreground mb-1">
                      Academic Research
                    </h4>
                    <p className="text-xs md:text-sm text-muted-foreground">
                      Peer-reviewed studies on electoral reforms and democratic processes
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="BarChart" size={20} className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-sm md:text-base font-semibold text-foreground mb-1">
                      Historical Data
                    </h4>
                    <p className="text-xs md:text-sm text-muted-foreground">
                      Election statistics and trends from 1952 to present
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>);


      case 'methodology':
        return (
          <div className="space-y-6 md:space-y-8">
            {methodologySteps?.map((section, index) =>
            <MethodologySection key={index} {...section} />
            )}
            <div className="bg-warning/5 border border-warning/20 rounded-lg p-4 md:p-6">
              <div className="flex items-start gap-3 md:gap-4">
                <Icon name="AlertTriangle" size={24} className="text-warning flex-shrink-0" />
                <div>
                  <h3 className="text-base md:text-lg font-semibold text-foreground mb-2 font-heading">
                    AI System Limitations
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground mb-4">
                    Our AI system is designed with strict limitations to ensure constitutional accuracy:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Icon name="Minus" size={16} className="text-warning flex-shrink-0 mt-1" />
                      <span className="text-xs md:text-sm text-muted-foreground">
                        Cannot generate new constitutional interpretations
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Minus" size={16} className="text-warning flex-shrink-0 mt-1" />
                      <span className="text-xs md:text-sm text-muted-foreground">
                        Limited to pre-approved constitutional corpus
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Minus" size={16} className="text-warning flex-shrink-0 mt-1" />
                      <span className="text-xs md:text-sm text-muted-foreground">
                        Cannot provide legal advice or political opinions
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Minus" size={16} className="text-warning flex-shrink-0 mt-1" />
                      <span className="text-xs md:text-sm text-muted-foreground">
                        All responses require human expert verification
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>);


      case 'partners':
        return (
          <div className="space-y-6 md:space-y-8">
            <div className="bg-card border border-border rounded-lg p-4 md:p-6">
              <h3 className="text-lg md:text-xl font-semibold text-foreground mb-4 font-heading">
                Expert Advisory Board
              </h3>
              <p className="text-sm md:text-base text-muted-foreground mb-6">
                Our content is validated by constitutional law experts, former Election Commissioners, and civic education specialists to ensure accuracy and neutrality.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                {partners?.map((partner, index) =>
                <PartnerCard key={index} {...partner} />
                )}
              </div>
            </div>
            <div className="bg-muted rounded-lg p-4 md:p-6 lg:p-8">
              <h3 className="text-lg md:text-xl font-semibold text-foreground mb-4 font-heading">
                Institutional Partnerships
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-card rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <Icon name="GraduationCap" size={24} className="text-primary" />
                    <h4 className="text-sm md:text-base font-semibold text-foreground">
                      Academic Institutions
                    </h4>
                  </div>
                  <p className="text-xs md:text-sm text-muted-foreground">
                    Partnerships with leading law schools and political science departments for research validation
                  </p>
                </div>
                <div className="bg-card rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <Icon name="Building" size={24} className="text-primary" />
                    <h4 className="text-sm md:text-base font-semibold text-foreground">
                      Civic Organizations
                    </h4>
                  </div>
                  <p className="text-xs md:text-sm text-muted-foreground">
                    Collaboration with non-partisan civic education groups for content distribution
                  </p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {statistics?.map((stat, index) =>
              <StatCard key={index} {...stat} />
              )}
            </div>
          </div>);


      case 'funding':
        return (
          <div className="space-y-6 md:space-y-8">
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 md:p-6">
              <div className="flex items-start gap-3 md:gap-4">
                <Icon name="DollarSign" size={24} className="text-primary flex-shrink-0" />
                <div>
                  <h3 className="text-base md:text-lg font-semibold text-foreground mb-2 font-heading">
                    Complete Financial Transparency
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground">
                    ONOE Clarity operates with complete financial transparency. All funding sources are publicly disclosed, and we accept no donations from political parties or partisan organizations.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-card border border-border rounded-lg p-4 md:p-6 lg:p-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-2 font-heading">
                    Annual Budget 2024
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground">
                    Total operational budget for constitutional education and platform maintenance
                  </p>
                </div>
                <div className="text-left md:text-right">
                  <div className="text-3xl md:text-4xl font-bold text-primary whitespace-nowrap">
                    ₹1,00,00,000
                  </div>
                  <p className="text-xs md:text-sm text-muted-foreground">
                    100% allocated to civic education
                  </p>
                </div>
              </div>

              <div className="space-y-4 md:space-y-6">
                {fundingSources?.map((funding, index) =>
                <FundingCard key={index} {...funding} />
                )}
              </div>
            </div>
            <div className="bg-muted rounded-lg p-4 md:p-6">
              <h3 className="text-lg md:text-xl font-semibold text-foreground mb-4 font-heading">
                Expenditure Breakdown
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <Icon name="Users" size={20} className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-sm md:text-base font-semibold text-foreground mb-1">
                      Expert Consultation (40%)
                    </h4>
                    <p className="text-xs md:text-sm text-muted-foreground">
                      Constitutional law experts, fact-checkers, and content validators
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Server" size={20} className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-sm md:text-base font-semibold text-foreground mb-1">
                      Technology & Infrastructure (30%)
                    </h4>
                    <p className="text-xs md:text-sm text-muted-foreground">
                      Platform development, AI systems, and hosting
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="BookOpen" size={20} className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-sm md:text-base font-semibold text-foreground mb-1">
                      Content Development (20%)
                    </h4>
                    <p className="text-xs md:text-sm text-muted-foreground">
                      Educational modules, visualizations, and translations
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Megaphone" size={20} className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-sm md:text-base font-semibold text-foreground mb-1">
                      Outreach & Accessibility (10%)
                    </h4>
                    <p className="text-xs md:text-sm text-muted-foreground">
                      Multi-language support and community engagement
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>);


      case 'editorial':
        return (
          <div className="space-y-6 md:space-y-8">
            <div className="bg-card border border-border rounded-lg p-4 md:p-6">
              <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-4 font-heading">
                Editorial Independence
              </h3>
              <p className="text-sm md:text-base text-muted-foreground mb-6">
                ONOE Clarity maintains strict editorial independence. Our content is guided solely by constitutional accuracy and civic education principles, free from political influence or partisan bias.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-muted rounded-lg p-4">
                  <Icon name="ShieldCheck" size={24} className="text-success mb-3" />
                  <h4 className="text-sm md:text-base font-semibold text-foreground mb-2">
                    No Political Funding
                  </h4>
                  <p className="text-xs md:text-sm text-muted-foreground">
                    Zero donations from political parties or partisan organizations
                  </p>
                </div>
                <div className="bg-muted rounded-lg p-4">
                  <Icon name="Eye" size={24} className="text-primary mb-3" />
                  <h4 className="text-sm md:text-base font-semibold text-foreground mb-2">
                    Expert Oversight
                  </h4>
                  <p className="text-xs md:text-sm text-muted-foreground">
                    Independent advisory board reviews all content
                  </p>
                </div>
                <div className="bg-muted rounded-lg p-4">
                  <Icon name="FileCheck" size={24} className="text-accent mb-3" />
                  <h4 className="text-sm md:text-base font-semibold text-foreground mb-2">
                    Fact-Based Only
                  </h4>
                  <p className="text-xs md:text-sm text-muted-foreground">
                    All content traceable to constitutional sources
                  </p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
              {editorialGuidelines?.map((guideline, index) =>
              <EditorialGuidelineCard key={index} {...guideline} />
              )}
            </div>
            <div className="bg-warning/5 border border-warning/20 rounded-lg p-4 md:p-6">
              <div className="flex items-start gap-3 md:gap-4">
                <Icon name="AlertCircle" size={24} className="text-warning flex-shrink-0" />
                <div>
                  <h3 className="text-base md:text-lg font-semibold text-foreground mb-2 font-heading">
                    Correction Policy
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground mb-4">
                    If we make an error, we correct it immediately and transparently:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={16} className="text-warning flex-shrink-0 mt-1" />
                      <span className="text-xs md:text-sm text-muted-foreground">
                        Corrections published within 24 hours of error identification
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={16} className="text-warning flex-shrink-0 mt-1" />
                      <span className="text-xs md:text-sm text-muted-foreground">
                        Clear notation of what was corrected and why
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={16} className="text-warning flex-shrink-0 mt-1" />
                      <span className="text-xs md:text-sm text-muted-foreground">
                        Original version preserved for transparency
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>);


      case 'updates':
        return (
          <div className="space-y-6 md:space-y-8">
            <div className="bg-card border border-border rounded-lg p-4 md:p-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-2 font-heading">
                    Platform Update Log
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground">
                    Complete history of content updates, methodology changes, and system improvements
                  </p>
                </div>
                <Button variant="outline" iconName="Download" iconPosition="left">
                  Download Full Log
                </Button>
              </div>

              <div className="space-y-4 md:space-y-6">
                {updateLogs?.map((log, index) =>
                <UpdateLogItem key={index} {...log} />
                )}
              </div>
            </div>
            <div className="bg-muted rounded-lg p-4 md:p-6">
              <h3 className="text-lg md:text-xl font-semibold text-foreground mb-4 font-heading">
                Update Frequency
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <Icon name="Zap" size={20} className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-sm md:text-base font-semibold text-foreground mb-1">
                      Constitutional Changes
                    </h4>
                    <p className="text-xs md:text-sm text-muted-foreground">
                      Updated within 48 hours of official gazette notification
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Calendar" size={20} className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-sm md:text-base font-semibold text-foreground mb-1">
                      ECI Reports
                    </h4>
                    <p className="text-xs md:text-sm text-muted-foreground">
                      Integrated within 72 hours of official publication
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="RefreshCw" size={20} className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-sm md:text-base font-semibold text-foreground mb-1">
                      Content Review
                    </h4>
                    <p className="text-xs md:text-sm text-muted-foreground">
                      All educational modules reviewed quarterly for accuracy
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="TrendingUp" size={20} className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-sm md:text-base font-semibold text-foreground mb-1">
                      System Improvements
                    </h4>
                    <p className="text-xs md:text-sm text-muted-foreground">
                      Continuous optimization based on user feedback
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>);


      case 'contact':
        return (
          <div className="space-y-6 md:space-y-8">
            <div className="bg-card border border-border rounded-lg p-4 md:p-6">
              <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-4 font-heading">
                Transparency Inquiries
              </h3>
              <p className="text-sm md:text-base text-muted-foreground">
                We welcome all questions about our sources, methodology, funding, and operations. Our commitment to transparency means every inquiry receives a detailed response.
              </p>
            </div>

            <ContactSection />
          </div>);


      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1 pt-20 md:pt-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-6 md:py-8 lg:py-12">
          <Breadcrumb items={breadcrumbItems} />

          <div className="mt-6 md:mt-8 mb-8 md:mb-12">
            <div className="flex items-center gap-3 md:gap-4 mb-4">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-primary/10 rounded-lg flex items-center justify-center">
                <Icon name="ShieldCheck" size={32} className="text-primary" />
              </div>
              <div>
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground font-heading">
                  Sources & Transparency
                </h1>
                <p className="text-sm md:text-base text-muted-foreground mt-2">
                  Complete documentation of our sources, methodology, and operations
                </p>
              </div>
            </div>
          </div>

          <div className="mb-6 md:mb-8 overflow-x-auto">
            <div className="flex items-center gap-2 min-w-max">
              {tabs?.map((tab) =>
              <button
                key={tab?.id}
                onClick={() => setActiveTab(tab?.id)}
                className={`flex items-center gap-2 px-4 py-2 md:px-6 md:py-3 rounded-lg text-sm md:text-base font-medium transition-all duration-300 whitespace-nowrap ${
                activeTab === tab?.id ?
                'bg-primary text-primary-foreground shadow-md' :
                'bg-card text-muted-foreground hover:bg-muted'}`
                }>

                  <Icon name={tab?.icon} size={18} />
                  {tab?.label}
                </button>
              )}
            </div>
          </div>

          {renderTabContent()}
        </div>
      </main>
      <Footer />
    </div>);

};

export default SourcesAndTransparency;