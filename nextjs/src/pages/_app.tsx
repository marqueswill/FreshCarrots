import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Provider from "@/components/provider";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <>
      <Provider>
        <div>
          <Navbar />
          <Component {...pageProps} />
          <Footer />
        </div>
      </Provider>
    </>
  );
}
