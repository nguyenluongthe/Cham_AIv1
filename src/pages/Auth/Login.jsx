import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import './Auth.css'; // Import CSS chung

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Xử lý logic đăng nhập giả lập
    alert(`Đăng nhập thành công với email: ${formData.email}`);
    // Lưu thông tin giả vào localStorage để Header nhận diện
    localStorage.setItem('user_info', JSON.stringify({ email: formData.email }));
    navigate('/'); // Chuyển về trang chủ
    window.location.reload(); // Reload để Header cập nhật trạng thái
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2 className="auth-title">Đăng Nhập</h2>
        <p className="auth-subtitle">Chào mừng bạn quay trở lại với Chăm Pa AI</p>
        
        <form onSubmit={handleSubmit} className="auth-form">
          
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

          <button type="submit" className="auth-btn">Đăng nhập ngay</button>
        </form>

        <div className="auth-footer">
          Chưa có tài khoản? 
          <Link to="/dang-ky" className="auth-link">Đăng ký tại đây</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;