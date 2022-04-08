import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
//import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

  //const [count, setCount] = useState(0);

  const {data: images, loading} = useFetchGifs( category );

  //console.log(state);

  // const [images, setImages] = useState([]);

  //  useEffect( () => {
  //    getGifs (category)
  //     //.then ( imgs => setImages (imgs))
  //     .then ( setImages );
  //  }, [ category ])

 // getGifs();
  
  return (
    
    <> 
    <h3 className="card animate__animated animate__flash">{ category }</h3>
      { loading && <p className="card animate__animated animate__fadeInUp">Loading</p>}  
      <div className="card-grid">
         <li>
            {
              images.map( (img) => (
                <GifGridItem 
                  key={img.id}
                  { ...img }
                />
              )) 
            }
          </li>

        </div>
    </>
   
  )
}
