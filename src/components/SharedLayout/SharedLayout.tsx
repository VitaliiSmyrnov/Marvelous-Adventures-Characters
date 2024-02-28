import { FC, Suspense } from "react";
import { Outlet } from "react-router-dom";

import { Header, Footer } from "src/components";

export const SharedLayout: FC = () => {
  return (
    <div className="relative mx-auto flex min-h-screen min-w-[320px] max-w-[375px] flex-col md:max-w-[768px] lg:max-w-[1440px]">
      <Header />

      <main className="flex-1">
        <Suspense fallback={<p>Loading...</p>}>
          <Outlet />
        </Suspense>
      </main>

      <Footer />
    </div>
  );
};
