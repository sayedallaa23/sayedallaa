import React from 'react'
import { LampDemo } from './LampDemo'
import {ThreeDCardDemo} from "./ThreeDCardDemo"
import { AnimatedTestimonialsDemo } from './AnimatedTestimonialsDemo'
function Projects() {
  return (
    <div>
        <h1></h1>
        <div className='relative h-[115vh] md:h-[90vh] lg:h-[160vh] mt-[4rem]'>
            <LampDemo/>
            <div className='absolute bottom-0 left-0 w-[100%]'>
                <div className='items-start justify-center hidden gap-4 mx-auto md:flex'>
                <ThreeDCardDemo websiteName="popcornTv" websiteDis="PopcornTV is a movie and TV platform , offering a wide database of films and series with synopses, ratings, and personalized recommendations." websiteImg="/popcorn22.jpg" websiteLink="www.google.com"/>
                <ThreeDCardDemo websiteName="PopcornTv" websiteDis="PopcornTV is a movie and TV platform , offering a wide database of films and series with synopses, ratings, and personalized recommendations." websiteImg="/popcorn22.jpg" websiteLink="https://popcorn-tv-seven.vercel.app/"/>
                <ThreeDCardDemo websiteName="Kicks" websiteDis="Kicks is an e-commerce site for shoes, featuring a variety of styles, easy navigation, and customer reviews." websiteImg="/kicks22.jpg" websiteLink="https://kicks-kappa.vercel.app/"/>
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