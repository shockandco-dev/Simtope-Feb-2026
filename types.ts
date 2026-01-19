import React from 'react';

export interface NavItem {
  label: string;
  href?: string;
  children?: NavItem[];
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  features: string[];
}

export interface StatItem {
  label: string;
  value: string;
  suffix?: string;
}

// Added ChatMessage interface to support the AI assistant component
export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}
