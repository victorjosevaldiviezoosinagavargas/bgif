import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';



const GifExpertApp = () => {

    const [categories, setCategories] = useState(['dragon ball']);

    // const handleAdd = () => {
    //     //setCategories([...categories, 'Naruto']);
    //     setCategories( cats => [...cats, 'Naruto']);
       
    // }

   return(
    <>
        <h2>GifExpertApp</h2>
        <AddCategory setCategories={ setCategories }/>
        
        <hr></hr> 
        
        <ol>
            {
                categories.map( category => (
                    <GifGrid 
                        key={ category }
                        category={ category }
                    />
                    //return <li key={ category }>{ category }</li>
                ))
            }
        </ol>
    </>
) 
}


export default GifExpertApp;
