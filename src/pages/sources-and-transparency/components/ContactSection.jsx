import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e?.target?.name]: e?.target?.value
    });
  };

  const handleSubmit = (e) => {
    e?.preventDefault();
    console.log('Contact form submitted:', formData);
    alert('Thank you for your inquiry. We will respond within 48 hours.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactMethods = [
    {
      icon: 'Mail',
      title: 'Email',
      value: 'transparency@onoeclarity.in',
      description: 'For general inquiries and transparency questions'
    },
    {
      icon: 'Phone',
      title: 'Phone',
      value: '+91 11 2345 6789',
      description: 'Monday to Friday, 9:00 AM - 6:00 PM IST'
    },
    {
      icon: 'MapPin',
      title: 'Address',
      value: 'Constitutional Research Center, New Delhi 110001',
      description: 'Visit by appointment only'
    }
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
      <div className="bg-card border border-border rounded-lg p-4 md:p-6 lg:p-8">
        <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-4 md:mb-6 font-heading">
          Contact Us
        </h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            label="Full Name"
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData?.name}
            onChange={handleChange}
            required
          />
          <Input
            label="Email Address"
            type="email"
            name="email"
            placeholder="your.email@example.com"
            value={formData?.email}
            onChange={handleChange}
            required
          />
          <Input
            label="Subject"
            type="text"
            name="subject"
            placeholder="What is your inquiry about?"
            value={formData?.subject}
            onChange={handleChange}
            required
          />
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Message
            </label>
            <textarea
              name="message"
              rows="4"
              className="w-full px-3 py-2 text-sm border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              placeholder="Describe your inquiry in detail..."
              value={formData?.message}
              onChange={handleChange}
              required
            />
          </div>
          <Button type="submit" variant="default" fullWidth>
            Submit Inquiry
          </Button>
        </form>
      </div>
      <div className="space-y-4 md:space-y-6">
        <div className="bg-muted rounded-lg p-4 md:p-6">
          <h3 className="text-lg md:text-xl font-semibold text-foreground mb-4 font-heading">
            Get in Touch
          </h3>
          <p className="text-sm md:text-base text-muted-foreground mb-4 md:mb-6">
            We are committed to transparency and welcome all inquiries about our sources, methodology, and operations.
          </p>
          <div className="space-y-4">
            {contactMethods?.map((method, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name={method?.icon} size={20} className="text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm md:text-base font-semibold text-foreground mb-1">
                    {method?.title}
                  </h4>
                  <p className="text-sm md:text-base text-foreground font-medium mb-1">
                    {method?.value}
                  </p>
                  <p className="text-xs md:text-sm text-muted-foreground">
                    {method?.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 md:p-6">
          <div className="flex items-start gap-3">
            <Icon name="Info" size={24} className="text-primary flex-shrink-0" />
            <div>
              <h4 className="text-sm md:text-base font-semibold text-foreground mb-2">
                Response Time
              </h4>
              <p className="text-xs md:text-sm text-muted-foreground">
                We aim to respond to all transparency inquiries within 48 hours. For urgent matters related to content accuracy, please mark your subject line with "URGENT".
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;