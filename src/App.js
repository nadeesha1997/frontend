//import logo from './logo.svg';
import './App.css';
import Header from "./components/HeaderComponent";
import Body from "./components/BodyComponent";
import Footer from "./components/FooterComponent";

function App() {
  return (
    <div className="App">
      {/*<header className="App-header">*/}
      {/*  <img src={logo} className="App-logo" alt="logo" />*/}
      {/*  <p>*/}
      {/*    Edit <code>src/App.js</code> and save to reload.*/}
      {/*  </p>*/}
      {/*  <a*/}
      {/*    className="App-link"*/}
      {/*    href="https://reactjs.org"*/}
      {/*    target="_blank"*/}
      {/*    rel="noopener noreferrer"*/}
      {/*  >*/}
      {/*    Learn React*/}
      {/*  </a>*/}
      {/*</header>*/}
      <div className="row">
        <Header/>
      </div>
      <div className="row">
        <Body/>
      </div>
      <div className="row">
        <Footer/>
      </div>
    </div>
  );
}

export default App;
