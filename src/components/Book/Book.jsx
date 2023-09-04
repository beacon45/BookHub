import React from 'react';
import { Link } from 'react-router-dom';
const Book = (book) => {
  return (
    <>
      <section className="m-2 p-1 text-black body-font bg-slate-50">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img className="object-fit object-center rounded" alt="cover" src={book.cover_img} />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <Link to={`/book/${book.id}`} {...book}>
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 hover:underline"> {book.title}</h1>
            </Link>
            <p className="mb-8 leading-relaxed"><span className=' capitalize font-bold'>Author:
              {book.author}</span>
            </p>
            <div className="flex justify-between">
              <span className='font-bold capitalize fw-7'>First Publish Year:
                <span>{book.first_publish_year}</span>
              </span>
            </div>
            <div className="flex">
              <span className='font-semibold capitalize'>Total Editions:
                <span>{book.edition_count}</span>
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Book;