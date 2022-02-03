import React, {useState,useEffect} from 'react'
import Gif from './Gif';
import getGifs from '../services/getGifs'

export default function ListOfGifs({params}) {
    const {keyword}= params
    const [gifs,setGifs] = useState([])

    useEffect(()=>{
      getGifs({keyword})
      .then(gifs => setGifs(gifs))
      
      //setGifs(D_GIFS)
    }, [keyword])
    return <div>
      {
        gifs.map(gif =>
        <Gif 
          key ={gif.id} 
          title={gif.title} 
          url={gif.url} 
          id={gif.id} />
        )
      }

      
    
    </div>
    
}
