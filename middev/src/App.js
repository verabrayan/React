import React from 'react'
import './App.css';
import ListOfGifs from './components/ListOfGifs';

import {Route, Link} from 'wouter'

function App() {
  
  //const [keyword,setKeyword]=useState('perros')
  return (
    <div className="App">
      <section className="App-content">
        {/*<button onClick={()=> setKeyword('tortuga')}>cambiar Keyword</button>*/}
        <Link to='/gif/perro'>Gifs de perritos</Link>
        <Link to='/gif/gato'>Gifs de gaticos</Link>
        <Link to='/gif/tortuga'>Gifs de tortugas</Link>
        <Route path='/gif/:keyword' component={ListOfGifs}></Route>   
      </section>
    </div>
  );
}

export default App;
