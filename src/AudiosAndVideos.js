import React from 'react';
import myVideo from '../public/videos/Leonard.mp4';
import myAudio from '../public/audio/Thulium - For Real.mp3';

function AudiosAndVideos() {
  return (
    <div>
      <div>
        <video
          muted={true}
          autoPlay={true}
          loop={true}
          width="320"
          height="240"
          controls={false}> 
          <source
            type="video/mp4"
            src={myVideo} /> 
        </video>
      </div>

      <div>
        <audio
          autoPlay={false}
          controls={true}>
          <source
            type="audio/mp3"
            src={myAudio} />
        </audio>
      </div>
    </div>
  );
}

export default AudiosAndVideos;