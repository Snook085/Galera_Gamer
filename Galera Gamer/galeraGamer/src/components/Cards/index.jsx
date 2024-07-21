import '../Cards/style.css'

const Cards = ({title,description,img}) => {
    return(
        <>
            <div className='categoryCard'>
                <img src={img} alt="mainCardImg"  className='mainCardImg' />
                <p className='mainCategoryCardTile'>{title}</p>
                <p className='mainCategoryCardDescription'>{description}</p>
            </div>
        </>
    )
}

export default Cards;