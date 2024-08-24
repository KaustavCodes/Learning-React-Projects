import { useState } from 'react'
import './App.css'
import PostList from './Components/PostsList'
import PostAdd from './Components/PostAdd'

function App() {
  const [currentAuthor, setCurrentAuthor] = useState('Kaustav');
  const [currentDescription, setCurrentDescription] = useState('Kaustav');

  function changeAuthorHandler(event) {
    console.log(event);
    setCurrentAuthor(event.target.value);
  }

  function changeDescriptionHandler(event) {
    setCurrentDescription(event.target.value);
  }

  return (
    <>
      <PostAdd onAuthorChange={changeAuthorHandler} onPostDescriptionChange={changeDescriptionHandler} />
      <PostList author={currentAuthor} description={currentDescription} />
    </>
  )
}

export default App
