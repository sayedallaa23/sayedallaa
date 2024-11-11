import React from 'react'
import { LampDemo } from './LampDemo'
import {ThreeDCardDemo} from "./ThreeDCardDemo"
function Projects() {
  return (
    <div>
        <h1></h1>
        <div className='relative h-[160vh]'>
            <LampDemo/>
            <div className='absolute bottom-0 left-[3rem]'>
                <div className='flex gap-4'>
                <ThreeDCardDemo websiteName="popcornTv" websiteDis="PopcornTV is a movie and TV platform , offering a wide database of films and series with synopses, ratings, and personalized recommendations." websiteImg="/popcorn2.png" websiteLink="www.google.com"/>
                <ThreeDCardDemo websiteName="popcornTv" websiteDis="PopcornTV is a movie and TV platform , offering a wide database of films and series with synopses, ratings, and personalized recommendations." websiteImg="/popcorn2.png" websiteLink="https://popcorn-tv-seven.vercel.app/"/>
                <ThreeDCardDemo websiteName="Kicks" websiteDis="Kicks is an e-commerce site for shoes, featuring a variety of brands, easy navigation, and customer reviews." websiteImg="/kicks.png" websiteLink="https://kicks-kappa.vercel.app/"/>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Projects