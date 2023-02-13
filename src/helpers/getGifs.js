

export const getGifs = async( category ) =>
{
    
    const url = `https://api.giphy.com/v1/gifs/search?api_key=J2sbMwhKwz0tkIFt9yoKcNGuIMH2CtXi&q=${ category }&limit=4`;
    const resp = await fetch (url);

    const { data = [] } = await resp.json();


    const gifs = data.map( img => (
        {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }));

    // console.log(gifs);
    return gifs;
}