
import React, { useState } from 'react';

const facilities = [
  {
    name: "Nhà đa năng",
    image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=800",
    description: "Không gian rộng lớn cho các hoạt động thể thao, văn nghệ và sự kiện quy mô lớn của toàn trường.",
    details: "Nhà đa năng được khánh thành năm 2015 với sức chứa hơn 1000 người, trang bị hệ thống âm thanh ánh sáng hiện đại phục vụ các kỳ thi đấu thể thao và hội diễn văn nghệ cấp Tỉnh."
  },
  {
    name: "Phòng Lab hiện đại",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800",
    description: "Hệ thống máy tính cấu hình cao và trang thiết bị thực hành đạt tiêu chuẩn quốc tế.",
    details: "Hệ thống phòng Lab bao gồm 4 phòng máy tính mới 100%, 2 phòng thực hành Vật lý và Hóa học với các thiết bị nhập khẩu từ Đức, hỗ trợ tối đa cho học sinh nghiên cứu khoa học kỹ thuật."
  },
  {
    name: "Thư viện xanh",
    image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=800",
    description: "Hàng ngàn đầu sách phong phú, không gian yên tĩnh phục vụ việc tự học và nghiên cứu.",
    details: "Thư viện trường có diện tích 300m2 với hơn 20,000 đầu sách, hệ thống quản lý thư viện điện tử giúp học sinh dễ dàng tra cứu và mượn sách trực tuyến."
  },
  {
    name: "Khuôn viên trường",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmAZlfUeZ8sQwpjGpaKEQBqNUjyOSJ4KgKow&s",
    description: "Sân trường rợp bóng cây xanh, là nơi lưu giữ những kỷ niệm đẹp nhất của tuổi học trò.",
    details: "Tọa lạc giữa trung tâm Hạ Long nhưng trường vẫn duy trì mật độ cây xanh cao với nhiều cây cổ thụ lâu đời, tạo không gian học tập mát mẻ và trong lành."
  }
];

const Facilities: React.FC = () => {
  const [activeFacility, setActiveFacility] = useState<typeof facilities[0] | null>(null);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-blue-600 font-bold uppercase tracking-wider mb-2">Cơ sở vật chất</h2>
        <h3 className="text-3xl md:text-4xl font-bold text-gray-900">Môi Trường Học Tập Lý Tưởng</h3>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {facilities.map((f, index) => (
          <button 
            key={index} 
            onClick={() => setActiveFacility(f)}
            className="bg-white text-left rounded-2xl overflow-hidden shadow-lg border border-gray-100 group transition-all hover:-translate-y-2 hover:shadow-xl active:scale-95"
          >
            <div className="h-48 overflow-hidden relative">
              <img 
                src={f.image} 
                alt={f.name} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors"></div>
            </div>
            <div className="p-6">
              <h4 className="text-xl font-bold text-gray-900 mb-2">{f.name}</h4>
              <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">{f.description}</p>
              <span className="inline-block mt-4 text-blue-600 font-semibold text-xs uppercase tracking-widest">Xem chi tiết →</span>
            </div>
          </button>
        ))}
      </div>

      {/* Facility Detail Modal */}
      {activeFacility && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-gray-900/80 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="bg-white w-full max-w-3xl rounded-3xl overflow-hidden shadow-2xl animate-in zoom-in-95 duration-300">
            <div className="relative h-64 md:h-80">
              <img src={activeFacility.image} alt={activeFacility.name} className="w-full h-full object-cover" />
              <button 
                onClick={() => setActiveFacility(null)}
                className="absolute top-4 right-4 bg-white/20 backdrop-blur-md text-white hover:bg-white hover:text-gray-900 p-2 rounded-full transition-all"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
              </button>
            </div>
            <div className="p-8">
              <h4 className="text-3xl font-bold text-blue-900 mb-4">{activeFacility.name}</h4>
              <p className="text-gray-700 text-lg leading-relaxed">{activeFacility.details}</p>
              <div className="mt-8">
                <button 
                  onClick={() => setActiveFacility(null)}
                  className="px-8 py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-colors active:scale-95"
                >
                  Đã hiểu
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Facilities;
