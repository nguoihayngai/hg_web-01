
import { GoogleGenAI, Type } from "@google/genai";
import { ChatMessage } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });

const SCHOOL_CONTEXT = `
Bạn là Trợ lý Ảo thông minh của trường THPT Hòn Gai (Tỉnh Quảng Ninh, Việt Nam). 
Thông tin về trường:
- Tên: Trường Trung học phổ thông Hòn Gai.
- Thành lập: Năm 1953. Đây là một trong những ngôi trường có bề dày lịch sử lâu đời nhất tỉnh Quảng Ninh.
- Địa chỉ: Số 52, phố Kênh Liêm, phường Hồng Hải, TP Hạ Long, Quảng Ninh.
- Danh hiệu: Trường chuẩn Quốc gia, Huân chương Lao động hạng Nhất.
- Thành tích: Luôn dẫn đầu về tỷ lệ học sinh đỗ tốt nghiệp và đại học, đạt nhiều giải quốc gia và quốc tế.
- Đặc điểm: Nằm ngay trung tâm TP Hạ Long, cơ sở vật chất hiện đại, đội ngũ giáo viên giàu kinh nghiệm.
- Giá trị cốt lõi: Đoàn kết - Trách nhiệm - Sáng tạo - Cống hiến.

Nhiệm vụ của bạn là giải đáp các thắc mắc của phụ huynh, học sinh và cựu học sinh một cách lịch sự, tự hào và chính xác. Nếu không biết thông tin cụ thể, hãy khuyên họ liên hệ văn phòng nhà trường.
`;

export const getGeminiResponse = async (history: ChatMessage[], message: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [
        { role: 'user', parts: [{ text: SCHOOL_CONTEXT }] },
        ...history.map(msg => ({
          role: msg.role,
          parts: [{ text: msg.text }]
        })),
        { role: 'user', parts: [{ text: message }] }
      ],
      config: {
        temperature: 0.7,
        topP: 0.95,
        maxOutputTokens: 500,
      }
    });

    return response.text || "Xin lỗi, tôi gặp chút trục trặc khi xử lý thông tin.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Hệ thống đang bận, vui lòng thử lại sau giây lát.";
  }
};

export const getSearchGroundingResponse = async (query: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: query,
      config: {
        tools: [{ googleSearch: {} }],
      },
    });

    const text = response.text;
    const sources = response.candidates?.[0]?.groundingMetadata?.groundingChunks || [];
    
    return { text, sources };
  } catch (error) {
    console.error("Search Grounding Error:", error);
    return { text: "Không thể tìm kiếm thông tin lúc này.", sources: [] };
  }
};
