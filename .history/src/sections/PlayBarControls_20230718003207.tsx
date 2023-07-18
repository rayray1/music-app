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

export function PlayBarControls() {
  
}