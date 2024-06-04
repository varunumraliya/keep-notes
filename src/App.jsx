import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
import Footer from './Footer'
import CreateNote from './CreateNote'
import Note from './Note'

function App() {

  const [addItem, setAddItem] = useState([]);

  const addNote = (note) => {
    setAddItem((prevData) => {
        return [...prevData, note];
    })
  }

  const onDelete = (id) => {
    setAddItem((oldData) =>
      oldData.filter((currData, index) => {
        return index !== id;
      })
    )
  }

  return (
    <>
      <Header />
      <CreateNote passNote={addNote} />

      {addItem.map((val, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={val.title}
            content={val.content}
            deleteItem={onDelete}
          />
        )
      }
      )}
      <Footer />
    </>
  )
}

export default App
