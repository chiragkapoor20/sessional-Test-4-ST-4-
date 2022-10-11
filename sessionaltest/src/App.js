import './App.css';
import  Form from './component/Form'
import { BrowserRouter as Router,Routes,Route, BrowserRouter } from 'react-router-dom';
import Startup from './component/Startup';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Form/>}></Route>
        <Route path='/startup' element={<Startup/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
