'use client';
import Link from 'next/link';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';

const Carousel = () => {
    const banners = [
        { image: 'banner-1.jpg', logo: 'partner-2.png', title: 'Name of Restaurant 1', buttonText: 'Visit website', link: '/' },
        { image: 'banner-2.jpg', logo: 'partner-2.png', title: 'Name of Restaurant 2', buttonText: 'Visit website', link: '/' },
        { image: 'banner-3.jpg', logo: 'partner-3.png', title: 'Name of Restaurant 3', buttonText: 'Visit website', link: '/' },
        { image: 'banner-4.jpg', logo: 'partner-4.png', title: 'Name of Restaurant 4', buttonText: 'Visit website', link: '/' },
    ];

    return (
        <ParallaxProvider>
            <div className="space-y-8 w-full h-screen bg-blue-900">
                <div className="grid grid-cols-1 gap-6 bg-red-900 w-full h-screen">
                    <div className="panel">
                        <Swiper
                            modules={[Navigation, Autoplay, Pagination]}
                            navigation={{
                                nextEl: '.swiper-button-next-ex2',
                                prevEl: '.swiper-button-prev-ex2',
                            }}
                            pagination={{ clickable: true }}
                            autoplay={{ delay: 3000 }}
                            className="swiper mx-auto mb-5 w-full h-screen"
                        >
                            {banners.map((banner, i) => (
                                <SwiperSlide key={i}>
                                    <div className="relative w-full h-screen">
                                        {/*  Background */}
                                        <Parallax speed={-10}>
                                            <img
                                                src={`/images/banner/${banner.image}`}
                                                className="w-full h-screen object-cover"
                                                alt={`Slide ${i + 1}`}
                                            />
                                        </Parallax>

                                        {/*  Foreground */}
                                        <div className="absolute top-1/3 left-1/2 lg:top-1/2 lg:left-20 transform -translate-x-1/2 lg:-translate-x-0 -translate-y-1/3 lg:-translate-y-0 p-2 backdrop-blur-[2px] rounded-xl text-center text-white">
                                            <Parallax speed={5}>
                                                <img
                                                    src={`/images/partners/${banner.logo}`}
                                                    className="h-44 w-44 mb-2 ml-auto mr-auto"
                                                    alt="Logo"
                                                />
                                            </Parallax>

                                            <Parallax speed={3}>
                                                <h2 className="text-4xl text-center font-bold mb-6 drop-shadow-md">
                                                    {banner.title}
                                                </h2>
                                            </Parallax>

                                            <div className="group relative mt-0 ml-auto mr-auto w-56">
                                                <Link
                                                    href={banner.link}
                                                    className="mt-0 group relative inline-block text-xl font-medium text-gray-900 focus:outline-none focus:ring"
                                                >
                                                    <span className="absolute inset-0 rounded-lg border border-[#ffffff]"></span>
                                                    <span className="block rounded-lg bg-[#ffffff] px-12 py-3 transition-transform group-hover:bg-white group-hover:text-dark group-hover:-translate-x-2 group-hover:-translate-y-2">
                                                        {banner.buttonText}
                                                    </span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </ParallaxProvider>
    );
};

export default Carousel;
