//import logo from './logo.svg';
import './App.css';
import Header from "./components/HeaderComponent";
import Body from "./components/BodyComponent";
import Footer from "./components/FooterComponent";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from "react-router-dom";
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
      <BrowserRouter>
        <div className="row">
          <div style={{"width":"100%"}}>
            <Header/>
          </div>
        </div>
        <div className="row">
          <div style={{"width":"100%"}}>
            <Body/>
          </div>
        </div>
        <div className="row">
          <div style={{"width":"100%"}}>
            <Footer/>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
