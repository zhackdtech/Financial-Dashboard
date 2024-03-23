import React from 'react';

// Custom components
import Card from 'components/card/Card.js';
import LineChart from 'components/charts/LineChart';
import {
  FaArrowDown,
  FaArrowUp,
  FaCalendar,
  FaChartColumn,
} from 'react-icons/fa6';

// Chakra imports
import {
  Box,
  Button,
  Flex,
  Icon,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

import {
  incomeCompareData,
  incomeCompareOptions,
} from '../variables/';

export default function IncomeCompare(props) {
  const { ...rest } = props;

  // Chakra Color Mode

  const textColor = useColorModeValue("secondaryGray.900", "white");
  const textColorSecondary = useColorModeValue("secondaryGray.600", "white");
  const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");
  const iconColor = useColorModeValue("brand.500", "white");
  const bgButton = useColorModeValue("secondaryGray.300", "whiteAlpha.100");
  const bgHover = useColorModeValue(
    { bg: "secondaryGray.400" },
    { bg: "whiteAlpha.50" }
  );
  const bgFocus = useColorModeValue(
    { bg: "secondaryGray.300" },
    { bg: "whiteAlpha.100" }
  );
  return (
    <Card
      justifyContent='center'
      align='center'
      direction='column'
      w='100%'
      mb='0px'
      {...rest}>
      <Flex justify='space-between' ps='0px' pe='20px' pt='5px'>
        <Flex align='center' w='100%'>
          <Button
            bg={boxBg}
            fontSize='sm'
            fontWeight='500'
            color={textColorSecondary}
            borderRadius='7px'>
            <Icon
              as={FaCalendar }
              color={textColorSecondary}
              me='4px'
            />
            March 2024
          </Button>
          <Button
            ms='auto'
            align='center'
            justifyContent='center'
            bg={bgButton}
            _hover={bgHover}
            _focus={bgFocus}
            _active={bgFocus}
            w='37px'
            h='37px'
            lineHeight='100%'
            borderRadius='10px'
            {...rest}>
            <Icon as={FaChartColumn} color={iconColor} w='24px' h='24px' />
          </Button>
        </Flex>
      </Flex>
      <Flex w='100%' flexDirection={{ base: "column", lg: "row" }}>
        <Flex flexDirection='column' me='20px' mt='28px'>
          <Text
            color={textColor}
            fontSize='34px'
            textAlign='start'
            fontWeight='700'
            lineHeight='100%'>
            ₱ 3.4k
          </Text>
          <Flex align='center' mb='20px'>
            <Text
              color='secondaryGray.600'
              fontSize='sm'
              fontWeight='500'
              mt='4px'
              me='12px'>
              Net
            </Text>
            <Flex align='center'>
              <Text color={props.netGrowth <0 ? "red.500" : "green.500"} fontSize='sm' fontWeight='700'>
                {props.netGrowth+"%"}
              <Icon as={props.netGrowth <0 ? FaArrowDown : FaArrowUp} color={props.netGrowth <0 ? "red.500" : "green.500"} me='2px' mt='2px' />
              </Text>
            </Flex>
          </Flex>
          <Flex align='center' mb='20px'>
            <Text
              color='secondaryGray.600'
              fontSize='sm'
              fontWeight='500'
              mt='4px'
              me='12px'>
              Gross
            </Text>
            <Flex align='center'>
              <Text color={props.grossGrowth <0 ? "red.500" : "green.500"} fontSize='sm' fontWeight='700'>
                {props.grossGrowth+"%"}
              <Icon as={props.grossGrowth <0 ? FaArrowDown : FaArrowUp} color={props.grossGrowth <0 ? "red.500" : "green.500"} me='2px' mt='2px' />
              </Text>
            </Flex>
          </Flex>
        </Flex>
        <Box minH='260px' minW='75%' mt='auto'>
          <LineChart
            chartData={incomeCompareData}
            chartOptions={incomeCompareOptions}
          />
        </Box>
      </Flex>
    </Card>
  );
}
