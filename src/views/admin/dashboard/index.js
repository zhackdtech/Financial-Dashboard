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

import MiniCalendar from 'components/calendar/MiniCalendar.js';
import MiniStatistics from 'components/card/MiniStatistics';
import IconBox from 'components/icons/IconBox';
import {
  FaMoneyBill,
  FaMoneyBill1Wave,
  FaMoneyBillTransfer,
} from 'react-icons/fa6';

// Chakra imports
import {
  Box,
  Icon,
  SimpleGrid,
  useColorModeValue,
} from '@chakra-ui/react';

import IncomeCompare from './components/IncomeCompare';
import PieCard from './components/PieCard';

export default function UserReports() {
  // Chakra Color Mode
  const brandColor = useColorModeValue("brand.500", "white");
  const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");
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
  const pieChartData = [1500,700];
  return (
    <>
      <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
        {/* start stats card */}
        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 2, "2xl": 4 }}
          gap="20px"
          mb="20px"
          pt="5"
        >
          <MiniStatistics
            startContent={
              <IconBox
                w="56px"
                h="56px"
                bg={boxBg}
                icon={
                  <Icon
                    w="32px"
                    h="32px"
                    as={FaMoneyBill1Wave}
                    color={brandColor}
                  />
                }
              />
            }
            name="Gross income"
            value="₱ 4,536.00"
            growth="12"
          />
          <MiniStatistics
            startContent={
              <IconBox
                w="56px"
                h="56px"
                bg={boxBg}
                icon={
                  <Icon
                    w="32px"
                    h="32px"
                    as={FaMoneyBill1Wave}
                    color={brandColor}
                  />
                }
              />
            }
            name="Net income"
            value="₱ 2,336.00"
            growth="-44"
          />
          <MiniStatistics
            startContent={
              <IconBox
                w="56px"
                h="56px"
                bg={boxBg}
                icon={
                  <Icon
                    w="32px"
                    h="32px"
                    as={FaMoneyBillTransfer}
                    color={brandColor}
                  />
                }
              />
            }
            name="Expenses"
            value="₱ 2,200.0"
            growth="10"
          />
          <MiniStatistics
            startContent={
              <IconBox
                w="56px"
                h="56px"
                bg={boxBg}
                icon={
                  <Icon w="32px" h="32px" as={FaMoneyBill} color={brandColor} />
                }
              />
            }
            name="Account balance"
            value="₱ 1,200.22"
            growth="10"
          />
        </SimpleGrid>
        {/* end stats card */}
        {/* start tables */}
        <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap="20px">
          <IncomeCompare grossGrowth="+22" netGrowth="-13" incomeCompareData={incomeCompareData}/>
          <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap="20px">
            {/* charts here */}
            <PieCard pieChartData={pieChartData} />
            <MiniCalendar h="100%" minW="100%" selectRange={false} />
          </SimpleGrid>
        </SimpleGrid>
        {/* end tables */}
      </Box>
    </>
  );
}
