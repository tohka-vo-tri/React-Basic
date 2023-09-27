import logo from './logo.svg';
import './App.css';
import Nav from './view/Nav.js'
import { useState } from 'react';
import Todo from './view/Todo';
//logic + ctemplate 
//jsx
//bable 
const App = () => {

  let [name, setName] = useState('Erik');//[a1, b1 ,c1.....]
  const [addres, setAddres] = useState('');
  const [todos, setTodos] = useState([
    { id: "todo 1", title: "whatching react with em hiu", type: 'eric' },
    { id: "todo 2", title: "co len  em hiu", type: 'eric' },
    { id: "todo 3", title: "sap duoc roi", type: 'hoc react' },
    { id: "todo 4", title: "sap duoc roi", type: 'hoi em hiu' }
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
    let newtodo = { id: 'abc', title: addres, type: 'eric' };
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

      <header className="App-header">
        <Nav />
        <img src={logo} className="App-logo" alt="logo" />
        <h1>hello word  with reatct {name}  </h1>
        <Todo
          todos={todos}//bên trái tên của props muốn truyền đi bên phải là giá trị của nó
          title='all pro'
        />
        <Todo
          todos={todos.filter(item => item.type === 'eric')}//fillter loc cac phan tu co type la eric
          title={'Erics todo'}
        />
        <input type="text" value={addres} onChange={(event) => handleOnChangeInpput(event)} />
        <button type="button" onClick={(event) => handleEventClick(event)}>Click me </button>
      </header>
    </div>
  );
}

export default App;


