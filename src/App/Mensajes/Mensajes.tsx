import {
    Drawer,
    DrawerCloseButton,
    DrawerContent,
    DrawerHeader,
    DrawerOverlay,
    Icon,
    Stack,
    Text,
    useColorMode,
    useDisclosure
} from "@chakra-ui/react";
import React from "react";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
const Mensajes: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode } = useColorMode();
  return (
    <>
      <Stack
        direction="row"
        onClick={onOpen}
        alignItems="center"
        bg={colorMode === "dark" ? "whiteAlpha.50" : "gray.100"}
        width="25%"
        borderRadius="30px 30px 0 0"
        p={4}
        justifyContent="space-between"
        cursor="pointer"
        position="absolute"
        bottom={0}
        zIndex={100}
        
      >
        <Text fontSize="xl" fontWeight="bold">Mensajes</Text>
        <Icon as={BsFillArrowUpCircleFill} w={6} h={6}/>
      </Stack>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="sm">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Mensajes</DrawerHeader>
        </DrawerContent>
      </Drawer>
    </>
  );
};
export default Mensajes;
