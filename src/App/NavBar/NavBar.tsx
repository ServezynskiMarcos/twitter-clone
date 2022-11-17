import {
  Icon,
  Stack, Text
} from "@chakra-ui/react";
import React from "react";
import { IconType } from "react-icons/";
import {
  BsBell,
  BsBellFill,
  BsBookmark,
  BsBookmarkFill,
  BsEnvelope,
  BsEnvelopeFill,
  BsHash,
  BsHouse,
  BsHouseFill,
  BsList,
  BsPerson,
  BsPersonFill,
  BsThreeDots
} from "react-icons/bs";
import { Link, useLocation } from "react-router-dom";

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
    href: "/topics",
    text: "Mas opciones",
    activeIcon: BsThreeDots,
    inactiveIcon: BsThreeDots,
  },
];

const NavBar: React.FC = () => {
  const { pathname } = useLocation();
  return (
    <Stack fontSize="xl" fontWeight="bold" spacing={7} width="100%">
      {LINKS.map((link) => (
        <Link to={link.href} key={link.href}>
          <Stack
            direction="row"
            alignItems="center"
            spacing={5}
            color={pathname === link.href ? "primary.500" : "inherit"}
          >
            <Icon
              h={6}
              w={6}
              as={pathname === link.href ? link.activeIcon : link.inactiveIcon}
            />
            <Text fontSize={{base: 0, md:"lg"}} fontWeight="bold">
              {link.text}
            </Text>
          </Stack>
        </Link>
      ))}
    </Stack>
  );
};
export default NavBar;
