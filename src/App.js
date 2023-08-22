import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import RecipeDetail from './pages/Home/view';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/recipe' element={<RecipeDetail />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
