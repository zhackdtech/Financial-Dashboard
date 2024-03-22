import {
  FaChartArea,
  FaCircleUser,
  FaList,
  FaLock,
  FaTableCellsLarge,
} from 'react-icons/fa6';

import {
  Box,
  Center,
  Link,
} from '@chakra-ui/react';

const style = {
  Link: {
    top: "120px",
    left: "12px",
    width: "240px",
    height: "64px",
    borderRadius: "8px",
    // boxShadow: "0px 2px 8px rgba(0,0,0,0.16)",
    lineHeight: "-18px",
    verticalAlign: "baseline",
    fontSize: "14px",
    fontFamily: "Manrope",
    fontWeight: 600,
    textDecoration: "none",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
};
const Links = (props) => {
  return (
    <>
      <Box>
        <Box pb="2">
          <Center>
            <Link
              href="#"
              style={style.Link}
              boxShadow="xl"
              borderRadius="xl"
              py="4"
              px="5"
              bg="#432CF4"
              color="#fff"
            >
              <Box p="3" bg="white" borderRadius="xl" color="#432CF4">
                <FaChartArea />
              </Box>
              &nbsp;Dashboard
            </Link>
          </Center>
        </Box>
        <Box pb="2">
          <Center>
            <Link href="#" style={style.Link} py="4" px="5">
              <Box p="3">
                <FaTableCellsLarge />
              </Box>
              Tables
            </Link>
          </Center>
        </Box>
        <Box pb="2">
          <Center>
            <Link href="#" style={style.Link} py="4" px="5">
              <Box p="3">
                <FaList />
              </Box>
              Pages
            </Link>
          </Center>
        </Box>
        <Box pb="2">
          <Center>
            <Link href="#" style={style.Link} py="4" px="5">
              <Box p="3">
                <FaCircleUser  />
              </Box>
              User
            </Link>
          </Center>
        </Box>
        <Box pb="2">
          <Center>
            <Link href="#" style={style.Link} py="4" px="5">
              <Box p="3">
                <FaLock   />
              </Box>
              Sign in
            </Link>
          </Center>
        </Box>
      </Box>
    </>
  );
};
export default Links;
