import React from 'react'
import Cards from './Cards'

function FlipCards() {
  return (
    <>
      <section>
        <Cards
          src='https://images.pexels.com/photos/2343170/pexels-photo-2343170.jpeg?cs=srgb&dl=pexels-ylanite-koppens-2343170.jpg&fm=jpg'
          alt='flower'
          cardName='pp'
          h3='Flower'
        />
        <Cards
          src='https://images.pexels.com/photos/838869/pexels-photo-838869.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
          alt='Ball'
          cardName='pp'
          h3='Ball'
        />
        <Cards
          src='https://images.pexels.com/photos/2265247/pexels-photo-2265247.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
          alt='Racoon sleeping '
          cardName='pp'
          h3='Racoon'
        />
        <Cards
          src='https://images.pexels.com/photos/743986/pexels-photo-743986.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          alt='pencil'
          cardName='pp'
          h3='Pencil'
        />
        <Cards
          src='https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          alt='Book'
          cardName='pp'
          h3='Book'
        />
        <Cards
          src='https://images.pexels.com/photos/8015701/pexels-photo-8015701.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          alt='cups'
          cardName='pp'
          h3='Cups'
        />
      </section>
      <style>
        {`
           section {
            display: flex;
            padding:20px;
            width:80%;
            max-height:60%vh;
            margin: 0 0 0 6rem;
            flex-flow:row wrap;
          }
           h2,h4{
            margin-left: 135px;
          }
           
        `}
      </style>
    </>
  )
}

export default FlipCards
