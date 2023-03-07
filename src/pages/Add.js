import React,{useContext} from 'react'
import { ItemContext } from '../contexts/ItemContext'

const Add = () => {
  const {newItem, setNewItem, handeNewItem} = useContext(ItemContext)
  return (
    <>
      <h2 style={{textAlign:'center', marginTop:'20px'}}>Add New Item</h2>
      <form onSubmit={(e) => e.preventDefault() } className='add-form'>
        <input value={newItem} onChange={(e) => setNewItem(e.target.value)} type="text" name="text" id="text"/>
        <button onClick={() => {
          handeNewItem(newItem)
        }} className='submit-btn'>Submit</button>
      </form>
    </>
  )
}

export default Add