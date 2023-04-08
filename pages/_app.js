import Navigation from "@/components/Navigation";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <main className=" w-full min-h-screen font-outfit">
      <Navigation />
      <Component {...pageProps} />
    </main>
  );
}
