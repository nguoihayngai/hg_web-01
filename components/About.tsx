
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-blue-600 font-bold uppercase tracking-wider">Về chúng tôi</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            Lịch sử hình thành & Phát triển bền vững
          </h3>
          <p className="text-gray-600 text-lg leading-relaxed">
            Tháng 9 năm 1953, giữa khói lửa kháng chiến, Trường cấp 2-3 Hòn Gai được thành lập. Đây là sự kiện đánh dấu bước ngoặt quan trọng trong giáo dục vùng mỏ Quảng Ninh.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            Trải qua hơn 7 thập kỷ, từ những phòng học tranh tre nứa lá, THPT Hòn Gai hôm nay đã trở thành một biểu tượng của sự hiện đại, trí tuệ và tinh thần hiếu học. Trường tự hào là nơi nuôi dưỡng những "người thợ lò" trên mặt trận tri thức.
          </p>
          
          <div className="grid grid-cols-2 gap-6 pt-6">
            <div className="p-4 bg-blue-50 rounded-xl border-l-4 border-blue-600">
              <p className="text-3xl font-bold text-blue-900">1953</p>
              <p className="text-sm text-gray-600 font-medium">Năm thành lập</p>
            </div>
            <div className="p-4 bg-blue-50 rounded-xl border-l-4 border-blue-600">
              <p className="text-3xl font-bold text-blue-900">70+</p>
              <p className="text-sm text-gray-600 font-medium">Năm truyền thống</p>
            </div>
          </div>
        </div>
        
        <div className="relative">
          <div className="rounded-2xl overflow-hidden shadow-2xl rotate-3 transform hover:rotate-0 transition-all duration-500">
            <img src="https://kenh14cdn.com/2018/9/2/105994066404999427352871119224578997559879n-15358620401341038701542.jpg" alt="Học sinh Hòn Gai" className="w-full h-auto object-cover" />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl max-w-[240px] hidden lg:block">
            <p className="text-gray-800 font-medium italic">"Mỗi học sinh Hòn Gai là một đại sứ của tinh thần kỷ luật và đồng tâm của vùng Mỏ."</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
