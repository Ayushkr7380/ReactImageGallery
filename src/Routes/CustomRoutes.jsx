import { Route , Routes} from 'react-router-dom'
import Gallery from '../Components/Gallery/Gallery'
import ImageData from '../Components/ImageData/ImageData'
function CustomRoutes(){
    return (
        <>
            <Routes>
                <Route path='/' element={<Gallery/>}></Route>
                <Route path='/:id' element={<ImageData/>}></Route>
            </Routes>
        </>
    )
}
export default CustomRoutes