import React, { useState } from 'react'
import Popular from '../../Components/Popular/Popular'
import Offers from '../../Components/Offers/Offers'
import NewCollection from '../../Components/NewCollection/NewCollection'


const Home = () => {


  return (
    <div className='h-full'>
      <NewCollection />
      <Offers />
      <Popular />
    </div>
  )
}

export default Home