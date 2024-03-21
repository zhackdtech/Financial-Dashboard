import {
  Box,
  Flex,
  Spacer,
  Button,
  ButtonGroup,
} from "@chakra-ui/react";
import {
  FaGear,
  FaBars,
  FaBell,
  FaMagnifyingGlass,
} from "react-icons/fa6";
import NavSearch from "./Navsearch";
import Nightmode from "./Nightmode";

const Navbar = (props) => {
  return (
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
        <Nightmode />
        <Button bg="transparent" hideFrom="lg">
          <FaBars />
        </Button>
      </ButtonGroup>
    </Flex>
  );
};

export default Navbar;
