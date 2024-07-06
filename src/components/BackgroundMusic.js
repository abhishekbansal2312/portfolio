import React, { useRef, useEffect } from "react";

const BackgroundMusic = () => {
  const audioRef = useRef(null);

  const handlePlay = () => {
    audioRef.current.play();
  };

  useEffect(() => {
    const handleUserInteraction = () => {
      document.querySelector("button").click();
      document.removeEventListener("click", handleUserInteraction);
      document.removeEventListener("keypress", handleUserInteraction);
    };

    document.addEventListener("click", handleUserInteraction);
    document.addEventListener("keypress", handleUserInteraction);

    return () => {
      document.removeEventListener("click", handleUserInteraction);
      document.removeEventListener("keypress", handleUserInteraction);
    };
  }, []);
  return (
    <div>
      <audio
        ref={audioRef}
        src="Stephen Sanchez - Until I Found You (Karaoke Version).mp3"
        loop
      />
      <button onClick={handlePlay} style={{ display: "none" }}>
        <music />
        Play Music
      </button>
    </div>
  );
};

export default BackgroundMusic;
