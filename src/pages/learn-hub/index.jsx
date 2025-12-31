import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Breadcrumb from '../../components/ui/Breadcrumb';
import Footer from '../../components/ui/Footer';
import Icon from '../../components/AppIcon';

import Select from '../../components/ui/Select';
import LearningModuleCard from './components/LearningModuleCard';
import QuickAccessCard from './components/QuickAccessCard';
import TimelineCard from './components/TimelineCard';
import DownloadableResourceCard from './components/DownloadableResourceCard';
import InteractiveQuizCard from './components/InteractiveQuizCard';
import ProgressDashboard from './components/ProgressDashboard';

const LearnHub = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');
  const [activeTab, setActiveTab] = useState('modules');

  const breadcrumbItems = [
  { label: 'Home', path: '/homepage' },
  { label: 'Learn Hub' }];


  const progressStats = {
    completed: 12,
    inProgress: 5,
    quizScore: 87,
    streak: 14,
    overallProgress: 68
  };

  const learningModules = [
  {
    id: 1,
    title: "Understanding ONOE: The Basics",
    description: "Comprehensive introduction to One Nation One Election concept, its constitutional implications, and historical context in Indian democracy.",
    category: "Constitutional Basics",
    categoryIcon: "BookOpen",
    difficulty: "beginner",
    duration: "45 min",
    lessons: 8,
    progress: 75,
    image: "https://images.unsplash.com/photo-1674024968449-9c05cc5116d2",
    imageAlt: "Indian Parliament building exterior with blue sky and national flag flying prominently in foreground"
  },
  {
    id: 2,
    title: "Electoral Process in India (1952-1967)",
    description: "Deep dive into India's first four general elections, analyzing voting patterns, constitutional amendments, and the evolution of democratic practices.",
    category: "Historical Analysis",
    categoryIcon: "History",
    difficulty: "intermediate",
    duration: "90 min",
    lessons: 12,
    progress: 40,
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_13b58c5e1-1767096804863.png",
    imageAlt: "Vintage black and white photograph of Indian citizens queuing at polling booth during early independence era elections"
  },
  {
    id: 3,
    title: "Constitutional Amendment Procedures",
    description: "Detailed examination of Article 368, amendment processes, state ratification requirements, and landmark constitutional changes in Indian history.",
    category: "Constitutional Law",
    categoryIcon: "Scale",
    difficulty: "advanced",
    duration: "120 min",
    lessons: 15,
    progress: 0,
    image: "https://images.unsplash.com/photo-1622784046298-978b7df2d154",
    imageAlt: "Close-up of Indian Constitution book with golden embossed text and national emblem on brown leather cover"
  },
  {
    id: 4,
    title: "Election Commission of India: Powers & Functions",
    description: "Comprehensive study of ECI's constitutional mandate, autonomous functioning, election conduct procedures, and dispute resolution mechanisms.",
    category: "Electoral Systems",
    categoryIcon: "Users",
    difficulty: "intermediate",
    duration: "60 min",
    lessons: 10,
    progress: 90,
    image: "https://images.unsplash.com/photo-1726720110811-40f6aa7ac726",
    imageAlt: "Modern Election Commission office building with glass facade and official ECI emblem displayed at entrance"
  },
  {
    id: 5,
    title: "Federal Structure and State Elections",
    description: "Analysis of India's federal system, state-center relations, concurrent election challenges, and constitutional provisions for state autonomy.",
    category: "Federalism",
    categoryIcon: "Map",
    difficulty: "advanced",
    duration: "75 min",
    lessons: 11,
    progress: 25,
    image: "https://images.unsplash.com/photo-1595518224707-a785b033e2f9",
    imageAlt: "Detailed political map of India showing all states and union territories with distinct color coding and capital cities marked"
  },
  {
    id: 6,
    title: "Voter Rights and Responsibilities",
    description: "Essential guide to fundamental voting rights, NOTA provisions, voter registration process, and citizen duties in democratic participation.",
    category: "Civic Education",
    categoryIcon: "UserCheck",
    difficulty: "beginner",
    duration: "30 min",
    lessons: 6,
    progress: 100,
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_121493b52-1766895140472.png",
    imageAlt: "Indian voter showing inked finger after casting vote with electronic voting machine visible in background"
  }];


  const quickAccessItems = [
  {
    id: 1,
    icon: "FileText",
    title: "Constitution of India",
    description: "Access the complete text with amendments and annotations",
    action: "Read Now"
  },
  {
    id: 2,
    icon: "BarChart",
    title: "Election Statistics",
    description: "Historical data from 1952 to present day",
    action: "View Data"
  },
  {
    id: 3,
    icon: "Video",
    title: "Video Explainers",
    description: "2-minute videos on key constitutional concepts",
    action: "Watch Now"
  },
  {
    id: 4,
    icon: "MessageSquare",
    title: "Expert Q&A",
    description: "Constitutional law experts answer your questions",
    action: "Ask Question"
  }];


  const timelineEvents = [
  {
    id: 1,
    year: "1952",
    date: "October 25 - February 21, 1952",
    title: "First General Elections",
    description: "India's first general elections were held over four months across 25 states and territories. With 173 million eligible voters and 45% turnout, it was the largest democratic exercise at that time. The Indian National Congress won 364 of 489 seats in the Lok Sabha.",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1a8658045-1767096805932.png",
    imageAlt: "Historical black and white photograph showing long queues of Indian voters at polling station during 1952 first general elections",
    tags: ["First Election", "Democracy", "Independence"]
  },
  {
    id: 2,
    year: "1957",
    date: "February 24 - June 9, 1957",
    title: "Second General Elections",
    description: "The second general elections saw increased participation with 193 million eligible voters and 47.7% turnout. Congress maintained its dominance winning 371 seats. This election established the pattern of five-year electoral cycles.",
    tags: ["Electoral Cycle", "Congress Dominance"]
  },
  {
    id: 3,
    year: "1962",
    date: "February 19 - June 25, 1962",
    title: "Third General Elections",
    description: "Held against the backdrop of the Sino-Indian War, these elections saw 216 million eligible voters with 55.4% turnout. Congress won 361 seats, but regional parties began gaining ground in state elections.",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_175118257-1767096805925.png",
    imageAlt: "Vintage photograph of Indian polling officers counting ballot papers manually under supervision during 1962 elections",
    tags: ["Regional Politics", "War Context"]
  },
  {
    id: 4,
    year: "1967",
    date: "February 15 - 21, 1967",
    title: "Fourth General Elections",
    description: "A watershed moment in Indian democracy with 250 million eligible voters and 61.3% turnout. Congress won only 283 seats, losing power in several states. This marked the beginning of coalition politics and regional party emergence.",
    tags: ["Coalition Era", "Regional Parties", "Political Shift"]
  }];


  const downloadableResources = [
  {
    id: 1,
    title: "Constitution of India - Complete Text",
    type: "pdf",
    size: 5242880
  },
  {
    id: 2,
    title: "ECI Election Handbook 2024",
    type: "pdf",
    size: 3145728
  },
  {
    id: 3,
    title: "ONOE Implementation Study",
    type: "pdf",
    size: 2097152
  },
  {
    id: 4,
    title: "Electoral Process Flowchart",
    type: "pdf",
    size: 1048576
  },
  {
    id: 5,
    title: "Historical Election Data (1952-2024)",
    type: "pdf",
    size: 4194304
  },
  {
    id: 6,
    title: "Constitutional Amendments Guide",
    type: "pdf",
    size: 2621440
  }];


  const interactiveQuiz = {
    question: "Which article of the Indian Constitution deals with the amendment procedure?",
    options: [
    "Article 356",
    "Article 368",
    "Article 370",
    "Article 324"],

    correctAnswer: 1,
    explanation: "Article 368 of the Indian Constitution provides the procedure for amendment of the Constitution. It requires a special majority in both houses of Parliament and, for certain amendments, ratification by at least half of the state legislatures."
  };

  const categoryOptions = [
  { value: 'all', label: 'All Categories' },
  { value: 'constitutional-basics', label: 'Constitutional Basics' },
  { value: 'historical-analysis', label: 'Historical Analysis' },
  { value: 'constitutional-law', label: 'Constitutional Law' },
  { value: 'electoral-systems', label: 'Electoral Systems' },
  { value: 'federalism', label: 'Federalism' },
  { value: 'civic-education', label: 'Civic Education' }];


  const difficultyOptions = [
  { value: 'all', label: 'All Levels' },
  { value: 'beginner', label: 'Beginner' },
  { value: 'intermediate', label: 'Intermediate' },
  { value: 'advanced', label: 'Advanced' }];


  const filteredModules = learningModules?.filter((module) => {
    const categoryMatch = selectedCategory === 'all' || module.category?.toLowerCase()?.replace(/\s+/g, '-') === selectedCategory;
    const difficultyMatch = selectedDifficulty === 'all' ||
    module.difficulty === selectedDifficulty;
    return categoryMatch && difficultyMatch;
  });

  const tabs = [
  { id: 'modules', label: 'Learning Modules', icon: 'BookOpen' },
  { id: 'timeline', label: 'Historical Timeline', icon: 'History' },
  { id: 'resources', label: 'Resources', icon: 'Download' }];


  return (
    <>
      <Helmet>
        <title>Learn Hub - ONOE Clarity | Constitutional Education Platform</title>
        <meta
          name="description"
          content="Comprehensive constitutional education with interactive modules, historical timelines, and verified resources. Learn about ONOE, electoral processes, and Indian democracy." />

      </Helmet>
      <div className="min-h-screen flex flex-col bg-background">
        <Header />

        <main className="flex-grow pt-20 pb-12">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <Breadcrumb items={breadcrumbItems} />

            <div className="mt-6 md:mt-8 mb-8 md:mb-10 lg:mb-12">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Icon name="GraduationCap" size={32} color="var(--color-primary)" />
                </div>
                <div>
                  <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
                    Learn Hub
                  </h1>
                  <p className="text-sm md:text-base lg:text-lg text-muted-foreground mt-1">
                    Your comprehensive constitutional education journey
                  </p>
                </div>
              </div>
            </div>

            <ProgressDashboard stats={progressStats} />

            <div className="mt-8 md:mt-10 lg:mt-12">
              <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-4 md:mb-6">
                Quick Access
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 lg:gap-6">
                {quickAccessItems?.map((item) =>
                <QuickAccessCard key={item?.id} item={item} />
                )}
              </div>
            </div>

            <div className="mt-8 md:mt-10 lg:mt-12">
              <div className="border-b border-border mb-6">
                <div className="flex gap-1 overflow-x-auto">
                  {tabs?.map((tab) =>
                  <button
                    key={tab?.id}
                    onClick={() => setActiveTab(tab?.id)}
                    className={`flex items-center gap-2 px-4 md:px-6 py-3 text-sm md:text-base font-medium transition-all duration-300 border-b-2 flex-shrink-0 ${
                    activeTab === tab?.id ?
                    'border-primary text-primary' : 'border-transparent text-muted-foreground hover:text-foreground'}`
                    }>

                      <Icon name={tab?.icon} size={18} />
                      {tab?.label}
                    </button>
                  )}
                </div>
              </div>

              {activeTab === 'modules' &&
              <>
                  <div className="flex flex-col md:flex-row gap-4 mb-6">
                    <Select
                    options={categoryOptions}
                    value={selectedCategory}
                    onChange={setSelectedCategory}
                    placeholder="Filter by category"
                    className="flex-grow" />

                    <Select
                    options={difficultyOptions}
                    value={selectedDifficulty}
                    onChange={setSelectedDifficulty}
                    placeholder="Filter by difficulty"
                    className="flex-grow" />

                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-6">
                    {filteredModules?.map((module) =>
                  <LearningModuleCard key={module.id} module={module} />
                  )}
                  </div>

                  {filteredModules?.length === 0 &&
                <div className="text-center py-12">
                      <Icon name="Search" size={48} color="var(--color-muted-foreground)" className="mx-auto mb-4" />
                      <p className="text-lg text-muted-foreground">
                        No modules found matching your filters
                      </p>
                    </div>
                }
                </>
              }

              {activeTab === 'timeline' &&
              <div className="max-w-4xl mx-auto">
                  <div className="mb-8">
                    <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-2">
                      Historical Election Timeline (1952-1967)
                    </h2>
                    <p className="text-sm md:text-base text-muted-foreground">
                      Explore India's first four general elections and the evolution of democratic practices
                    </p>
                  </div>

                  {timelineEvents?.map((event, index) =>
                <TimelineCard
                  key={event?.id}
                  event={event}
                  isLast={index === timelineEvents?.length - 1} />

                )}
                </div>
              }

              {activeTab === 'resources' &&
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
                  <div className="lg:col-span-2">
                    <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-4 md:mb-6">
                      Downloadable Study Materials
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                      {downloadableResources?.map((resource) =>
                    <DownloadableResourceCard key={resource?.id} resource={resource} />
                    )}
                    </div>
                  </div>

                  <div>
                    <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-4 md:mb-6">
                      Quick Quiz
                    </h2>
                    <InteractiveQuizCard quiz={interactiveQuiz} />
                  </div>
                </div>
              }
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>);

};

export default LearnHub;