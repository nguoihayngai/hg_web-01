
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Facilities from './components/Facilities';
import Achievements from './components/Achievements';
import Gallery from './components/Gallery';
import Chatbot from './components/Chatbot';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col relative overflow-x-hidden">
      <Header />
      
      <main className="flex-grow">
        <div id="home">
          <Hero />
        </div>
        
        <div id="about" className="py-20 bg-white">
          <About />
        </div>
        
        <div id="facilities" className="py-20 bg-gray-50">
          <Facilities />
        </div>
        
        <div id="achievements" className="py-20 bg-blue-900 text-white">
          <Achievements />
        </div>
        
        <div id="gallery" className="py-20 bg-white">
          <Gallery />
        </div>
      </main>

      <Footer />

      {/* Floating Chatbot Toggle */}
      <button 
        onClick={() => setIsChatOpen(!isChatOpen)}
        className="fixed bottom-6 right-6 z-50 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-2xl transition-all transform hover:scale-110 active:scale-95"
        title="Trò chuyện với trợ lý Hòn Gai"
      >
        {isChatOpen ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path></svg>
        )}
      </button>

      {/* Chatbot Window */}
      {isChatOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-80 md:w-96 h-[500px] shadow-2xl rounded-2xl overflow-hidden animate-in fade-in slide-in-from-bottom-10 duration-300">
          <Chatbot onClose={() => setIsChatOpen(false)} />
        </div>
      )}
    </div>
  );
};

export default App;
