import React from 'react'
import './App.css'
import SimpleCard from './SimpleCard'
import SearchField from './SearchField'
import MenuField from './MenuField'
import { getDefaultNormalizer } from '@testing-library/dom'



function App () {
  const name = ''
  const greeting = 'BROTTSPLATS 2000'
  const today = new Date().toLocaleDateString()
  let nmbr = [0, 1, 2, 3, 4, 5, 6, 7, 8];



  return (
    <div className='App'>
            
      <header className='App-header'>
        <h1 className="App-header-text">
          Welcome to {greeting} {name}
        </h1>
      </header>
        <MenuField/>
        <SearchField/>
      
        <div class="container">
        {nmbr.map((m)=>{
          return <SimpleCard nr={m} fetch={MenuField.fetchLink}/>
        })}
      
        </div>
        
        
     

      
    </div>
    
  )
}






 




export default App
