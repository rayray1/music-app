import React from "react";

export function SongCard({ selectedSong }: any) {
  return (
    <div className="flex flex-col space-y-8 justify-center items-center">
      <img
        className="w-60 h-60 rounded-3xl"
        src={selectedSong.cover}
        alt={selectedSong.name}
      />
      <div className="space-y-2 text-center">
        <p className="text-black text-base">{selectedSong.name}</p>
        <p className="text-black text-base">{selectedSong.artist}</p>
      </div>
    </div>
  );
}
