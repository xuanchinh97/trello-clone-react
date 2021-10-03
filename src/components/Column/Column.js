import React from 'react'

import './Column.scss'
import Task from 'components/Task/Task'

function Column() {
    return (
        <div className="board-column">
            <header>board column </header>
            <ul className="task-list">
                <Task />
                <li className="task-item ">Add what you'd like to work on below</li>
                <li className="task-item ">Add what you'd like to work on below</li>
                <li className="task-item ">Add what you'd like to work on below</li>
            </ul>
            <footer>add the card</footer>
        </div>
    )
}

export default Column
