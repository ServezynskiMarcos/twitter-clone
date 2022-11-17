import React from "react";
import { Routes, Route} from "react-router-dom";
import FeedScreen from "../pages/FeedScreen"

const Rutas: React.FC = () => {
  return (
    <Routes>
        <Route path="/home" element={<FeedScreen/>}  />

    </Routes>
  );
};

export default Rutas;
