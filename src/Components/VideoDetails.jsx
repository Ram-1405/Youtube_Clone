import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

import Videos from "./Videos";
import { fetchapoi } from "../utils/FetchFromApi";

export default function VideoDetails() {
  const [videodetail, setvideodetail] = useState(null);
  const [videos, setvideos] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  const redirecting = () => {
    navigate('./');
  };

  useEffect(() => {
    const fetching = async () => {
      try {
        const data = await fetchapoi(`videos?part=snippet,statistics&id=${id}`);
        if (data && data.items) {
          setvideodetail(data.items[0]);
        } else {
          console.log('Unable to fetch data');
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetching();

    fetchapoi(`search?part=snippet&relatedToVideoId=${id}&type=video`)
      .then((data) => setvideos(data.items));
  }, [id]);

  if (!videodetail) {
    return console.log('wait');
  }

  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount }
  } = videodetail;

  return (
    <div className='min-h-[92vh]'>
      <div className="flex place-content-center py-2 h-[3rem] w-[100%] text-white">
        <button className="w-[100px] h-auto font-bold text-lg" onClick={redirecting}>
          <span><FontAwesomeIcon icon={faHouse} /></span> Home
        </button>
      </div>
      <div className='flex flex-col'>
        <div className='flex-1'>
          <div className='w-[100%] sticky top-[86px]'>
            <div className='p-5 w-[100%] player-wrapper h-[500px]'>
              <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className="react-player" 
                playing
                width='100%'
                height='85%'    
                controls/>
              <h1 className='text-4xl font-bold mt-2 text-white'>
                {title}
              </h1>
            </div>
            <div className='flex flex-row justify-between px-4'>
              <Link to={`/channel/${channelId}`}>
                <h3 className='text-xl md:text-4xl font-bold mb-2 text-white'>
                  {channelTitle}
                  <span className='ml-2'>
                  </span>
                </h3>
              </Link>
            </div>
            <div className='flex flex-row gap-[20px] items-center p-4'>
              <p className='text-md text-white'>{parseInt(viewCount).toLocaleString()} views</p>
              <p className='text-md text-white'>{parseInt(likeCount).toLocaleString()} likes</p>
            </div>
          </div>
        </div>
        <div className='p-2 overflow-y-auto justify-center items-center'>
          <Videos videos={videos} />
        </div>
      </div>
    </div>
  );
}
