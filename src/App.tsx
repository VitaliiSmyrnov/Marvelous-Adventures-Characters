import { FC, lazy } from "react";
import { Routes, Route } from "react-router-dom";

import { SharedLayout } from "src/components";

const HomePage = lazy(() => import("src/pages/HomePage/HomePage"));
const CharactersPage = lazy(
  () => import("src/pages/CharactersPage/CharactersPage"),
);

const App: FC = () => {
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
