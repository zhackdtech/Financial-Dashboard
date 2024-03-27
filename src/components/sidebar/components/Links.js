/* eslint-disable */
import React from 'react';

import {
  NavLink,
  useLocation,
} from 'react-router-dom';

// chakra imports
import {
  Box,
  Flex,
  HStack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

export function SidebarLinks(props) {
  //   Chakra color mode
  let location = useLocation();
  // bg of links
  let activeColor = useColorModeValue("navy.500", "#7551ff");
  let inactiveColor = useColorModeValue("white", "transparent");
  // colors for the Link text
  let inactiveText = useColorModeValue("navy.700", "white");
  let activeText = useColorModeValue("white", "white");
  // colors for the icon
  let activeIcon = useColorModeValue("navy.500", "#7551ff");
  let inactiveIcon = useColorModeValue("navy.700");
  // the icon bg
  let activeIconBg = useColorModeValue("white", "white");
  let inactiveIconBg = useColorModeValue("transparent");

  let textColor = useColorModeValue("secondaryGray.500", "white");
  let brandColor = useColorModeValue("brand.500", "brand.400");
  const { routes } = props;

  // verifies if routeName is the one active (in browser input)
  const activeRoute = (routeName) => {
    return location.pathname.includes(routeName);
  };

  // this function creates the links from the secondary accordions (for example auth -> sign-in -> default)
  const createLinks = (routes) => {
    return routes.map((route, index) => {
      if (route.category) {
        return (
          <>
            <Text
              fontSize={"md"}
              color={activeColor}
              fontWeight="bold"
              mx="auto"
              ps={{
                sm: "10px",
                xl: "16px",
              }}
              pt="18px"
              pb="12px"
              key={index}
            >
              {route.name}
            </Text>
            {createLinks(route.items)}
          </>
        );
      } else if (
        route.layout === "/admin" ||
        route.layout === "/auth" ||
        route.layout === "/rtl"
      ) {
        return (
          <NavLink key={index} to={route.layout + route.path}>
            {route.icon ? (
              <Box>
                <HStack px="1">
                  <Flex
                    w="260px"
                    alignItems="center"
                    justifyContent="center"
                    px="3"
                    py="4"
                    mb="4"
                    borderRadius="lg"
                    bg={
                      activeRoute(route.path.toLowerCase())
                        ? activeColor
                        : inactiveColor
                    }
                    boxShadow={
                      activeRoute(route.path.toLowerCase()) ? "lg" : ""
                    }
                  >
                    <Box
                      borderRadius="lg"
                      color={
                        activeRoute(route.path.toLowerCase())
                          ? activeIcon
                          : inactiveIcon
                      }
                      px="2"
                      pt="2"
                      bg={
                        activeRoute(route.path.toLowerCase())
                          ? activeIconBg
                          : inactiveIconBg
                      }
                    >
                      {route.icon}
                    </Box>
                    &nbsp;
                    <Text
                      me="auto"
                      color={
                        activeRoute(route.path.toLowerCase())
                          ? activeText
                          : inactiveText
                      }
                      fontWeight={
                        activeRoute(route.path.toLowerCase())
                          ? "bold"
                          : "normal"
                      }
                    >
                      {route.name}
                    </Text>
                  </Flex>
                  {/* <Box
                    h='36px'
                    w='4px'
                    bg={
                      activeRoute(route.path.toLowerCase())
                        ? brandColor
                        : "transparent"
                    }
                    borderRadius='5px'
                  /> */}
                </HStack>
              </Box>
            ) : (
              <Box>
                <HStack
                  spacing={
                    activeRoute(route.path.toLowerCase()) ? "22px" : "26px"
                  }
                  py="5px"
                  ps="10px"
                >
                  <Text
                    me="auto"
                    color={
                      activeRoute(route.path.toLowerCase())
                        ? activeColor
                        : inactiveColor
                    }
                    fontWeight={
                      activeRoute(route.path.toLowerCase()) ? "bold" : "normal"
                    }
                  >
                    {route.name}
                  </Text>
                  <Box h="36px" w="4px" bg="brand.400" borderRadius="5px" />
                </HStack>
              </Box>
            )}
          </NavLink>
        );
      }
    });
  };
  //  BRAND
  return createLinks(routes);
}

export default SidebarLinks;
