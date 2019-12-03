import React from 'react'
import './list.css'

import useArray from '../hooks/useArray'

const List = props => {
  const { storeName } = props
  const shoppingList = useArray(
    [
      { text: "eggs", id: Math.random() },
      { text: "milk", id: Math.random() },
      { text: "butter", id: Math.random() },
      { text: "ramen", id: Math.random() }
    ]
  )
  return (
    <>
      <h3>{storeName}</h3>
      <button onClick={() => shoppingList.add({ text: Math.random(), id: Math.random() })}>add item</button>
      <ul className="List">
        {shoppingList.value.map(item => (
          <li key={item.id}>
            {item.text}
            <button onClick={() => shoppingList.removeById(item.id)}>delete</button>
          </li>
        ))}
      </ul>
      <button onClick={shoppingList.clear}>clear all items</button>
    </>
  )
}

export default List
