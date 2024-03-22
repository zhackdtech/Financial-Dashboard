"use client";
import {
  Box,
  Center,
} from '@chakra-ui/react';

import Links from './Links';
import ProfileCard from './ProfileCard';

const style = {
  Sidebar: {
    top: "0px",
    left: "0px",
    width: "260px",
    height: "100vh",
    boxShadow: "0px 2px 8px rgba(0,0,0,0.16)",
    position: "fixed",
  },
}
const Sidebar = (props) => {
  return (
    <Box style={style.Sidebar} className="Sidenav">
      <Center p="5">
        <ProfileCard />
      </Center>
      {/* remove this comment if you don't want to use navbar search */}
      {/* <SnSearch/> */}
      <Links />
    </Box>
  );
};
export default Sidebar;
