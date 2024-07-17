import { Link } from "react-router-dom";
import { demoProfilePicture } from "../utils/constants";
export default function ChannelCard({channelDetail,marginTop}){
    return(
        <>
        <div className={`flex flex-col justify-centre items-centre ${marginTop} w-[360px] h-[250px] rounded-md 
        sm:w-[180px] h-[180px]`}
        style={{
            alignContent:'center',
            justifyContent:'center',alignItems:'center'
         }}>
            <Link to={`/channel/${channelDetail?.id?.channelId}`}>
                <div className="flex flex-col border border-gray-300 
                 rounded-full overflow-hidden w-[180px] h-[180px]"
                 >
                    <img src={channelDetail?.snippet?.thumbnails?.high?.url ||demoProfilePicture} alt={channelDetail?.snippet?.title} 
                    className="h-full w-full object-cover mb-2"/>
                </div>
                <h5 className="text-lg font-extrabold">
                    {channelDetail?.snippet?.title}
                </h5>
                {channelDetail?.statistics?.subscriberCount && (
                    <p className="text-sm font-md text-black font-extrabold text-centre">
                        {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString('en-US')} Subscribers
                    </p>
                )}
            </Link>
        </div>
        </>
    )
}