import React, { useContext, useState} from 'react'
import { useParams } from 'react-router-dom'
import { ItemContext } from '../contexts/ItemContext'

const Edit = () => {
    const {id} = useParams()
    const {items, handleUpdate, setText} = useContext(ItemContext)
    
    const [[update]] = useState(items.filter(item => (item.id).toString() === id))
    
    

    return (
        <>
            <h2 style={{textAlign:'center', marginTop:'20px'}}>Update Exsist Item</h2>
            <form onSubmit={(e) => {
                e.preventDefault()
                handleUpdate(id)
            }} className='update-form'>
                <input defaultValue={update.text} onChange={(e) => setText(e.target.value)} type="text" name="text" id="text"/>
                <button className='submit-btn'>Update</button>
            </form>
        </>
    )
}

export default Edit