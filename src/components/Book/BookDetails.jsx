import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Loader from '../Loader';
import coverPart from '../../Assets/coverPart.jpg';
import { FaArrowLeft } from "react-icons/fa";

const URL = "https://openlibrary.org/works/";

const BookDetails = () => {
  const { id } = useParams();
  const [loading, setloading] = useState(false);
  const [book, setBook] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setloading(true);
    async function getBookDetails() {
      try {
        const res = await fetch(`${URL}${id}.json`);
        const data = await res.json();

        if (data) {
          const { description, title, covers, subject_places, subject_times, subjects } = data;
          const newBook = {
            description: description ? description.value : "No description found",
            title: title,
            cover_img: covers ? `https://covers.openlibrary.org/b/id/${covers[0]}-L.jpg` : coverPart,
            subject_places: subject_places ? subject_places.join(", ") : "No subject places found",
            subject_times: subject_times ? subject_times.join(", ") : "No subject times found",
            subjects: subjects ? subjects.join(", ") : "No subjects found",

          };
          setBook(newBook);
        }
        else {
          setBook(null);
        }
        setloading(false);
      }
      catch (e) {
        console.log(e);
        setloading(false);
      }
    }
    getBookDetails();
  }, [id]);

  if (loading) return <Loader />;

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-12 mx-auto flex flex-col">
        <button type='button' className='flex text-blue-500 m-2 p-2' onClick={() => navigate("/book")}>
          <FaArrowLeft size={22} className='mr-2'/>
          <span className=' font-semibold '>Go Back</span>
        </button>
        <div className="lg:w-4/6 mx-auto">
          <div className="rounded-lg h-[500px] overflow-hidden">
            <img alt="coverPart" className="object-fit object-center h-full w-full" src={book?.cover_img} />
          </div>
          <div className="flex flex-col sm:flex-row mt-10">
            <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
              <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                <img alt="coverPart" className="object-fit object-center h-full w-full" src={book?.cover_img} />
              </div>
              <div className="flex flex-col items-center text-center justify-center">
                <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">{book?.title}</h2>
                <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                <p className="text-base">{book?.subject_places}</p>
              </div>
            </div>
            <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
              <p className="leading-relaxed text-lg mb-4">{book?.description}<br /><span className='text-black'>Subject: </span> {book?.subjects}<br /><span className='text-black'>Subject Time: </span> {book?.subject_times}</p>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BookDetails;