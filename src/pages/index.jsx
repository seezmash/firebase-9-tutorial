import Nav from '../components/Nav'
import NextHead from '../components/NextHead'
import { useEffect } from 'react'
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from 'firebase/auth'
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
  onSnapshot,
  query,
  where,
  orderBy,
  serverTimestamp,
  getDoc,
  updateDoc
} from 'firebase/firestore'

const HomePage = () => {
  // adding docs

  useEffect(() => {
    const db = getFirestore()
    const auth = getAuth()

    // Get a single document
    const bookRef = doc(db, 'books', 'HpMhemds5BtPtHqfoqc8')

    // getDoc(bookRef).then((doc) => {
    //   console.log(doc.data(), doc.id)
    // })

    const unsubBook = onSnapshot(bookRef, (doc) => {
      console.log(doc.data(), doc.id)
    })

    const booksColRef = collection(db, 'books')

    const filteredColQuery = query(booksColRef, orderBy('createdAt'))

    // Get data once

    // getDocs(booksColRef)
    //   .then((snapshot) => {
    //     let books = []
    //     snapshot.docs.forEach((doc) => {
    //       books.push({ ...doc.data(), id: doc.id })
    //     })
    //     console.log(books)
    //   })
    //   .catch((err) => {
    //     console.log(err.message)
    //   })

    // Get initial data and on changes
    const unsubBooksCol = onSnapshot(filteredColQuery, (snapshot) => {
      let books = []
      snapshot.docs.forEach((doc) => {
        books.push({ ...doc.data(), id: doc.id })
      })
      console.log(books)
    })

    // Add to a book to collection
    const addBookForm = document.querySelector('.add')
    addBookForm.addEventListener('submit', (e) => {
      e.preventDefault()

      addDoc(booksColRef, {
        title: addBookForm.title.value,
        author: addBookForm.author.value,
        createdAt: serverTimestamp()
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

    // update a document
    const updateForm = document.querySelector('.update')
    updateForm.addEventListener('submit', (e) => {
      e.preventDefault()

      const docRef = doc(db, 'books', updateForm.id.value)

      updateDoc(docRef, { title: 'This book title was updated, ey' }).then(
        () => {
          updateForm.reset()
        }
      )
    })

    // signing users up
    const signupForm = document.querySelector('.signup')
    signupForm.addEventListener('submit', (e) => {
      e.preventDefault()

      const email = signupForm.email.value
      const password = signupForm.password.value

      createUserWithEmailAndPassword(auth, email, password)
        .then((cred) => {
          console.log('user created: ', cred.user)
          signupForm.reset()
        })
        .catch((err) => {
          console.log(err.message)
        })
    })

    // logging in and out
    const logoutButton = document.querySelector('.logout')
    logoutButton.addEventListener('click', () => {
      signOut(auth)
        .then(() => {
          console.log('the user signed out')
        })
        .catch((err) => {
          console.log(err.message)
        })
    })

    const loginForm = document.querySelector('.login')
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault()

      const email = loginForm.email.value
      const password = loginForm.password.value

      signInWithEmailAndPassword(auth, email, password)
        .then((cred) => {
          // console.log('user logged in: ', cred.user)
          loginForm.reset()
        })
        .catch((err) => {
          console.log(err.message)
        })
    })

    // subscribing to auth changes
    const unsubAuth = onAuthStateChanged(auth, (user) => {
      console.log('user status changed: ', user)
    })

    // unsubscribing from changes (auth & db)
    const unsubButton = document.querySelector('.unsub')
    unsubButton.addEventListener('click', () => {
      console.log('unsubscribing')
      unsubAuth()
      unsubBook()
      unsubBooksCol()
    })
  }, [])

  return (
    <>
      <NextHead title="Home | firebase 9 tutorial" />
      <Nav selectedPageIndex={0} />

      <main className="max-w-7xl mx-auto px-6 mb-40">
        <h2 className="mt-20 text-gray-800">Firebase Firestore</h2>

        {/* add book */}
        <form className="add mt-10 p-4 bg-gray-100">
          <label htmlFor="title">Title:</label>
          <input type="text" name="title" required />
          <label htmlFor="author">Author:</label>
          <input type="text" name="author" required />

          <button className="ml-4 px-2 py-1 rounded bg-gray-200">
            add a new book
          </button>
        </form>

        {/* delete book */}
        <form className="delete mt-5 p-4 bg-gray-100">
          <label htmlFor="id">Document id:</label>
          <input type="text" name="id" required />

          <button className="ml-4 px-2 py-1 rounded bg-gray-200">
            delete a book
          </button>
        </form>

        {/* update book */}
        <form className="update mt-5 p-4 bg-gray-100">
          <label htmlFor="id">Document id:</label>
          <input type="text" name="id" required />

          <button className="ml-4 px-2 py-1 rounded bg-gray-200">
            update a book
          </button>
        </form>

        {/* user sign up */}
        <form className="signup mt-10 p-4 bg-gray-100">
          <label htmlFor="email">email:</label>
          <input type="email" name="email" />
          <label htmlFor="password">password:</label>
          <input type="password" name="password" />
          <button className="ml-4 px-2 py-1 rounded bg-gray-200">signup</button>
        </form>

        {/* user sign up */}
        <form className="login mt-10 p-4 bg-gray-100">
          <label htmlFor="email">email:</label>
          <input type="email" name="email" />
          <label htmlFor="password">password:</label>
          <input type="password" name="password" />
          <button className="ml-4 px-2 py-1 rounded bg-gray-200">login</button>
        </form>

        <button className="logout mt-10 px-2 py-1 rounded bg-gray-200">
          logout
        </button>

        <h2 className="mt-10">Unsubscribing</h2>
        <button className="unsub mt-10 px-2 py-1 rounded bg-gray-200">
          unsubscribe from db/auth changes
        </button>
      </main>
    </>
  )
}

export default HomePage
