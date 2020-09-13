import React from 'react'
import logo from '../logo.svg'

function Header() {
    return (
        <div className="header">
            <img src={logo} className="App-logo" alt="logo" />
            <a href="https://github.com/ChanyutJean">Text Adventure Game</a>
        </div>
    )
}

export default Header