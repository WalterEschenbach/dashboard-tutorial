import React, { Component } from 'react'
import './App.css';
import HomePage from './pages/home_page';
import NavBar from './components/nav_bar';
import AboutPage from './pages/about_page';
import DashboardPage from './pages/dashboard_page';
import { Routes, Route } from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <main>
          <Routes>
            <Route exact path='/' element={<HomePage />} />
            <Route path='/home' element={<HomePage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/dashboard/*' element={<DashboardPage />} />

          </Routes>

        </main>
      </div>
    );

  }
}

export default App;
