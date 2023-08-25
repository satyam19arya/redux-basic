import React from 'react'
import { useSelector } from 'react-redux';

const ListNote = () => {
    const notes = useSelector(state => state.notesReducer.notes);

  return (
    <>
        <h1>List of Notes</h1>
        {notes.map((note) => {
            return (
                <div key={note.id}>
                    <h2>{note.title}</h2>
                    <p>{note.desc}</p>
                </div>
            )
        })}
    </>
  )
}

export default ListNote;