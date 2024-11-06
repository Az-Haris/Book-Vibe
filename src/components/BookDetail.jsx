
import { useLoaderData, useParams } from 'react-router-dom';

const BookDetail = () => {
    const {bookId} = useParams();
    const data = useLoaderData();
    const book = data.find(book => book.bookId == bookId);
    const { bookName, image, author, category, totalPages, tags, rating, review, publisher, yearOfPublishing } = book;
    
    return (
        <div className='flex flex-col md:flex-row gap-5'>
            <figure className='bg-gray-200 p-5 rounded-xl flex-1 flex justify-center items-center'>
                <img className='rounded-xl' src={image} alt={bookName} />
            </figure>
            <div className='flex-1'>
                <h1>{bookName}</h1>
                <p>By : {author}</p>
                <hr className='border' />
                <p>{category}</p>
                <hr className='border' />
                <p>Review : {review}</p>
                <p>Tag : </p>
                <hr className='border' />
                <p>Number of pages : {totalPages}</p>
                <p>Publisher : {publisher}</p>
                <p>Year of Publishing : {yearOfPublishing}</p>
                <p>Rating : {rating}</p>
                <hr className='border' />
                <button className='btn btn-outline'>Wishlist</button>
                <button className='btn btn-primaryJ'>Mark Read</button>
            </div>
        </div>
    );
};

export default BookDetail;