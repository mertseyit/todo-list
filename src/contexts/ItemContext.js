import { createContext, useEffect } from "react";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

//all functions and methodes will be here
export const ItemContext = createContext()

export const Provider = ({children}) => {
    
    const navigate = useNavigate()
    const [items, setItems] = useState([])
    const [newItem, setNewItem] = useState('')
    const [text, setText] = useState('')
    useEffect(() => {
        (() => {
            window.sessionStorage.setItem('items', JSON.stringify(items))
        setItems(JSON.parse(window.localStorage.getItem('items')))
        })()
    },[])
    
    
    const handleCheck = (id) => {
        const filteredItems = items.map((item) => 
        item.id === id ? {...item ,checked:!item.checked} : item)
        setItems(filteredItems)
        window.localStorage.setItem('items', JSON.stringify(filteredItems))
    }
    
    const handleDelete = (id) => {
        const filteredItems = items.filter(item => item.id !== id)
        setItems(filteredItems)
        window.localStorage.setItem('items', JSON.stringify(filteredItems))
    }

    const handeNewItem = (text) => {
        const newItemObject = {
            id: items.length + 1,
            checked:false,
            text,
            last_update: new Date().getDate()
        }
        setItems([...items, newItemObject])
        window.localStorage.setItem('items', JSON.stringify([...items, newItemObject]))
        setNewItem('')
        navigate('/')
    }
    const handleUpdate = (id) => {
        const updatedItem = items.filter((item) => (item.id).toString() === id ? item.text = text : null) 
        setItems(items.filter(item => (item.id).toString() === id ? updatedItem : item))
        window.localStorage.setItem('items',JSON.stringify(items))
        navigate('/')
    }
    return(
        <ItemContext.Provider value={{

            items,handleCheck, handleDelete, 
            newItem, setNewItem, handeNewItem, 
            handleUpdate, text, setText
            
        }}>
            {children}
        </ItemContext.Provider>
    )
}
