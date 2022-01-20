import Nav from '../components/Nav'
import NextHead from '../components/NextHead'
import { useEffect } from 'react'
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc
} from 'firebase/firestore'

const HomePage = () => {
  // adding docs

  useEffect(() => {
    const db = getFirestore()

    const booksColRef = collection(db, 'books')

    getDocs(booksColRef)
      .then((snapshot) => {
        let books = []
        snapshot.docs.forEach((doc) => {
          books.push({ ...doc.data(), id: doc.id })
        })
        console.log(books)
      })
      .catch((err) => {
        console.log(err.message)
      })

    const addBookForm = document.querySelector('.add')
    addBookForm.addEventListener('submit', (e) => {
      e.preventDefault()

      addDoc(booksColRef, {
        title: addBookForm.title.value,
        author: addBookForm.author.value
      }).then(() => {
        addBookForm.reset()
      })
    })

    // deleting docs
    const deleteBookForm = document.querySelector('.delete')
    deleteBookForm.addEventListener('submit', (e) => {
      e.preventDefault()

      const docRef = doc(db, 'books', deleteBookForm.id.value)

      deleteDoc(docRef).then(() => {
        deleteBookForm.reset()
      })
    })
  }, [])

  return (
    <>
      <NextHead title="Home | firebase 9 tutorial" />
      <Nav selectedPageIndex={0} />

      <main className="max-w-7xl mx-auto px-6">
        <h2 className="mt-20 text-gray-800">Firebase Firestore</h2>

        <form className="add mt-10">
          <label htmlFor="title">Title:</label>
          <input type="text" name="title" required />
          <label htmlFor="author">Author:</label>
          <input type="text" name="author" required />

          <button>add a new book</button>
        </form>

        <form className="delete mt-5">
          <label htmlFor="id">Document id:</label>
          <input type="text" name="id" required />

          <button>delete a book</button>
        </form>
      </main>
    </>
  )
}

export default HomePage
