import { useState } from "react";
import {type  Book } from "@/types/book";
import Button from "@/components/button/button";

import './book-card.css'


interface BookCardProps {
  book: Book;
}

export const BookCard = ({ book }: BookCardProps) => {
  const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);
  const [imageError, setImageError] = useState(false);

  const toggleDescription = () => {
    setIsDescriptionVisible(!isDescriptionVisible);
  };

  return (
      <div className="book-card wrapper">
        {/* Book Image */}
      <div className="image-wrapper">     
          <img
          src={book.imageUrl || 'src/book.svg'}
          alt={`Cover of ${book.title}`}
          loading="lazy"
          onError={() => setImageError(true)}
          aria-label={book.imageUrl && !imageError? `Cover of ${book.title}` : "Book cover placeholder"}
          />
      
        </div>

        {/* Book Content */}
        <div className="book-content-wrapper">
          <div className='card-header'>
            <h3 className="card-title">
              {book.title}
            </h3>
            <div className='card-auth' >
              { book.author ? `by ${book.author}` : 'by Not found'}
            </div>
          </div>

          <div className="card-content">
            {/* Toggle Button */}
          <Button
            variant="outline"
            onClick={toggleDescription}
            className="btn btn--secondary"
            data-expanded={isDescriptionVisible}
            data-controls={`description-${book.id}`}
            children={isDescriptionVisible ? "Hide descripttion": "Show descripttion"}
            >
              
            </Button>

            {/* Description */}
            {isDescriptionVisible && (
              <div
                id={`description-${book.id}`}
                className="book-descriotion"
                role="region"
                data-label="Book description"
              >
                {book.description || "No description available."}
              </div>
            )}
        </div>
      </div>
    </div>
  );
};