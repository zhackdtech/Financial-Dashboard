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

import UserTable from './components/UserTable';

const columnsDataComplex = [
  {
    Header: "IMAGE",
    accessor: "image",
  },
  {
    Header: "NAME",
    accessor: "name",
  },
  {
    Header: "ROLE",
    accessor: "role",
  },
  {
    Header: "DATE",
    accessor: "date",
  },
];
const tableDataComplex = 
[
  {
    "image":"https://avatars.githubusercontent.com/u/50767502?v=4",
    "name":"ZhackD'tech",
    "role": "Super User",
    "date": "04 Jan, 2024",
  },
]
export default function Settings() {
  // Chakra Color Mode
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <SimpleGrid
        mb="20px"
        columns={{ sm: 1, md: 2 }}
        spacing={{ base: "20px", xl: "20px" }}
      >
        <UserTable
          columnsData={columnsDataComplex}
          tableData={tableDataComplex}
          tableName="User Table"
        />
      </SimpleGrid>
    </Box>
  );
}
