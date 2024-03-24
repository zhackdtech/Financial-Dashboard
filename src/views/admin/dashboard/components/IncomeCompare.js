import React from 'react';

// Custom components
import Card from 'components/card/Card.js';
import LineChart from 'components/charts/LineChart';
import {
  FaAngleDown,
  FaArrowDown,
  FaArrowUp,
  FaC,
  FaX,
  FaZ,
} from 'react-icons/fa6';

// Chakra imports
import {
  Box,
  Button,
  Flex,
  Icon,
  Kbd,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

import { incomeCompareOptions } from '../variables/';

export default function IncomeCompare(props) {
  const { ...rest } = props;

  // Chakra Color Mode
  let dropdownBtnBg = useColorModeValue("brand.100", "brand.500");
  const textColor = useColorModeValue("secondaryGray.900", "white");
  return (
    <Card
      justifyContent="center"
      align="center"
      direction="column"
      w="100%"
      mb="0px"
      {...rest}
    >
      <Flex justify="space-between" ps="0px" pe="20px" align="center">
        <Text
          me="auto"
          color={textColor}
          fontSize="xl"
          fontWeight="700"
          lineHeight="100%"
        >
          Comparison
        </Text>
        <Menu>
          <MenuButton
            as={Button}
            rightIcon={<FaAngleDown />}
            borderRadius="lg"
            bg={dropdownBtnBg}
          >
            Dropdown
          </MenuButton>
          <MenuList>
            <MenuItem
              icon={<FaZ />}
              command={
                <>
                  <Kbd>shift</Kbd> + <Kbd>Z</Kbd>
                </>
              }
            >
              Lorem
            </MenuItem>
            <MenuItem
              icon={<FaX />}
              command={
                <>
                  <Kbd>shift</Kbd> + <Kbd>X</Kbd>
                </>
              }
            >
              Ipsum
            </MenuItem>
            <MenuItem
              icon={<FaC />}
              command={
                <>
                  <Kbd>shift</Kbd> + <Kbd>C</Kbd>
                </>
              }
            >
              Dolor
            </MenuItem>
          </MenuList>
        </Menu>
      </Flex>
      <Flex w="100%" flexDirection={{ base: "column", lg: "row" }}>
        <Flex flexDirection="column" me="20px" mt="28px">
          <Text
            color={textColor}
            fontSize="34px"
            textAlign="start"
            fontWeight="700"
            lineHeight="100%"
          >
            ₱ 3.4k
          </Text>
          <Flex align="center" mb="20px">
            <Text
              color="secondaryGray.600"
              fontSize="sm"
              fontWeight="500"
              mt="4px"
              me="12px"
            >
              Net
            </Text>
            <Flex align="center">
              <Text
                color={props.netGrowth < 0 ? "red.500" : "green.500"}
                fontSize="sm"
                fontWeight="700"
              >
                {props.netGrowth + "%"}
                <Icon
                  as={props.netGrowth < 0 ? FaArrowDown : FaArrowUp}
                  color={props.netGrowth < 0 ? "red.500" : "green.500"}
                  me="2px"
                  mt="2px"
                />
              </Text>
            </Flex>
          </Flex>
          <Flex align="center" mb="20px">
            <Text
              color="secondaryGray.600"
              fontSize="sm"
              fontWeight="500"
              mt="4px"
              me="12px"
            >
              Gross
            </Text>
            <Flex align="center">
              <Text
                color={props.grossGrowth < 0 ? "red.500" : "green.500"}
                fontSize="sm"
                fontWeight="700"
              >
                {props.grossGrowth + "%"}
                <Icon
                  as={props.grossGrowth < 0 ? FaArrowDown : FaArrowUp}
                  color={props.grossGrowth < 0 ? "red.500" : "green.500"}
                  me="2px"
                  mt="2px"
                />
              </Text>
            </Flex>
          </Flex>
        </Flex>
        <Box minH="260px" minW="75%" mt="auto">
          <LineChart
            chartData={props.incomeCompareData}
            chartOptions={incomeCompareOptions}
          />
        </Box>
      </Flex>
    </Card>
  );
}
