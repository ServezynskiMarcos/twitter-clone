import { Box, Button, Container, Stack, StackDivider } from "@chakra-ui/react";

import Profile from "../App/NavBar/Profile";
import Logo from "./NavBar/Logo";
import NavBar from "./NavBar/NavBar";
import Rutas from "./Rutas";
const App: React.FC = () => {
  return (
    <Container
      maxWidth="container.xl"
      alignSelf="center"
      paddingX={0}
      height="100%"
    >
      <Stack
        direction="row"
        divider={<StackDivider margin={0} />}
        height="100%"
        spacing={0}
      >
        <Stack justifyContent="space-between" maxWidth={{base: 100, md:275}} width="100%">
          <Stack paddingX={7} paddingY={3} spacing={8}>
            <Stack spacing={7}>
              <Logo />
              <NavBar />
            </Stack>
          </Stack>
          <Stack alignItems="center" display={{base: "none", md:"flex"}}>
            <Button colorScheme="primary" size="lg" width="80%">
              Twittear
            </Button>
          </Stack>
          <Profile />
        </Stack>
        <Box width="100%">
          <Rutas />
        </Box>
      </Stack>
    </Container>
  );
};

export default App;
