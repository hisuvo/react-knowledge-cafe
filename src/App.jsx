import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import BookMarks from './Components/BookMarks/BookMarks'
import Header from './Components/Header/Header'

function App() {
  const [bookmarks, setBookmarks] = useState([])

  const handleBookmark = (blog) => {
    const newBookmarks = [...bookmarks, blog]
    setBookmarks(newBookmarks)
  }

  return (
    <>
      <Header />
      <main className='md:flex w-10/12 mx-auto my-8'>
        <Blogs handleBookmark={handleBookmark} />
        <BookMarks bookmarks={bookmarks} />
      </main>
    </>
  )
}

export default App
