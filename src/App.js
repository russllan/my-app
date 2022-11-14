import './App.css';
import Main from './Components/main/Main'
import Header from './Components/header/Header'
import { Route, Routes } from 'react-router-dom';

function App() {

  // const data = async (event) => {
  //     let resp = await fetch('https://632ee37cb56bd6ac45a69446.mockapi.io/db/marks')
  //     let data = await resp.json();
  //     event = data;
  //     console.log(data);
  // }

  let url = 'https://632ee37cb56bd6ac45a69446.mockapi.io/db/marks';
  fetch(url)
    .then(resp => resp.json())
    .then(data => {
      console.log(data);
      
    })
  
  

  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={ <Main/>}/>
      </Routes>
    </div>
  );
}

export default App;
