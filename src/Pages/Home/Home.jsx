import React, { useState } from 'react'
import Popular from '../../Components/Popular/Popular'
import NewCollection from '../../Components/NewCollection/NewCollection'


const Home = () => {


  return (
    <div className='h-full'>
      <NewCollection />
      <Popular />
    </div>
  )
}

export default Home