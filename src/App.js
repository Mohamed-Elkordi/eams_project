import { Routes, Route } from 'react-router-dom';
import './App.css';
import Land from './components/Land';
import NewCompany from './components/New-Company';
import LogIn from './components/LogIn';

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path='/' element={<Land/>}></Route>
          <Route path='/login' element={<LogIn/>}></Route>
          <Route path='/new-company' element={<NewCompany/>}></Route>
        </Routes>
    </div>
  );
}

export default App;
