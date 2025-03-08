import { createContext, useEffect, useRef, useState } from "react";
import { songsData } from "../assets/assets";

export const PlayerContext = createContext();

const PlayerContextProvider = (props) => {
    const audioRef = useRef();

    const [track, setTrack] = useState(songsData[0]);
    const [playStatus, setPlayStatus] = useState(false);
    const [volume, setVolume] = useState(1);
    const [seekTime, setSeekTime] = useState(0);

    const [time, setTime] = useState({
        currentTime: { second: 0, minute: 0 },
        totalTime: { second: 0, minute: 0 },
    });

    const changeSeek = (e) => {
        const newTime = (e.target.value / 100) * audioRef.current.duration;
        audioRef.current.currentTime = newTime;
        setSeekTime(e.target.value);
    };

    useEffect(() => {
        audioRef.current.ontimeupdate = () => {
            if (audioRef.current.duration) {
                const progress = (audioRef.current.currentTime / audioRef.current.duration) * 100;
                setSeekTime(progress);
                setTime({
                    currentTime: {
                        second: Math.floor(audioRef.current.currentTime % 60),
                        minute: Math.floor(audioRef.current.currentTime / 60),
                    },
                    totalTime: {
                        second: Math.floor(audioRef.current.duration % 60),
                        minute: Math.floor(audioRef.current.duration / 60),
                    },
                });
            }
        };
    }, []);


    const play = () => {
        audioRef.current.play();
        setPlayStatus(true);
    };

    const pause = () => {
        audioRef.current.pause();
        setPlayStatus(false);
    };

   
    const playWithId = (id) => {
        setTrack(songsData[id]);
    };

    
    const prev = () => {
        const currentIndex = songsData.findIndex((song) => song === track);
        const prevIndex = (currentIndex - 1 + songsData.length) % songsData.length;
        setTrack(songsData[prevIndex]);
    };

    const next = () => {
        const currentIndex = songsData.findIndex((song) => song === track);
        const nextIndex = (currentIndex + 1) % songsData.length;
        setTrack(songsData[nextIndex]);
    };


    useEffect(() => {
        if (playStatus) {
            audioRef.current.play();
        }
    }, [track]);


    useEffect(() => {
        audioRef.current.onended = next;
    }, []);


    const changeVolume = (e) => {
        const newVolume = e.target.value;
        setVolume(newVolume);
        audioRef.current.volume = newVolume;
    };

    const contextValue = {
        audioRef,
        changeSeek,
        seekTime,
        track,
        setTrack,
        playStatus,
        setPlayStatus,
        time,
        setTime,
        play,
        pause,
        playWithId,
        next,
        prev,
        volume,
        changeVolume,
    };

    return <PlayerContext.Provider value={contextValue}>{props.children}</PlayerContext.Provider>;
};

export default PlayerContextProvider;
