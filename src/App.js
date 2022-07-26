import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import MainPage from './Pages/MainPage';
import Layout from './Components/Layout/Layout';

function App() {
  return (
    <Routes>
      <Route element={<Layout/>}>
        <Route index element={<MainPage/>} />
      </Route>
    </Routes>
  );
}

export default App;
