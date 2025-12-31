import React from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../AppIcon';

const Footer = () => {
  const navigate = useNavigate();
  const currentYear = new Date()?.getFullYear();

  const footerLinks = {
    learn: [
      { label: 'Constitutional Basics', path: '/learn-hub' },
      { label: 'ONOE Explained', path: '/learn-hub' },
      { label: 'Electoral Process', path: '/learn-hub' },
      { label: 'Citizen Rights', path: '/learn-hub' },
    ],
    tools: [
      { label: 'Fact Checker', path: '/verify-center' },
      { label: 'Constitutional Visualizer', path: '/constitutional-visualizer' },
      { label: 'Scenario Simulator', path: '/scenario-simulator' },
      { label: 'Timeline Explorer', path: '/learn-hub' },
    ],
    about: [
      { label: 'Our Mission', path: '/sources-and-transparency' },
      { label: 'Methodology', path: '/sources-and-transparency' },
      { label: 'Expert Partners', path: '/sources-and-transparency' },
      { label: 'Source Citations', path: '/sources-and-transparency' },
    ],
  };

  const socialLinks = [
    { icon: 'Twitter', label: 'Twitter', url: '#' },
    { icon: 'Facebook', label: 'Facebook', url: '#' },
    { icon: 'Linkedin', label: 'LinkedIn', url: '#' },
    { icon: 'Youtube', label: 'YouTube', url: '#' },
  ];

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <footer className="bg-card border-t border-border mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <Icon name="Scale" size={24} color="var(--color-primary)" />
              </div>
              <span className="text-xl font-semibold text-foreground font-heading">
                ONOE Clarity
              </span>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Constitutional clarity for every citizen. Empowering democratic participation through accessible, verified civic education.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks?.map((social) => (
                <a
                  key={social?.label}
                  href={social?.url}
                  className="w-9 h-9 bg-muted hover:bg-primary/10 rounded-lg flex items-center justify-center transition-all duration-300"
                  aria-label={social?.label}
                >
                  <Icon name={social?.icon} size={18} color="var(--color-muted-foreground)" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4 font-heading">
              Learn
            </h3>
            <ul className="space-y-2">
              {footerLinks?.learn?.map((link) => (
                <li key={link?.label}>
                  <button
                    onClick={() => handleNavigation(link?.path)}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link?.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4 font-heading">
              Tools
            </h3>
            <ul className="space-y-2">
              {footerLinks?.tools?.map((link) => (
                <li key={link?.label}>
                  <button
                    onClick={() => handleNavigation(link?.path)}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link?.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4 font-heading">
              About
            </h3>
            <ul className="space-y-2">
              {footerLinks?.about?.map((link) => (
                <li key={link?.label}>
                  <button
                    onClick={() => handleNavigation(link?.path)}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link?.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {currentYear} ONOE Clarity. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <button
                onClick={() => handleNavigation('/sources-and-transparency')}
                className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                Privacy Policy
              </button>
              <button
                onClick={() => handleNavigation('/sources-and-transparency')}
                className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                Terms of Service
              </button>
              <button
                onClick={() => handleNavigation('/sources-and-transparency')}
                className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                Accessibility
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;