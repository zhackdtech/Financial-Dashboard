"use client";
import {
  Box,
  Center,
  Flex,
  Spacer,
  Button,
  ButtonGroup,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@chakra-ui/react";
// import SnSearch from "./components/sidebar/search";
import ProfileCard from "./components/sidebar/ProfileCard";
import { FaGear, FaBars, FaBell, FaMagnifyingGlass,FaSun  } from "react-icons/fa6";
import NavSearch from "./components/navbar/NavSearch";
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
        <Box p="5" style={style.Sidebar} className="Sidenav">
          <Center p="5">
            <ProfileCard />
          </Center>
          {/* remove this comment if you don't want to use navbar search */}
          {/* <SnSearch/> */}
        </Box>
        <Box style={style.MainContent} className="MainContent" px="5" pt="7">
          <Flex minWidth="max-content" alignItems="center" gap="2" pt="3">
            <Box>
              <NavSearch />
            </Box>
            <Spacer />
            <ButtonGroup>
              <Button bg="transparent" hideFrom="md">
                <FaMagnifyingGlass />
              </Button>
              <Button bg="transparent">
                <FaGear />
              </Button>
              <Button bg="transparent">
                <FaBell />
              </Button>
              <Button bg="transparent">
                <FaSun  />
              </Button>
              <Button bg="transparent" hideFrom="lg">
                <FaBars />
              </Button>
            </ButtonGroup>
          </Flex>
          <Breadcrumb px="4" py="5">
            <BreadcrumbItem>
              <BreadcrumbLink href="#">SysGo</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <BreadcrumbLink href="#">FD</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink href="#">Dashboard</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </Box>
      </Flex>
    </>
  );
};

export default App;
