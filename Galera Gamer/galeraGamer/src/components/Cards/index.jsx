import { Link } from 'react-router-dom';
import '../Cards/style.css'

const Cards = ({title,description,img,id}) => {
    return(
        <>
            <Link to={id} className='categoryCard'>
                <img src={img} alt="mainCardImg"  className='mainCardImg' />
                <p className='mainCategoryCardTile'>{title}</p>
                <p className='mainCategoryCardDescription'>{description}</p>
            </Link>
        </>
    )
}

export default Cards;