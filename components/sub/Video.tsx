import React from "react";

interface VideoProps {
  src: string;
}

const Video: React.FC<VideoProps> = ({ src }) => {
  return (
    <video width="320" height="240" controls>
      <source src={src} type="SampleVideo.mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default Video;
