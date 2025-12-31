import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TrustIndicators = () => {
  const partnerships = [
  {
    id: 1,
    name: "Election Commission of India",
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_12a7eb9b8-1766485780448.png",
    logoAlt: "Election Commission of India official emblem with Ashoka Chakra symbol on white background representing constitutional authority",
    type: "Constitutional Authority",
    description: "Official source verification and electoral data validation"
  },
  {
    id: 2,
    name: "PRS Legislative Research",
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_1e81c2951-1767096803528.png",
    logoAlt: "PRS Legislative Research institutional logo with book and scales symbol representing parliamentary research organization",
    type: "Research Partner",
    description: "Parliamentary analysis and legislative documentation"
  },
  {
    id: 3,
    name: "National Law University",
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_1ce0604b6-1767096804980.png",
    logoAlt: "National Law University academic crest with pillars and torch symbol on blue background representing legal education institution",
    type: "Academic Partner",
    description: "Constitutional law expertise and content validation"
  },
  {
    id: 4,
    name: "Centre for Policy Research",
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_18470a6c4-1767096804607.png",
    logoAlt: "Centre for Policy Research institutional emblem with globe and document symbols representing think tank organization",
    type: "Think Tank",
    description: "Policy analysis and democratic governance research"
  }];


  const expertEndorsements = [
  {
    id: 1,
    name: "Dr. Rajesh Kumar",
    designation: "Former Chief Election Commissioner",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_148d4da1a-1763296687451.png",
    imageAlt: "Professional portrait of middle-aged Indian man with gray hair wearing formal navy blue suit and red tie in office setting",
    quote: "ONOE Clarity provides the most comprehensive and accurate constitutional information available to Indian citizens."
  },
  {
    id: 2,
    name: "Prof. Meera Sharma",
    designation: "Constitutional Law Expert, NLU Delhi",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_13d421101-1763296687784.png",
    imageAlt: "Professional headshot of Indian woman professor with shoulder-length black hair wearing maroon blazer and white shirt in academic setting",
    quote: "An essential resource for understanding the complexities of simultaneous elections within our constitutional framework."
  },
  {
    id: 3,
    name: "Dr. Anil Verma",
    designation: "Director, Centre for Electoral Studies",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1900b2f16-1763294023440.png",
    imageAlt: "Professional photograph of Indian man with short black hair and glasses wearing gray suit and blue tie in research institute office",
    quote: "The platform's commitment to non-partisan, fact-based civic education sets a new standard for democratic engagement."
  }];


  const statistics = [
  {
    id: 1,
    value: "2.5M+",
    label: "Citizens Educated",
    icon: "Users",
    description: "Active learners across India"
  },
  {
    id: 2,
    value: "15K+",
    label: "Claims Verified",
    icon: "CheckCircle",
    description: "Fact-checks completed"
  },
  {
    id: 3,
    value: "100%",
    label: "Source Accuracy",
    icon: "Shield",
    description: "ECI & constitutional sources"
  },
  {
    id: 4,
    value: "50+",
    label: "Expert Contributors",
    icon: "Award",
    description: "Constitutional law experts"
  }];


  return (
    <section className="py-12 md:py-16 lg:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-success/10 rounded-full mb-4">
            <Icon name="ShieldCheck" size={16} color="var(--color-success)" />
            <span className="text-sm font-medium text-success">
              Trusted by Millions
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Built on Trust & Expertise
          </h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
            Partnering with India's leading constitutional authorities and academic institutions to deliver verified civic education.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16">
          {statistics?.map((stat) =>
          <div
            key={stat?.id}
            className="bg-card border border-border rounded-xl p-4 md:p-6 text-center hover:shadow-md transition-all duration-300">

              <div className="w-12 h-12 md:w-14 md:h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3 md:mb-4">
                <Icon name={stat?.icon} size={24} color="var(--color-primary)" />
              </div>
              <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-2">
                {stat?.value}
              </div>
              <div className="text-sm md:text-base font-semibold text-foreground mb-1">
                {stat?.label}
              </div>
              <div className="text-xs md:text-sm text-muted-foreground">
                {stat?.description}
              </div>
            </div>
          )}
        </div>

        <div className="mb-12 md:mb-16">
          <h3 className="text-xl md:text-2xl font-bold text-foreground mb-6 md:mb-8 text-center">
            Institutional Partnerships
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {partnerships?.map((partner) =>
            <div
              key={partner?.id}
              className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300 text-center">

                <div className="w-20 h-20 md:w-24 md:h-24 mx-auto mb-4 rounded-xl overflow-hidden bg-muted">
                  <Image
                  src={partner?.logo}
                  alt={partner?.logoAlt}
                  className="w-full h-full object-cover" />

                </div>
                <h4 className="text-base md:text-lg font-semibold text-foreground mb-2">
                  {partner?.name}
                </h4>
                <span className="inline-block text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full mb-3">
                  {partner?.type}
                </span>
                <p className="text-xs md:text-sm text-muted-foreground line-clamp-2">
                  {partner?.description}
                </p>
              </div>
            )}
          </div>
        </div>

        <div>
          <h3 className="text-xl md:text-2xl font-bold text-foreground mb-6 md:mb-8 text-center">
            Expert Endorsements
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {expertEndorsements?.map((expert) =>
            <div
              key={expert?.id}
              className="bg-card border border-border rounded-xl p-6 md:p-8 hover:shadow-lg transition-all duration-300">

                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden bg-muted flex-shrink-0">
                    <Image
                    src={expert?.image}
                    alt={expert?.imageAlt}
                    className="w-full h-full object-cover" />

                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="text-base md:text-lg font-semibold text-foreground mb-1">
                      {expert?.name}
                    </h4>
                    <p className="text-xs md:text-sm text-muted-foreground line-clamp-2">
                      {expert?.designation}
                    </p>
                  </div>
                </div>
                <div className="relative">
                  <Icon
                  name="Quote"
                  size={24}
                  color="var(--color-primary)"
                  className="absolute -top-2 -left-2 opacity-20" />

                  <p className="text-sm md:text-base text-muted-foreground italic leading-relaxed pl-6">
                    "{expert?.quote}"
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>);

};

export default TrustIndicators;