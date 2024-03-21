import {
  Box,
  ButtonGroup,
  Flex,
  Spacer,
} from '@chakra-ui/react';

import Menu from './Menu';
import NavSearch from './Navsearch';
import Nightmode from './Nightmode';
import Notification from './Notification';
import SearchMobile from './SearchMobile/';
import Settings from './Settings';

const Navbar = (props) => {
  return (
    <Flex minWidth="max-content" alignItems="center" gap="2" py="5" boxShadow="lg" borderRadius="xl" px="5">
      <Box>
        <NavSearch />
      </Box>
      <Spacer />
      <ButtonGroup>
        <SearchMobile/>
        <Notification/>
        <Settings/>
        <Nightmode />
        <Menu/>
      </ButtonGroup>
    </Flex>
  );
};

export default Navbar;
