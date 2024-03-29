import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { initializeNotes } from "./reducers/noteReducer.js"
import { setNotes } from "./reducers/noteReducer.js"
import noteService from './services/notes.js'
import NewNote from "./components/NewNote"
import Notes from "./components/Notes"
import VisibilityFilter from "./components/VisibilityFilter"


const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    console.log('Fetching notes...')
    dispatch(initializeNotes())
    console.log('Notes fetched')
  },[])

  return (
    <div>
      <NewNote />
      <VisibilityFilter />
      <Notes />
    </div>
  )
}

export default App