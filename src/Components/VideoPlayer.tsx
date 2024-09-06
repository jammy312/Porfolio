import React from 'react';

interface VideoPlayerProps {
  videoName: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoName }) => {
    const videoPath = "/assets/Videos/"
  return (
    <div style={{padding:"25px"}} >
      <video width="80%" controls>
        <source src={`${videoPath}${videoName}`} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;
