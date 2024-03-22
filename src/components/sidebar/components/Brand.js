import React from 'react';

// Chakra imports
import {
  Center,
  Divider,
} from '@chakra-ui/react';

import ProfileCard from '../ProfileCard/';

export function SidebarBrand() {
  //   Chakra color mode
  // let logoColor = useColorModeValue("navy.700", "white");

  return (
    <>
      <Center>
        <ProfileCard />
      </Center>
      <br />
      <Divider orientation="horizontal" />
    </>
  );
}

export default SidebarBrand;
