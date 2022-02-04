export default function NoteReducer(state, action) {
    switch (action.type) {
      case "ADD_NOTE":
        return {
          ...state,
          notes: [...state.notes, action.payload],
        };
      case "UPDATE_NOTE": {
        const updateNote = action.payload;
  
        const updatedNotes = state.notes.map((note) => {
          if (note.id === updateNote.id) {
            updateNote.done = note.done;
            return updateNote;
          }
          return note;
        });
        return {
          ...state,
          notes: updatedNotes,
        };
      }
      case "DELETE_NOTE":
        return {
          ...state,
          notes: state.notes.filter((note) => note.id !== action.payload),
        };
      case "TOGGLE_NOTE_DONE":
        const updatedNotes = state.notes.map((note) => {
          if (note.id === action.payload) {
            return { ...note, done: !note.done };
          }
          return note;
        });
        return {
          ...state,
          notes: updatedNotes,
        };
      default:
        return state;
    }
  }