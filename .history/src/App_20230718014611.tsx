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
  
  useEffect(() => {
    if (songsList && songsList.length > 0) {
      load(songsList[songIndex], {
        onend: () => {
          setSongIndex((index) => {
            if (index === songsList.length - 1) {
              return 0;
            }

            return index + 1;
          });
        },
      });
    }
  }, [load, songIndex, songsList]);
  
  const handleClickNextSong = () => {
    setSongIndex((index) => {
      if (index === songsList.length - 1) {
        return 0;
      }

      return index + 1;
    });
  };
  
  const handleClickPreviousSong = () => {
    setSongIndex((index) => {
      if (index === 0) {
        return songsList.length - 1;
      }

      return index - 1;
    });
  }
  
  const handleClickSidebar = (index: number) => {
    setSongIndex(index);
  };

  if (duration === Infinity) return null;

  if (isLoading) return <LoadingSkeleton />;
  

  return (
    <div className=''>
      
    </div>
  
  );
}

export default App;
