import React, { lazy } from "react";
import { Routes, Route } from "react-router-dom";

import { SharedLayout } from "src/components";

const HomePage = lazy(() => import("src/pages/HomePage"));
const CharactersPage = lazy(() => import("src/pages/CharactersPage"));

const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="characters" element={<CharactersPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
