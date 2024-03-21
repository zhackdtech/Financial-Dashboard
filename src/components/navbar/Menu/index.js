"use client";
import React from 'react';

import { FaBars } from 'react-icons/fa6';

import {
  Box,
  Button,
  Center,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  useDisclosure,
} from '@chakra-ui/react';

import ProfileCard from '../../sidebar/ProfileCard';

const style = {
  Sidebar: {
    top: "0px",
    left: "0px",
    //   position: "fixed",
  },
};

function Sidebar() {
  return (
    <Box style={style.Sidebar}>
      <Center p="5">
        <ProfileCard />
      </Center>
      {/* remove this comment if you don't want to use navbar search */}
      {/* <SnSearch/> */}
    </Box>
  );
}
const Menu = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <>
      <Button bg="transparent" hideFrom="lg" onClick={onOpen}>
        <FaBars />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
        size="xs"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody>
            <Sidebar />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
export default Menu;
