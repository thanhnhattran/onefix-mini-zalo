import Header from "./header";
import Footer from "./footer";
import { Toaster } from "react-hot-toast";
import { ScrollRestoration } from "./scroll-restoration";
import Page from "./page";

export default function Layout() {
  return (
    <div className="w-screen h-screen flex flex-col bg-background text-foreground">
      <Header />
      <Page />
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
