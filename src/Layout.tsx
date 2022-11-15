import {
  Button,
  Container,
  Icon,
  Stack,
  StackDivider,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import {
  BsEnvelope,
  BsHouse,
  BsHash,
  BsBell,
  BsBookmark,
  BsList,
  BsPerson,
  BsThreeDots,
  BsHouseFill,
  BsBellFill,
  BsEnvelopeFill,
  BsBookmarkFill,
  BsPersonFill,
} from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import { IconType } from "react-icons/";
import { Link, useLocation } from "react-router-dom";
import FeedScreen from "./pages/FeedScreen";

interface listLink {
  href: string;
  text: string;
  activeIcon: IconType;
  inactiveIcon: IconType;
}

const LINKS: listLink[] = [
  {
    href: "/home",
    text: "Inicio",
    activeIcon: BsHouseFill,
    inactiveIcon: BsHouse,
  },
  {
    href: "/explore",
    text: "Explorar",
    activeIcon: BsHash,
    inactiveIcon: BsHash,
  },
  {
    href: "/notifications",
    text: "Notificaciones",
    activeIcon: BsBellFill,
    inactiveIcon: BsBell,
  },
  {
    href: "/messages",
    text: "Mensajes",
    activeIcon: BsEnvelopeFill,
    inactiveIcon: BsEnvelope,
  },
  {
    href: "/bookmarks",
    text: "Guardados",
    activeIcon: BsBookmarkFill,
    inactiveIcon: BsBookmark,
  },
  {
    href: "/lists",
    text: "Listas",
    activeIcon: BsList,
    inactiveIcon: BsList,
  },
  {
    href: "/user",
    text: "Perfil",
    activeIcon: BsPersonFill,
    inactiveIcon: BsPerson,
  },
  {
    href: "/user",
    text: "Perfil",
    activeIcon: BsPersonFill,
    inactiveIcon: BsPerson,
  },
  {
    href: "/topics",
    text: "Mas opciones",
    activeIcon: BsThreeDots,
    inactiveIcon: BsThreeDots,
  },
];

const Layout: React.FC = () => {
  const { toggleColorMode } = useColorMode();
  const logoColor = useColorModeValue("primary.500", undefined);
  const { pathname } = useLocation();
  return (
    <Container alignSelf="center" maxWidth="container.md" height="100%">
      <Stack direction="row" height="100%" divider={<StackDivider />}>
        <Stack spacing={6} paddingX={6} paddingY={3} minWidth={72}>
          <Icon
            h={6}
            w={6}
            as={FaTwitter}
            onClick={toggleColorMode}
            color={logoColor}
          />
          {LINKS.map((link) => (
            <Link to={link.href} key={link.href}>
              <Stack
                direction="row"
                alignItems="center"
                spacing={4}
                color={pathname === link.href ? "primary.500" : "inherit"}
              >
                <Icon
                  h={6}
                  w={6}
                  as={
                    pathname === link.href ? link.inactiveIcon : link.activeIcon
                  }
                />
                <Text fontSize="lg" fontWeight="bold">
                  {link.text}
                </Text>
              </Stack>
            </Link>
          ))}
          <Button colorScheme="primary" size="lg" width="100%">
            Twittear
          </Button>
        </Stack>
        <Stack width="100%">
          <FeedScreen />
        </Stack>
        
      </Stack>
    </Container>
  );
};
export default Layout;
