import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa';
import './Auth.css';

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ 
    fullname: '', 
    email: '', 
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Mật khẩu xác nhận không khớp!");
      return;
    }
    
    alert("Đăng ký thành công! Vui lòng đăng nhập.");
    navigate('/dang-nhap');
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2 className="auth-title">Đăng Ký</h2>
        <p className="auth-subtitle">Tạo tài khoản để khám phá văn hóa Chăm</p>
        
        <form onSubmit={handleSubmit} className="auth-form">
          
          <div className="input-group">
            <FaUser className="input-icon" />
            <input 
              type="text" 
              name="fullname"
              placeholder="Họ và tên" 
              className="auth-input"
              value={formData.fullname}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <FaEnvelope className="input-icon" />
            <input 
              type="email" 
              name="email"
              placeholder="Địa chỉ Email" 
              className="auth-input"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <FaLock className="input-icon" />
            <input 
              type="password" 
              name="password"
              placeholder="Mật khẩu" 
              className="auth-input"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <FaLock className="input-icon" />
            <input 
              type="password" 
              name="confirmPassword"
              placeholder="Xác nhận mật khẩu" 
              className="auth-input"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="auth-btn">Đăng ký tài khoản</button>
        </form>

        <div className="auth-footer">
          Đã có tài khoản? 
          <Link to="/dang-nhap" className="auth-link">Đăng nhập ngay</Link>
        </div>
      </div>
    </div>
  );
};

export default Register;