import React from 'react'
import './brand.css'
import ikea from '../../assets/ikea.png'
const Brand = () => {
  return (
    <div className='brand'>
        <div>
            <img src={ikea} alt="brand" />
        </div>
        <div>
            <img src={ikea} alt="brand" />
        </div>
        <div>
            <img src={ikea} alt="brand" />
        </div>
    </div>
  )
}

export default Brand