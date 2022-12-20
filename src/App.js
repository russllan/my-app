import './App.css';
import Main from './Components/main/Main'
import Header from './Components/header/Header'
import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCars } from './redux/carsSlice';
import ProductPage from './pages/more/ProductPage';
import LoginPage from './pages/login/LoginPage';
import Dashboard from './pages/dashboard/Dashboard';

function App() {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCars())
  }, [])

  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={ <Main/>}/>
        <Route path='/ProductPage/:id' element={<ProductPage/>}/>
        <Route path='/LoginPage' element={<LoginPage/>}/>
        <Route path='/Dashboard' element={<Dashboard/>}/>
      </Routes>
    </div>
  );
}

export default App;