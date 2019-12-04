import React from 'react'
import './App.css'

import Auth from './components/auth'
import Login from './components/login'
import LoginWrapper from './components/context'

function App() {
  return (
    <LoginWrapper>
      <Login />
      <hr />
      <Auth capability="read">
        <button>Go to the reader</button>
      </Auth>
      <Auth capability="create">
        <button>Make new post</button>
      </Auth>
      <Auth capability="update">
        <button>Edit Something</button>
      </Auth>
      <Auth capability="delete">
        <button>Delete Something</button>
      </Auth>
    </LoginWrapper>
  )
}

export default App
