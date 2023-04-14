import React from "react"
export default function Card(props)
{
    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }
    return(
        <div className="Card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={props.coverImg} className="Card_photo"/>
            <div className="Card_rating">
            <img src="Star 1.png" className="star_logo"/>
            <span>{props.stats.rating}</span>  
            <span className="gray">({props.stats.reviewCount}) •{props.location}</span>
            </div>

            <p className="card_title">{props.title}</p>
            <div className="price_tag">
            <p><span className="bold">From ${props.price}</span> / person</p>
            </div>
        </div>
    )
}