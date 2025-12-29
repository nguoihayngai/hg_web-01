
import React, { useState } from 'react';

const images = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiwfBlCB0cmA4A5FK7vn0JgupYjesQj2S6Lg&s",
  "https://media.baoquangninh.vn/dataimages/201910/original/images1338134_HGAI.jpg",
  "https://thpthongai.edu.vn/uploads/about/50-nam-toan-canh.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQakoDo48r5fNKsPLPlXvVmaSbiBog5wbDAg&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj_LCG-oZiIKqaFyLgxnU85hYzqmZ5tBr_BQ&s",
  "https://media.quangninh.gov.vn/618ca5c4-79b3-478a-8adb-4184369067f7/Libraries/HinhAnhBaiViet/A%20BAT/Nam%202020/Thang%206/Tuan%204/vov_thi_dvsf.jpg",
  "./6bb67e2e-e756-4172-bcdd-7fa2be2d54f6.jpg",
  "./78d27343-e847-48a2-a615-13099e775453.jpg"
];

const Gallery: React.FC = () => {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-blue-600 font-bold uppercase tracking-wider mb-2">Hình ảnh hoạt động</h2>
        <h3 className="text-3xl md:text-4xl font-bold text-gray-900">Khoảnh Khắc Hòn Gai</h3>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((img, i) => (
          <button 
            key={i} 
            onClick={() => setSelectedImg(img)}
            className={`relative overflow-hidden rounded-2xl group focus:outline-none focus:ring-4 focus:ring-blue-200 transition-all ${i % 3 === 0 ? 'md:row-span-2' : ''}`}
          >
            <img 
              src={img} 
              alt={`Hoạt động ${i}`} 
              className="w-full h-full min-h-[200px] object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <span className="text-white font-medium text-left">Nhấn để xem ảnh phóng to</span>
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImg && (
        <div 
          className="fixed inset-0 z-[110] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 cursor-zoom-out animate-in fade-in duration-300"
          onClick={() => setSelectedImg(null)}
        >
          <button className="absolute top-6 right-6 text-white hover:text-blue-400 p-2 transition-colors">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>
          <img 
            src={selectedImg} 
            alt="Full size" 
            className="max-w-full max-h-full rounded-lg shadow-2xl animate-in zoom-in-95 duration-500" 
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};

export default Gallery;
