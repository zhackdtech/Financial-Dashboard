/*!
  _   _  ___  ____  ___ ________  _   _   _   _ ___   
 | | | |/ _ \|  _ \|_ _|__  / _ \| \ | | | | | |_ _| 
 | |_| | | | | |_) || |  / / | | |  \| | | | | || | 
 |  _  | |_| |  _ < | | / /| |_| | |\  | | |_| || |
 |_| |_|\___/|_| \_\___/____\___/|_| \_|  \___/|___|
                                                                                                                                                                                                                                                                                                                                       
=========================================================
* Horizon UI - v1.1.0
=========================================================

* Product Page: https://www.horizon-ui.com/
* Copyright 2023 Horizon UI (https://www.horizon-ui.com/)

* Designed and Coded by Simmmple

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

import React from 'react';

// Chakra imports
import {
  Box,
  SimpleGrid,
} from '@chakra-ui/react';

import Banner from './components/Banner';

export default function Overview() {
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <SimpleGrid columns={{ base: 1, md: 1, xl: 3 }} gap="20px">
        <Banner
          banner="https://www.readz.com/image/8359264.1620928269000/gradient-backgrounds.webp"
          avatar="https://avatars.githubusercontent.com/u/50767502?v=4"
          name="Zhack D'Tech"
          position="Chief Technological Officer"
          lorem="102"
          dolor="22"
          ipsum="31"
        />
      </SimpleGrid>
    </Box>
  );
}
