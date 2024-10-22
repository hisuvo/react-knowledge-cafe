import './App.css'
import Blogs from './Components/Blogs/Blogs'
import BookMarks from './Components/BookMarks/BookMarks'
import Header from './Components/Header/Header'

function App() {
  return (
    <>
      <Header />
      <main className='md:flex w-10/12 mx-auto my-8'>
        <Blogs />
        <BookMarks />
      </main>
    </>
  )
}

export default App
