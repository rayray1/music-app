import React, { useCallback, useEffect, useRef, useState } from "react";
import { Typography } from "../components/Typography";
import { formatTime } from "../utils";
import { useGlobalAudioPlayer } from "react-use-audio-player";

export function PlayBar() {
  const { duration, seek, getPosition } = useGlobalAudioPlayer();

  const seekBarElem = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState<number>(0);
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
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [getPosition]);

  useEffect(() => {
    const i = setInterval(() => {
      setPosTime(getPosition());
    }, 500);
  
    return () => clearInterval(i);
  }, [getPosition, setPosTime]);

  const handleSeekBarClick = useCallback(
    (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      const { pageX: eventOffsetX } = event;

      if (seekBarElem.current) {
        const elementOffsetX = seekBarElem.current.offsetLeft;
        const elementWidth = seekBarElem.current.clientWidth;
        const percent = (eventOffsetX - elementOffsetX) / elementWidth;
        seek(percent * duration);
      }
    },
    [duration, seek]
  );

  return (
    <div className="flex items-center justify-center space-x-2">
      <Typography className="text-base text-black">
        {formatTime(posTime)}
      </Typography>
      <div
        className="w-3/4 h-3 rounded-lg bg-gray-800 cursor-pointer overflow-hidden"
        ref={seekBarElem}
        onClick={handleSeekBarClick}
      >
        <div
          style={{ width: `${(pos / duration) * 100}%` }}
          className="bg-green-700 h-full"
        />
      </div>
      <Typography className="text-base text-black">
        {formatTime(duration)}
      </Typography>
    </div>
  );
}