import React from 'react';
import Navbar from './Navbar';
import SearchArea from './SearchArea';
import heroMain from '../Assets/heroMain.jpg';

function Hero() {
    return (
        <>
            <Navbar />
            <div className=' relative m-2 p-0 max-w-[1640px]'>
                <div className="absolute w-full h-full text-gray-200 max-h-[500px] bg-black/30 flex flex-col justify-center items-center">
                    <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold text-slate-200'>Get Your <span className=' font-extrabold text-cyan-400'>Books</span></h1>
                    <p className='px-4 text-center font-bold text-slate-200'>I have always imagined that Paradise will be a kind of a Library.</p>
                    <SearchArea />
                </div>
                <img className='w-full max-h-[500px] object-cover' src={heroMain} alt="/" />
            </div>
        </>
    )
}

export default Hero;