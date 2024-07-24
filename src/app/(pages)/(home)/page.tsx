import Footer from "@/app/ui/geral/Footer";
import Header from "@/app/ui/geral/Header";
import Equipe from "@/app/ui/home/Equipe";
import Galeria from "@/app/ui/home/Galeria";
import Hero from "@/app/ui/home/Hero";
import Parceiros from "@/app/ui/home/Parceiros";
import Sobre from "@/app/ui/home/Sobre";

export default function Home() {
  return (
    <section className=" flex flex-col mb-4 gap bg-custom-image md:bg-custom-image-desktop ">
      <div className=" px-8 md:px-32">
        <Header />
        <hr className="border-t-1 border-primary" />
        <Hero></Hero>
        <Sobre></Sobre>
      </div>
      <main className="md:px-32">
        <div className=" flex flex-col px-8 gap-5">
          <Galeria></Galeria>
          <Equipe></Equipe>
          <Parceiros></Parceiros>
        </div>

      </main>
      <footer>
        <Footer></Footer>

      </footer>

    </section>


  );
}
