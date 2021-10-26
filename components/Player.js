import AudioPlayer from "./AudioPlayer";
import playerStyles from "../styles/Player.module.css";
import { FaPlayCircle } from "react-icons/fa";
import { FaPauseCircle } from "react-icons/fa";
import { useState } from "react";

function Player() {
  const [player, setPlayer] = useState(false);

  const changePlayer = () => {
    setPlayer(!player);
  };

  return (
    <>
      <AudioPlayer cuePlay={player} />
      <div onClickCapture={changePlayer}>
        {player ? (
          <FaPauseCircle className={playerStyles.play} />
        ) : (
          <FaPlayCircle className={playerStyles.play} />
        )}
      </div>
      {/* <div className={playerStyles.songInfo}>
        <p>Nothing Else Matters</p>
        <p>Metallica</p>
      </div> */}
    </>
  );
}

export default Player;
