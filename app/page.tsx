import Image from "next/image";
import { Button } from "@/components/ui/button";
import Navbar from "./Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <section className=" bg-gradient-to-r from-primary to-third">
        <div className="container ">
          <div className="flex flex-wrap h-screen">
            {/* <div className="absolute bottom-0 -left-20 w-36 h-48 md:w-72 md:h-72 lg:w-72 lg:h-72 bg-secondary rounded-full blur-3xl bl opacity-30 animate-blob animation-delay-2000"></div>

            <div className="absolute top-0 lg:right-0 w-24 h-24 md:w-80 md:h-80 lg:w-80 lg:h-80 right-10 bg-secondary rounded-full blur-3xl opacity-20 animate-blob animation-delay-4000"></div> */}
            <div className="self-center mx-auto relative">
              <h1 className="text-center text-5xl">
                Selamat Datang di <span className="font-bold">Simponia</span>
              </h1>
              <h3 className="text-center font-light text-xl mt-2">Showcase your project and skill: Your Portfolio, Our Expertise</h3>
              <Button className="mt-5 mx-auto max-w-max flex bg-white text-primary font-medium border p-6 rounded-xl hover:bg-transparent hover:text-white hover:border-white">
                Buat Portofolio
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
