import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = [
    { path: '/homepage', label: 'Home', icon: 'Home' },
    { path: '/learn-hub', label: 'Learn Hub', icon: 'BookOpen' },
    { path: '/verify-center', label: 'Verify Center', icon: 'ShieldCheck' },
    { path: '/constitutional-visualizer', label: 'Visualizer', icon: 'Eye' },
    { path: '/scenario-simulator', label: 'Simulator', icon: 'Layers' },
  ];

  const isActivePath = (path) => location?.pathname === path;

  const handleNavigation = (path) => {
    navigate(path);
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header className="header">
        <div className="header-container">
          <div className="header-logo" onClick={() => handleNavigation('/homepage')}>
            <div className="header-logo-icon">
              <Icon name="Scale" size={24} color="var(--color-primary)" />
            </div>
            <span className="header-logo-text">ONOE Clarity</span>
          </div>

          <nav className="header-nav">
            {navigationItems?.map((item) => (
              <button
                key={item?.path}
                onClick={() => handleNavigation(item?.path)}
                className={`header-nav-link ${isActivePath(item?.path) ? 'active' : ''}`}
              >
                {item?.label}
              </button>
            ))}
          </nav>

          <div className="header-actions">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => handleNavigation('/sources-and-transparency')}
              className="hidden lg:flex"
            >
              <Icon name="Info" size={20} />
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => console.log('Search clicked')}
              className="hidden lg:flex"
            >
              <Icon name="Search" size={16} />
            </Button>
          </div>

          <button
            onClick={toggleMobileMenu}
            className="mobile-menu-button"
            aria-label="Toggle mobile menu"
          >
            <Icon name={isMobileMenuOpen ? 'X' : 'Menu'} size={24} />
          </button>
        </div>
      </header>
      {isMobileMenuOpen && (
        <div className="mobile-menu-overlay">
          <div className="mobile-menu-content">
            <nav className="mobile-menu-nav">
              {navigationItems?.map((item) => (
                <button
                  key={item?.path}
                  onClick={() => handleNavigation(item?.path)}
                  className={`mobile-menu-link ${isActivePath(item?.path) ? 'active' : ''}`}
                >
                  <Icon name={item?.icon} size={20} className="inline-block mr-3" />
                  {item?.label}
                </button>
              ))}
              <button
                onClick={() => handleNavigation('/sources-and-transparency')}
                className={`mobile-menu-link ${isActivePath('/sources-and-transparency') ? 'active' : ''}`}
              >
                <Icon name="Info" size={20} className="inline-block mr-3" />
                Sources & Transparency
              </button>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;