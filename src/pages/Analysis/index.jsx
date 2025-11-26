import React, { useState } from "react";
import "./Analysis.css"; 
import { 
  FaCloudUploadAlt, FaArrowLeft, FaLanguage, FaScroll, FaInfoCircle, 
  FaMapMarkerAlt, FaCalendarAlt, FaGem, FaImage // <-- Đã đổi FaStoneCutter thành FaGem
} from "react-icons/fa";
import { xmlResult } from "./mockData"; 

const Analysis = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [parsedData, setParsedData] = useState(null);

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
      handleAnalyze(); 
    }
  };

  const handleAnalyze = () => {
    setIsLoading(true);
    setTimeout(() => {
      // --- XỬ LÝ XML ---
      try {
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlResult, "text/xml");

        // 1. Tiêu đề
        const title = xmlDoc.getElementsByTagName("title")[0]?.textContent || "Văn bản Chăm cổ";

        // 2. Nội dung
        const divs = xmlDoc.getElementsByTagName("div");
        let originalText = "Đang cập nhật...";
        let translationText = "Đang cập nhật...";

        for (let i = 0; i < divs.length; i++) {
          const type = divs[i].getAttribute("type");
          const lang = divs[i].getAttribute("xml:lang");
          if (type === "edition") originalText = divs[i].textContent.replace(/\s+/g, ' ').trim();
          if (type === "translation" && lang === "en") translationText = divs[i].textContent.replace(/\s+/g, ' ').trim();
        }

        // 3. Thông tin bổ sung
        const placeName = xmlDoc.getElementsByTagName("placeName")[0]?.textContent || "Không rõ";
        const dateTag = xmlDoc.getElementsByTagName("date")[0];
        const date = dateTag ? dateTag.textContent : "Chưa xác định";
        const material = xmlDoc.getElementsByTagName("material")[0]?.textContent || "Đá sa thạch";
        const graphicTag = xmlDoc.getElementsByTagName("graphic")[0];
        const imageDesc = graphicTag?.getElementsByTagName("desc")[0]?.textContent || "Bản dập văn bia";
        
        setParsedData({
          title,
          original: originalText,
          translation: translationText,
          location: placeName,
          date: date,
          material: material,
          imageDesc: imageDesc
        });

      } catch (error) {
        console.error("Lỗi parse XML:", error);
      }
      
      setIsLoading(false);
      setShowResult(true);
    }, 1500);
  };

  const handleReset = () => {
    setSelectedFile(null);
    setShowResult(false);
    setParsedData(null);
  };

  return (
    <div className="analysis-container">
      {!showResult ? (
        <div className="analysis-upload-wrapper">
          <div className="analysis-header">
            <h1>Dịch thuật chữ Chăm</h1>
            <p>Tải lên hình ảnh văn bản Chăm để AI phân tích và dịch sang tiếng Việt</p>
          </div>
          <div className="analysis-upload-area">
            <input type="file" id="file-upload" className="analysis-file-input" onChange={handleFileChange} accept="image/*" />
            <label htmlFor="file-upload" className="analysis-upload-label">
              {isLoading ? (
                <div className="analysis-loading-spinner"></div>
              ) : (
                <>
                  <FaCloudUploadAlt className="analysis-upload-icon" />
                  <h3>Nhấn để tải ảnh lên</h3>
                  {selectedFile && <p className="analysis-file-name">Đang xử lý: {selectedFile.name}</p>}
                </>
              )}
            </label>
          </div>
        </div>
      ) : (
        <div className="analysis-result-wrapper">
          <div className="analysis-result-header">
             <button onClick={handleReset} className="analysis-back-btn"><FaArrowLeft /> Quay lại</button>
             <h2>Kết quả phân tích</h2>
             <div className="analysis-badge">TEI XML Parsed</div>
          </div>

          {parsedData && (
            <div className="analysis-content">
                <div className="analysis-title-box">
                    <h3>{parsedData.title}</h3>
                    
                    {/* SỬA LẠI ICON Ở ĐÂY: FaGem */}
                    <div className="analysis-meta-bar">
                        <div className="meta-item"><FaMapMarkerAlt /> <strong>Địa điểm:</strong> {parsedData.location}</div>
                        <div className="meta-item"><FaCalendarAlt /> <strong>Niên đại:</strong> {parsedData.date}</div>
                        <div className="meta-item"><FaGem /> <strong>Chất liệu:</strong> {parsedData.material}</div>
                    </div>
                </div>

                <div className="analysis-image-section">
                    <div className="image-card">
                        <div className="image-label"><FaImage /> {parsedData.imageDesc}</div>
                        <img 
                            src={selectedFile ? URL.createObjectURL(selectedFile) : ""} 
                            alt="Inscription Estampage" 
                            className="inscription-img"
                        />
                        <p className="image-caption">*Hình ảnh được trích xuất và đối chiếu từ dữ liệu XML</p>
                    </div>
                </div>

                <div className="analysis-cards-container">
                    <div className="analysis-card">
                        <div className="analysis-card-head head-original">
                            <FaScroll /> Văn bản gốc (Phiên âm)
                        </div>
                        <div className="analysis-card-body font-cham">
                            {parsedData.original}
                        </div>
                    </div>

                    <div className="analysis-card">
                        <div className="analysis-card-head head-trans">
                            <FaLanguage /> Bản dịch (Tiếng Anh)
                        </div>
                        <div className="analysis-card-body">
                            {parsedData.translation}
                        </div>
                    </div>
                </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Analysis;