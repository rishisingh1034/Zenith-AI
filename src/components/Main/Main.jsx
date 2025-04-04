import React, { useContext } from 'react';
import { assets } from '../../assets/assets';
import { Context } from '../../context/Context';
import 'animate.css/animate.min.css';
import { ShimmerSocialPost } from 'react-shimmer-effects';


const Main = () => {
  const { onSent, recentPrompt, showResults, loading, resultData, setInput, input } = useContext(Context);

  return (
    <div className="flex-1 min-h-screen flex flex-col">
      <div className="top flex justify-between items-center p-4 bg-white shadow-md">
        <h2 className="text-3xl mt-2">Zenith AI</h2>
        <img src={assets.user_icon} alt="User Icon" className="w-10 h-10 rounded-full animate__animated animate__fadeIn" />
      </div>
      <div className="flex-1 flex flex-col justify-center">
        {!showResults ? (
          <>
            <div className="middle text-center py-10 animate__animated animate__fadeIn">
              <div className="greeting mx-auto max-w-4xl px-4">
                <p>
                  <span className="text-4xl sm:text-5xl md:text-6xl bg-gradient-to-r from-slate-700 to-blue-400 text-transparent bg-clip-text">
                    Hey, Zenith this side.
                  </span>
                </p>
                <p className="text-2xl sm:text-3xl md:text-4xl text-[#c4c7c5]">How can I help you today?</p>
              </div>
            </div>
            <div className="bottom flex-wrap justify-center gap-6 mt-10 px-4 hidden sm:flex animate__animated animate__fadeInUp">
              <div className="cards bg-[#f0f4f9] h-48 w-44 sm:w-52 md:w-60 rounded-md p-3 relative hover:bg-gray-300 cursor-pointer">
                <p className="text-sm md:text-base">Suggest beautiful places to see on an upcoming road trip</p>
                <img src={assets.compass_icon} alt="Compass Icon" className="absolute bottom-2 right-2 w-6 h-6" />
              </div>
              <div className="cards bg-[#f0f4f9] h-48 w-44 sm:w-52 md:w-60 rounded-md p-3 relative hover:bg-gray-300 cursor-pointer">
                <p className="text-sm md:text-base">Briefly summarize this concept: urban planning</p>
                <img src={assets.bulb_icon} alt="Bulb Icon" className="absolute bottom-2 right-2 w-6 h-6" />
              </div>
              <div className="cards bg-[#f0f4f9] h-48 w-44 sm:w-52 md:w-60 rounded-md p-3 relative hover:bg-gray-300 cursor-pointer">
                <p className="text-sm md:text-base">Brainstorm team bonding activities for our work retreat</p>
                <img src={assets.message_icon} alt="Message Icon" className="absolute bottom-2 right-2 w-6 h-6" />
              </div>
              <div className="cards bg-[#f0f4f9] h-48 w-44 sm:w-52 md:w-60 rounded-md p-3 relative hover:bg-gray-300 cursor-pointer">
                <p className="text-sm md:text-base">Tell me about React js and React native</p>
                <img src={assets.code_icon} alt="Code Icon" className="absolute bottom-2 right-2 w-6 h-6" />
              </div>
            </div>
          </>
        ) : loading ? (
          <div className="result max-w-4xl max-h-[70vh] overflow-y-scroll mx-auto p-6">
  <ShimmerSocialPost type="text" />
          </div>
        ) : (
          <div className="result max-w-4xl max-h-[70vh] overflow-y-scroll mx-auto p-6 animate__animated animate__fadeIn">
            <div className="mx-6 flex items-center gap-5">
              <img src={assets.user_icon} alt="User Icon" className="w-10 h-10 rounded-full" />
              <p>{recentPrompt}</p>
            </div>
            <div className="flex items-start gap-5 mt-10">
              <img src={assets.zenith_icon} alt="Zenith Icon" className="w-10 h-10" />
              <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
            </div>
          </div>
        )}
      </div>
      <div className="prompt w-full py-3 bg-white shadow-lg animate__animated animate__slideInUp">
        <div className="search flex justify-between items-center gap-2 bg-[#f0f4f9] py-3 rounded-full mx-3 max-w-2xl mx-auto">
          <input
            type="text"
            onChange={(e) => setInput(e.target.value)}
            value={input}
            placeholder="Enter the Prompt here"
            className="bg-transparent outline-none flex-1 ml-4"
            onKeyDown={(e) => {
              e.keyCode === 13 && e.shiftKey === false && onSent();
            }}
          />
          <div className="flex items-center gap-4 pr-4">
            <img src={assets.gallery_icon} alt="Gallery Icon" className="cursor-pointer w-6 h-6" draggable={false} />
            <img src={assets.mic_icon} alt="Mic Icon" className="cursor-pointer w-6 h-6" draggable={false} />
            {input && (
              <img onClick={() => onSent()} src={assets.send_icon} alt="Send Icon" className="cursor-pointer w-6 h-6" draggable={false} />
            )}
          </div>
        </div>
        <div className="text-xs text-center mt-2 px-4">
          <p>Zenith AI may display inaccurate info, including about people, so double-check its responses. Your privacy and Zenith AI Apps</p>
        </div>
      </div>
    </div>
  );
};

export default Main;
