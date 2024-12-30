"use client";
import Image from "next/image";
import { Parallax } from "react-scroll-parallax";

const Partners = () => {
  return (
    <section className="py-24 bg-white dark:bg-[#0F1014]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="mt-4 mb-12 text-[#25272B] text-center dark:text-white font-bold text-4xl lg:text-7xl">
        <span className="text-[#FDB940]">P</span>ARTNERS
        </h1>

        <div className="mt-10 lg:mt-28 px-28 grid grid-cols-2 gap-16 lg:grid-cols-4">
          <Parallax speed={-5}>
            <a href="#" className="flex justify-center items-center w-24 lg:w-40 mt-5 lg:-mb-0">
              <Image
              width={150}
              height={150}
                className="block h-auto relative z-0 rounded-lg transition-all duration-300 hover:scale-105"
                src="/images/partners/partner-1.webp"
                alt="Partner 1"
              />
            </a>
          </Parallax>

          <Parallax speed={5}>
            <a href="#" className="flex justify-center items-center w-24 lg:w-40 lg:-mb-0">
              <Image
              width={150}
              height={150}
                className="block h-auto relative z-0 rounded-lg transition-all duration-300 hover:scale-105"
                src="/images/partners/partner-2.webp"
                alt="Partner 2"
              />
            </a>
          </Parallax>

          <Parallax speed={-5}>
            <a href="#" className="flex justify-center items-center  w-24 lg:w-40  lg:-mb-0">
              <Image
              width={150}
              height={150}
                className="block h-auto relative z-0 rounded-lg transition-all duration-300 hover:scale-105"
                src="/images/partners/partner-3.webp"
                alt="Partner 3"
              />
            </a>
          </Parallax>

          <Parallax speed={5}>
            <a href="#" className="flex justify-center items-center  w-24 lg:w-40 -mt-14 lg:-mb-0">
              <Image
              width={150}
              height={150}
                className="block h-auto relative z-0 rounded-lg transition-all duration-300 hover:scale-105"
                src="/images/partners/partner-4.webp"
                alt="Partner 4"
              />
            </a>
          </Parallax>
        </div>
      </div>
    </section>
  );
};

export default Partners;
