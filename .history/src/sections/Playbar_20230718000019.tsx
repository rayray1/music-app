import React, { useCallback, useEffect, useRef, useState } from "react";
import { Typography } from "../components/Typography";
import { formatTime } from "../utils";
import { useGlobalAudioPlayer } from "react-use-audio-player";

export function PlayBar() {
  const { duration, seek, getPosition } = useGlobalAudioPlayer();

  const seekBarElem = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState<number>(0)
  const [posTime, setPosTime] = useState<number>(0);

  const frameRef = useRef<number>();

  use
  
}