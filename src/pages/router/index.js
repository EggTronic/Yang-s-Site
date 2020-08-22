import React from 'react';
import { routerPath } from './routerPath';
import HomePage from '../HomePage/HomePage';
import AboutPage from '../AboutPage/AboutPage';
import ProjectPage from '../ProjectPage/ProjectPage';
import MusicPage from '../MusicPage/MusicPage';

const config = [
  {
    ...routerPath.home,
    exact: true,
    component: <HomePage />
  },
  {
    ...routerPath.about,
    exact: true,
    component: <AboutPage />
  },
  {
    ...routerPath.project,
    exact: true,
    component: <ProjectPage />
  },
  {
    ...routerPath.music,
    exact: true,
    component: <MusicPage />
  }
];

export default config;
