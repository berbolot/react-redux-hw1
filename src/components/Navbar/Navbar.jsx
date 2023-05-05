import React from 'react'
import { Link } from 'react-router-dom'
import path1 from './1.1.jpg'
import path2 from './2.2.jpg'
import path3 from './3.3.jpg'
import path4 from './4.4.jpg'
import d from './Navbar.module.css'

const Navbar = () => {
  const technologies = [
    {
      name: 'development1',
      sr: path1,
      id: '1',
    },
    {
      name: 'development2',
      sr: path2,
      id: '2',
    },
    {
      name: 'development3',
      sr: path3,
      id: '3',
    },
    {
      name: 'development4',
      sr: path4,
      id: '4',
    }
]

  return (
    <div className={d.cont}>
       {
 technologies.map((el) => {
        return <Link
     className={d.link}
          to={el.name}
          key={`${el.id} `}
        >      
       <div className={d.col}> 
        <div className={d.imgBox}><img className={d.img} src={el.sr} alt="" /><h3>lolololololo</h3></div>
       </div>  
       <br />
       <div className={d.col1}> 
        <div className={d.imgBox}><img className={d.img} src={el.sr} alt="" /></div>
       </div>  
          </Link>
      })
    }
    </div>
  )
}

export default Navbar