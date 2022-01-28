import 'assets/css/App.css';
import Details from 'pages/Details';
import HomePage from 'pages/HomePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/categories/:idc" element={<Details />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
