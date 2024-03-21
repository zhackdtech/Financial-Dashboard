import { FaMagnifyingGlass } from "react-icons/fa6";
import { InputGroup, InputRightAddon, Input } from "@chakra-ui/react";
const defProps = {
  Placeholder: "Search here...",
  Icon: <FaMagnifyingGlass />,
};
const Search = (props) => {
  return (
    <InputGroup>
      <Input type="text" placeholder={defProps.Placeholder} />
      <InputRightAddon>{defProps.Icon}</InputRightAddon>
    </InputGroup>
  );
};
export default Search;
