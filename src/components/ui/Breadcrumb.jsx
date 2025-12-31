import React from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../AppIcon';

const Breadcrumb = ({ items = [] }) => {
  const navigate = useNavigate();

  const handleClick = (path) => {
    if (path) {
      navigate(path);
    }
  };

  return (
    <nav className="breadcrumb" aria-label="Breadcrumb">
      {items?.map((item, index) => (
        <div key={index} className="breadcrumb-item">
          {item?.path ? (
            <button
              onClick={() => handleClick(item?.path)}
              className="breadcrumb-link"
            >
              {item?.label}
            </button>
          ) : (
            <span className="text-foreground font-medium">{item?.label}</span>
          )}
          {index < items?.length - 1 && (
            <Icon name="ChevronRight" size={16} className="breadcrumb-separator" />
          )}
        </div>
      ))}
    </nav>
  );
};

export default Breadcrumb;