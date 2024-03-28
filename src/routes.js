import React from 'react';

import {
  FaChartArea,
  FaChartPie,
  FaCircleUser,
  FaGear,
  FaTable,
} from 'react-icons/fa6';
import Charts from 'views/admin/charts';
import MainDashboard from 'views/admin/dashboard';
import Profile from 'views/admin/profile';
import Tables from 'views/admin/tables';

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
    component: Tables,
  },
  {
    name: "Charts",
    layout: "/admin",
    path: "/charts",
    icon: <Icon as={FaChartPie} width="20px" height="20px" color="inherit" />,
    component: Charts,
  },
  {
    name: "Profile",
    layout: "/admin",
    path: "/profile",
    icon: <Icon as={FaCircleUser} width="20px" height="20px" color="inherit" />,
    component: Profile,
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