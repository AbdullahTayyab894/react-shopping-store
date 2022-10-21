import React from 'react'
import s4 from './s4.jpg'
import './sale.css'

const Sales = () => {
  return (
    <div className="img-hover-zoom img-hover-zoom--point-zoom" style={{
        marginTop:"60px",
        marginBottom:"50px",
    }}>
        <img src={s4} alt="" width="100%" height="500px"/>

    </div>
  )
}

export default Sales