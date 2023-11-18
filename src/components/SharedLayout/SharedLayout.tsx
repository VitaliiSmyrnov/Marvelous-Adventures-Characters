import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";

import { Header, Footer } from "src/components";

export const SharedLayout: React.FC = () => {
  return (
    <div>
      <Header />

      <main>
        <Suspense fallback={<p>Loading...</p>}>
          <Outlet />
        </Suspense>
      </main>

      <Footer />
    </div>
  );
};
