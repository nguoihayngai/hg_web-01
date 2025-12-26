
import React, { useState } from 'react';

const stats = [
  { label: 'Tỷ lệ đỗ tốt nghiệp', value: '100%' },
  { label: 'Giải Quốc gia/Tỉnh', value: '250+' },
  { label: 'Đội ngũ GV giỏi', value: '100%' },
  { label: 'Học sinh toàn trường', value: '1500+' },
];

const detailedHistory = [
  { year: '1953', title: 'Thành lập trường', description: 'Trường cấp 2-3 Hòn Gai chính thức ra đời trong thời kỳ kháng chiến gian khổ.' },
  { year: '1973', title: 'Huân chương Lao động hạng Ba', description: 'Ghi nhận những đóng góp to lớn trong sự nghiệp trồng người thời kỳ xây dựng CNXH.' },
  { year: '1983', title: 'Huân chương Lao động hạng Nhì', description: 'Tiếp tục khẳng định vị thế dẫn đầu trong khối THPT toàn tỉnh Quảng Ninh.' },
  { year: '1993', title: 'Huân chương Lao động hạng Nhất', description: 'Phần thưởng cao quý nhất cho sự nỗ lực không ngừng nghỉ của tập thể sư phạm.' },
  { year: '2010', title: 'Trường chuẩn Quốc gia', description: 'Đạt danh hiệu trường chuẩn Quốc gia giai đoạn I với cơ sở vật chất hiện đại.' },
  { year: '2023', title: 'Kỷ niệm 70 năm thành lập', description: 'Đón nhận bằng khen của Thủ tướng Chính phủ và vinh danh các thế hệ nhà giáo, học sinh tiêu biểu.' },
];

const Achievements: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-3 gap-12 items-center">
        <div className="lg:col-span-1 space-y-6">
          <h2 className="text-blue-300 font-bold uppercase tracking-wider">Bảng vàng thành tích</h2>
          <h3 className="text-3xl font-bold leading-tight">
            Khẳng định vị thế <br/> Dẫn đầu giáo dục vùng Mỏ
          </h3>
          <p className="text-blue-100/80 text-lg leading-relaxed">
            Nhà trường vinh dự được Đảng và Nhà nước trao tặng Huân chương Lao động hạng Nhất, Nhì, Ba cùng nhiều cờ thi đua của Chính phủ.
          </p>
          <div className="pt-4">
             <button 
                onClick={() => setIsModalOpen(true)}
                className="px-6 py-3 bg-white text-blue-900 rounded-full font-bold shadow-lg hover:bg-blue-50 transition-all transform hover:scale-105 active:scale-95"
             >
               Xem lịch sử thành tích
             </button>
          </div>
        </div>
        
        <div className="lg:col-span-2 grid grid-cols-2 gap-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/10 hover:bg-white/20 transition-all cursor-default">
              <p className="text-5xl font-extrabold text-blue-300 mb-2">{stat.value}</p>
              <p className="text-white/90 font-medium text-lg uppercase tracking-wide">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Achievement Detail Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-blue-900/60 backdrop-blur-md animate-in fade-in duration-300">
          <div className="bg-white w-full max-w-2xl max-h-[80vh] rounded-3xl shadow-2xl overflow-hidden flex flex-col animate-in slide-in-from-bottom-8 duration-500">
            <div className="p-6 border-b flex justify-between items-center bg-gray-50">
              <h4 className="text-2xl font-bold text-blue-900">Tiến trình lịch sử & Thành tích</h4>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="p-2 hover:bg-gray-200 rounded-full transition-colors text-gray-500"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
              </button>
            </div>
            
            <div className="flex-grow overflow-y-auto p-8">
              <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-blue-200 before:to-transparent">
                {detailedHistory.map((item, index) => (
                  <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    {/* Icon */}
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-blue-600 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                    </div>
                    {/* Content */}
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-center justify-between space-x-2 mb-1">
                        <div className="font-bold text-blue-600">{item.year}</div>
                      </div>
                      <div className="font-bold text-gray-900 mb-1">{item.title}</div>
                      <div className="text-gray-600 text-sm">{item.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="p-6 bg-gray-50 text-center border-t">
              <button 
                onClick={() => setIsModalOpen(false)}
                className="px-8 py-2 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors"
              >
                Đóng
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Achievements;
