import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {
  
  const { images, isLoading } = useFetchGifs( category );
  
  console.log({ isLoading });  


  //This code below can be resume in one CustomHook
  // const [images, setImages] = useState([])

  //   const getImages = async() => {
  //     const newImages = await getGifs( category );
  //     setImages(newImages);
  //   }

  //   useEffect( ()=> {
  //     getImages();
  //   }, []);

    return (
      <>
          <h3>{ category }</h3> 
          {
            isLoading && ( <h2>Carganando</h2>)
          } 

          <div className="card-grid">
            {
              images.map(( image )  => (
                <GifItem 
                  key={ image.id }
                  { ...image}
                  />
              ))  
            }
          </div>
      </>
    )
}
