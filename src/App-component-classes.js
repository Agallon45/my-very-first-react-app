import React from 'react'
import './App.css'

class App extends React.Component {
  render () {
    const name = 'React projektet'
    const greeting = 'Välkommen till '
    const today = new Date().toLocaleDateString()

    return (
      <div className='App'>
              
        <header className='App-header'>
          <h1>
            Welcome {greeting} {name}
          </h1>
        </header>
              <p>Today is {today}</p>
      </div>
      
    )
  }
}

export default App
