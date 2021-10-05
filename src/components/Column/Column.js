import React from 'react'

import './Column.scss'

import Card from 'components/Card/Card'
import { mapOrder } from 'ultilities/sorts'

function Column(props) {
    const { column } = props
    const cards = mapOrder(column.cards, column.cardOrder, 'id')

    return (
        <div className="column">
            <header>hi</header>
            <ul className="card-list">
                {cards.map((card, index) => <Card key={index} card={card} />)}
            </ul>
            <footer>add the card</footer>
        </div>
    )
}

export default Column
