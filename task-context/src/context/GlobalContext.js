import { createContext, useReducer } from "react";
import { v4 } from "uuid";
import NoteReducer from "./NoteReducer";

const initialState = {
    notes: [
      {
        id: "1",
        title: "prueba",
        description: "prueba1",
        done: false,
      },
      {
        id: "2",
        title: "prueba",
        description: "prueba2",
        done: false,
      },
    ],
  };
  
  export const GlobalContext = createContext(initialState);

  export const GlobalProvider =({children})=>{
    //console.log('provider')

    const [state, dispatch] = useReducer(NoteReducer, initialState);

    function addNote(note) {
      dispatch({
        type: "ADD_NOTE",
        payload: { ...note, id: v4(), done: false },
      });
    }
  
    function updateNote(updatedNote) {
      dispatch({
        type: "UPDATE_NOTE",
        payload: updatedNote,
      });
    }
  
    function deleteNote(id) {
      dispatch({
        type: "DELETE_NOTE",
        payload: id,
      });
    }
    function toggleNoteDone(id) {
      dispatch({
        type: "TOGGLE_NOTE_DONE",
        payload: id,
      });
    }
  
    return(
        <GlobalContext.Provider value={{
          notes: state.notes,
          addNote,
          updateNote,
          deleteNote,
          toggleNoteDone
        }}>
            {children}
        </GlobalContext.Provider>
    )
    
  }