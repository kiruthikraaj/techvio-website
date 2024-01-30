import Image from "next/image";
import Header from "./ui/header";
import Score from "./ui/score";
import Banner from "./ui/banner";
import Service from "./ui/services";
import Footer from "./ui/footer";

export default function Home() {
  return (
    <>
      <main className="main-section">
        <Header />
        <Banner />
      </main>
      <Service />
      <Score />
      <Footer />
    </>
  );
}
