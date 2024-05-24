import React, { useContext } from 'react'
import {assets} from '../../assets/assets'
import { Context } from '../../context/Context'
import { ShimmerPostDetails } from "react-shimmer-effects";

import './main.css'
const Main = () => {
    const {onSent,recentPrompt,showResults,loading,resultData,setInput,input} = useContext(Context);
  return (
    <div className='flex-1 h-[100vh]'>
        <div className="top flex justify-between">
            <h2 className='f text-3xl mt-2 p-4'>Zenith AI</h2>
            <img src={assets.user_icon} alt="" className='user '/>
        </div>
        {!showResults?<>
        <div className="middle">
            <div className="greeting mx-52 p-10">
                <p><span className='text-[56px] bg-gradient-to-r from-slate-700 to-blue-400   00 text-transparent bg-clip-text'>Hey,Zenith this side.</span></p>
                <p className='text-[56px] text-[#c4c7c5]'>How can I help you today?</p>
            </div>
        </div>
        <div className="bottom flex mx-auto text-center justify-center gap-10 mt-10">
        <div className="cards bg-[#f0f4f9] h-[200px] w-44 rounded-md p-3 relative hover:bg-gray-300 cursor-pointer">
            <p>Suggest beautiful places to see on an upcoming road trip</p>
            <img src={assets.compass_icon} alt="" className='absolute bottom-2 right-2' />
        </div>
        <div className="cards bg-[#f0f4f9] h-[200px] w-44 rounded-md p-3 relative hover:bg-gray-300 cursor-pointer">
        <p>Briefly summarize this concept: urban planning</p>
            <img src={assets.bulb_icon} alt="" className='absolute bottom-2 right-2'/>
        </div>
        <div className="cards bg-[#f0f4f9] h-[200px] w-44 rounded-md p-3 relative hover:bg-gray-300 cursor-pointer">
        <p>Brainstorm team bonding activities for our work retreat</p>
            <img src={assets.message_icon} alt="" className='absolute bottom-2 right-2'/>
        </div>
        <div className="cards bg-[#f0f4f9] h-[200px] w-44 rounded-md p-3 relative hover:bg-gray-300 cursor-pointer">
        <p>Tell me about React js and React native</p>
            <img src={assets.code_icon} alt="" className='absolute bottom-2 right-2'/>
        </div>
    </div>
    </>:<div className='result max max-w-[50rem] max-h-[70vh] overflow-y-scroll mx-auto'>
       <div className='mx-[40px] flex items-center gap-5'>
       <img src={assets.user_icon} alt="" className='user' />
        <p>{recentPrompt}</p>
       </div>
       <div className='flex items-start gap-5 mt-10'>
       <img src={assets.zenith_icon} alt="" />
       <p dangerouslySetInnerHTML={{__html:resultData}}></p>
        
       </div>
        </div>}

        
        <div className="prompt left-[22rem] absolute bottom-0 w-[100%] max-w-[900px] py-[10px] m-auto">
            <div className="search flex justify-between gap=[2px] bg-[#f0f4f9] py-3 rounded-full">
            <input type="text" onChange={(e)=>setInput(e.target.value)} value={input} placeholder='Enter the Prompt here' className='bg-transparent outline-none flex-1 ml-7' onKeyDown={(e) => {
              e.keyCode === 13 && e.shiftKey === false && onSent();
            }}/>
            <div className='flex p-2 gap-4'>
                <img src={assets.gallery_icon} alt="" className='cursor-pointer' draggable={false} />
                <img src={assets.mic_icon} alt=""  className='cursor-pointer' draggable={false}/>
                {input?<img onClick={()=>onSent()} src={assets.send_icon} alt="" className='cursor-pointer' draggable={false} />:null}
            </div>
            </div>
            <div className='text-sm'>
                <p className='text-center'>Zenith AI may display inaccurate info, including about people, so double-check its responses. Your privacy and Zenith AI Apps</p>
            </div>
        </div>
    </div>
  )
}

export default Main