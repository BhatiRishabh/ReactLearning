import React,{useContext}from 'react'
import userContext from '../Context /UserContext'
function Profile() {
    const {data} = useContext(userContext)

  if(!data) return <div>Please Login first</div>
  else return <div>{data.userName} </div>
}

export default Profile