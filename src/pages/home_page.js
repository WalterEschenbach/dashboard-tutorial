import React from 'react'
import logo from '../logo.svg'

const HomePage = () => {
    return (
        <div id="home_page" className="App-page App-header">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Hello World from React!
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    )
}

export default HomePage
