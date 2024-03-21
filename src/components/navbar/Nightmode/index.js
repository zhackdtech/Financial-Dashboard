import { Button, useColorMode } from "@chakra-ui/react";
// import {useColorMode} from "react";
import { FaSun, FaMoon } from "react-icons/fa6";
const Nightmode = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <header>
      <Button bg="transparent" onClick={toggleColorMode}>
        {colorMode === "light" ? <FaMoon /> : <FaSun />}
      </Button>
    </header>
  );
};
export default Nightmode;
