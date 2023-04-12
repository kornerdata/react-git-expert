export const getGifs = async (category) =>{
    const url = `https://api.giphy.com/v1/gifs/search?api_key=nv0ZkT2PncwkX8IUytOryz2VEkqmQ9gL&q=${ category }&Limit=10`
    const resp = await fetch( url )
    const {data} = await resp.json();

    const gifs = data.map(img => ({
       id: img.id,
       title: img.title,
       url: img.images.downsized_medium.url
    }))
    //console.log(gifs) 
    return gifs
 }
