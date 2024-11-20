import React from 'react'
import { LampDemo } from './LampDemo'
import {ThreeDCardDemo} from "./ThreeDCardDemo"
import { AnimatedTestimonialsDemo } from './AnimatedTestimonialsDemo'
function Projects() {
  return (
    <div>
       
        <div className='relative h-[115vh] md:h-[90vh] lg:h-[160vh] mt-[4rem]'>
            <LampDemo/>
            <div className='absolute bottom-0 left-0 w-[100%] h-[105vh] md:h-auto'>
                <div className='items-start justify-center hidden gap-4 mx-auto md:flex'>
                <ThreeDCardDemo websiteName="PlushPalace" websiteDis="PlushPalace is a 3D furniture agency landing page showcases innovative designs with interactive displays and a seamless user experience." websiteImg="/plushpalace2.jpg" websiteLink="https://plush-palace.vercel.app/"/>
                <ThreeDCardDemo websiteName="PopcornTv" websiteDis="PopcornTV is a movie and TV platform , offering a wide database of films and series with synopses, ratings, and personalized recommendations." websiteImg="/popcorn22.jpg" websiteLink="https://popcorn-tv-seven.vercel.app/"/>
                <ThreeDCardDemo websiteName="Kicks" websiteDis="Kicks is an e-commerce haven for shoe enthusiasts, offering a diverse range of stylish and comfortable footwear, with seamless shopping ." websiteImg="/kicks22.jpg" websiteLink="https://kicks-kappa.vercel.app/"/>
                </div>
                <div className='md:hidden'>
                <AnimatedTestimonialsDemo/>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Projects