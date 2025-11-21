import { useState } from "react";
import type { Book } from "@/types/book";
import { BookCard } from "@/components/book-list/bookCard";
import  Button  from "@/components/button/button";
import './book-list.css' 


interface BookListProps {
  initialBooks: Book[];
}

export const BookList = ({ initialBooks }: BookListProps) => {
  const [books, setBooks] = useState<Book[]>(initialBooks);

  const handleAddBook = () => {
    const newBook: Book = {
      id: `book-${Date.now()}`,
      title: `New Book ${books.length + 1}`,
      description: "",
      author: "Unknown Author",
    };

    setBooks([newBook, ...books]);
  };

  return (
    <div className="book-list wrapper">
      {/* Header */}
      <header className="header">
        <div>
          <h1 className="header-text">Book Library</h1>
          <p className="header-text-small">
            Explore and manage your collection
          </p>
        </div>
        
        {/* Add Book Button */}
        <div className="">
          <Button
            onClick={handleAddBook}
            className="btn"
            aria-label="Add a new book to the library"
          >
            Add New Book
          </Button>
        </div>
      </header>

      

      {/* Books Grid */}
      <div
        className="items"
        role="list"
        data-label="List of books in the library"
      >
        {books.length === 0 ? (
          <div className="" role="status">
            No books in your library yet. Click "Add New Book" to get started!
          </div>
        ) : (
          books.map((book) => (
            <div className="item" key={book.id} role="listitem">
              <BookCard book={book} />
            </div>
          ))
        )}
      </div>
    </div>
  );
};
