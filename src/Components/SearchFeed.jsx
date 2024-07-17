import React, { useEffect, useState } from "react";
import { fetchapoi } from "../utils/FetchFromApi";
import Videos from "./Videos";
import { useNavigate, useParams } from "react-router-dom";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function SearchFeed(){
    const navigate=useNavigate();
    const redirecting=()=>{
        navigate('/');
    }
    const [videos,setvideos]=useState(null);
    const {searchterm}=useParams();
    useEffect(() => {
        const fetching = async () => {
          try {
            const data = await fetchapoi(`search?part=snippet&q=${searchterm}`);
            if (data && data.items) {
              setvideos(data.items);
            } else {
              console.error("Data.items is undefined or data format is incorrect:", data);
            }
          } catch (error) {
            console.error("Error fetching videos: ", error);
          }
        };
    
        fetching();
      }, [searchterm]);
    return(
        <>
        <div className="flex place-content-center py-2 h-[3rem] w-[100%] text-white">
            <button className="w-[100px] h-auto text-bold text-lg" onClick={redirecting}>
            <span><FontAwesomeIcon icon={faHouse}/></span> Home
                </button>
        </div>
            <div className="p-2 overflow-y-auto sm:h-auto md:h-92vh w-[100%] flex-2">
                <h1 className="text-4xl font-bold mb-2 text-white">
                    {searchterm} <span className="text-red-600">videos</span>
                </h1>
                <Videos videos={videos}/>
            </div>
          </>
    );
}