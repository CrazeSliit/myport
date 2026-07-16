import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Message from "./components/Message";
import Gallery from "./components/Gallery";
import Tracks from "./components/Tracks";
import Helmets from "./components/Helmets";
import Store from "./components/Store";
import Partners from "./components/Partners";
import Socials from "./components/Socials";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-background text-foreground">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Message />
        <Gallery />
        <Tracks />
        <Helmets />
        <Store />
        <Partners />
        <Socials />
      </main>
      <Footer />
    </div>
  );
}
