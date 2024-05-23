import React, { useState } from 'react'
import {assets} from '../../assets/assets'
import './sidebar.css'
const Sidebar = () => {
  const [expand,setExpand] = useState(false);
  return (
    <div className='sidebar'>
       <div className="top">
       <img src={assets.menu_icon} alt="" draggable={false} className='w-7 mt-5 mx-7 cursor-pointer rounded-full' onClick={() => setExpand(prev=>!prev)}/>
       
       <div className="new-chat mx-4 inline-flex gap-5 mt-10 bg-gray-200 p-3 rounded-full hover:bg-gray-300 cursor-pointer">
        <img src={assets.plus_icon} alt="" draggable={false} />
        {expand?<p>New Chat</p>:null}
       </div>
       {expand?<div className="recent mt-8 p-1">
        <p className='font-bold mb-4 ml-2'>Recent</p>
        <div className="recent-chat inline-flex gap-2 ml-1 rounded-full hover:bg-gray-300 cursor-pointer p-3">
        <img src={assets.message_icon} alt="" draggable={false} />
        <p>What is React..</p>
        </div>
       </div>:null}
        </div> 
        <div className="bottom flex flex-col mb-6">
        <div className="help w-auto inline-flex gap-3 mx-7 font-lightbold cursor-pointer rounded-full hover:bg-gray-300 p-2" style={{}}>
        <img src={assets.question_icon} alt="" draggable={false} />
        {expand?<p>Help</p>:null}
        </div>
        <div className="activity inline-flex gap-3 mx-7 font-lightbold  rounded-full hover:bg-gray-300 cursor-pointer p-2">
        <img src={assets.history_icon} alt="" draggable={false} />
        {expand?<p>Activity</p>:null}
        </div>
        <div className="settings inline-flex gap-3 mx-7 font-lightbold rounded-full hover:bg-gray-300 cursor-pointer p-2">
        <img src={assets.setting_icon} alt="" draggable={false} />
        {expand?<p>Settings</p>:null}
        </div>
        </div>
    </div>
  )
}

export default Sidebar