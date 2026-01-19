import { Smartphone, Cpu, Satellite, Radio } from 'lucide-react';
import { NavItem, ServiceItem, StatItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  {
    label: 'Connectivity',
    children: [
      { label: 'IoT SIM & eSIM', href: '#esim' },
      { label: 'SIM Management', href: '#platform' },
      { label: 'Satellite IoT', href: '#satellite' },
      { label: 'LPWA', href: '#lpwa' },
    ]
  },
  {
    label: 'Services',
    children: [
      { label: 'Deployment Services', href: '#deployment' },
    ]
  },
  {
    label: 'Company',
    href: '#contact'
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'esim',
    title: 'Enterprise eSIM',
    description: 'Over-the-air provisioning for global IoT deployments. Eliminate physical swapping and manage connectivity remotely.',
    icon: Smartphone,
    features: ['Remote Provisioning', 'Multi-Profile Support', 'Instant Activation']
  },
  {
    id: 'soldered',
    title: 'Industrial Soldered SIMs',
    description: 'Rugged MFF2 form factors designed for vibration, temperature extremes, and longevity in automotive and industrial use.',
    icon: Cpu,
    features: ['MFF2 Standard', '-40°C to 105°C', '10+ Year Lifespan']
  },
  {
    id: 'satellite',
    title: 'Satellite Connectivity',
    description: 'Gap-free global coverage. Seamless switching between cellular and satellite networks for critical asset tracking.',
    icon: Satellite,
    features: ['Pole-to-Pole Coverage', 'Low Latency LEO', 'Failover Redundancy']
  },
  {
    id: 'traditional',
    title: 'Traditional SIMs',
    description: 'High-grade 2FF, 3FF, and 4FF plastic SIMs optimized for high-volume consumer electronics and legacy hardware.',
    icon: Radio,
    features: ['Triple Cut Form Factor', 'High Volume Logistics', 'Custom Branding']
  }
];

export const STATS: StatItem[] = [
  { label: 'Active Endpoints', value: '100', suffix: 'K' },
  { label: 'Years Experience', value: '20', suffix: '+' },
  { label: 'Countries Covered', value: '190', suffix: '+' },
  { label: 'Uptime SLA', value: '99.99', suffix: '%' },
];