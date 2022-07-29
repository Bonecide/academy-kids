import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import MainPage from './Pages/MainPage';
import Layout from './Components/Layout/Layout';
import FleshAnzan from './Pages/FleshAnzan';
import FleshCard from './Pages/FleshCards';
import Generator from './Pages/Generator';
import Multiply from './Pages/Multiply';
import Columns from './Pages/Columns';

function App() {
  return (
    <Routes>
      <Route element={<Layout/>}>
        <Route index element={<MainPage/>} />
        <Route path='fleshAnzan' element={<FleshAnzan/>}/>
        <Route path='fleshCards' element={<FleshCard/>}/>
        <Route path='generator' element={<Generator/>}/>
        <Route path='multiply' element={<Multiply/>}/>
        <Route path='columns' element={<Columns/>}/>
      </Route>
    </Routes>
  );
}

export default App;
