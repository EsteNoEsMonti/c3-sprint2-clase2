import React from 'react'
import LSExample from './components/LSExample'
import ThemeSwitcher from './components/ThemeSwitcher '

const App = () => {

  return (
    <>
      <h1 className='text-2xl font-semibold text-center bg-violet-800 shadow-xl shadow-yellow-800 text-yellow-500 mb-5'>
        Storage
      </h1>
      <div className='px-2'>
        <LSExample />
        <br />
        <ThemeSwitcher />
      </div>
      <p>Bokita el mas grande!</p>
    </>
  )
}

export default App