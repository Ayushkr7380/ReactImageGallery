import { useEffect, useState } from 'react';
import './Gallery.css';
import axios from 'axios';
import Images from '../Images/Images';
function Gallery(){
    const [photos , setPhotos] = useState([])
    const [isLoading,setIsLoading] = useState(true)
    const [dataFetched , setDataFetched] = useState(false)

    async function ImageData(){
        try {
            
            const response = await axios.get(`https://api.slingacademy.com/v1/sample-data/photos?offset=5&limit=20`);
            console.log(response.data)
            // const allPhotosData = axios(response.data)
            const allPhotosData = response.data.photos;
            console.log(allPhotosData)
            setPhotos([...allPhotosData])
            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
            setDataFetched(true);    
        }
    }

    useEffect(()=>{
        console.log('hello')
        ImageData();
    },[])
    return (
        <>  
                {isLoading ? <h1 style={{
                    color:'white',
                    textAlign:'center',
                    marginTop:'25vh'
                }}>Loading...</h1> : dataFetched ?  <h1 style={{
                    color:'white',
                    textAlign:'center',
                    marginTop:'25vh'    
                }}>Try Again Later...</h1>: 
            <div id="gallerybody">
                {photos.map((d,idx)=> <Images key={`key-${idx}`} url={d.url} id={idx} title={d.title}/> 
                 )}
            </div>
            }
        </>
    )
}
export default Gallery