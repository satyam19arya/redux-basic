import { nanoid } from '@reduxjs/toolkit';
import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { createNote } from '../redux/slices/notesSlice';

const CreateNote = () => {
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');   
    const dispatch = useDispatch();

    function handleSubmit(e){
        e.preventDefault();

        dispatch(createNote({
            title,  
            desc,
            id: nanoid(10)
        }))
    }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Title"  onChange={(e) => setTitle(e.target.value)} />
        <input type="text" placeholder="Description" onChange={(e) => setDesc(e.target.value)} />
        <input type="submit" onClick={handleSubmit}/>
      </form>

    </>
  )
}

export default CreateNote;