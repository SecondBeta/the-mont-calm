import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper";
import Image from "next/image";
import { BsInfoCircle } from "react-icons/bs"

function Welcome() {
  return (
    <>
      <Swiper 
      navigation={true} 
      modules={[Navigation]} 
      className="bg-white h-4/5"
      loop
      >
        <SwiperSlide>
            <div className="absolute z-10">
                <div className="px-16 h-full flex items-center justify-start">
                    <div className="flex flex-col p-2 mt-4 space-y-4 py-12">
                        <div className="text-7xl lg:text-8xl text-white font-bold">Mont Calm Muree</div>
                        <div className="text-white text-xl">This is where an epic funi caption goes, bruuuuuuuuuhhhhhhh moment</div>
                        <div className="flex space-x-4 flex-row w-full">
                              <button className="transition text-black duration-300 hover:translate-y-1 bg-white hover:bg-gray-200 hover:shadow-2xl px-3 mt-5 items-center shadow-xl rounded-lg space-x-2 py-2 justify-center flex w-auto">
                                  <BsInfoCircle />
                                  <span className="text-black font-semibold">Our Goal</span>
                              </button>
                          </div>
                    </div>
                </div>
            </div>
            <Image
            alt='Banner'
            layout='fill'
            src='/test.jpg'
            priority
            />
            <div className="absolute w-full h-64 bottom-0 bg-gradient-to-t from-gray-200"></div>
        </SwiperSlide>
        <SwiperSlide>blah blah</SwiperSlide>
        <SwiperSlide>blah blah</SwiperSlide>
        <SwiperSlide>blah blah</SwiperSlide>
      </Swiper>
    </>
  );
}

export default Welcome
