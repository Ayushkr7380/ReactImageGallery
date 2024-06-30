import './Images.css'
import { Link } from 'react-router-dom'
function Images({url,title,id}){
    return (
        <>
            <Link to={`/${id}`}>
                <div className='imagecard' >
                    <img src={url} alt={title} />
                </div>
            </Link>
        </>
    )
}
export default Images