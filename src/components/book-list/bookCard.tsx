import { useState } from "react";
import {type  Book } from "@/types/book";
import Button from "@/components/button/button";


interface BookCardProps {
  book: Book;
}

export const BookCard = ({ book }: BookCardProps) => {
  const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);

  const toggleDescription = () => {
    setIsDescriptionVisible(!isDescriptionVisible);
  };

  return (
      <div className="book-card-wrapper">
        {/* Book Image */}
        <div className="">     
          <img
            src={book.imageUrl || 'src/assets/book.svg'}
            alt={`Cover of ${book.title}`}
            className=""
            loading="lazy"
          />
      
        </div>

        {/* Book Content */}
        <div className="book-content-wrapper">
          <div className='card-header'>
            <div className="card-title">
              {book.title}
            </div>
            <div className='card-auth' >
              { book.author ? `by ${book.author}` : 'by Not found'}
            </div>
          </div>

          <div className="card-content">
            {/* Toggle Button */}
          <Button
            variant="outline"
            onClick={toggleDescription}
            className="btn"
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