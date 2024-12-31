"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Header = () => {

  const pathUrl = usePathname();
  // Navbar toggle
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  // Sticky Navbar
  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
  });

  // submenu handler
  const [openIndex, setOpenIndex] = useState(-1);
  const handleSubmenu = (index: any) => {
    if (openIndex === index) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }
  };

  const { theme, setTheme } = useTheme();

  return (
    <>
    
      <header
        className={`ud-header left-0 top-0 z-40 flex w-full items-center   " ${sticky
          ? "shadow-nav fixed z-[999] border-b border-stroke border-dark-3/20  backdrop-blur-[5px] dark:border-dark-3/20"
          : "absolute  "
          }`}
      >
        <div className="relative w-full">
          <div className="flex items-center justify-between mx-auto max-w-7xl px-4 sm:px-6 lg:px-0">

            <div className=" w-70 max-w-full px-4">
              <Link
                href="/"
                className={`block w-full ${sticky ? "py-2" : "py-5"
                  } `}
              >
                {pathUrl !== "/" ? (
                  <>
                    <Image
                      src={`/images/logo/logo.png`}
                      alt="logo"
                      width={240}
                      height={130}
                      priority
                      className=" w-full dark:hidden"
                    />
                    <Image
                      src={`/images/logo/logo.png`}
                      alt="logo1"
                      width={240}
                      height={130}
                      priority
                      className=" hidden w-full dark:block"
                    />
                  </>
                ) : (
                  <>
                    <Image
                      src={`${sticky
                        ? "/images/logo/logo.png"
                        : "/images/logo/logo.png"
                        }`}
                      alt="logo"
                      width={240}
                      height={150}
                      priority
                      className={` w-full dark:hidden ${sticky ? "bg-[#0F1014]  -p-2 px-2 py-1 rounded-md" : ""
                    }`}
                    />
                    <Image
                      src={`/images/logo/logo.png`}
                      alt="logo1"
                      width={240}
                      height={50}
                      priority
                      className=" hidden w-full dark:block"
                    />
                  </>
                )}
              </Link>
            </div>

            <div className=" flex w-full items-center justify-between px-4">
              <div className="mx-auto">
                <button
                  onClick={navbarToggleHandler}
                  id="navbarToggler"
                  aria-label="Mobile Menu"
                  className="absolute right-4 lg:right-20 top-1/2 block dark:bg-[#0F1014] bg-white  -translate-y-1/2 rounded-lg px-3 py-[6px] "
                >
                  <span
                    className={`relative my-1.5 block h-0.5 w-[20px] transition-all duration-300 ${navbarOpen ? " top-[7px] rotate-45" : " "
                      } ${pathUrl !== "/" && "!bg-dark dark:!bg-[#0F1014]"} ${pathUrl === "/" && sticky
                        ? "bg-gray-500 dark:bg-white"
                        : "bg-gray-500"
                      }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[20px] transition-all duration-300 ${navbarOpen ? "opacity-0 " : " "
                      } ${pathUrl !== "/" && "!bg-dark dark:!bg-[#0F1014]"} ${pathUrl === "/" && sticky
                        ? "bg-gray-500 dark:bg-white"
                        : "bg-gray-500"
                      }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[20px] transition-all duration-300 ${navbarOpen ? " top-[-8px] -rotate-45" : " "
                      } ${pathUrl !== "/" && "!bg-dark dark:!bg-[#0F1014]"} ${pathUrl === "/" && sticky
                        ? "bg-gray-500 dark:bg-white"
                        : "bg-gray-500"
                      }`}
                  />
                </button>


                <nav
                  id="navbarCollapse"
                  className={`navbar absolute right-0 top-0 -z-10  w-full h-screen border-[.5px] border-body-color/50 bg-gradient-to-r from-[#0F1014] to-[#1F1F24] px-6 py-4 duration-300 dark:border-body-color/20 ${navbarOpen
                    ? "visibility  opacity-100"
                    : "invisible  opacity-0"
                    }`}
                >
                  <div className="mt-32 pb-52 lg:pb-0 lg:mt-44 overflow-y-auto h-screen ">
                    <div className=" grid grid-cols-2 gap-4 lg:grid-cols-3 lg:gap-8">

                      <div className="block ml-auto mr-auto text-left">
                        <a href="#" className="relative block pt-2 lg:pt-8 text-white text-2xl lg:text-5xl font-bold group hover:text-[#FDB940] py-1.5 px-2.5 ">
                          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FDB940]  group-hover:w-full group-hover:transition-all"></span>
                          Who We Are
                        </a>
                        <a href="#" className="relative block pt-2 lg:pt-8 text-white text-2xl lg:text-5xl font-bold group hover:text-[#FDB940] py-1.5 px-2.5 ">
                          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FDB940]  group-hover:w-full group-hover:transition-all"></span>
                          What We Do
                        </a>
                        <a href="#" className="relative block pt-2 lg:pt-8 text-white text-2xl lg:text-5xl font-bold group hover:text-[#FDB940] py-1.5 px-2.5 ">
                          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FDB940]  group-hover:w-full group-hover:transition-all"></span>
                          Our Team
                        </a>
                        <a href="#" className="relative block pt-2 lg:pt-8 text-white text-2xl lg:text-5xl font-bold group hover:text-[#FDB940] py-1.5 px-2.5 ">
                          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FDB940]  group-hover:w-full group-hover:transition-all"></span>
                          News
                        </a>
                      </div>

                      <div className="block ml-auto mr-auto text-left">

                        <a href="#" className="relative block pt-2 lg:pt-8 text-white text-2xl lg:text-5xl font-bold group hover:text-[#FDB940] py-1.5 px-2.5 ">
                          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FDB940]  group-hover:w-full group-hover:transition-all"></span>
                          Careers
                        </a>
                        <a href="#" className="relative block pt-2 lg:pt-8 text-white text-2xl lg:text-5xl font-bold group hover:text-[#FDB940] py-1.5 px-2.5 ">
                          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FDB940]  group-hover:w-full group-hover:transition-all"></span>
                          Our Locations
                        </a>
                        <a href="#" className="relative block pt-2 lg:pt-8 text-white text-2xl lg:text-5xl font-bold group hover:text-[#FDB940] py-1.5 px-2.5 ">
                          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FDB940]  group-hover:w-full group-hover:transition-all"></span>
                          Contact Us
                        </a>

                      </div>

                      <div className="col-span-2 lg:col-span-1 block ml-auto mr-auto">

                        <div className="mt-2 relative max-w-xs border border-solid border-gray-600 rounded-2xl p-4 transition-all duration-500 col-span-12   lg:col-span-3 md:col-span-6 ">
                          <div className=" mb-4 flex items-center  ">



                            <svg className="size-9" viewBox="0 0 44 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M21.8333 54.5714C32.25 43.8571 42.6667 34.2631 42.6667 22.4286C42.6667 10.5939 33.3393 1 21.8333 1C10.3274 1 1 10.5939 1 22.4286C1 34.2631 11.4167 43.8571 21.8333 54.5714Z" stroke="#FDB940" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                              <path d="M21.8334 30.7619C26.7646 30.7619 30.7619 26.7646 30.7619 21.8334C30.7619 16.9023 26.7646 12.9048 21.8334 12.9048C16.9021 12.9048 12.9048 16.9023 12.9048 21.8334C12.9048 26.7646 16.9021 30.7619 21.8334 30.7619Z" stroke="#FDB940" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>


                            <h4 className="text-lg font-bold text-white px-2 pt-1 capitalize transition-all duration-500 ">Location</h4>

                          </div>
                          <p className="text-md text-gray-300 transition-all duration-500 leading-2 "> Dubai Hills Business Park,  Building 3, Office 204

                            PO Box: 282413,
                            Dubai, UAE
                          </p>
                        </div>

                        <div className="mt-2 relative max-w-xs border border-solid border-gray-600 rounded-2xl p-4 transition-all duration-500 col-span-12   lg:col-span-3 md:col-span-6 ">
                          <div className=" mb-4 flex items-center  ">


                            <svg className="size-9" viewBox="0 0 55 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M14.8555 22.3589L14.2342 22.6014C13.7501 21.3939 14.2908 20.3518 14.9124 19.6318C15.5187 18.9296 16.3839 18.31 17.0755 17.8147L17.0915 17.8033L17.0937 17.8016C17.5334 17.4886 17.9111 17.2163 18.2188 16.9561L18.2497 16.9299L18.2826 16.9064C19.385 16.1176 20.0816 15.3458 20.4047 14.6054C20.6008 14.1506 20.6599 13.7389 20.6063 13.3496C20.5524 12.958 20.3749 12.521 19.993 12.0329L19.9548 11.984L19.9229 11.9308L13.4989 1.21529L13.4906 1.20137L13.4827 1.18718C13.4475 1.12396 13.3709 1.06928 13.2768 1.06244L13.2693 1.06189L13.2617 1.06122C9.77106 0.75415 7.16364 1.62601 5.25619 3.14429L5.25405 3.14599C3.0571 4.88489 1.74693 7.56242 1.24674 10.6146C0.342161 16.1933 1.98974 22.1307 5.12517 27.7297C8.86421 34.3988 14.6212 40.4841 20.2739 44.6982C21.7151 45.7553 23.1856 46.662 24.5955 47.5313C24.684 47.5858 24.7722 47.6402 24.8601 47.6944L24.8698 47.7004L25.0999 47.8461C28.2922 49.7913 31.1687 51.2234 33.9917 52.0854C36.8696 52.9569 39.6574 53.2304 42.6305 52.7987C44.5869 52.513 46.5581 52.0752 48.301 51.2834L48.3073 51.2806C50.1158 50.4739 51.6361 49.2766 52.6654 47.4935M14.8555 22.3589L14.2771 22.6838C16.1528 26.0221 18.3313 29.2561 21.1741 32.2153M14.8555 22.3589L21.1741 32.2153M52.6654 47.4935C53.4775 46.0838 53.9988 44.4646 53.9998 43.0947C53.9875 41.768 53.5396 40.7387 52.5609 40.0728C52.5486 40.0645 52.5378 40.057 52.5292 40.0508C52.5184 40.0432 52.5091 40.0363 52.502 40.031L52.4951 40.0259L42.5588 34.388C42.5018 34.3617 42.4577 34.3374 42.4331 34.3239C42.4114 34.312 42.4025 34.3071 42.3998 34.3056C41.8168 34.0373 41.3198 33.9864 40.8793 34.054C40.4258 34.1235 39.969 34.3287 39.4965 34.6647C38.5207 35.3586 37.6514 36.4748 36.7695 37.6191C36.345 38.1817 35.8934 38.7579 35.5036 39.1425C35.0588 39.5814 34.5017 40.0562 33.8712 40.2932C33.3307 40.5019 32.7324 40.4873 32.1571 40.2112M52.6654 47.4935L53.5 41.5L46 37L40.8793 34.6647L34.5 39.9716L32.1571 40.2112M21.1741 32.2153C24.0297 35.1963 27.5734 37.9002 32.1396 40.2025L32.1483 40.2069L32.1571 40.2112M21.1741 32.2153L32.1571 40.2112" stroke="#FDB940" stroke-width="2" />
                            </svg>





                            <h4 className="text-lg font-bold text-white px-2 pt-1 capitalize transition-all duration-500 ">Call</h4>

                          </div>
                          <a href="tel:+9714-423-3727" className="text-md text-gray-300 hover:text-[#FDB940] hover:text-bold  transition-all duration-500 leading-2 "> +971 4 423 3727 </a>

                        </div>

                        <div className="mt-2 relative max-w-xs border border-solid border-gray-600 rounded-2xl p-4 transition-all duration-500 col-span-12   lg:col-span-3 md:col-span-6 ">
                          <div className=" mb-4 flex items-center  ">
                            <svg className="size-9" viewBox="0 0 72 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M10 13.0002L30.15 28.0571C33.6168 30.6476 38.3832 30.6476 41.85 28.0571L62 13" stroke="#FDB940" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                              <path d="M63.2222 1H8.77778C4.48223 1 1 4.48223 1 8.77778V47.6667C1 51.9622 4.48223 55.4444 8.77778 55.4444H63.2222C67.5178 55.4444 71 51.9622 71 47.6667V8.77778C71 4.48223 67.5178 1 63.2222 1Z" stroke="#FDB940" stroke-width="2" stroke-linecap="round" />
                            </svg>

                            <h4 className="text-lg font-bold text-white px-2 pt-1 capitalize transition-all duration-500 ">Email</h4>

                          </div>
                          <a href="mailto:info@lavoya.com" className="text-md text-gray-300 hover:text-[#FDB940] hover:text-bold transition-all duration-500 leading-2 "> info@lavoya.com </a>

                        </div>




                      </div>

                      <div className="col-span-2 lg:col-span-1 block ml-auto mr-auto text-center lg:text-left mb-20">
                        <ul className="mt-8 mr-32 flex items-center justify-start gap-6 sm:mt-0 sm:justify-end">
                          <li>
                            <a
                              href="https://www.facebook.com/lavoyarestaurants/"
                              rel="noreferrer"
                              target="_blank"
                              className="text-gray-500 transition hover:opacity-75"
                            >
                              <span className="sr-only">Facebook</span>

                              <svg className="size-9" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path
                                  fillRule="evenodd"
                                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                                  clipRule="evenodd"
                                />
                              </svg>

                            </a>
                          </li>

                          <li>
                            <a
                              href="https://www.instagram.com/lavoyarestaurants"
                              rel="noreferrer"
                              target="_blank"
                              className="text-gray-500 transition hover:opacity-75"
                            >
                              <span className="sr-only">Instagram</span>

                              <svg className="size-9" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path
                                  fillRule="evenodd"
                                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </a>
                          </li>

                          <li>
                            <a
                              href="https://www.linkedin.com/company/lavoyarestaurants/"
                              rel="noreferrer"
                              target="_blank"
                              className="text-gray-500 transition hover:opacity-75"
                            >
                              <span className="sr-only">LinkedIn</span>

                              <svg className="size-8" fill="currentColor" viewBox="0 0 21 21" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19.3196 0.00188332H1.79808C1.57225 -0.00869446 1.34653 0.0253621 1.13387 0.102123C0.92121 0.178884 0.725783 0.296827 0.558758 0.449195C0.391746 0.601575 0.256417 0.7854 0.160542 0.990131C0.0646656 1.19488 0.010106 1.41651 0 1.64236V19.202C0.0132297 19.6746 0.206924 20.1244 0.541302 20.4586C0.87568 20.793 1.32538 20.9867 1.79808 21H19.3196C19.7791 20.9795 20.2123 20.7798 20.5264 20.4437C20.8404 20.1076 21.0103 19.6619 20.9995 19.202V1.64236C21.0033 1.42253 20.9621 1.20427 20.8785 1.00093C20.7949 0.797605 20.6706 0.613492 20.5132 0.459878C20.356 0.306277 20.169 0.186431 19.9637 0.107675C19.7584 0.0289187 19.5393 -0.00708023 19.3196 0.00188332ZM6.56235 17.5091H3.50429V8.1518H6.56235V17.5091ZM5.10551 6.73439C4.89211 6.74183 4.67948 6.70506 4.48098 6.6264C4.28247 6.54773 4.10237 6.42887 3.95202 6.27728C3.80165 6.12568 3.68425 5.94464 3.60721 5.74551C3.53015 5.54639 3.49512 5.33348 3.50429 5.12016C3.49486 4.90454 3.5306 4.68934 3.60923 4.48835C3.68786 4.28734 3.80763 4.105 3.96086 3.95301C4.11411 3.80101 4.29742 3.68273 4.49905 3.60574C4.7007 3.52875 4.91621 3.49476 5.13176 3.50594C5.34515 3.49851 5.55779 3.53527 5.75628 3.61393C5.95479 3.6926 6.13489 3.81146 6.28525 3.96305C6.43562 4.11465 6.55302 4.29569 6.63006 4.49482C6.70711 4.69394 6.74214 4.90685 6.73297 5.12016C6.74241 5.33579 6.70667 5.55099 6.62804 5.75198C6.54941 5.95299 6.42963 6.13533 6.2764 6.28732C6.12316 6.43932 5.93985 6.5576 5.73821 6.63459C5.53656 6.71158 5.32105 6.74557 5.10551 6.73439ZM17.5083 17.5091H14.4372V12.3908C14.4372 11.1703 14.0041 10.3304 12.9147 10.3304C12.5763 10.3332 12.247 10.4407 11.9722 10.6381C11.6973 10.8355 11.4901 11.1131 11.3791 11.4328C11.2938 11.6724 11.2581 11.9269 11.2741 12.1808V17.5091H8.25544V8.1518H11.2741V9.46418C11.5425 8.97112 11.9419 8.56192 12.4283 8.2816C12.9147 8.0014 13.4691 7.86108 14.0303 7.87616C16.0121 7.87616 17.5083 9.18858 17.5083 11.984V17.5091Z" />
                              </svg>


                            </a>
                          </li>


                        </ul>
                      </div>

                    </div>
                  </div>


                </nav>
              </div>

              <div className="items-center justify-end pr-10 sm:flex lg:pr-0">
                {/* theme toggler mode */}
                <button
                  aria-label="theme toggler"
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="flex h-8 w-8 -mr-2 lg:mr-14 items-center justify-center dark:bg-[#0F1014] bg-white text-body-color duration-300 dark:text-white rounded-lg p-5"
                >
                  <span>
                    <svg
                      viewBox="0 0 16 16"
                      className="hidden  h-[22px] w-[22px] fill-current dark:block"
                    >
                      <path d="M4.50663 3.2267L3.30663 2.03337L2.36663 2.97337L3.55996 4.1667L4.50663 3.2267ZM2.66663 7.00003H0.666626V8.33337H2.66663V7.00003ZM8.66663 0.366699H7.33329V2.33337H8.66663V0.366699V0.366699ZM13.6333 2.97337L12.6933 2.03337L11.5 3.2267L12.44 4.1667L13.6333 2.97337ZM11.4933 12.1067L12.6866 13.3067L13.6266 12.3667L12.4266 11.1734L11.4933 12.1067ZM13.3333 7.00003V8.33337H15.3333V7.00003H13.3333ZM7.99996 3.6667C5.79329 3.6667 3.99996 5.46003 3.99996 7.6667C3.99996 9.87337 5.79329 11.6667 7.99996 11.6667C10.2066 11.6667 12 9.87337 12 7.6667C12 5.46003 10.2066 3.6667 7.99996 3.6667ZM7.33329 14.9667H8.66663V13H7.33329V14.9667ZM2.36663 12.36L3.30663 13.3L4.49996 12.1L3.55996 11.16L2.36663 12.36Z" />
                    </svg>

                    <svg
                      viewBox="0 0 23 23"
                      className={`h-[30px]  w-[30px] fill-current text-dark dark:hidden ${!sticky && pathUrl === "/" && "text-dark"
                        }`}
                    >
                      <g clipPath="url(#clip0_40_125)">
                        <path d="M16.6111 15.855C17.591 15.1394 18.3151 14.1979 18.7723 13.1623C16.4824 13.4065 14.1342 12.4631 12.6795 10.4711C11.2248 8.47905 11.0409 5.95516 11.9705 3.84818C10.8449 3.9685 9.72768 4.37162 8.74781 5.08719C5.7759 7.25747 5.12529 11.4308 7.29558 14.4028C9.46586 17.3747 13.6392 18.0253 16.6111 15.855Z" />
                      </g>
                    </svg>
                  </span>
                </button>


              </div>

            </div>

          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
