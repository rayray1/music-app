import React, { useCallback, useEffect, useRef, useState } from "react";
import { Typography } from "../components/Typography";
import { formatTime } from "../utils";
import { useGlobalAudioPlayer } from "react-use-audio-player";

export function PlayBar() {
  const { duration, seek, getPosition } = useGlobalAudioPlayer();

  const seekBarElem = useRef<HTMLDI
  
}