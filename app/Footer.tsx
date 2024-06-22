import Image from "next/image";
import React from "react";

const footer = () => {
  return (
    <div className="bg-grad">
      <div className="container w-full">
        <div className="flex flex-wrap justify-center  py-20 ">
          <div className="flex flex-col ">
            <div className="flex items-center">
              <Image src={"/statis/logo_simponia.webp"} alt="" width={50} height={50} />
              <h1 className="ml-4 font-medium text-3xl ">Simponia</h1>
            </div>
            <p className="w-96 font-light text-sm text-justify mt-5">
              Lorem ipsum dolor sit amet consectetur. Commodo viverra amet sollicitudin ac maecenas. Nibh metus imperdiet neque gravida in
              laoreet proin sem. Blandit gravida convallis volutpat lobortis. Potenti semper morbi lorem tristique netus nisl risus ut
              risus.{" "}
            </p>
            <div className="flex flex-wrap gap-4 mt-4">
              <Image src={"/statis/icon/wa.svg"} alt="" width={43} height={50} />
              <Image src={"/statis/icon/fb.svg"} alt="" width={43} height={50} />
              <Image src={"/statis/icon/ig.svg"} alt="" width={43} height={50} />
              <Image src={"/statis/icon/x.svg"} alt="" width={43} height={50} />
            </div>
            <h4 className="text-sm mt-12">
              © 2024. All rights reserved <br />
              made by Calon Asisten Laboratorium Infotech
            </h4>
          </div>
          <div className="flex flex-col pl-24">
            <h1 className="font-bold text-2xl">Find Us</h1>
            <p className="w-96 font-light text-sm text-justify mt-5">
              Lorem ipsum dolor sit amet consectetur. Purus donec gravida leo eget in scelerisque adipiscing.
            </p>
            <div className="mt-8 font-semibold flex flex-col">
              <a href="#">Twitter</a>
              <a href="#">Instagram</a>
              <a href="#">Facebook</a>
            </div>
          </div>
          <div className="flex flex-col pl-24 gap-8">
            <h1 className="font-bold text-2xl">Support By</h1>
            <Image src={"/statis/icon/ilab.svg"} alt="" width={176} height={50} />
            <Image src={"/statis/icon/umm.svg"} alt="" width={176} height={50} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default footer;
