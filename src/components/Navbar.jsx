import React, { useState } from 'react';
import { AiOutlineClose,AiOutlineUser,AiOutlineRead} from "react-icons/ai";
import { FiBook, FiAlignRight } from "react-icons/fi";
import { BsFillTelephoneFill } from "react-icons/bs";
import { Link } from 'react-router-dom';

function Navbar() {
  const [nav, setNav] = useState(false);
  const handlenav = () => {
    setNav(!nav);
  };
  return (
    <div className=' m-2 p-1 flex justify-between items-center bg-slate-400'>
      <div className=' mx-5 px-2 flex items-center '>
        <FiBook size={30} />
        <p className='text-2xl text-black font-bold m-2 '>BOOKHUB.</p>
      </div>
      <div>
        <ul className=' mx-5 px-20 text-2xl hidden md:flex'>
          <li className='p-4'><Link to="book">Home</Link></li>
          <li className='p-4'><Link to="About">About</Link></li>
          <li className='p-4'><Link to="Contact">Contact</Link></li>
        </ul>
      </div>
      <div onClick={handlenav} className='block md:hidden'>
        {nav ? <FiAlignRight size={30} /> : <FiAlignRight size={30} />}
      </div>
      <ul className={nav ? ' z-10 fixed left-0 top-0 w-[60%] h-full border-r border-r-slate-700 bg-[#9b6ddc] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
        <AiOutlineClose
          onClick={() => setNav(!nav)}
          size={30}
          className='absolute right-4 top-4 cursor-pointer ease-out duration-700'
        />
        <h1 className='w-full text-3xl font-bold text-[#e7cf47] m-4'>BOOKHUB.</h1>
        <li className='p-4 border-b border-b-white text-1xl font-bold flex '><AiOutlineUser size={25} className='mr-4'/>
        <Link to="Book">Home</Link>
        </li>
        <li className='p-4 border-b border-b-white text-1xl font-bold flex'><AiOutlineRead size={25} className='mr-4'/>
        <Link to="About">About</Link>
        </li>
        <li className='p-4 text-1xl font-bold flex'><BsFillTelephoneFill size={25} className='mr-4'/>
        <Link to="Contact">contact</Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar