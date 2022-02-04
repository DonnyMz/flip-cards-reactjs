import React, { useState } from 'react'
import './Flip.css'

function Cards(props) {
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)
  return (
    <>
      <div className='flipCard' onClick={handleClick}>
        <div className={click ? 'insideCard' : ''}>
          <div className='card_face frontCard'>
            <img src={props.src} alt={props.alt} className={props.cardName} />
          </div>
          <div className='card_face backCard'>
            <div className='content'>
              <div className='header'>
                <h3>{props.h3}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cards
