import React,{useContext, useEffect, useState} from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { GlobalContext } from '../context/GlobalContext';

export default function NoteForm() {
  const [note, setNote] = useState({
    id: "",
    title: "",
    description: "",
  });

  const { addNote, updateNote, notes } = useContext(GlobalContext)

  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    const noteFound = notes.find((note) => note.id === params.id);
    if (noteFound) {
      setNote({
        id: noteFound.id,
        title: noteFound.title,
        description: noteFound.description,
      });
    }
  }, [params.id, notes]);


  const handleChange=(e)=>{
    setNote({...note,[e.target.name]: e.target.value} );
  }  
  const handleSubmit=(e)=>{
    e.preventDefault();
    if (!note.id) {
      addNote(note);
    } else {
      updateNote(note);
    }
    navigate("/");
  };
  return (
    <div className="flex justify-center items-center h-3/4">
      <form onSubmit={handleSubmit}  className="bg-gray-900 p-10">
        <h2 className="text-3xl mb-7">
          {note.id?'Editing a Note':'Created a Note'}
        </h2>
        <div className="mb-5">
          <input
            type="text"
            name="title"
            value={note.title}
            onChange={handleChange}
            placeholder="Write a title"
            className="py-3 px-4 focus:outline-none focus:text-gray-100 bg-gray-700 w-full"
            autoFocus
          />
        </div>
        <div className="mb-5">
          <textarea
            value={note.description}
            name="description"
            rows="2"
            placeholder="write a description"
            onChange={handleChange}
            className="py-3 px-4 focus:outline-none focus:text-gray-100 bg-gray-700 w-full"
          ></textarea>
          <button className="bg-green-600 w-full hover:bg-green-500 py-2 px-4 mt-5">
          {note.id?'Edit Note':'Create Note'}
          </button>
        </div>
      </form>
    </div>
  );
}
