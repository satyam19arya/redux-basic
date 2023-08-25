import React from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { deleteNote } from '../redux/slices/notesSlice';

const ListNote = () => {
    const notes = useSelector(state => state.notesReducer.notes);
    const dispatch = useDispatch();

  return (
    <>
        <h1>List of Notes</h1>
        {notes.map((note) => {
            return (
                <div key={note.id}>
                    <h2>{note.title}</h2>
                    <p>{note.desc}</p>
                    <button onClick={() => dispatch(deleteNote(note.id))}>Delete</button>
                </div>
            )
        })}
    </>
  )
}

export default ListNote;