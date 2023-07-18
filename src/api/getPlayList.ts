import axios from "axios"

export const getPlayList = async () => {
  const playList = await axios.get(
    "https://rayray1.github.io/olympe/music.json"
  );
  return playList.data;
}