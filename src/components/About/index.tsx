import { Parallax } from "react-scroll-parallax";

const About = () => {
  return (
    <section id="about" className="about bg-white dark:bg-[#0F1014]">
      <div className="pt-32 mx-auto max-w-7xl px-4 sm:px-6 lg:px-0 ">
      <div
  className="grid grid-cols-1 mb-5 bg-white h-96 rounded-xl overflow-hidden 
             bg-center bg-no-repeat bg-cover"
  style={{
    backgroundImage: "url(/images/banner/banner-1.webp)",
    backgroundSize: "cover", // Ensures full coverage of the div
  }}
></div>
        <Parallax speed={-10}>
        <div className=" mb-2 grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8 ">

          <div className=" p-1 lg:p-10">
          <Parallax speed={4}>
            <div className="group relative mt-0 inline-flex">

              <a href="#"
                className="mt-32 lg:mt-8 group relative inline-block text-xl font-medium text-gray-900 focus:outline-none focus:ring">
                <span className="absolute inset-0 rounded-lg border border-[#FDB940]"></span>
                <span
                  className="block rounded-lg bg-[#FDB940] px-12 py-3 transition-transform  group-hover:bg-white group-hover:text-dark group-hover:-translate-x-2 group-hover:-translate-y-2">
                  ENQUIRE NOW
                </span>

              </a>

              <div className="-scale-x-100 absolute left-0 -bottom-14 lg:-bottom-10 h-10 w-10 -rotate-12 text-[#FDB940] md:inline-flex">
                <svg viewBox="0 0 82 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M0 21.3963C0.189514 19.1422 0.475057 16.717 0.554355 14.2852C0.582363 13.435 0.32301 12.6326 1.24839 12.1517C1.43863 12.053 1.7169 11.8956 1.85767 11.9661C4.2446 13.1626 6.90906 13.1934 9.41312 13.8814C11.09 14.3423 12.6519 15.089 13.7134 16.5797C13.9251 16.8774 13.9105 17.3427 14 17.7305C13.6228 17.8077 13.2227 18.01 12.8727 17.9421C10.3283 17.4477 7.78825 16.9245 5.25946 16.353C4.46612 16.1737 4.32244 16.4862 4.22859 17.1961C4.0118 18.8342 3.66769 20.4541 3.43198 22.0899C3.33086 22.7891 3.36905 23.509 3.35123 24.2197C3.34977 24.2791 3.44107 24.3474 3.43052 24.3989C3.32213 24.9318 3.2712 25.8796 3.07114 25.9142C2.49387 26.0144 1.77655 25.8915 1.25603 25.5961C-0.352473 24.6832 0.143681 23.0129 0 21.3963Z" fill="currentColor" />
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M33.9279 29.9296C33.9687 30.0252 34.0103 30.1211 34.0512 30.2167L36.776 28.708C36.7189 28.6018 36.6613 28.4961 36.6041 28.3903C35.7123 28.9033 34.8197 29.4166 33.9279 29.9296ZM55.213 27.9357C55.2513 28.0076 55.2895 28.0795 55.3278 28.1513C56.8382 27.5018 58.3486 26.8518 59.8593 26.2019C59.8129 26.092 59.7661 25.9821 59.7197 25.8726C58.2175 26.5602 56.7153 27.2481 55.213 27.9357ZM40.7384 18.9565C40.5279 17.8215 40.3393 16.6815 40.0998 15.5525C39.952 14.8551 39.5106 14.6711 38.8099 14.825C36.6153 15.3082 34.9909 17.2686 34.7963 19.6189C34.584 22.1806 36.0472 23.7605 37.8517 25.1395C37.9927 25.2475 38.5155 25.0604 38.6986 24.8591C40.2045 23.1998 40.6396 21.163 40.7384 18.9565ZM47.8846 27.7513C53.9169 27.9699 58.9887 25.6539 63.5351 21.8258C68.7108 17.4677 72.7252 12.1435 76.2413 6.39113C77.3061 4.64903 78.3271 2.87833 79.4328 1.16371C79.7291 0.70344 80.2137 0.234515 80.706 0.0824723C81.0457 -0.0225277 81.5473 0.410268 81.9765 0.603333C81.8444 0.859247 81.7237 1.12306 81.5774 1.37032C81.1827 2.03645 80.7194 2.66758 80.3867 3.36306C79.3033 5.6264 78.3041 7.93113 77.1981 10.1824C76.4525 11.6998 75.639 13.1905 74.7457 14.6225C74.1814 15.5269 73.3694 16.269 72.7471 17.1414C71.7606 18.5237 70.9604 20.0611 69.8622 21.3395C68.1531 23.33 66.4111 25.3434 64.4139 27.0174C59.9989 30.718 54.9038 32.5263 49.0801 32.1605C46.3701 31.9904 43.6835 31.9283 41.122 30.8655C40.842 30.7492 40.3185 30.9333 40.0448 31.1527C37.2899 33.3656 34.1239 34.5277 30.6632 34.7456C28.0734 34.909 25.4198 35.1171 22.8828 34.7219C20.7546 34.3908 18.675 33.3742 16.7198 32.3694C14.9819 31.4756 13.3686 30.2773 11.8348 29.0418C9.65017 27.2812 8.09522 24.9795 7.06601 22.3556C6.91824 21.9789 7.17257 21.2819 7.46774 20.9267C7.79559 20.5315 8.26675 20.7212 8.80326 20.9647C10.4826 21.7271 11.1635 23.3172 12.0776 24.6916C13.809 27.2959 16.297 28.8333 19.144 29.6515C24.0015 31.0477 28.8342 30.4606 33.5239 28.7422C36.0572 27.8134 36.0323 27.708 34.1863 25.8643C31.7566 23.438 30.4122 20.5417 30.5982 17.0518C30.8143 13.0012 34.1347 10.1538 38.1338 10.4515C39.3892 10.5452 40.2439 11.3239 41.0648 12.1255C42.9294 13.9466 43.9712 16.2194 44.3347 18.7977C44.7112 21.4648 44.7806 24.1113 43.5286 26.6189C43.2264 27.2244 43.5171 27.489 44.1483 27.5187C45.3947 27.5778 46.6393 27.6719 47.8846 27.7513Z" fill="currentColor" />
                </svg>
              </div>
            </div>
            </Parallax>
            <h2 className="mt-14 dark:text-white text-[#0F1014] text-4xl leading-[60px] lg:text-6xl lg:leading-[70px] ">
            <span className="text-[#FDB940]">It's time </span> to do it together now.

            </h2>
          
          </div>

          <div className="lg:mt-36 mt-1 p-1 lg:p-10">


            <p className="mt-1 text-lg lg:text-2xl dark:text-white text-[#0F1014] leading-10 ">
              Join us now, it's time to achieve success together! Be part of the team that's making a difference.

            </p>

            <div className="mt-10 flex items-center justify-between text-gray-900">
              <p className="tracking-wide"></p>



            </div>



          </div>
        </div>
</Parallax>



        <div className="mt-12 grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
        <Parallax speed={1}>
          <div className="group relative block lg:h-[500px] h-[400px]  ">
            <span className="absolute inset-0 border-2 border-dashed border-[#25272B] dark:border-[#25272B] dark:border-[#FDB940] rounded-2xl"></span>

            <div
              className="relative flex h-full transform items-end rounded-xl bg-[#FDB940] dark:bg-[#25272B] transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2"
            >
              <div
                className="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8"
              >


                <svg className="bg-white dark:bg-[#FDB940] rounded-xl mb-10 w-20 h-20" viewBox="0 0 597 597" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect rx="80" fill="#FDCF00" />
                  <path d="M213.5 128C205.941 128 198.692 131.003 193.347 136.347C188.003 141.692 185 148.941 185 156.5V166H413V156.5C413 148.941 409.997 141.692 404.653 136.347C399.308 131.003 392.059 128 384.5 128H213.5ZM147 232.5C147 224.941 150.003 217.692 155.347 212.347C160.692 207.003 167.941 204 175.5 204H422.5C430.059 204 437.308 207.003 442.653 212.347C447.997 217.692 451 224.941 451 232.5V242H147V232.5ZM128 308.5C128 300.941 131.003 293.692 136.347 288.347C141.692 283.003 148.941 280 156.5 280H441.5C449.059 280 456.308 283.003 461.653 288.347C466.997 293.692 470 300.941 470 308.5V441.5C470 449.059 466.997 456.308 461.653 461.653C456.308 466.997 449.059 470 441.5 470H156.5C148.941 470 141.692 466.997 136.347 461.653C131.003 456.308 128 449.059 128 441.5V308.5Z" fill="#25272B" />
                </svg>



                <h2 className="mt-4 text-[#25272B] dark:text-white font-bold text-4xl lg:text-7xl"> ABOUT LAVOYA </h2>
              </div>

              <div
                className="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8"
              >
                <h3 className="mt-4 text-[#25272B] dark:text-white font-bold text-3xl lg:text-5xl"> ABOUT LAVOYA  </h3>

                <p className="mt-4 text-[#25272B] dark:text-white  text-lg lg:text-3xl leading-10 font-normal ">
                  Everything here is Food for Thought!
                  Established with the purpose of significantly transforming dining experiences, Lavoya introduces new and experiential casual dining concepts to reshape the F&B industry in the GCC.
                </p>

                <a href="#"
                  className="mt-8 group relative inline-block text-xl font-medium text-gray-900 focus:outline-none focus:ring">
                  <span
                    className="block rounded-lg bg-[#FDB940] px-12 py-3 transition-transform  hover:bg-white hover:text-dark hover:-translate-x-2 hover:-translate-y-2">
                    LEARN MORE
                  </span>

                </a>

              </div>
            </div>
          </div>
        </Parallax>

        <Parallax speed={1}>
          <div className="group relative block lg:h-[500px] h-[400px]  ">
            <span className="absolute inset-0 border-2 border-dashed border-[#25272B] dark:border-[#25272B] dark:border-[#FDB940] rounded-2xl"></span>

            <div
              className="relative flex h-full transform items-end rounded-xl bg-[#FDB940] dark:bg-[#25272B] transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2"
            >
              <div
                className="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8"
              >


                <svg className="bg-white dark:bg-[#FDB940] rounded-xl mb-10 w-20 h-20" viewBox="0 0 597 597" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect rx="80" fill="" />
                  <path d="M109 246.162C109 338.533 185.168 387.756 240.925 431.815C260.6 447.362 279.55 462 298.5 462C317.45 462 336.4 447.362 356.076 431.815C411.832 387.756 488 338.533 488 246.162C488 153.791 383.771 88.2829 298.5 177.088C213.228 88.2829 109 153.791 109 246.162Z" fill="#25272B" />
                </svg>




                <h2 className="mt-4 text-[#25272B] dark:text-white font-bold text-4xl lg:text-7xl"> WHAT WE DO </h2>
              </div>

              <div
                className="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8"
              >
                <h3 className="mt-4 text-[#25272B] dark:text-white font-bold text-3xl lg:text-5xl"> WHAT WE DO  </h3>

                <p className="mt-4 text-[#25272B] dark:text-white  text-lg lg:text-3xl leading-10 font-normal ">
                  We provide our customers with exceptional dining experiences and bring diverse new flavors to the table by introducing new F&B concepts in Brick & Mortar format across our markets.
                </p>

                <a href="#"
                  className="mt-8 group relative inline-block text-xl font-medium text-gray-900 focus:outline-none focus:ring">
                  <span
                    className="block rounded-lg bg-[#FDB940] px-12 py-3 transition-transform  hover:bg-white hover:text-dark hover:-translate-x-2 hover:-translate-y-2">
                    LEARN MORE
                  </span>

                </a>

              </div>
            </div>
          </div>
       </Parallax>


        </div>

        <div
  className="mt-32 relative grid grid-cols-1 mb-5 bg-white h-96 lg:h-screen rounded-xl overflow-hidden 
             bg-center bg-no-repeat bg-cover"
  style={{
    backgroundImage: "url(/images/banner/banner-1.webp)",
    backgroundSize: "cover", // Ensures full coverage of the div
  }}
>
<div className="absolute w-96 top-1/3 left-1/2 lg:top-1/2 lg:left-20 transform -translate-x-1/2 lg:-translate-x-0 -translate-y-1/3 lg:-translate-y-0  ">
          <Parallax speed={10}>
            <h2 className="text-4xl text-center text-white drop-shadow-md pt-20 px-4">
              WE ARE THE PARTNER OF CHOICE FOR GLOBAL RESTAURANT FRANCHISE BRANDS
            </h2>
           </Parallax>
           <Parallax speed={1}>
            <div className="group relative mt-0 ml-auto mr-auto w-56">

              <a href="#"
                className="mt-8 group relative inline-block text-xl font-medium text-gray-900 focus:outline-none focus:ring">
                <span className="absolute inset-0 rounded-lg border border-[#ffffff]"></span>
                <span
                  className="block rounded-lg bg-[#ffffff] px-12 py-3 transition-transform  group-hover:bg-white group-hover:text-dark group-hover:-translate-x-2 group-hover:-translate-y-2">
                  ENQUIRE NOW
                </span>

              </a>

              <div className="-scale-x-100 absolute left-0 -bottom-14 lg:-bottom-10 h-10 w-10 -rotate-12 text-[#ffffff] md:inline-flex">
                <svg viewBox="0 0 82 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M0 21.3963C0.189514 19.1422 0.475057 16.717 0.554355 14.2852C0.582363 13.435 0.32301 12.6326 1.24839 12.1517C1.43863 12.053 1.7169 11.8956 1.85767 11.9661C4.2446 13.1626 6.90906 13.1934 9.41312 13.8814C11.09 14.3423 12.6519 15.089 13.7134 16.5797C13.9251 16.8774 13.9105 17.3427 14 17.7305C13.6228 17.8077 13.2227 18.01 12.8727 17.9421C10.3283 17.4477 7.78825 16.9245 5.25946 16.353C4.46612 16.1737 4.32244 16.4862 4.22859 17.1961C4.0118 18.8342 3.66769 20.4541 3.43198 22.0899C3.33086 22.7891 3.36905 23.509 3.35123 24.2197C3.34977 24.2791 3.44107 24.3474 3.43052 24.3989C3.32213 24.9318 3.2712 25.8796 3.07114 25.9142C2.49387 26.0144 1.77655 25.8915 1.25603 25.5961C-0.352473 24.6832 0.143681 23.0129 0 21.3963Z" fill="currentColor" />
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M33.9279 29.9296C33.9687 30.0252 34.0103 30.1211 34.0512 30.2167L36.776 28.708C36.7189 28.6018 36.6613 28.4961 36.6041 28.3903C35.7123 28.9033 34.8197 29.4166 33.9279 29.9296ZM55.213 27.9357C55.2513 28.0076 55.2895 28.0795 55.3278 28.1513C56.8382 27.5018 58.3486 26.8518 59.8593 26.2019C59.8129 26.092 59.7661 25.9821 59.7197 25.8726C58.2175 26.5602 56.7153 27.2481 55.213 27.9357ZM40.7384 18.9565C40.5279 17.8215 40.3393 16.6815 40.0998 15.5525C39.952 14.8551 39.5106 14.6711 38.8099 14.825C36.6153 15.3082 34.9909 17.2686 34.7963 19.6189C34.584 22.1806 36.0472 23.7605 37.8517 25.1395C37.9927 25.2475 38.5155 25.0604 38.6986 24.8591C40.2045 23.1998 40.6396 21.163 40.7384 18.9565ZM47.8846 27.7513C53.9169 27.9699 58.9887 25.6539 63.5351 21.8258C68.7108 17.4677 72.7252 12.1435 76.2413 6.39113C77.3061 4.64903 78.3271 2.87833 79.4328 1.16371C79.7291 0.70344 80.2137 0.234515 80.706 0.0824723C81.0457 -0.0225277 81.5473 0.410268 81.9765 0.603333C81.8444 0.859247 81.7237 1.12306 81.5774 1.37032C81.1827 2.03645 80.7194 2.66758 80.3867 3.36306C79.3033 5.6264 78.3041 7.93113 77.1981 10.1824C76.4525 11.6998 75.639 13.1905 74.7457 14.6225C74.1814 15.5269 73.3694 16.269 72.7471 17.1414C71.7606 18.5237 70.9604 20.0611 69.8622 21.3395C68.1531 23.33 66.4111 25.3434 64.4139 27.0174C59.9989 30.718 54.9038 32.5263 49.0801 32.1605C46.3701 31.9904 43.6835 31.9283 41.122 30.8655C40.842 30.7492 40.3185 30.9333 40.0448 31.1527C37.2899 33.3656 34.1239 34.5277 30.6632 34.7456C28.0734 34.909 25.4198 35.1171 22.8828 34.7219C20.7546 34.3908 18.675 33.3742 16.7198 32.3694C14.9819 31.4756 13.3686 30.2773 11.8348 29.0418C9.65017 27.2812 8.09522 24.9795 7.06601 22.3556C6.91824 21.9789 7.17257 21.2819 7.46774 20.9267C7.79559 20.5315 8.26675 20.7212 8.80326 20.9647C10.4826 21.7271 11.1635 23.3172 12.0776 24.6916C13.809 27.2959 16.297 28.8333 19.144 29.6515C24.0015 31.0477 28.8342 30.4606 33.5239 28.7422C36.0572 27.8134 36.0323 27.708 34.1863 25.8643C31.7566 23.438 30.4122 20.5417 30.5982 17.0518C30.8143 13.0012 34.1347 10.1538 38.1338 10.4515C39.3892 10.5452 40.2439 11.3239 41.0648 12.1255C42.9294 13.9466 43.9712 16.2194 44.3347 18.7977C44.7112 21.4648 44.7806 24.1113 43.5286 26.6189C43.2264 27.2244 43.5171 27.489 44.1483 27.5187C45.3947 27.5778 46.6393 27.6719 47.8846 27.7513Z" fill="currentColor" />
                </svg>
              </div>
            </div>
           </Parallax>
          </div>
</div>

       
      
       
      </div>
    </section>

  );
};

export default About;
