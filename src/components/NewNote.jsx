import { useDispatch } from "react-redux"
import { createNote } from "../reducers/noteReducer"

const NewNote = () => {
    const dispatch = useDispatch()

    const addNote = (e) => {
        e.preventDefault()
        const content = e.target.note.value
        e.target.note.value = ''
        dispatch(createNote(content))
    }

  return (
    <form onSubmit={addNote}>
        <input name="note" type="text" className="bg-slate-200 px-4 py-1"/>
        <button type="submit">add</button>
    </form>
  )
}

export default NewNote