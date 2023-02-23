import React, { useState } from "react";
import ReactModal from "react-modal";
const NewTab = () => {
    const [open,setOpen] = useState(false);
    const [videoId,setVideoid]=useState("dgdfg");
  return (
    <div>
        <div>New Tab</div>
        <button onClick={()=>setOpen(true)}>click to open popup</button>
        <ReactModal isOpen={open} 
        onRequestClose={() => setOpen(false)}>
            <div>
                <h1> {videoId}</h1>
            <iframe width="100%" 
    height="200%" 
    src="https://www.youtube.com/embed/7YUR0Igl9eU" 
    title="YouTube video player"
     frameborder="0"
     allow="accelerometer; 
     autoplay; clipboard-write;
      encrypted-media; gyroscope;
       picture-in-picture; web-share" 
       allowFullScreen>
        </iframe>
        </div>
        </ReactModal>
    </div>
  );
};

export default NewTab;
