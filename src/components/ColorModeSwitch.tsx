import { HStack, Switch, Text, useColorMode } from '@chakra-ui/react';

const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const text = colorMode === 'dark' ? 'Dark Mode' : 'Light Mode';
  return (
    <HStack>
      <Switch colorScheme='green' isChecked={colorMode === 'dark'} onChange={toggleColorMode} />
      <Text whiteSpace="nowrap"> {text}</Text>
    </HStack>
  );
};

export default ColorModeSwitch;
