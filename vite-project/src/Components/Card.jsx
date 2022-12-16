import star from '/public/assets/star.svg'

// Allows us to pull out properties for our own use
// props is an object that represents 
// all of the properties that our component will receive
// We can destructure it as we receive it like this
// const rating = props.rating;
// const reviews = props.reviews;
// const activity = props.activity;
// const price = props.price;

// const Card = ({ rating, reviews, activity, price }) => {
//     return (
//         <div className="card">
//             <img src={katie} alt="activities" className="card__img" />
//             <div className='card__stats'>
//                 <img src={star} alt="star" />
//                 <span className='card__stats--rating'>{rating}</span>
//                 <span className='card__stats--reviews'>{reviews}</span>
//                 <span className='card__stats--country'>⋅ USA</span>
//             </div>
//             <p className='card__title'>{activity}</p>
//             <p className='card__price'>
//                 <b>From ${price}</b>/person
//             </p>
//         </div>
//     )
// }

import data from '../data'

const Card = (props) => {
    // When badgeText is initiated
    // Its value is undefined i.e false
    // In our condition we are stating
    // If badgeText exist/has a real value
    // render our div

    console.log(props.card)
    let badgeText
    if (props.card.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.card.location === "Online") {
        badgeText = "ONLINE"
    }

    return (
        <div className="card">
            {badgeText && <div className='card__badge'>{badgeText}</div>}
            <img src={`public/assets/${props.card.coverImg}`} alt="activities" className="card__img" />
            <div className='card__stats'>
                <img src={star} alt="star" />
                <span className='card__stats--rating'>{props.card.stats.rating}</span>
                <span className='card__stats--reviews'>({props.card.stats.reviewCount})</span>
                <span className='card__stats--country'>⋅ USA</span>
            </div>
            <p className='card__title'>{props.card.title}</p>
            <p className='card__price'>
                <b>From ${props.card.price}</b>/person
            </p>
        </div>
    )
}

export default Card;