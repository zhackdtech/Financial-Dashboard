import React from 'react';

import {
  FaChartArea,
  FaCircleUser,
  FaGear,
  FaTable,
  FaTabletScreenButton,
} from 'react-icons/fa6';
// Admin Imports
import MainDashboard from 'views/admin/dashboard';

import { Icon } from '@chakra-ui/react';

const routes = [
  {
    name: "Dashboard",
    layout: "/admin",
    path: "/default",
    icon: <Icon as={FaChartArea} width="20px" height="20px" color="inherit" />,
    component: MainDashboard,
  },
  {
    name: "Tables",
    layout: "/admin",
    path: "/tables",
    icon: <Icon as={FaTable} width="20px" height="20px" color="inherit" />,
    component: MainDashboard,
  },
  {
    name: "Pages",
    layout: "/admin",
    path: "/pages",
    icon: (
      <Icon
        as={FaTabletScreenButton}
        width="20px"
        height="20px"
        color="inherit"
      />
    ),
    component: MainDashboard,
  },
  {
    name: "Profile",
    layout: "/admin",
    path: "/profile",
    icon: <Icon as={FaCircleUser} width="20px" height="20px" color="inherit" />,
    component: MainDashboard,
  },
  {
    name: "Signin",
    layout: "/admin",
    path: "/signin",
    icon: <Icon as={FaCircleUser} width="20px" height="20px" color="inherit" />,
    component: MainDashboard,
  },
  {
    name: "Settings",
    layout: "/admin",
    path: "/ettings",
    icon: <Icon as={FaGear} width="20px" height="20px" color="inherit" />,
    component: MainDashboard,
  },
];

export default routes;
