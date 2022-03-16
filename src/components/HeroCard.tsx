import Image from 'next/image'
import React from 'react'

function HeroCard() {
  return (
    <div>
      <div className='snap-center px-4 p-2 cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 md:hover:z-20'>
          <div className="border-2 border-[#313131] rounded-2xl border-opacity-80 p-4 w-[500px] lg:w-[850px] my-6">
              <div className="absolute w-full h-full z-10">
                  <div className="px-16 h-full flex items-center justify-start">
                      <div className="flex flex-col w-3/5 lg:w-2/5 space-y-4 py-12">
                          <h1 className="text-4xl text-white font-bold">Mont Calm</h1>
                          <p className="text-lg text-white truncate">description...</p>
                          <div className="flex space-x-4 flex-row w-full">
                              <button className="hover:bg-[#2c2c2c] transition duration-300 hover:translate-y-1 hover:shadow-2xl px-3 mt-5 items-center shadow-xl rounded-lg backdrop-filter backdrop-blur-3xl space-x-2 py-2 justify-center flex w-auto">
                                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                  <span className="text-white font-semibold">Info</span>
                              </button>
                          </div>
                      </div>
                  </div>
              </div>
              <Image
                  alt='Cover'
                  layout='fixed'
                  className="rounded-2xl"
                  src='/logo.png'
                  width={1920}
                  height={1080} />
          </div>
          <div className="absolute w-full h-64 bottom-0 bg-gradient-to-t from-[#1b1b1b]"></div>
      </div>
      </div>
                                    )
                                }

export default HeroCard
