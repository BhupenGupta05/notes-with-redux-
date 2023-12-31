import { useDispatch } from "react-redux"
import { createNote } from "../reducers/noteReducer"
import noteService from "../services/notes"

const NewNote = () => {
    const dispatch = useDispatch()

    const addNote = async (e) => {
        e.preventDefault()
        const content = e.target.note.value
        e.target.note.value = ''
        const newNote = await noteService.createNew(content)
        dispatch(createNote(newNote))
    }

  return (
    <form onSubmit={addNote}>
        <input name="note" type="text" className="bg-slate-200 px-4 py-1"/>
        <button type="submit">add</button>
    </form>
  )
}

export default NewNote