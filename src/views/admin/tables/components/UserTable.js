import React, { useMemo } from 'react';

// Custom components
import Card from 'components/card/Card';
import {
  FaAngleDown,
  FaC,
  FaX,
  FaZ,
} from 'react-icons/fa6';
import {
  useGlobalFilter,
  usePagination,
  useSortBy,
  useTable,
} from 'react-table';

import {
  Avatar,
  Button,
  Flex,
  Kbd,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useColorModeValue,
} from '@chakra-ui/react';

export default function UserTable(props) {
  let dropdownBtnBg = useColorModeValue("brand.100", "brand.500");
  const { columnsData, tableData } = props;

  const columns = useMemo(() => columnsData, [columnsData]);
  const data = useMemo(() => tableData, [tableData]);

  const tableInstance = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    initialState,
  } = tableInstance;
  initialState.pageSize = 5;

  const textColor = useColorModeValue("secondaryGray.900", "white");
  const borderColor = useColorModeValue("gray.200", "whiteAlpha.100");
  return (
    <Card
      direction="column"
      w="100%"
      px="0px"
      overflowX={{ sm: "scroll", lg: "hidden" }}
    >
      <Flex px="25px" justify="space-between" mb="20px" align="center">
        <Text
          color={textColor}
          fontSize="22px"
          fontWeight="700"
          lineHeight="100%"
        >
          {props.tableName}
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
      <Table {...getTableProps()} variant="simple" color="gray.500" mb="24px">
        <Thead>
          {headerGroups.map((headerGroup, index) => (
            <Tr {...headerGroup.getHeaderGroupProps()} key={index}>
              {headerGroup.headers.map((column, index) => (
                <Th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  pe="10px"
                  key={index}
                  borderColor={borderColor}
                >
                  <Flex
                    justify="space-between"
                    align="center"
                    fontSize={{ sm: "10px", lg: "12px" }}
                    color="gray.400"
                  >
                    {column.render("Header")}
                  </Flex>
                </Th>
              ))}
            </Tr>
          ))}
        </Thead>
        <Tbody {...getTableBodyProps()}>
          {page.map((row, index) => {
            prepareRow(row);
            return (
              <Tr {...row.getRowProps()} key={index}>
                {row.cells.map((cell, index) => {
                  let data = "";
                  if (cell.column.Header === "NAME") {
                    data = (
                      <Text color={textColor} fontSize="sm" fontWeight="700">
                        &nbsp;{cell.value}
                      </Text>
                    );
                  } else if (cell.column.Header === "IMAGE") {
                    data = <Avatar name="Just user" src={cell.value} />;
                  } else if (cell.column.Header === "ROLE") {
                    data = (
                      <Text color={textColor} fontSize="sm" fontWeight="700">
                        &nbsp;{cell.value}
                      </Text>
                    );
                  } else if (cell.column.Header === "DATE") {
                    data = (
                      <Text color={textColor} fontSize="sm" fontWeight="700">
                        &nbsp;{cell.value}
                      </Text>
                    );
                  }
                  return (
                    <Td
                      {...cell.getCellProps()}
                      key={index}
                      fontSize={{ sm: "14px" }}
                      minW={{ sm: "150px", md: "200px", lg: "auto" }}
                      borderColor="transparent"
                    >
                      {data}
                    </Td>
                  );
                })}
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </Card>
  );
}
