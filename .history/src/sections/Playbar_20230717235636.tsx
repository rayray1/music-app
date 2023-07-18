import React, { useCallback, useEffect, useRef, useState } from "react";
import { Typography } from "../components/Typography";
import { formatTime } from "../utils";
import { useGlobalAudioPlayer } from "react-use-audio-player";

export function PlayBar() {
  pnst { duration, seek, getPosition } = useGlobalAudioPlayer()
  
}