import './App.css';
import Cabinet from './pages/Cabinet/Cabinet';
import { Route,Routes } from 'react-router-dom';
import Home from './components/Home/Home'
import Statistic from './components/Statistic/Statistic'

function App() {
  
  return (
    <div>
      <Routes>
        <Route path='/' element={<Cabinet></Cabinet>}>
          <Route index path='home' element={<Home></Home>}></Route>
          <Route path='statistic' element={<Statistic></Statistic>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
