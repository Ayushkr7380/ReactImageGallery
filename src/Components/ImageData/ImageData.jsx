import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import axios from "axios";
import './ImageData.css'
function ImageData(){
    const [imageData,setImageData] = useState([])
    const [isLoading,setIsLoading] = useState(true)
    const [dataFetched , setDataFetched] = useState(false)
    const { id }= useParams()
    async function ImageDetail(){
        try {
            
            const response = await axios.get(`https://api.slingacademy.com/v1/sample-data/photos?offset=5&limit=20`);
            const ImageDetails = response.data.photos;
            console.log(ImageDetails[id])
            const img = ImageDetails[id]
            setImageData([img])
            setIsLoading(false)
        } catch (error) {
            setIsLoading(false)
            setDataFetched(true)
            
        }
    }
    useEffect(()=>{
        ImageDetail()
    },[])
    return(
        <>  <div id="main">

                {isLoading ? 
                <h1>Loading...</h1> : dataFetched ? <h1>Try Again Later..</h1>: 
                imageData.map((d,idx)=>
                    <>
                    <img src={d.url} alt={d.title}/>
                    <div className="content">
                        <p className="title">{d.title}</p>
                        <p className="desc">{d.description}</p>    
                    </div>
                    </>
                )}
            </div>
        </>
    )
}
export default ImageData