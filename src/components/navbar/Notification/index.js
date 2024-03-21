import { FaBell } from 'react-icons/fa6';

import { Button } from '@chakra-ui/react';

const Notification = (props) => {
  return (
    <Button bg="transparent">
      <FaBell />
    </Button>
  );
};
export default Notification;
