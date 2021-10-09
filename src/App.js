import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Recommendation from './components/Recommendations/Recommendation';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Recommendation/>
    </div>
  );
}

export default App;
