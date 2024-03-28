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

import { FaBarsProgress } from 'react-icons/fa6';

// Chakra imports
import {
  Box,
  Grid,
} from '@chakra-ui/react';

import Banner from './components/Banner';
import CardProgress from './components/CardProgress';
import Upload from './components/Upload';

export default function Overview() {
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <Grid
        templateColumns={{
          base: "1fr",
          lg: "1.34fr 1fr 1.62fr",
        }}
        templateRows={{
          base: "repeat(3, 1fr)",
          lg: "1fr",
        }}
        gap={{ base: "20px", xl: "20px" }}
      >
        <Banner
          gridArea="1 / 1 / 2 / 2"
          banner="https://www.readz.com/image/8359264.1620928269000/gradient-backgrounds.webp"
          avatar="https://avatars.githubusercontent.com/u/50767502?v=4"
          name="Zhack D'Tech"
          position="Chief Technological Officer"
          lorem="102"
          dolor="22"
          ipsum="31"
        />
        <CardProgress
          header="Progress Card"
          sub="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
          icon={FaBarsProgress}
          used="20"
          max="100"
        />
        <Upload />
      </Grid>
    </Box>
  );
}
