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
    "role": "Developer",
    "date": "01 Aug, 2023",
  },
  {
    "image":"https://scontent.fmnl13-2.fna.fbcdn.net/v/t39.30808-6/311092704_5485674428166550_9128903111187655293_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeF5-maKfmMqWtNZeNcIh6WHLGNl06BI2O4sY2XToEjY7joGzuEf6PQyPeQBH_co4LpHvIJAlLFL7R0XLe6JQO6U&_nc_ohc=6F3pGttSAV8AX851fFq&_nc_ht=scontent.fmnl13-2.fna&cb_e2o_trans=t&oh=00_AfAjvBws0OoR_rBT7sNA_wvcvFH9npTReYs5YlE2ElvZNQ&oe=66060855",
    "name":"Israel Breta",
    "role": "Chief  Officer",
    "date": "01 Aug, 2023",
  },
  {
    "image":"https://scontent.fmnl13-2.fna.fbcdn.net/v/t39.30808-6/361612970_9572018246206090_3416638925633026292_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHgYw56bxra3-OWBJ18zM5P1PI_dH6vOCzU8j90fq84LNXTAXVOfBQJVnXH1R1jWrlwR2oHrPe-Y7UUG9zGIAmQ&_nc_ohc=qkJVOWpZ-wUAX93GhXX&_nc_ht=scontent.fmnl13-2.fna&cb_e2o_trans=t&oh=00_AfBsbbRz4_hMnbCkJvz6P-RKDLrOAHb2CNrprQNzGAi7Qg&oe=66073ACE",
    "name":"Dijey Abadier",
    "role": "Human Resources Manager",
    "date": "01 Aug, 2023",
  },
  {
    "image":"https://scontent.fmnl9-4.fna.fbcdn.net/v/t39.30808-6/363296663_222519860760093_594093628018295868_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGjU1YRB_nS55kkNYN0rrVbcf6L0uyAhClx_ovS7ICEKfLdGRVtfSU90kMY6lZTZ3HPwGrL-6l8B-lgxYZ7Yll6&_nc_ohc=_fjvyzGWkigAX94lEU3&_nc_ht=scontent.fmnl9-4.fna&cb_e2o_trans=t&oh=00_AfCmuaVJeKEWwxGO1O68-tjy6vLQ5DSHApWtxGxvrZjVMw&oe=6605DE18",
    "name":"Glaiza Barugo",
    "role": "Sales/Admin Officer",
    "date": "01 Aug, 2023",
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
