import React from 'react';

import Card from 'components/card/Card.js';

// Chakra imports
import {
  Avatar,
  Box,
  Flex,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

export default function Banner(props) {
  const { banner, avatar, name, position, lorem, ipsum, dolor } = props;
  // Chakra Color Mode
  const textColorPrimary = useColorModeValue("secondaryGray.900", "white");
  const textColorSecondary = "gray.400";
  const borderColor = useColorModeValue(
    "white !important",
    "#111C44 !important"
  );
  return (
    <Card mb={{ base: "0px", lg: "20px" }} align='center' h="100%">
      <Box
        bg={`url(${banner})`}
        bgSize='cover'
        borderRadius='16px'
        h='131px'
        w='100%'
      />
      <Avatar
        mx='auto'
        src={avatar}
        h='87px'
        w='87px'
        mt='-43px'
        border='4px solid'
        borderColor={borderColor}
      />
      <Text color={textColorPrimary} fontWeight='bold' fontSize='xl' mt='10px'>
        {name}
      </Text>
      <Text color={textColorSecondary} fontSize='sm'>
        {position}
      </Text>
      <Flex w='max-content' mx='auto' mt='26px'>
        <Flex mx='auto' me='60px' align='center' direction='column'>
          <Text color={textColorPrimary} fontSize='2xl' fontWeight='700'>
            {lorem}
          </Text>
          <Text color={textColorSecondary} fontSize='sm' fontWeight='400'>
            Lorem
          </Text>
        </Flex>
        <Flex mx='auto' me='60px' align='center' direction='column'>
          <Text color={textColorPrimary} fontSize='2xl' fontWeight='700'>
            {ipsum}
          </Text>
          <Text color={textColorSecondary} fontSize='sm' fontWeight='400'>
            Ipsum
          </Text>
        </Flex>
        <Flex mx='auto' align='center' direction='column'>
          <Text color={textColorPrimary} fontSize='2xl' fontWeight='700'>
            {dolor}
          </Text>
          <Text color={textColorSecondary} fontSize='sm' fontWeight='400'>
            Dolor
          </Text>
        </Flex>
      </Flex>
    </Card>
  );
}
