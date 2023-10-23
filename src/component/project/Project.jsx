import React from 'react'
import './project.css'
import moving from '../../assets/moving.jpeg'
const Project = () => {
  return (
    
    <div className='project__card '>
      
        <img src={moving} alt='project img' />
        
        <div className="card__container">
            <h4>Help Moving</h4>
            <p>Avg. Project : $60 - $139</p>
        </div>
    </div>
  )
}

export default Project