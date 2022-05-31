
import React, { useState } from 'react'
import './App.css';

const App = () => {

const [advice,setAdvice] = useState({});
const url = 'https://api.adviceslip.com/advice'

const getAdvice = () => {
  fetch(url,{
    method:'GET',
    cache: 'no-cache'
}).then(response => response.json())
  .then(data => {
    setAdvice(data)
  })
}
  return (
    <div className='main-container'>

        {typeof advice.slip === 'undefined' ? (
          <>
            <div className='advice-container'>
                  <p className='start-p'>Please enter button to get advice</p>
            </div>
            <button className='btn' onClick={getAdvice}><i className='fas fa-dice-five'></i></button>
          </>
            
        ):(
          <>
              <div className='advice-container'>
                <p className='advice-number'>Advice # {advice.slip.id}</p>
                <p className='advice'>{advice.slip.advice}</p>
              </div>
              <button className='btn' onClick={getAdvice}><i className="fas fa-dice-five"></i></button>
          </>
        )}


    </div>
  )
}

export default App