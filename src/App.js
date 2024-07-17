import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar';
import Feed from './Components/Feed';
import SearchFeed from './Components/SearchFeed';
import VideoDetails from './Components/VideoDetails';
import ChannelDetail from './Components/ChannelDetails';

function App() {
  return (
    <div className='bg-black'>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route exact path="/" element={<Feed/>}/>
      <Route  path="/search/:searchterm" element={<SearchFeed/>}/>
      <Route path='/channel/:id' element={<ChannelDetail />} />
      <Route path='/video/:id' element={<VideoDetails />} />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
