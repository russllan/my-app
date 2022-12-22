import './App.css';
import Main from './Components/main/Main'
import Header from './Components/header/Header'
import { Route, Routes } from 'react-router-dom';
import ProductPage from './pages/more/ProductPage';
import LoginPage from './pages/login/LoginPage';
import Dashboard from './pages/dashboard/Dashboard';
import CreateCars from './pages/createCars/CreateCars';
import RequestPage from './pages/request/RequestPage';

function App() {

  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={ <Main/>}/>
        <Route path='/ProductPage/:id' element={<ProductPage/>}/>
        <Route path='/LoginPage' element={<LoginPage/>}/>
        <Route path='/Dashboard' element={<Dashboard/>}/>
        <Route path='/createCars' element={<CreateCars/>}/>
        <Route path='/request' element={<RequestPage/>} />
      </Routes>
    </div>
  );
}

export default App;