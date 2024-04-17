import React from 'react';
import { CgWorkAlt } from 'react-icons/cg';
import { FaReact } from 'react-icons/fa';
import { LuGraduationCap } from 'react-icons/lu';
import corpcommentImg from '@/public/corpcomment.png';
import rmtdevImg from '@/public/rmtdev.png';
import wordanalyticsImg from '@/public/wordanalytics.png';

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Skills',
    hash: '#skills',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
]; // as const;

export const experiencesData = [
  {
    title: 'Graduated from University of the Virgin Islands',
    location: 'St. Thomas, VI',
    description:
      'I graduated after 4 years of studying. I immediately found a job as an IT Specialist and junior front-end developer.',
    icon: React.createElement(LuGraduationCap),
    date: '2008',
  },
  {
    title: 'IT Specialist',
    location: 'Fintrac | St. Thomas, VI',
    description:
      "As an IT Specialist, I've built custom applications used internally for HR and employee management, timesheet management and field data collection and management.",
    icon: React.createElement(CgWorkAlt),
    date: '2008 - 2014',
  },
  {
    title: 'IT Manager',
    location: 'Fintrac | St. Thomas, VI',
    description:
      'Promoted to IT Manager where I provided IT oversight to our US Virgin Islands Home Office. I also managed our core applications - the servers, the database layer, and the application front-end.',
    icon: React.createElement(CgWorkAlt),
    date: '2014 - 2021',
  },
  {
    title: 'IT Director',
    location: 'Fintrac | St. Thomas, VI',
    description:
      'Promoted again to IT Director - providing IT oversight to all our field offices and home offices.',
    icon: React.createElement(CgWorkAlt),
    date: '2021 - 2023',
  },
  {
    title: 'Owner',
    location: 'Brackio Technologies, LLC | St. Thomas, VI',
    description:
      'After Fintrac, I started Brackio - a technology computer that provides IT support as a service.',
    icon: React.createElement(FaReact),
    date: '2023 - Present',
  },
] as const;

export const projectsData = [
  {
    title: 'CorpComment',
    description:
      'I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.',
    tags: ['React', 'Next.js', 'MongoDB', 'Tailwind', 'Prisma'],
    imageUrl: corpcommentImg,
  },
  {
    title: 'rmtDev',
    description:
      'Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.',
    tags: ['React', 'TypeScript', 'Next.js', 'Tailwind', 'Redux'],
    imageUrl: rmtdevImg,
  },
  {
    title: 'Word Analytics',
    description:
      'A public web app for quick analytics on text. It shows word count, character count and social media post limits.',
    tags: ['React', 'Next.js', 'SQL', 'Tailwind', 'Framer'],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  'Java',
  'JavaScript',
  'TypeScript',
  'Redux',
  '.NET',
  'React',
  'Next.js',
  'Angular',
  'Node.js',
  'Expressjs',
  'Git',
  'Tailwindcss',
  'Prisma',
  'SQL',
  'PostgresSQL',
  'mySQL',
  'noSQL',
  'MongoDB',
  'Serverless',
  'VPS',
  'Networking',
] as const;
