import { useSelector } from "react-redux";
import { useState } from "react";
import AudioLoader from "./audioComponents/AudioLoader";
import CursorToolTip from "../CursorToolTip";

const AudioButton = () => {
  // Destructured global state
  const { wordData } = useSelector((state) => state.app);
  // Selecting interested Object from API response Array
  const word = wordData[0];
  // Mapping and storing all audios into an array and setting empty audio to ""
  const audios = word.phonetics.map((item) => item.audio || "");
  // Filtering through the audios and removing ""
  const filterAudios = audios.filter((item) => item !== "");
  // Selecting the first audio
  const firstAudio = filterAudios.find((item) => item);
  // Local play state
  const [play, setPlay] = useState({ isPlaying: false, isLoading: false });
  // Function to update isPlaying state
  const updatePlayState = (key, value) => {
    setPlay((prevState) => ({ ...prevState, [key]: value }));
  };
  // Function to update isLoading state
  const setIsLoading = (value) => {
    setPlay((prev) => ({ ...prev, isLoading: value }));
  };
  // Handle state while playing
  function handlePlaying() {
    updatePlayState("isPlaying", true);
    setIsLoading(false);
  }
  // Play Audio Function
  const playAudio = () => {
    setIsLoading(true);
    const audio = new Audio(firstAudio);
    setTimeout(function () {
      // Play audio
      audio.play();
      // Audio eventListeners
      audio.addEventListener("playing", handlePlaying);
    }, 2000);
    audio.addEventListener("pause", () => updatePlayState("isPlaying", false));
  };

  return (
    // Audio Button container
    <div className="flex items-center w-[100px] sm:w-auto justify-end z-[3]">
      {/* Audio Button */}
      {firstAudio ? (
        <CursorToolTip title="By clicking this, You play the word's audio">
          <button
          onClick={playAudio}
            disabled={play.isLoading}
            className={`flex w-[54px] h-[54px] sm:w-[72px] sm:h-[72px] justify-center items-center flex-shrink-0 rounded-full bg-purpleBg text-purple transition hover:bg-purple hover:text-white`}
          >
            {/* Render audio icon based on isPlaying */}
            {(() => {
              switch (true) {
                case play.isPlaying:
                  return (
                    <span className="material-symbols-outlined transition text-[24px] sm:text-[40px] animate-opacity">
                      volume_up
                    </span>
                  );
                case play.isLoading:
                  return <AudioLoader />;
                default:
                  return (
                    <span className="material-symbols-outlined transition text-[24px] sm:text-[40px] ">
                      play_arrow
                    </span>
                  );
              }
            })()}
          </button>
        </CursorToolTip>
      ) : (
        // !firstAudio and this renders
        <h2 className="text-purple text-[16px] flex-shrink-0">No Audio</h2>
      )}
    </div>
  );
};

export default AudioButton;
