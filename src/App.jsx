import React from 'react'

import './App.css'
import Home from './components/Home'
import PlayerContextProvider from './context/PlayerContext'

const App = () => {
  return (
    <PlayerContextProvider>
      <Home />
    </PlayerContextProvider>
  )
}

export default App