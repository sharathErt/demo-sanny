import logo from './logo.svg';
import './App.css';
import ImgComp from './ImgComp';

function App() {



  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <img src="/logo.png" className="App-logo" alt="logo" />
        <ImgComp/>
      </header>
    </div>
  );
}

export default App;
