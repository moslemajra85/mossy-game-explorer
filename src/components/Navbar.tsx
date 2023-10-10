import { HStack, Image, Text } from '@chakra-ui/react'
import logo  from "../assets/controller.svg"

const Navbar = () => {
  return (
    <HStack>
   <Image src={logo} boxSize="60px"></Image>
   <Text>hello there</Text>
    </HStack>
  )
}

export default Navbar