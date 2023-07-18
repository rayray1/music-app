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

  useEffect(() => {
    const animate = () => {
      setPos(getPosition());
      frameRef.current = requestAnimationFrame(animate);
    };

    frameRef.current = window.requestAnimationFrame(animate);
  
    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current)
      }
    }
  }, [getPosition])

  useEffect(() => {
  const i = setInterval(() => {
    setPosTime(getPosition());
  }, 500);
  
  return () => clearInterval(i);
  }, [getPosition, setPosTime])

  const handleSeekBarClick = useCallback(
    (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      const { pageX: eventOffsetX } = event;

      if (seekBarElem.current) {
        const elementOffsetX = seekBarElem.current.offsetLeft;
        const elementWidth = seekBarElem.current.clientWidth;
        const percent = (eventOffsetX - elementOffsetX) / elementWidth;
      }
    },
    [duration, seek]
  );

  return (
    <div className="clflextas">

    </div>
  )
  
  















}


