import React from "react";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const { bookId, bookName, image, author, category, tags, rating } = book;
  return (
    <Link to={`/books/${bookId}`}>
      <div>
        <div className="card bg-base-100 shadow-xl p-5">
          <figure className="px-10 py-10 rounded-xl bg-gray-200">
            <img src={image} alt={bookName} className="rounded-xl h-44 " />
          </figure>
          <div className="card-body px-0">
            <div className="flex gap-5">
              {tags.map((tag, idx) => (
                <button key={idx} className="btn btn-sm">
                  {tag}
                </button>
              ))}
            </div>
            <h2 className="card-title">{bookName}</h2>
            <p>By : {author}</p>
            <hr className="border w-full" />
            <div className="flex justify-between">
              <span>{category}</span>
              <span>{rating} ⭐</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
