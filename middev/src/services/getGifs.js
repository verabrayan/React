

const apiKey = 'ny2aI9Yifc9qPV8YMWxnwXoUPETJ4ba7'

export default async function  getGifs({keyword='gatos'}={}) {
    const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=10&offset=0&rating=g&lang=en`
    const res = await fetch(apiURL)
    const {data=[]}= await res.json()
    const gifs = data.map(image => {
      const {images,title,id}= image
      const {url}=images.downsized_medium
      return {title,id,url}
    })
    return gifs
      /* .then(res => res.json())
      .then(response =>{
        const {data =[]} = response
        const gifs =data.map(image => {
            const {images,title,id}= image
            const {url}=images.downsized_medium
            return {title,id,url}
        }) */
        //return gifs
      //})
}
