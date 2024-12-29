"use client"
import { Metadata } from "next";
import Head from 'next/head';
import { ParallaxProvider } from 'react-scroll-parallax';

import About from "@/components/About";
import ScrollUp from "@/components/Common/ScrollUp";
import Carousel from "@/components/Carousel";
import Blogs from "@/components/Blogs";
import Partners from "@/components/Partners";

// export const metadata: Metadata = {
//   title: "  Lavoya | Food for Thought | GCC ",
//   description: "    ",
// };



export default function Home() {

  return (

    <>
      <Head>
      <link rel="icon" href="/images/favicon.png" />
        {/* Basic SEO */}
        <title> Lavoya | Food for Thought | GCC </title>
        <meta name="description" content="  " />
        <meta name="keywords" content=" " />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://lavoya.com" />

        {/* Open Graph for social media */}
        <meta property="og:title" content=" Lavoya | Food for Thought | GCC  " />
        <meta property="og:description" content="  " />
        <meta property="og:url" content="https://lavoya.com" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/favicon.ico" />

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content=" Lavoya | Food for Thought | GCC " />
        <meta name="twitter:description" content="  " />
        <meta name="twitter:image" content="/images/favicon.ico" />
        <meta name="twitter:site" content="" />

        {/* Favicon */}
        <link rel="icon" href="/images/favicon.png" />


      </Head>

      <main>
      <ParallaxProvider>
        <ScrollUp />
        <Carousel />
        <About />
        <Blogs />
        <Partners />
    </ParallaxProvider>
        
        
      </main>
    </>
  );
}
