import React from "react";
import { Button } from "../components/Button";
import { BiSkipNext, BiSkipPrevious } from "react-icons/bi";
import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai";

type PlayBarControlsProps = {
  playing: boolean;
  togglePlayPause: () => void;
  handleClickNextSong: React.MouseEventHandler<HTMLButtonElement>;
  handleClickPreviousSong: React.MouseEventHandler<HTMLButtonElement>; 
}

export function PlayBarControls({
  playing,
  togglePlayPause,
  handleClickNextSong,
  handleClickPreviousSong,
}: PlayBarControlsProps) {
  return (
    <div className="flex items-center justify-center space-x-2">
      <Button className="bg-none border-0" onClick={handleClickPreviousSong}>
        <BiSkipPrevious size="3em" color="#15803D" />
      </Button>
      {!playing ? (
        <Button className="bg-none border-0" onClick={togglePlayPause}>
          <AiFillPlayCircle size="3em" color="#15803D" />
        </Button>
      ) : (
        <Button className="bg-none border-0" onClick={togglePlayPause}>
          <AiFillPlayCircle size="3em" color="#15803D" />
        </Button>
      )}
      <Button className="bg-none border-0" onClick={handleClickNextSong}>
        <BiSkipNext size="3em" color="#15803D" />
      </Button>
    </div>
  );
}