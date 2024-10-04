import React from 'react'
import Navbar from './components/Navbar/Navbar.jsx'
import sidebar from './components/sidebar/sidebar.jsx'

const App = () => {
  return (
    <div>
      <Navbar/>
      <hr />
      <div className="app-content">
        <sidebar/>
      </div>

    </div>
  )
}

export default App