import './App.css';
import Navbar from './components/Navbar/Navbar';
import Landing from './components/Landing/Landing';
import ProductDetails from './components/ProductDetails/ProductDetails';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Landing />
      {/* <ProductDetails /> */}
    </div>
  );
}

export default App;
