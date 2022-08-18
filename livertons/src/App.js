import './App.css';
import NavBar from "./components/NavBar";
import Home from './components/Home';
import Products from './components/Products';



function App() {
  return (
    <div className="App">
      <NavBar/>
      <Home/>
      <Products />
    </div>
  );
}

export default App;
