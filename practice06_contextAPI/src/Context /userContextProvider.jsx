import React, { useState, useContext } from 'react'
import userContext from './UserContext'

const userContextProvider=({children})=> {
    const [user,setUser]=useState(null)
  return (
    <userContext.Provider value={{user, setUser}}>
        {children}
    </userContext.Provider>
  )
}

export default userContextProvider