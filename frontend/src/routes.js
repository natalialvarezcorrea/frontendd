import React from 'react';

const Charts = React.lazy(() => import('./Dashboard/views/Charts'));
const Dashboard = React.lazy(() => import('./Dashboard/views/Dashboard'));

const Colors = React.lazy(() => import('./Dashboard/views/Theme/Colors'));
const Typography = React.lazy(() => import('./Dashboard/views/Theme/Typography'));

const Users = React.lazy(() => import('./Dashboard/views/Users/Users'));
const User = React.lazy(() => import('./Dashboard/views/Users/User'));

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/theme', exact: true, name: 'Theme', component: Colors },
  { path: '/theme/colors', name: 'Colors', component: Colors },
  { path: '/theme/typography', name: 'Propiedades', component: Typography },

  { path: '/charts', name: 'Charts', component: Charts },
  { path: '/users', exact: true, name: 'Users', component: Users },
  { path: '/users/:id', exact: true, name: 'User Details', component: User },
];

export default routes;
