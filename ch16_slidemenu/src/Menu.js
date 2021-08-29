import React, { Component } from 'react'
import './Menu.css'

class Menu extends Component {

    render () {
        let visibility = 'hide'
        if (this.props.menuVisibility) {
            visibility = 'show'
        }
        console.log('Rendering: Menu')
        return (
            <div id='flyoutMenu'
                 onMouseDown={this.props.handleMouseDown}
                 className={visibility}>
                <h2><a href='https://docent63.ru'>Главная</a></h2>
                <h2><a href='https://docent63.ru'>About</a></h2>
                <h2><a href='https://docent63.ru'>Contact</a></h2>
                <h2><a href='https://docent63.ru'>Search</a></h2>
            </div>
        )
    }
}

export default Menu