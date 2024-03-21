"use client";
import {
  Box,
  Flex,
} from '@chakra-ui/react';

import Navbar from './components/navbar/';
import Cbreadcrumb from './components/navbar/Breadcrumb';
import Sidebar from './components/sidebar';

const style = {
  Sidebar: {
    top: "0px",
    left: "0px",
    width: "260px",
    height: "100vh",
    boxShadow: "0px 2px 8px rgba(0,0,0,0.16)",
    position: "fixed",
  },
  MainContent: {
    // marginLeft: "300px",
  },
};
const App = (props) => {
  return (
    <>
      <Flex>
        {/* sidebar for large devices */}
        <Sidebar/>
        <Box style={style.MainContent} className="MainContent" px="5" pt="5">
          <Navbar />
          <Cbreadcrumb CurrentPage="Dashboard" />
        </Box>
      </Flex>
    </>
  );
};

export default App;
