import React from 'react'

import './Card.scss'

function Card(props) {
    const {card} = props

    return (
        <li className="card-cover ">
            {card.cover && <img src = {card.cover} className="card-cover" alt="" />}
            {card.title}
        </li>
    )
}

export default Card
