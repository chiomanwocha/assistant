import { useState } from 'react';

const useAudioPlayer = () => {
    // Local isPlaying state
    const [isPlaying, setIsPlaying] = useState(false);
    
    const handleOnPlaying = () => {
        setIsPlaying(true);
    };

    const handleOnPause = () => {
        setIsPlaying(false);
    };

    return {
        isPlaying,
        handleOnPlaying,
        handleOnPause,
    };
};

export default useAudioPlayer;
