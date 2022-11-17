import { Icon, Input, Stack, Text, useColorMode, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import { BsThreeDots } from "react-icons/bs";
import Mensajes from "../Mensajes/Mensajes";

const Trending: React.FC = () => {
  const bgColor = useColorModeValue("primary.50", undefined);
  const { colorMode } = useColorMode();
  return (
    <Stack width="40%" alignItems="center" paddingLeft={8} paddingY={2} spacing={4}>
      <Stack width="95%">
        <Input variant="filled" placeholder="Buscar en Twitter"  borderRadius="50px"/>
      </Stack>

      <Stack
        bg={colorMode === "dark" ? "whiteAlpha.50" : "gray.100" }
        width="95%"
        p={4}
        borderRadius="20px"
        spacing={8}
      >
        <Text fontWeight="bold" fontSize="xl">
          Que esta pasando
        </Text>

        <Stack direction="row" justifyContent="space-between">
          <Stack>
            <Text as="sub" fontSize="1xs" color={colorMode === "dark" ? "whiteAlpha.700" : "gray.600" }>
              Tendencias
            </Text>
            <Text fontWeight="bold" fontSize="lg">
              Duko
            </Text>
            <Text as="sup" color={colorMode === "dark" ? "whiteAlpha.700" : "gray.600" }>
              30,8 mil tweets
            </Text>
          </Stack>
          <Icon as={BsThreeDots} />
        </Stack>

        <Stack direction="row" justifyContent="space-between">
          <Stack>
            <Text as="sub" fontSize="1xs" color={colorMode === "dark" ? "whiteAlpha.700" : "gray.600" }>
              Tendencia en Argentina
            </Text>
            <Text fontWeight="bold" fontSize="lg">
              Julian Alvarez
            </Text>
            <Text as="sup" color={colorMode === "dark" ? "whiteAlpha.700" : "gray.600" }>
              50,3 mil tweets
            </Text>
          </Stack>
          <Icon as={BsThreeDots} />
        </Stack>

        <Stack direction="row" justifyContent="space-between">
          <Stack>
            <Text as="sub" fontSize="1xs" color={colorMode === "dark" ? "whiteAlpha.700" : "gray.600" }>
              Tendencia en Argentina
            </Text>
            <Text fontWeight="bold" fontSize="lg">
              Scaloneta
            </Text>
            <Text as="sup" color={colorMode === "dark" ? "whiteAlpha.700" : "gray.600" }>
              130,8 mil tweets
            </Text>
          </Stack>
          <Icon as={BsThreeDots} />
        </Stack>

        <Stack direction="row" justifyContent="space-between">
          <Stack>
            <Text as="sub" fontSize="1xs" color={colorMode === "dark" ? "whiteAlpha.700" : "gray.600" }>
              Tendencia en Argentina
            </Text>
            <Text fontWeight="bold" fontSize="lg">
              #DolarBlue
            </Text>
            <Text as="sup" color={colorMode === "dark" ? "whiteAlpha.700" : "gray.600" }>
              10,8 mil tweets
            </Text>
          </Stack>
          <Icon as={BsThreeDots} />
        </Stack>
        <Text color="primary.500" cursor="pointer">Mostrar más</Text>
      </Stack>
      <Mensajes/>
    </Stack>
  );
};

export default Trending;
