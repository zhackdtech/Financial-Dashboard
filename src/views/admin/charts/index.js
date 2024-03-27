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

import {
  FaMoneyBillWave,
  FaMoneyCheckDollar,
} from 'react-icons/fa6';

// Chakra imports
import {
  Box,
  SimpleGrid,
} from '@chakra-ui/react';

import BarChartSecond from './components/BarChart2';
import BudgetCard from './components/BudgetCard';
import IncomeBar from './components/IncomeBar';
import IncomeCompare from './components/IncomeCompare';
import PieCard from './components/PieCard';

const incomeCompareData = [
  {
    name: "Gross",
    data: [1500, 1640, 1480, 1860, 1490, 1680],
  },
  {
    name: "Net",
    data: [1300, 1400, 1240, 1460, 1200, 1460],
  },
];
const barChartDataDailyTraffic = [
  {
    name: "Transactions",
    data: [2000, 3000, 4000, 2000, 4500, 5000, 3000],
  },
];
const pieChartData = [1500, 700];

const barChartSecondDataConsumption = [
  {
    name: "Lorem A:",
    data: [400, 370, 330, 390, 320, 350, 360, 320, 380],
  },
  {
    name: "Ipsum B",
    data: [400, 370, 330, 390, 320, 350, 360, 320, 380],
  },
  {
    name: "Dolor C",
    data: [500, 370, 330, 390, 320, 350, 360, 320, 380],
  },
];
export default function UserReports() {
  return (
    <>
      <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
        {/* start tables */}
        <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap="20px" mb="20px">
          {/* 1 big chart here */}
          <IncomeCompare
            grossGrowth="+22"
            netGrowth="-13"
            incomeCompareData={incomeCompareData}
          />
          <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap="20px">
            {/* 2x charts here */}
            <IncomeBar
              barChartDataDailyTraffic={barChartDataDailyTraffic}
              stat="-20"
              header="123"
              sub="transactions"
              title="March 2024"
            />
            <PieCard pieChartData={pieChartData} />
          </SimpleGrid>
        </SimpleGrid>
        <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap="20px" mb="20px">
          <BarChartSecond
            barChartDataConsumption={barChartSecondDataConsumption}
          />
          <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap="20px">
            <BudgetCard
              header="Current Budget"
              sub="Lorem ipsum dolor sit amet"
              icon={FaMoneyCheckDollar}
              used="100"
              max="1000"
            />
            <BudgetCard
              header="Personal Budget"
              sub="Lorem ipsum dolor sit amet"
              icon={FaMoneyBillWave }
              used="230"
              max="1190"
            />
          </SimpleGrid>
        </SimpleGrid>
      </Box>
    </>
  );
}
