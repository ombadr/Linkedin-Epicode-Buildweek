import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Profile from './components/Profile';
import Fetchprofilo from './components/Fetchprofilo';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (


    <BrowserRouter>
      <Routes>

        <Route path="/:id" element={
          <Profile />
        }>

        </Route>

      </Routes>
    </BrowserRouter>


  );
}

export default App;
