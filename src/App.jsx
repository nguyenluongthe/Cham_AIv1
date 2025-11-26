import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Homepage from './pages/HomePage';

import Analysis from "./pages/Analysis/index";
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* Trang chủ (mặc định) */}
        <Route index element={<Homepage />} />
        <Route path="phan-tich" element={<Analysis />} /> 
        
        
      </Route>
    </Routes>
  );
}

export default App;