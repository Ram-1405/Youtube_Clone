import { useState,useEffect } from "react";
import { useParams ,useNavigate} from "react-router-dom";
import { fetchapoi } from "../utils/FetchFromApi";
import Videos from "./Videos";
import ChannelCard from "./ChannelCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
export default function ChannelDetail(){
    const [channelDetail,setchannelDetail]=useState(null);
    const [videos , setvideos]=useState(null);
    const {id}=useParams();
    const navigate=useNavigate();
    const redirecting = () => {
        navigate('/');
      };
    
    useEffect(()=>{
        const fetching=async()=>{
            try{
                const data= await fetchapoi(`channels?part=snippet&id=${id}`);
                setchannelDetail(data?.items[0]);
    
                const vdata=await fetchapoi(`search?channelId=${id}&part=snippet%2Cid&order=date`);
                setvideos(vdata?.items);
            }catch(err){
                console.log(err);
            }
        }
        fetching();
    },[id]);
    return(
        <>
            <div className="min-h-[96vh]">
                <div className="flex place-content-center py-2 h-[3rem] w-[100%] text-white">
                    <button className="w-[100px] h-auto font-bold text-lg" onClick={redirecting}>
                    <span><FontAwesomeIcon icon={faHouse} /></span> Home
                    </button>
                </div>
                <div>
                    <div className="flex" style={{
                        height:'250px',
                        background: 'linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)',
                        zIndex:10,
                        alignItems:'center',justifyContent:'center',alignContent:'center'
                    }}>
                        <ChannelCard channelDetail={channelDetail} marginTop='-90px'/>    
                    </div>
                    <div className="justify-centre px-3 w-[100%]">
                            <Videos videos={videos}/>
                        
                    </div>
                </div>
            </div>
        </>
    );
}