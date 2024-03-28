import React from 'react';

// Custom components
import Card from 'components/card/Card.js';
import IconBox from 'components/icons/IconBox';

// Chakra imports
import {
  Box,
  Flex,
  Icon,
  Progress,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

export default function CardProgress(props) {
  // Chakra Color Mode
  const textColorPrimary = useColorModeValue("secondaryGray.900", "white");
  const brandColor = useColorModeValue("brand.500", "white");
  const textColorSecondary = "gray.400";
  const box = useColorModeValue("secondaryGray.300", "whiteAlpha.100");
  return (
    <Card mb={{ base: "0px", lg: "20px" }} align="center" h="100%">
      <Flex w="100%">
      </Flex>
      <IconBox
        mx="auto"
        h="100px"
        w="100px"
        icon={<Icon as={props.icon} color={brandColor} h="46px" w="46px" />}
        bg={box}
      />
      <Text color={textColorPrimary} fontWeight="bold" fontSize="2xl" mt="10px">
        {props.header}
      </Text>
      <Text
        color={textColorSecondary}
        fontSize="md"
        maxW={{ base: "100%", xl: "80%", "3xl": "60%" }}
        mx="auto"
      >
        {props.sub}
      </Text>
      <Box w="100%" mt="auto">
        <Flex w="100%" justify="space-between" mb="10px">
          <Text color={textColorSecondary} fontSize="sm" maxW="40%">
            {props.used+"%"}
          </Text>
          <Text color={textColorSecondary} fontSize="sm" maxW="40%">
            {props.max+"%"}
          </Text>
        </Flex>
        <Progress
          align="start"
          colorScheme="brandScheme"
          value={(props.used / props.max) * 100}
          w="100%"
        />
      </Box>
    </Card>
  );
}
