import { Box } from "@chakra-ui/react";
import { FaMagnifyingGlass } from "react-icons/fa6";

const NavSearch = (props) => {
  return (
    <Box className="Search-wrapper" hideBelow="md">
      <input
        className="Search-input"
        type="text"
        placeholder="Search"
        bg="transparent"
      />
      {/* magnifying glass icon */}
      <FaMagnifyingGlass />
    </Box>
  );
};
export default NavSearch;
