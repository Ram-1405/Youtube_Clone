import React from "react";
import VideoCard  from "./VideoCard";
import ChannelCard from "./ChannelCard";
const Videos = ({ videos, direction }) => {
  if (!videos?.length) return console.log("wait");

  return (
    <>
     <div className={`grid grid-cols-4 auto-rows-max ${direction === "column" ? "flex-col" : "flex-row"}  justify-centre items-centre gap-2 `}>
       {videos.map((item, idx) => (
        <div key={idx}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </div>
      ))}
    </div>
      </>
  );
}

export default Videos;
