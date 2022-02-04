import 'assets/css/App.css';
import Details from 'pages/Details';
import HomePage from 'pages/HomePage';
import Cart from 'pages/Cart';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Congratulation from 'pages/Congratulation';
import NotFound from 'pages/NotFound';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/categories/:idc" element={<Details />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/congratulation" element={<Congratulation />} />
          <Route exact path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
