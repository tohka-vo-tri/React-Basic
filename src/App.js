import logo from './logo.svg';
import './App.css';
import Nav from './view/Nav.js'
import { useState } from 'react';
//logic + ctemplate 
//jsx
//bable 
const App = () => {

  let [name, setName] = useState('Erik');//[a1, b1 ,c1.....]
  const [addres, setAddres] = useState('');
  const handleEventClick = (event) => {
    console.log(addres)
    setName(addres);
    //this.setState
    console.log('>>>click me', name)
  }

  const handleOnChangeInpput = (event) => {
    setAddres(event.target.value)
    console.log(event.target.value)
  }
  // re-render
  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>hello word  with reatct {name}  </h1>
        <input type="text" value={addres} onChange={(event) => handleOnChangeInpput(event)} />
        <button type="button" onClick={(event) => handleEventClick(event)}>Click me </button>
      </header>
    </div>
  );
}

export default App;


