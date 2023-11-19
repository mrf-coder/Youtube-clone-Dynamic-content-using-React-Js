import React from 'react'
import "./Video.css"
import { useState } from 'react';
function Video({title,Channel="My Channel",id,views,time,verified,deleteVideo,editVideo}) {
         const [ playing,setPlaying]=useState(true);
                 
         function onPress(e){
            e.stopPropagation()
                setPlaying(!playing)
         }
               
         
  return (
      <> <div   className='content'>
                <div className='close' onClick={()=>deleteVideo(id)}>❌</div>
                <div className='edit' onClick={()=>editVideo(id)}>edit</div>
           <div className='pic'>
               <img  src={`https://picsum.photos/id/${id}/160/90`} alt=" " />   
               </div>
           
            <div className='title'onClick={onPress}>{playing?"▶️":"⏯️"}{title}{verified&&"✅"}</div>
            <div className='deail'>
            <div className='channel'>{Channel}</div>
            <div className='views'>{views}<span>.</span>{time}</div>
            
           </div>
        
          </div></>
  )
}

export default Video;