import React, { useEffect, useState } from "react";
import { fetchapoi } from "../utils/FetchFromApi"
import  Videos  from "./Videos";
import Sidebar from "./SideBar";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState(null);

  useEffect(() => {
    const fetching = async () => {
      try {
        const data = await fetchapoi(`search?part=snippet&q=${selectedCategory}`);
        if (data && data.items) {
          setVideos(data.items);
        } else {
          console.error("Data.items is undefined or data format is incorrect:", data);
        }
      } catch (error) {
        console.error("Error fetching videos: ", error);
      }
    };
  
    fetching();
  }, [selectedCategory]);

  return (
    <div className="flex flex-col md:flex-row">
      <div className="px-0  w-1/6 ml-0 ">
        <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
      </div>

      <div className="p-2 overflow-y-auto sm:h-auto md:h-[92vh] w-5/6 flex-2 ">
        <h1 className="text-4xl font-bold mb-2 text-white">
          {selectedCategory} <span className="text-red-600">videos</span>
        </h1>
        
        <Videos videos={videos} />
      </div>
    </div>
  );
};

export default Feed;
