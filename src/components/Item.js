import React, {useContext} from 'react'
import { FaTrash , FaPen } from "react-icons/fa";
import { Link } from 'react-router-dom';

import {ItemContext} from '../contexts/ItemContext';

const Item = () => {
  const {handleCheck, handleDelete, items} = useContext(ItemContext)
  return (
    <>
      {
        items.length !== 0 ? items.map((item) => {
          return (
            <li key={item.id} className='item'>
              <div style={{display:'flex', alignItems:'center'}}>
                <input defaultChecked={item.checked}  onClick={(e) => handleCheck(item.id)} type="checkbox" name="check" id="check" className='check' />
                <p className='text'>{item.text}</p> 
              </div>
              <div style={{display:'flex', alignItems:'center'}}>
                <p style={{marginRight:'15px'}}>{item.last_update}</p>
                <Link to={`/edit/${item.id}`} className='update-btn'><FaPen /></Link>
                <button onClick={() => handleDelete(item.id)} className='delete-btn'><FaTrash/></button>
              </div>
            </li>
          )
        }) : <h3 className='not'>Not item here yet</h3>
      }
    </>
  )
}

export default Item