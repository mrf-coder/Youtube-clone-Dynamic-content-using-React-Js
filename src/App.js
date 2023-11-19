
import './App.css';
import Video from './Component/Video';
import videosDB from './data/data';
import { useState } from 'react';
import Navebar from './Component/navebar';
function  App() {
     const [videos,setVides]=useState(videosDB)
     const [editableVideo,seteditableVideo]=useState(null)
     function deleteVideo(id){
      
      setVides(videos.filter(video=>video.id!==id))
      
     }
     function editVideo(id){
      
      seteditableVideo(videos.find(video=>video.id===id))
         
     }
     function addVideos(video){
      setVides([
        ...videos,
            {...video, id:videos.length+1}  
        
    ])

     }
       function updatevideo(video){
       const index= videos.findIndex(v=>v.id===video.id)
       const newvid= [...videos]
       newvid.splice(index,1,video)
         setVides(newvid)
       }
     
  return (
   <div>
       
   
     <div className="App"  >
      <Navebar addVideos={addVideos}  updatevideo={updatevideo}  editableVideo={editableVideo} ></Navebar>
      {/* <btn className="btn" onClick={()=>{
           setVides ([...videos,{id:videos.length+1,

              title:"Ooty Green Hill",
              views:"33k",
              time:"2year ego",
              verified:true
               
            }]);
          }}>Add </btn> */}
           {videos.map(e=><Video
            key={e.id}
            id={e.id}
           title={e.title}
           views={e.views}
           time={e.time}
           verified={e.verified}
           deleteVideo={deleteVideo}
           editVideo={editVideo}
          
          
                     ></Video>)}
           {/* <Video id={511}
             title="Ooty Green Hill"
             views="33k"
             time="2year ego"
             verified={true}
              
           ></Video> */}
     
     </div>
   </div>
 
  );
}

export default App;
