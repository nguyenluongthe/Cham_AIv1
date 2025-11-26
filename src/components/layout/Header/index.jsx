import React from 'react';
import { NavLink } from 'react-router-dom';
// Đảm bảo đường dẫn ảnh này đúng với máy của bạn
import checklogo from '../../../assets/images/bg.png'; 
import './Header.css'; // Nếu bạn có file CSS riêng cho Header thì import vào, không thì dùng chung index.css

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        {/* === LOGO === */}
        <NavLink to="/" className="logo">
            <img 
              src={checklogo} 
              alt="logo" 
              style={{ width: '4rem', height: '4rem', objectFit: 'contain' }} 
            />
        </NavLink>

        {/* === MENU ĐIỀU HƯỚNG === */}
        <nav className="nav-menu">
          <NavLink to="/" className={({ isActive }) => isActive ? "active-link" : ""}>
            Trang chủ
          </NavLink>
          
          <NavLink to="/phan-tich" className={({ isActive }) => isActive ? "active-link" : ""}>
            Dịch thuật
          </NavLink>
          
          <NavLink to="/van-hoa" className={({ isActive }) => isActive ? "active-link" : ""}>
            Văn hóa
          </NavLink>
          
          <NavLink to="/tai-nguyen" className={({ isActive }) => isActive ? "active-link" : ""}>
            Tài nguyên
          </NavLink>
        </nav>

        {/* === NÚT AUTH (CHỈ HIỂN THỊ ĐĂNG KÝ/ĐĂNG NHẬP) === */}
        <div className="auth-buttons">
          <NavLink to="/dang-ky" className="btn btn-register">
            Đăng ký
          </NavLink>
          <NavLink to="/dang-nhap" className="btn btn-login">
            Đăng nhập
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;