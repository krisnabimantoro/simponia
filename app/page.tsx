import Image from "next/image";
import { Button } from "@/components/ui/button";
import Navbar from "./Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <section id="home" className=" bg-gradient-to-tr from-primary to-third">
        <div className="container ">
          <div className="flex flex-wrap h-screen">
            {/* <div className="absolute bottom-0 -left-20 w-36 h-48 md:w-72 md:h-72 lg:w-72 lg:h-72 bg-secondary rounded-full blur-3xl bl opacity-30 animate-blob animation-delay-2000"></div>

            <div className="absolute top-0 lg:right-0 w-24 h-24 md:w-80 md:h-80 lg:w-80 lg:h-80 right-10 bg-secondary rounded-full blur-3xl opacity-20 animate-blob animation-delay-4000"></div> */}
            <div className="self-center mx-auto relative">
              <div className="flex flex-wrap justify-center mb-8 gap-4">
                <Image src="/statis/rpl.png" width={50} height={20} className="mr-4" alt="/" />
                <Image src="/statis/game.png" width={50} height={20} className="mr-4" alt="/" />
                <Image src="/statis/ds.png" width={50} height={20} className="mr-4" alt="/" />
                <Image src="/statis/jaringan.png" width={50} height={20} className="mr-4" alt="/" />
              </div>
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

      {/* <section id="step" className="bg-white">
        <div className="container">
          <div className="flex flex-wrap h-96">
            <div className="mt-24 mx-auto relative">
              <h1 className="text-primary font-bold text-2xl">AYO MULAI PORTFOLIO KAMU</h1>
            </div>
          </div>
        </div>
      </section> */}

      <section id="" className="bg-white">
        <div className="container py-16">
          <div className="flex flex-wrap w-full">
            <div className="w-1/2 self-center pl-20">
              <h1 className="text-primary font-bold text-3xl">Apa itu Portfolio?</h1>
              <h2 className="text-justify mt-4 text-black">
                Lorem ipsum dolor sit amet consectetur. Quisque purus risus in purus at a. Tincidunt et sapien donec id integer pulvinar. Eu
                purus accumsan a ornare dictum massa mattis. Suspendisse at dolor{" "}
              </h2>
              <h2 className="text-justify mt-3 text-black">
                Lorem ipsum dolor sit amet consectetur. Quisque purus risus in purus at a. Tincidunt et sapien donec id integer pulvinar. Eu
                purus accumsan a ornare dictum massa mattis. Suspendisse at dolor{" "}
              </h2>
            </div>
            <div className="w-1/2 flex ">
              <Image src="/statis/hero.png" width={380} height={20} className="mx-auto rounded-3xl" alt="/" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="container ">
          <div className="flex bg-gradient-to-tr from-topgrad to-secondary rounded-3xl ">
            <div className="self-center mx-auto">
              <h1 className="text-white text-center mt-16 text-3xl font-bold">Kategori Portfolio</h1>
              <div className="grid grid-cols-4 grid-rows-1 gap-6 pt-12 mb-16 ">
                <div className="border border-white w-56 h-72 rounded-lg p-5">
                  <div className="flex flex-wrap relative">
                    <Image src="/statis/rpl.png" width={65} height={20} className="" alt="/" />
                    <h5 className="font-semibold mt-4">
                      Rekayasa <br /> Perangkat Lunak
                    </h5>
                    <p className="text-xs font-light text-justify ">
                      Lorem ipsum dolor sit amet consectetur. Tellus aliquet amet tortor ut donec. Suscipit tortor cursus est ac.
                    </p>
                    <Image src="/statis/arrow.svg" width={40} height={20} className="mt-5" alt="/" />
                  </div>
                </div>

                <div className="border border-white w-56 h-72 rounded-lg p-5">
                  <div className="flex flex-wrap flex-col relative">
                    <Image src="/statis/game.png" width={65} height={20} className="" alt="/" />
                    <br />
                    <h5 className="font-semibold mt-4">Game <br /> Intelligence</h5>
                    <p className="text-xs font-light text-justify ">
                      Lorem ipsum dolor sit amet consectetur. Tellus aliquet amet tortor ut donec. Suscipit tortor cursus est ac.
                    </p>
                    <Image src="/statis/arrow.svg" width={40} height={20} className="mt-5" alt="/" />
                  </div>
                </div>

                <div className="border border-white w-56 h-72 rounded-lg p-5">
                  <div className="flex flex-wrap relative">
                    <Image src="/statis/ds.png" width={65} height={20} className="" alt="/" />
                    <h5 className="font-semibold mt-4">Rekayasa Perangkat Lunak</h5>
                    <p className="text-xs font-light text-justify ">
                      Lorem ipsum dolor sit amet consectetur. Tellus aliquet amet tortor ut donec. Suscipit tortor cursus est ac.
                    </p>
                    <Image src="/statis/arrow.svg" width={40} height={20} className="mt-5" alt="/" />
                  </div>
                </div>

                <div className="border border-white w-56 h-72 rounded-lg p-5">
                  <div className="flex flex-wrap relative">
                    <Image src="/statis/jaringan.png" width={65} height={20} className="" alt="/" />
                    <h5 className="font-semibold mt-4">Rekayasa Perangkat Lunak</h5>
                    <p className="text-xs font-light text-justify ">
                      Lorem ipsum dolor sit amet consectetur. Tellus aliquet amet tortor ut donec. Suscipit tortor cursus est ac.
                    </p>
                    <Image src="/statis/arrow.svg" width={40} height={20} className="mt-5" alt="/" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
