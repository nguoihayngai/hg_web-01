
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg overflow-hidden p-1 border-2 border-blue-600/30">
                <img 
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvgihrBfs8eB1vZVY8tw9biV4YsiiuHXSqTg&s" 
                  alt="Logo THPT Hòn Gai" 
                  className="w-full h-full object-contain"
                />
              </div>
              <h2 className="text-2xl font-bold tracking-tight">THPT HÒN GAI</h2>
            </div>
            <p className="text-gray-400 max-w-sm mb-6 leading-relaxed">
              Tự hào là ngôi trường có bề dày truyền thống hơn 70 năm, nơi chắp cánh cho những ước mơ bay xa từ vùng đất mỏ anh hùng.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 text-blue-400">Liên kết nhanh</h3>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#home" className="hover:text-white transition-colors">Trang chủ</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">Về nhà trường</a></li>
              <li><a href="#facilities" className="hover:text-white transition-colors">Cơ sở vật chất</a></li>
              <li><a href="#achievements" className="hover:text-white transition-colors">Thành tích</a></li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="text-lg font-bold mb-6 text-blue-400">Thông tin liên hệ</h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-blue-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                <span>Số 52, Phố Kênh Liêm, P. Hồng Hải, TP Hạ Long, Quảng Ninh</span>
              </li>
              <li className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-blue-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                <span>0203 3835 123</span>
              </li>
              <li className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-blue-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                <span>thpthonngai@quangninh.gov.vn</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>Nhóm 1 Đoàn Lê Ngọc Linh và Nguyễn Minh Anh</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
