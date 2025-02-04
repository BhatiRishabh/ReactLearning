import logo from './logo.svg';
import './App.css';
import Greet from './Components/Greet';
import Welcome from './Components/Welcome'
import Message from './Components/Message';
import Counter from './Components/counter';
import NameList from './Components/NameList';
import StyleSheet from './Components/StyleSheet';
import Form from './Components/Form';
//import HookState from './Components/HookState';
import HookMouse from './Components/HookMouse';
function App() {
  return (
    <div className="App">
      {/* <Greet name="Tony Stark" heroname="IRON MAN">
        <p>Hello sir!!!</p>
      </Greet>

      <Welcome name = "Steve Rogers" heroname="Captain America"/> */}
    {/* <Message/> */}
    {/* <Counter/> */}
    {/* <NameList/> */}

    {/* <StyleSheet class="primary"/> */}
    {/* <Form/> */}
        <HookMouse/>

    </div>
  );
}

export default App;
