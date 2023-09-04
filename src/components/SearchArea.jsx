import React, { useRef, useEffect } from 'react';
import { CiSearch } from "react-icons/ci";
import { useGlobalContext } from '../Data/Context';
import { useNavigate } from 'react-router-dom';

function SearchArea() {
    const { setSearchTerm, setResultTitle } = useGlobalContext();
    const searchText = useRef('');
    const navigate = useNavigate();

    useEffect(() => searchText.current.focus(), []);

    const handleSubmit = (e) => {
        e.preventDefault();
        let tempSearchTerm = searchText.current.value.trim();

        if ((tempSearchTerm.replace(/[^\w\s]/gi, "")).length === 0) {
            setSearchTerm("Hell");
            setResultTitle("Please Enter Something ...");
        } else {
            setSearchTerm(searchText.current.value);
        }
        navigate("/book");
    };
    return (
        <form onSubmit={handleSubmit}>
            <div className=' m-2 bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[450px]'>
                <CiSearch size={25} className=' text-black' onSubmit={handleSubmit} />
                <input
                    className=' cursor-pointer bg-transparent p-2 w-full focus:outline-none text-black'
                    type='text'
                    placeholder='Search Books'
                    ref={searchText}
                />
            </div>
        </form>
    )
}

export default SearchArea;