import Home from "@/components/sections/Home";
import About from "@/components/sections/About";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Skill from "@/components/sections/Skill";
import Contact from "@/components/sections/Contact";
import ModalNotification from "@/components/ModalNotification";

function Page() {
  return (
    <>
      <ModalNotification />
      <Header />
      <main className="container-custom px-2.5 xl:px-0">
        <Home />
        <About />
        <Skill />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default Page;
