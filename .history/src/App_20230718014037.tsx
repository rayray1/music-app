import { useState, useEffect } from 'react';
import { song } from "./types";
import { useQuery } from "react-query";
import { PlayBar } from "./sections/Playbar";
import { Sidebar } from "./sections/Sidebar";
import { songCard } from "./sections/SongCard";
import { getPlayList } from "./api/getPlayList";
mport { PlayBarControls } from "./sections/PlayBarControls";

function App() {
  return (
    <div>
      <h1 className='font-bold text-blue-700'>Hello</h1>
    </div>
  
  );
}

export default App;