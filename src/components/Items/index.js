import {Link} from 'react-router-dom'

import {BsFillStarFill} from 'react-icons/bs'

import './index.css'

const Items = props => {
  const {eachDetails} = props
  const {
    imageUrl,
    id,
    name,
    cuisine,
    ratingColor,
    ratingText,
    totalReviews,
    rating,
  } = eachDetails

  return (
    <Link to={`/restaurant/${id}`} className="link-item">
      <li testid="restaurant-item" className="list">
        <div>
          <img alt="restaurant" className="imgUrl" src={imageUrl} />
        </div>
        <div className="cont1">
          <h1 className="name">{name}</h1>
          <p className="cui">{cuisine}</p>
          <div className="con">
            <BsFillStarFill className="star" />
            <p className="rating">{rating}</p>
            <h1 className="review">({totalReviews} ratings)</h1>
          </div>
        </div>
      </li>
    </Link>
  )
}

export default Items
