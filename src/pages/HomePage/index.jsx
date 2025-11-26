import React from 'react';
import { Link } from 'react-router-dom';
import styles from './HomePage.module.css';

// Import các icons
import { 
  FaScroll,         
  FaBookOpen,       
  FaHistory,        
  FaFileUpload,     
  FaBrain,          
  FaLanguage        
} from 'react-icons/fa';
import { FaGraduationCap, FaFileDownload } from 'react-icons/fa';
import backgroundImage from '../../assets/images/homepage.png'; 
// Bạn nhớ thay đường dẫn ảnh này bằng ảnh chữ Chăm trong thẻ card nhé
import cultureImage from '../../assets/images/homepage.png'; 

const Homepage = () => {

  // Dữ liệu giả lập cho 3 bài viết văn hóa (để code gọn hơn)
  const culturePosts = [
    {
      id: 1,
      title: "Văn hoá Chămpa",
      desc: "Văn hoá Chămpa Văn hoá Chămpa Văn hoá Chămpa Văn hoá Chămpa Văn hoá Chămpa Văn hoá Chămpa",
      img: cultureImage
    },
    {
      id: 2,
      title: "Văn hoá Chămpa",
      desc: "Văn hoá Chămpa Văn hoá Chămpa Văn hoá Chămpa Văn hoá Chămpa Văn hoá Chămpa Văn hoá Chămpa",
      img: cultureImage
    },
    {
      id: 3,
      title: "Văn hoá Chămpa",
      desc: "Văn hoá Chămpa Văn hoá Chămpa Văn hoá Chămpa Văn hoá Chămpa Văn hoá Chămpa Văn hoá Chămpa",
      img: cultureImage
    }
  ];

  return (
    <> 
      {/* === SECTION 1: HERO === */}
      <section 
        className={styles.hero} 
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className={styles.heroContent}>
          <h1>KHÁM PHÁ<br />VẺ ĐẸP CỦA CHỮ CHĂMPA</h1>
          <p>Ứng dụng AI hỗ trợ nhận dạng, dịch thuật và bảo tồn ngôn ngữ Chăm cổ đại</p>
          <Link to="/phan-tich" className={styles.ctaButton}>Bắt đầu dịch ngay</Link>
        </div>
      </section>

      {/* === SECTION 2: TÍNH NĂNG === */}
      <section className={styles.featuresSection}>
        <div className={styles.featuresContainer}>
          {/* CỘT TÍNH NĂNG */}
          <div className={styles.featuresColumn}>
            <h2 className={styles.sectionTitle}>TÍNH NĂNG NỔI BẬT</h2>
            <div className={styles.featureItem}>
              <FaScroll className={styles.featureIcon} />
              <div>
                <h3>Nhận dạng chữ viết (OCR)</h3>
                <p>Tự động nhận diện ký tự Chăm từ hình ảnh văn bản.</p>
              </div>
            </div>
            <div className={styles.featureItem}>
              <FaBookOpen className={styles.featureIcon} />
              <div>
                <h3>Từ điển & Ngữ pháp</h3>
                <p>Tra cứu từ vựng Chăm - Việt và cấu trúc câu.</p>
              </div>
            </div>
            <div className={styles.featureItem}>
              <FaHistory className={styles.featureIcon} />
              <div>
                <h3>Kho dữ liệu số hóa</h3>
                <p>Lưu trữ và bảo tồn tư liệu cổ.</p>
              </div>
            </div>
          </div>
          
          {/* CỘT VẬN HÀNH */}
          <div className={styles.howItWorksColumn}>
            <h2 className={styles.sectionTitle}>QUY TRÌNH XỬ LÝ</h2>
            <div className={styles.featureItem}>
              <FaFileUpload className={styles.featureIcon} />
              <div>
                <h3>Tải lên tài liệu</h3>
                <p>Upload hình ảnh văn bản tiếng Chăm cần dịch.</p>
              </div>
            </div>
            <div className={styles.featureItem}>
              <FaBrain className={styles.featureIcon} />
              <div>
                <h3>AI Phân tích & Xử lý</h3>
                <p>Deep Learning phân tích nét chữ và nhận diện.</p>
              </div>
            </div>
            <div className={styles.featureItem}>
              <FaLanguage className={styles.featureIcon} />
              <div>
                <h3>Phiên âm & Dịch thuật</h3>
                <p>Trả về kết quả phiên âm và bản dịch tiếng Việt.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === SECTION 3: VĂN HÓA (MỚI THÊM) === */}
      <section className={styles.cultureSection}>
        <div className={styles.cultureHeader}>
          <h2>VĂN HOÁ</h2>
          <div className={styles.titleUnderline}></div>
        </div>

        <div className={styles.cultureGrid}>
          {culturePosts.map((post) => (
            <div key={post.id} className={styles.cultureCard}>
              <div className={styles.cardImageContainer}>
                <img src={post.img} alt={post.title} />
              </div>
              <div className={styles.cardContent}>
                <h3>{post.title}</h3>
                <p>{post.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.buttonContainer}>
          <Link to="/van-hoa" className={styles.seeMoreBtn}>
            Xem thêm
          </Link>
        </div>
      </section>
      {/* === SECTION 4: TÀI NGUYÊN (MỚI) === */}
      <section className={styles.resourcesSection}>
        <div className={styles.resourcesContainer}>
          
          {/* CỘT TRÁI: NỘI DUNG TEXT */}
          <div className={styles.resourcesContent}>
            <div className={styles.resourcesHeader}>
              <h2>Tài nguyên</h2>
              <div className={styles.titleUnderlineLeft}></div>
            </div>
            
            <p className={styles.resourceText}>
              Dựa trên bảng màu đã trích xuất từ hình ảnh người viết chữ Chăm trên lá buông, 
              dưới đây là một số gợi ý phối màu cho Header và Footer để đảm bảo tính thống nhất 
              và thẩm mỹ cho thiết kế web của bạn.
            </p>
            <p className={styles.resourceText}>
              Kho tài liệu bao gồm các bài học từ cơ bản đến nâng cao, giúp bạn dễ dàng tiếp cận 
              và nghiên cứu ngôn ngữ Chăm cổ đại một cách hiệu quả nhất.
            </p>

            <Link to="/tai-nguyen" className={styles.seeMoreBtn}>
              Xem thêm
            </Link>
          </div>

          {/* CỘT PHẢI: CÁC THẺ CARD */}
          <div className={styles.resourcesCards}>
            <div className={`${styles.resourceCard} ${styles.cardRed}`}>
              <FaGraduationCap className={styles.resourceIcon} />
              <h3>Học chữ Chăm</h3>
            </div>
            <div className={`${styles.resourceCard} ${styles.cardOlive}`}>
              <FaFileDownload className={styles.resourceIcon} />
              <h3>Tài liệu số</h3>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default Homepage;