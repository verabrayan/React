import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { Link } from "react-router-dom";

export default function NoteList() {
  const {notes,deleteNote,toggleNoteDone} = useContext(GlobalContext) 
  console.log(notes) 
  return (
    <div className="flex justify-center">
      {notes.length > 0 ? (
        <div className="w-6/12">
          {notes.map((note) => (
            <div
              className="bg-gray-900 px-20 py-5 text-white shadow-2xl mb-4 flex justify-between"
              key={note.id}
            >
              <div className="text-left">
                <h1 className="text-2xl uppercase">{note.title}</h1>
                <h6 className="text-gray-500">{note.id}</h6>
                <p>{note.description}</p>
                <button
                  className="bg-purple-600 hover:bg-purple-500 py-1 px-3 mt-2 "
                  onClick={() => toggleNoteDone(note.id)}
                >
                  {note.done ? "Undone" : "Done"}
                </button>
              </div>
              <div>
                <Link
                  to={`/edit/${note.id}`}
                  className="bg-gray-600 hover:bg-gray-500 py-2 px-4 mr-2"
                >
                  Edit
                </Link>

                <button
                  className="bg-red-600 hover:bg-red-500 py-2 px-4 mr-2"
                  onClick={() => deleteNote(note.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="bg-gray-600 text-gray-100 py-5 px-10">No Tasks yet</p>
      )}
    </div>
  );
}
