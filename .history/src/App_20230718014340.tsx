import { useState, useEffect } from 'react';
import { song } from "./types";
import { useQuery } from "react-query";
import { PlayBar } from "./sections/Playbar";
import { Sidebar } from "./sections/Sidebar";
import { SongCard } from "./sections/SongCard";
import { getPlayList } from "./api/getPlayList";
import { PlayBarControls } from "./sections/PlayBarControls";
import { useGlobalAudioPlayer } from "react-use-audio-player";
import { LoadingSkeleton } from "./sections/LoadingSkeleton";

function App() {
  const [songIndex, setSongIndex] = useState<number>(0);
  const [songsList, setSongsList] = useState<string[]>([]);

  const { data, isLoading } = useQuery("playList", getPlayList);

  const { isReady, playing, duration, load, play, togglePlayPause } =
    useGlobalAudioPlayer();
  
  useEffect(() => {
    if (isReady) {
      play();
    }
  }, [isReady, play, songIndex]);
  
  useEffect(() => {
    if (data && data.length > 0) {
      const audioSrc = data.map((song: song) => {
        return song.audio;
      });
      setSongsList(audioSrc);
    }
  }, [data]);

















  return (
    <div>
      <h1 className='font-bold text-blue-700'>Hello</h1>
    </div>
  
  );
}

export default App;
