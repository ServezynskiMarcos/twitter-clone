import { Container } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";

import Layout from "./Layout";
import FeedScreen from "./pages/FeedScreen";

const App: React.FC = () => {
  return (
    <Container maxWidth="container.xl" alignSelf="center" paddingX={0} height="100%">
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/feed" element={<FeedScreen />} />
      </Routes>
    </Container>
  );
};

export default App;
