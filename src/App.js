import logo from './logo.svg';
import './App.css';
//logic + ctemplate 
//jsx
//bable 
const App = () => {
  let name = 'Eric';
  let number = 2021;
  let boolean = true;
  let obj = { name: 'Eric', chanel: 'hoi em hiu' };
  let link = 'https://desktop.github.com';
  return (
    <div className="App">
      {console.log('check object:,', obj)}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>hello word  with reatct {name} in {number} </h1>
        <p>{JSON.stringify(obj)}</p>
        <a href={link} target='_blank'>visit the github </a>
      </header>
    </div>
  );
}

export default App;
