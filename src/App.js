import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import MainPage from './Pages/MainPage';
import Layout from './Components/Layout/Layout';
import FleshAnzan from './Pages/FleshAnzan';

function App() {
  return (
    <Routes>
      <Route element={<Layout/>}>
        <Route index element={<MainPage/>} />
        <Route path='fleshAnzan' element={<FleshAnzan/>}/>
      </Route>
    </Routes>
  );
}

export default App;
