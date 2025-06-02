import { Outlet } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";
import { Suspense } from "react";
import { Toaster } from "react-hot-toast";
import { ScrollRestoration } from "./scroll-restoration";

export default function Layout() {
  return (
    <div className="w-screen h-screen flex flex-col bg-background text-foreground">
      <Header />
      <div className="flex-1 overflow-y-auto z-10">
        <Suspense>
          <Outlet />
        </Suspense>
      </div>
      <Footer />
      <Toaster
        containerClassName="toast-container"
        containerStyle={{
          top: "calc(50% - 24px)",
        }}
      />
      <ScrollRestoration />
    </div>
  );
}
