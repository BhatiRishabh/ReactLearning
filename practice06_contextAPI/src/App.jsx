import Login from './Components/Login'
import Profile from './Components/Profile'
import UserContextProvider from './Context /userContextProvider'

function App() {

  return (

    <UserContextProvider>
      <h1>Hello</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
