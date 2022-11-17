import { Icon, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import { FaTwitter } from "react-icons/fa";

const Logo: React.FC = () => {
 
  const logoColor = useColorModeValue("primary.500", undefined);
  return (
    <Icon
      h={7}
      w={7}
      as={FaTwitter}
      color={logoColor}
    />
  );
};

export default Logo;
