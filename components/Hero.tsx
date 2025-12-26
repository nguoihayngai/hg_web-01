
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Background with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: 'url("https://media-cdn-v2.laodong.vn/storage/newsportal/2022/9/6/1089410/Hon-Gai-3.jpg")' }}
      >
        <div className="absolute inset-0 bg-blue-900/40 backdrop-blur-[2px]"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl">
        <span className="inline-block py-1 px-3 rounded-full bg-blue-500/30 text-blue-100 text-sm font-semibold mb-6 backdrop-blur-md border border-white/20">
          Kỷ niệm hơn 70 năm thành lập (1953 - 2024)
        </span>
        <h1 className="text-4xl md:text-7xl font-extrabold text-white mb-6 drop-shadow-2xl leading-tight">
          THPT Hòn Gai <br/>
          <span className="text-blue-300">Nơi Chắp Cánh Ước Mơ</span>
        </h1>
        <p className="text-lg md:text-xl text-blue-50 mb-10 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
          Ngôi trường giàu truyền thống bậc nhất vùng mỏ Quảng Ninh, nơi đào tạo biết bao thế hệ hiền tài cho đất nước.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="#about" 
            className="w-full sm:w-auto px-8 py-4 bg-white text-blue-900 font-bold rounded-lg shadow-xl hover:bg-blue-50 transition-all transform hover:-translate-y-1"
          >
            Khám phá ngay
          </a>
          <a 
            href="#achievements" 
            className="w-full sm:w-auto px-8 py-4 bg-blue-600 text-white font-bold rounded-lg shadow-xl hover:bg-blue-700 transition-all transform hover:-translate-y-1 border border-blue-400/50"
          >
            Bảng vàng thành tích
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
