import { HStack, Image } from '@chakra-ui/react';
import logo from '../assets/gaming.svg';
import ColorModeSwitch from './ColorModeSwitch';
import SearchInput from './SearchInput';
interface Props {
  onSearch: (searchTerm: string) => void;
}
const Navbar = ({ onSearch }: Props) => {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize="40px"></Image>
      <SearchInput onSeach={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default Navbar;
