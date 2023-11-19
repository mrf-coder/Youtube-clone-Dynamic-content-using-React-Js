import React, { useEffect, useState } from 'react'
import "./navebar.css"
  const initialState={verified:true,
    title:"",views:"",time:""
   }
export default function Navebar({addVideos, editableVideo,updatevideo}) {
          const [ number,setNumber]=useState (0);
          const [video,setVideo]=useState(initialState)
          function handelCick(e){
            e.stopPropagation()
            setNumber(number=>number+1);
          }


          useEffect(()=>{
            if(editableVideo) {setVideo(editableVideo)}
           },[editableVideo])



        function handelSubmit(e){
          e.stopPropagation()
          if(editableVideo){
            updatevideo(video)
          }else{ addVideos(video)}
         
                   setVideo(initialState)
           
          }




        function handleChang(e){console.log(e.target.name,e.target.value)
              setVideo({...video,
                 [e.target.name]:e.target.value
              })   
        }
          


        
  return (
    <div onClick={handelCick} className='Navebar'>{number}
           <form>
            <input type='text' name="title" value={video.title} onChange={handleChang} placeholder='title'/>
            <input type='text' name="views" value={video.views} onChange={handleChang}placeholder='views'/>
            <input type='text' name="time" value={video.time} onChange={handleChang}placeholder='time'/>
            <btn className="btn"  onClick={handelSubmit}>
                add
            </btn>
           </form>
    </div>
  )
}

