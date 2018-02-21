import React from 'react';

const IFrames = () => {
  return (
    <div>

      <iframe
        width="800"
        height="300"
        src="https://www.metallica.com/">
      </iframe> 
 
      <iframe
        width="420"
        height="315"
        src="http://www.youtube.com/embed/uNNlTvviUZc"
        frameborder="0"
        allowfullscreen>
      </iframe>

    </div>
  );
}

export default IFrames;