import React from 'react';
import load from '../Assets/book1.gif'

function Loader() {
  return (
    <>
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center justify-center">

        <img classNameNameName='w-full max-h-[690px] object-cover' src={load} alt="About" srcset="" />
      </div>
    </>
  )
}

export default Loader;