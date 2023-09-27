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
  const [todos, setTodos] = useState([
    { id: "todo 1", title: "whatching react with em hiu" },
    { id: "todo 2", title: "co len  em hiu" },
    { id: "todo 4", title: "sap duoc roi" }
  ]);

  const handleEventClick = (event) => {// cap nhat lai bien
    // console.log(addres)
    // setName(addres);
    // //this.setState
    // console.log('>>>click me', name)
    //hook not merge state
    //...spread 
    if (!addres) {
      alert('empty input') // truong hop k duoc de trong
      return; // de cho thoat ra kho ham nay
    }
    let newtodo = { id: 'abc', title: addres };
    setTodos([...todos, newtodo])
    setAddres('');// lam cho thanh input trong
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
        <div className="todo-container">
          {todos.map(todos => {
            console.log('>>>check todo', todos)
            return (
              <li className='todo-child' key={todos.id}>{todos.title}</li>
            )
          })}
          <li className="todo-child">em hiu doing homework</li>
          <li className="todo-child">em hiu doing homework</li>

        </div>
        <input type="text" value={addres} onChange={(event) => handleOnChangeInpput(event)} />
        <button type="button" onClick={(event) => handleEventClick(event)}>Click me </button>
      </header>
    </div>
  );
}

export default App;


