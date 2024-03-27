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

import ExpenseTable from './components/ExpenseTable';
import IOTable from './components/IOTable.js';
import TransactionTables from './components/Transactions';
import UserTable from './components/UserTable';

const columnsDataUserTable = [
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
const tableDataUserTable = [
  {
    image: "https://avatars.githubusercontent.com/u/50767502?v=4",
    name: "ZhackD'tech",
    role: "Developer",
    date: "01 Aug, 2023",
  },
  {
    image:
      "https://scontent.fmnl13-2.fna.fbcdn.net/v/t39.30808-6/311092704_5485674428166550_9128903111187655293_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeF5-maKfmMqWtNZeNcIh6WHLGNl06BI2O4sY2XToEjY7joGzuEf6PQyPeQBH_co4LpHvIJAlLFL7R0XLe6JQO6U&_nc_ohc=6F3pGttSAV8AX851fFq&_nc_ht=scontent.fmnl13-2.fna&cb_e2o_trans=t&oh=00_AfAjvBws0OoR_rBT7sNA_wvcvFH9npTReYs5YlE2ElvZNQ&oe=66060855",
    name: "Israel Breta",
    role: "Chief Innovation Officer",
    date: "01 Aug, 2023",
  },
  {
    image:
      "https://scontent.fmnl13-2.fna.fbcdn.net/v/t39.30808-6/361612970_9572018246206090_3416638925633026292_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHgYw56bxra3-OWBJ18zM5P1PI_dH6vOCzU8j90fq84LNXTAXVOfBQJVnXH1R1jWrlwR2oHrPe-Y7UUG9zGIAmQ&_nc_ohc=qkJVOWpZ-wUAX93GhXX&_nc_ht=scontent.fmnl13-2.fna&cb_e2o_trans=t&oh=00_AfBsbbRz4_hMnbCkJvz6P-RKDLrOAHb2CNrprQNzGAi7Qg&oe=66073ACE",
    name: "Dijey Abadier",
    role: "Human Resources Manager",
    date: "01 Aug, 2023",
  },
  {
    image:
      "https://scontent.fmnl9-4.fna.fbcdn.net/v/t39.30808-6/363296663_222519860760093_594093628018295868_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGjU1YRB_nS55kkNYN0rrVbcf6L0uyAhClx_ovS7ICEKfLdGRVtfSU90kMY6lZTZ3HPwGrL-6l8B-lgxYZ7Yll6&_nc_ohc=_fjvyzGWkigAX94lEU3&_nc_ht=scontent.fmnl9-4.fna&cb_e2o_trans=t&oh=00_AfCmuaVJeKEWwxGO1O68-tjy6vLQ5DSHApWtxGxvrZjVMw&oe=6605DE18",
    name: "Glaiza Barugo",
    role: "Sales/Admin Officer",
    date: "01 Aug, 2023",
  },
];

const columnsDataTransaction = [
  {
    Header: "DATE",
    accessor: "date",
  },
  {
    Header: "NAME",
    accessor: "name",
  },
  {
    Header: "COST",
    accessor: "cost",
  },
  {
    Header: "STATUS",
    accessor: "status",
  },
];
const tableDataTransactions = [
  {
    date: "12 Mar, 2024",
    name: "Visual Studio Enterprise",
    cost: "$ 100.00",
    status: "Pending",
  },
  {
    date: "7 Mar, 2024",
    name: "Adobe CC",
    cost: "$ 120.22",
    status: "Success",
  },
  {
    date: "2 Mar, 2024",
    name: "SMS API",
    cost: "$ 105.01",
    status: "Failed",
  },
];
const columnsDataOutcome = [
  {
    Header: "NAME",
    accessor: "name",
  },
  {
    Header: "TOTAL",
    accessor: "total",
  },
];
const tableDataOutcome = [
  {
    name: "SMS API",
    total: "$120.00",
  },
  {
    name: "Hosting Site",
    total: "$160.00",
  },
];

const columnsDataIncome = [
  {
    Header: "NAME",
    accessor: "name",
  },
  {
    Header: "TOTAL",
    accessor: "total",
  },
];
const tableDataIncome = [
  {
    name: "SysGo DEMS",
    total: "$420.00",
  },
  {
    name: "SysGo TM",
    total: "$320.00",
  },
  {
    name: "SysGo FD",
    total: "$520.00",
  },
];
const columnsDataExpenses = [
  {
    Header: "NAME",
    accessor: "name",
  },
  {
    Header: "STATUS",
    accessor: "status",
  },
  {
    Header: "DATE",
    accessor: "date",
  },
  {
    Header: "TOTAL",
    accessor: "total",
  },
  {
    Header: "BALANCE",
    accessor: "balance",
  },
];
const tableDataExpenses = [
  {
    name: "Github Enterprise",
    status: "Approved",
    date: "23 Mar, 2024",
    total: "$19.25",
    balance: "$0.00",
  },
  {
    name: "Office 365",
    status: "Declined",
    date: "13 Mar, 2024",
    total: "$469.00",
    balance: "$120.00",
  },
  {
    name: "Visual Studio Enterprise",
    status: "Declined",
    date: "21 Feb, 2024",
    total: "$250.00",
    balance: "$10.00",
  },
  {
    name: "Minecraft",
    status: "Approved",
    date: "2 Jan, 2024",
    total: "$39.99",
    balance: "$0.00",
  },
];
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
          columnsData={columnsDataUserTable}
          tableData={tableDataUserTable}
          tableName="User Table"
        />
        <TransactionTables
          columnsData={columnsDataTransaction}
          tableData={tableDataTransactions}
          tableName="Transactions"
        />
      </SimpleGrid>
      <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap="20px" mb="20px">
        <ExpenseTable
          columnsData={columnsDataExpenses}
          tableData={tableDataExpenses}
        />
        <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap="20px">
          {/* charts here */}
          <IOTable
            heading="Income"
            columnsData={columnsDataIncome}
            tableData={tableDataIncome}
          />
          <IOTable
            heading="Outcome"
            columnsData={columnsDataOutcome}
            tableData={tableDataOutcome}
          />
        </SimpleGrid>
      </SimpleGrid>
    </Box>
  );
}
