import { HStack, Image } from '@chakra-ui/react';
import logo from '../assets/gaming.svg';
import ColorModeSwitch from './ColorModeSwitch';

const Navbar = () => {
  return (
    <HStack justifyContent={'space-between'} padding="10px">
      <Image src={logo} boxSize="40px"></Image>
      <ColorModeSwitch />
     </HStack>
  );
};

export default Navbar;
