import React from 'react';
import { useGlobalContext } from '../../Data/Context';
import Loader from '../Loader';
import coverPart from '../../Assets/coverPart.jpg'
import Book from './Book';

function BookList() {
    const {loading,books,resultTitle}=useGlobalContext();
    const bookWithCovers=books.map((singleBook)=>{
        return{
            ...singleBook,
            id:(singleBook.id).replace("/works/",""),
            cover_img: singleBook.cover_id? `https://covers.openlibrary.org/b/id/${singleBook.cover_id}-L.jpg`: coverPart
        }
    });
    if(loading){
        return(
            <Loader/>
        )
    }
  return (
    <div className='container'>
        <div className="title">
            <h2>{resultTitle}</h2>
        </div>
        <div className="bookList-content">
            {
                bookWithCovers.slice(0,1170).map((item,index)=>{
                    return(
                        <Book key={index}{...item}/>
                    )
                })
            }
        </div>
    </div>
  )
}

export default BookList;