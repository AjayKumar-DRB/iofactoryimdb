import React from 'react'
import spinner from './spinner.svg'

const Spinner = () => {
  return (
    <div>
      <img src={spinner} alt="Loading..." className="loading-style spinning" />
    </div>
  )
}

export default Spinner;