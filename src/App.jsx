import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import BookMarks from './Components/BookMarks/BookMarks'
import Header from './Components/Header/Header'

function App() {
  const [bookmarks, setBookmarks] = useState([])
  const [readingTime, setReadingTime] = useState(0)

  const handleBookmark = (blog) => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks)
  }

  const handleMakeAsRead = (time) => {
    const newReadTime = readingTime + time;
    setReadingTime(newReadTime)
  }

  return (
    <>
      <Header />
      <main className='md:flex w-10/12 mx-auto my-8'>
        <Blogs handleBookmark={handleBookmark} handleMakeAsRead={handleMakeAsRead} />
        <BookMarks bookmarks={bookmarks} readingTime={readingTime} />
      </main>
    </>
  )
}

export default App
