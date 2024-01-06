import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import Home from './pages/Home';
import Store from './pages/Store';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Reset from './pages/ResetPassword';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />} >
            <Route index element={<Home />} />
            <Route path='/store' element={<Store />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/login' element={<Login />} />
            <Route path='/reset' element={<Reset />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
