import Image from "next/image";
import Link from "next/link";



const Footer = () => {
  return (


    <footer className="bg-white dark:bg-[#0F1014]">
      <div className="mx-auto max-w-screen-2xl px-4 pb-8 pt-16 sm:px-6 lg:px-8">


        <div className="-mt-10 grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-32">

          <div className="mx-auto max-w-sm lg:max-w-none">
            <Image
              src={`/images/logo/logo.png`}
              width={240}
              height={130}
              className="block mx-auto md:mx-0 bg-[#0F1014] dark:bg-transparent p-3 rounded-lg"
              alt='logo' />

            <p className="mt-4 text-center dark:text-gray-400 text-[#0F1014]  lg:text-left lg:text-lg">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium natus quod eveniet
              aut perferendis distinctio iusto repudiandae, provident velit earum?
            </p>

            <div className="mt-6 flex justify-center gap-4 lg:justify-start">
              <ul className="mt-8 flex justify-start gap-6 sm:mt-0 sm:justify-end">

                <li>
                  <a
                    href="https://www.facebook.com/lavoyarestaurants/"
                    rel="noreferrer"
                    target="_blank"
                    className="text-gray-500 transition hover:opacity-75"
                  >
                    <span className="sr-only">Facebook</span>

                    <svg className="size-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
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

                    <svg className="size-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
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

                    <svg className="size-6" fill="currentColor" viewBox="0 0 21 21" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19.3196 0.00188332H1.79808C1.57225 -0.00869446 1.34653 0.0253621 1.13387 0.102123C0.92121 0.178884 0.725783 0.296827 0.558758 0.449195C0.391746 0.601575 0.256417 0.7854 0.160542 0.990131C0.0646656 1.19488 0.010106 1.41651 0 1.64236V19.202C0.0132297 19.6746 0.206924 20.1244 0.541302 20.4586C0.87568 20.793 1.32538 20.9867 1.79808 21H19.3196C19.7791 20.9795 20.2123 20.7798 20.5264 20.4437C20.8404 20.1076 21.0103 19.6619 20.9995 19.202V1.64236C21.0033 1.42253 20.9621 1.20427 20.8785 1.00093C20.7949 0.797605 20.6706 0.613492 20.5132 0.459878C20.356 0.306277 20.169 0.186431 19.9637 0.107675C19.7584 0.0289187 19.5393 -0.00708023 19.3196 0.00188332ZM6.56235 17.5091H3.50429V8.1518H6.56235V17.5091ZM5.10551 6.73439C4.89211 6.74183 4.67948 6.70506 4.48098 6.6264C4.28247 6.54773 4.10237 6.42887 3.95202 6.27728C3.80165 6.12568 3.68425 5.94464 3.60721 5.74551C3.53015 5.54639 3.49512 5.33348 3.50429 5.12016C3.49486 4.90454 3.5306 4.68934 3.60923 4.48835C3.68786 4.28734 3.80763 4.105 3.96086 3.95301C4.11411 3.80101 4.29742 3.68273 4.49905 3.60574C4.3007 3.52875 4.91621 3.49476 5.13176 3.50594C5.34515 3.49851 5.55779 3.53527 5.75628 3.61393C5.95479 3.6926 6.13489 3.81146 6.28525 3.96305C6.43562 4.11465 6.55302 4.29569 6.63006 4.49482C6.70711 4.69394 6.74214 4.90685 6.73297 5.12016C6.74241 5.33579 6.70667 5.55099 6.62804 5.75198C6.54941 5.95299 6.42963 6.13533 6.2764 6.28732C6.12316 6.43932 5.93985 6.5576 5.73821 6.63459C5.53656 6.71158 5.32105 6.74557 5.10551 6.73439ZM17.5083 17.5091H14.4372V12.3908C14.4372 11.1703 14.0041 10.3304 12.9147 10.3304C12.5763 10.3332 12.247 10.4407 11.9722 10.6381C11.6973 10.8355 11.4901 11.1131 11.3791 11.4328C11.2938 11.6724 11.2581 11.9269 11.2741 12.1808V17.5091H8.25544V8.1518H11.2741V9.46418C11.5425 8.97112 11.9419 8.56192 12.4283 8.2816C12.9147 8.0014 13.4691 7.86108 14.0303 7.87616C16.0121 7.87616 17.5083 9.18858 17.5083 11.984V17.5091Z" />
                    </svg>


                  </a>
                </li>

              </ul>
            </div>
          </div>

          <div className="grid mt-6 grid-cols-1 gap-8 text-center lg:col-span-2 lg:grid-cols-3 lg:text-left">
            <div>
              <strong className="font-bold text-lg dark:text-white text-[#0F1014]"> Quick Links </strong>

              <ul className="mt-6 space-y-1">
                <li>
                  <a className="dark:text-gray-400 text-gray-700 transition hover:text-gray-700/75 dark:hover:text-gray-400/75" href="#">   Who We Are </a>
                </li>

                <li>
                  <a className="dark:text-gray-400 text-gray-700 transition hover:text-gray-700/75 dark:hover:text-gray-400/75" href="#">
                    What We Do
                  </a>
                </li>

                <li>
                  <a className="dark:text-gray-400 text-gray-700 transition hover:text-gray-700/75 dark:hover:text-gray-400/75" href="#">
                    Our Team
                  </a>
                </li>

                <li>
                  <a className="dark:text-gray-400 text-gray-700 transition hover:text-gray-700/75 dark:hover:text-gray-400/75" href="#">
                    News
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <strong className="font-bold text-lg dark:text-white text-[#0F1014]"> About </strong>

              <ul className="mt-6 space-y-1">
                <li>
                  <a className="dark:text-gray-400 text-gray-700 transition hover:text-gray-700/75 dark:hover:text-gray-400/75" href="#"> Careers </a>
                </li>

                <li>
                  <a className="dark:text-gray-400 text-gray-700 transition hover:text-gray-700/75 dark:hover:text-gray-400/75" href="#"> Our Locations </a>
                </li>

                <li>
                  <a className="dark:text-gray-400 text-gray-700 transition hover:text-gray-700/75 dark:hover:text-gray-400/75" href="#"> Contact Us </a>
                </li>


              </ul>
            </div>

            <div>
              <strong className="font-bold text-lg dark:text-white text-[#0F1014]"> Info </strong>

              <ul className="mt-6 space-y-1">
                <li>
                  <p className="dark:text-gray-400 text-gray-700 transition hover:text-gray-700/75 dark:hover:text-gray-400/75"> Dubai Hills Business Park,  Building 3, Office 204

                    PO Box: 282413,
                    Dubai, UAE  </p>
                </li>

                <li>
                  <a href="tel:+9714-423-3727" className="dark:text-gray-400 text-gray-700 transition hover:text-gray-700/75 dark:hover:text-gray-400/75" >  +971 4 423 3727 </a>
                </li>

                <li>
                  <a href="mailto:info@lavoya.com" className="dark:text-gray-400 text-gray-700 transition hover:text-gray-700/75 dark:hover:text-gray-400/75"> info@lavoya.com </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t dark:border-gray-100 border-gray-400  pt-8">
          <p className="text-center text-xs/relaxed text-gray-500">
            © LAVOYA 2025. All rights reserved.
          </p>
        </div>
      </div>
    </footer>


  );
};

export default Footer;
