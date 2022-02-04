
import './App.css';

import {Routes,Route} from 'react-router-dom'
import { GlobalProvider } from "./context/GlobalContext";

import NoteList from "./components/NoteList";
import NoteForm from "./components/NoteForm";
import Heading from "./components/Heading.jsx";

function App() {
  return (
    <>
      <div className="h-screen text-white text-center p-10">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <div className="container mx-auto h-full">
          <GlobalProvider>
            <Heading />
              <Routes>
                <Route path="/" element={<NoteList />} />
                <Route path="/add" element={<NoteForm />} />
                <Route path="/edit/:id" element={<NoteForm />} />
              </Routes> 
          </GlobalProvider>
          
        </div>
      </div>
    </>
  );
}

export default App;
