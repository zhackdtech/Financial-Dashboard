"use client";
import { FaMagnifyingGlass } from "react-icons/fa6";
import "./App.css";
import {
  Box,
  Center,
  InputGroup,
  InputRightAddon,
  Input,
  Button,
} from "@chakra-ui/react";
import SnSearch from "./components/sidebar/search";
import ProfileCard from "./components/sidebar/ProfileCard";
const style = {
  Sidebar: {
    top: "0px",
    left: "0px",
    width: "260px",
    height: "100vh",
    boxShadow: "0px 2px 8px rgba(0,0,0,0.16)",
    position: "fixed",
  },
};
const App = (props) => {
  return (
    <>
      {/* sidebar for large devices */}
      <Box p="5" style={style.Sidebar}>
        <Center p="5">
          <ProfileCard />
        </Center>
        <SnSearch/>
      </Box>
    </>
  );
};

export default App;
