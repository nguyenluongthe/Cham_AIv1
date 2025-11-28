import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Homepage from './pages/HomePage';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import Analysis from "./pages/Analysis/index";
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* Trang chủ (mặc định) */}
        <Route index element={<Homepage />} />
        <Route path="phan-tich" element={<Analysis />} /> 
        <Route path="dang-ky" element={<Register />} />
        <Route path="dang-nhap" element={<Login />} />
        
      </Route>
    </Routes>
  );
}

export default App;