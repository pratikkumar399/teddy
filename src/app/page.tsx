"use client"

import React, { useState } from 'react';


export default function Home() {
  const [isTalking, setIsTalking] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("Click on me. I want to say something.");

  const messages = [
    "I'm so sorry...",
    "Please forgive me.",
    "I miss your smile.",
    "You mean the world to me.",
    "I was wrong, and I'm sorry.",
    "Let's make things right again.",
    "My world is empty without you.",
    "I love you more than words can say.",
    "Thinking of you always.",
    "You're my everything.",
    "I promise to be better.",
    "I hate it when we fight.",
    "You are my sunshine.",
    "I'm sorry for being a grumpy bear sometimes."
  ];


  const speak = (text: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.pitch =1;
      utterance.rate = 0.8;
      utterance.volume = 1;
      utterance.onstart = () => setIsTalking(true);
      utterance.onend = () => setIsTalking(false);
      window.speechSynthesis.speak(utterance);
    } else {
      console.error("Sorry, your browser doesn't support text-to-speech.");
    }
  };

  
  const handleTeddyClick = () => {
    if (isLoading || isTalking) return;
    const randomIndex = Math.floor(Math.random() * messages.length);
    const randomMessage = messages[randomIndex];
    setMessage(randomMessage);
    speak(randomMessage);
  };





  const TeddyBear = () => (
    <div 
      className={`relative cursor-pointer transition-transform duration-200 ease-in-out ${isTalking ? 'scale-105' : 'scale-100'}`} 
      onClick={handleTeddyClick}
      style={{ width: '250px', height: '300px' }}
    >
      {/* Head */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-44 bg-[#8B4513] rounded-full z-10"></div>
      
      {/* Ears */}
      <div className="absolute top-0 left-4 w-16 h-16 bg-[#A0522D] rounded-full"></div>
      <div className="absolute top-0 right-4 w-16 h-16 bg-[#A0522D] rounded-full"></div>
      <div className="absolute top-2 left-6 w-12 h-12 bg-[#D2B48C] rounded-full"></div>
      <div className="absolute top-2 right-6 w-12 h-12 bg-[#D2B48C] rounded-full"></div>

      {/* Eyes */}
      <div className="absolute top-20 left-16 w-6 h-6 bg-black rounded-full z-20"></div>
      <div className="absolute top-20 right-16 w-6 h-6 bg-black rounded-full z-20"></div>
      <div className="absolute top-21 left-[68px] w-2 h-2 bg-white rounded-full z-20 animate-pulse"></div>
      <div className="absolute top-21 right-[68px] w-2 h-2 bg-white rounded-full z-20 animate-pulse"></div>
      
      {/* Muzzle */}
      <div className="absolute top-24 left-1/2 -translate-x-1/2 w-24 h-20 bg-[#D2B48C] rounded-full z-20"></div>
      
      {/* Nose */}
      <div className="absolute top-[104px] left-1/2 -translate-x-1/2 w-8 h-6 bg-black rounded-full z-30"></div>
      
      {/* Mouth */}
      <div className={`absolute top-[132px] left-1/2 -translate-x-1/2 w-10 h-5 bg-black rounded-b-full z-30 transition-all duration-200 ${isTalking ? 'h-8 rounded-b-xl' : 'h-2'}`}></div>

      {/* Body */}
      <div className="absolute top-36 left-1/2 -translate-x-1/2 w-40 h-48 bg-[#A0522D] rounded-t-3xl rounded-b-2xl"></div>
      
      {/* Paws */}
      <div className="absolute top-40 -left-4 w-16 h-24 bg-[#8B4513] rounded-full transform -rotate-45"></div>
      <div className="absolute top-40 -right-4 w-16 h-24 bg-[#8B4513] rounded-full transform rotate-45"></div>
      
      {/* Feet */}
      <div className="absolute bottom-0 left-4 w-20 h-16 bg-[#8B4513] rounded-t-full"></div>
      <div className="absolute bottom-0 right-4 w-20 h-16 bg-[#8B4513] rounded-t-full"></div>
      <div className="absolute bottom-0 left-6 w-16 h-8 bg-[#D2B48C] rounded-t-full"></div>
      <div className="absolute bottom-0 right-6 w-16 h-8 bg-[#D2B48C] rounded-t-full"></div>

      {/* Heart */}
       <div className="absolute top-48 left-1/2 -translate-x-1/2 z-20">
        <svg className={`w-16 h-16 text-red-500 transition-transform duration-300 ${isTalking || isLoading ? 'animate-ping' : ''}`} fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"></path>
        </svg>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#FFF0F5] flex flex-col items-center justify-center font-sans p-4 overflow-hidden">
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-[#d16a8a] mb-2" style={{ fontFamily: "'Comic Sans MS', cursive, sans-serif" }}>
          I&apos;m Really Sorry...
        </h1>
        <p className="text-lg text-[#b85a77]">This little bear has something to say.</p>
      </div>

      <div className="relative mb-20">
        <TeddyBear />
        <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-72 bg-white p-4 rounded-xl shadow-lg text-center">
            <p className="text-gray-700 italic whitespace-pre-wrap">{message}</p>
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-b-8 border-b-white"></div>
        </div>
      </div>
      
      {/* <button 
        onClick={() => setShowPrompt(true)}
        disabled={isLoading || isTalking}
        className="mt-8 px-6 py-3 bg-pink-400 text-white font-bold rounded-full shadow-lg hover:bg-pink-500 transition-all duration-300 disabled:bg-pink-200 disabled:cursor-not-allowed flex items-center gap-2"
      >
        ✨ Write a Poem
      </button> */}


      {/* {showPrompt && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-2xl shadow-2xl w-96 text-center">
            <h2 className="text-2xl font-bold text-[#d16a8a] mb-4">What should the poem be about?</h2>
            <p className="text-gray-600 mb-6">e.g., "being late for our date"</p>
            <input 
              type="text"
              value={poemTopic}
              onChange={(e) => setPoemTopic(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg mb-6 focus:ring-2 focus:ring-pink-400 focus:outline-none"
              placeholder="Tell me a topic..."
            />
            <div className="flex justify-center gap-4">
              <button onClick={() => setShowPrompt(false)} className="px-6 py-2 bg-gray-300 text-gray-800 rounded-full hover:bg-gray-400 transition">Cancel</button>
              <button onClick={generatePoem} className="px-6 py-2 bg-pink-400 text-white rounded-full hover:bg-pink-500 transition">Submit</button>
            </div>
          </div>
        </div>
      )} */}

      <footer className="absolute bottom-4 text-center text-[#b85a77] text-sm">
        <p>Made with love, just for you.</p>
      </footer>
    </div>
  );
}
