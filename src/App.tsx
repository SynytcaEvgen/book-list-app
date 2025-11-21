import { BookList } from '@/components/book-list/bookList'
import { mockBooks } from '@/data/mockBootData'
import './App.css'

function App() {

  return (
    <>
      <BookList initialBooks={mockBooks}></BookList>z
    </>
  )
}

export default App
