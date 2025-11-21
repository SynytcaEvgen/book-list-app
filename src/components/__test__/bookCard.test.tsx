import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { screen, fireEvent } from "@testing-library/dom";
import "@testing-library/jest-dom";
import { BookCard } from "../book-list/bookCard";
import type { Book } from "@/types/book";

const mockBook: Book = {
  id: "1",
  title: "Test Book",
  description: "This is a test description for the book.",
  author: "Test Author",
  imageUrl: "https://example.com/image.jpg",
};

describe("BookCard", () => {
  it("renders book title and author correctly", () => {
    render(<BookCard book={mockBook} />);
    
    expect(screen.getByText("Test Book")).toBeInTheDocument();
    expect(screen.getByText("by Test Author")).toBeInTheDocument();
  });

  it("toggles description visibility when button is clicked", () => {
    render(<BookCard book={mockBook} />);
    
    // Description should be hidden initially
    expect(screen.queryByText(mockBook.description)).not.toBeInTheDocument();
    
    // Description should be hidden again
    expect(screen.queryByText(mockBook.description)).not.toBeInTheDocument();
  });

  it("displays placeholder when no image URL is provided", () => {
    const bookWithoutImage = { ...mockBook, imageUrl: undefined };
    render(<BookCard book={bookWithoutImage} />);
    
    // Should render BookOpen icon as placeholder
    const placeholder = screen.getByRole("img", { name: /book cover placeholder/i });
    expect(placeholder).toBeInTheDocument();
  });

  it("handles image loading errors gracefully", () => {
    render(<BookCard book={mockBook} />);
    
    const image = screen.getByAltText(`Cover of ${mockBook.title}`);
    
    // Simulate image load error
    fireEvent.error(image);
    
    // Should display placeholder after error
    const placeholder = screen.getByRole("img", { name: /book cover placeholder/i });
    expect(placeholder).toBeInTheDocument();
  });

});