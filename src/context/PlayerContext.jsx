import { createContext, useEffect, useRef, useState } from "react";
import { songsData } from "../assets/assets";


export const PlayerContext = createContext();

const PlayerContextProvider = (props) => {

    const audioRef = useRef();
    const seekBg = useRef();
    const seekBar = useRef();

    const [track, setTrack] = useState(songsData[0]);
    const [playStatus, setPlayStatus] = useState(false);
    const [volume, setVolume] = useState(1);

    const [time, setTime] = useState({
        currentTime: {
            second: 0,
            minute: 0
        },
        totalTime: {
            second: 0,
            minute: 0
        },
    })

    const play = () => {
        audioRef.current.play();
        setPlayStatus(true);
    }

    const pause = () => {
        audioRef.current.pause();
        setPlayStatus(false);
    }

    const playWithId = async (id) => {
        await setTrack(songsData[id]);
        await audioRef.current.play();
        setPlayStatus(true);
    }
    const prev = async () => {
        const currentIndex = songsData.findIndex(song => song === track);
        const prevIndex = (currentIndex - 1 + songsData.length) % songsData.length; // Loop to last song if at the first
        await setTrack(songsData[prevIndex]);
        await audioRef.current.play();
        setPlayStatus(true);
    };

    const next = async () => {
        const currentIndex = songsData.findIndex(song => song === track);
        const nextIndex = (currentIndex + 1) % songsData.length; // Loop back to first song if at the last
        await setTrack(songsData[nextIndex]);
        await audioRef.current.play();
        setPlayStatus(true);
    };

    const changeVolume = (e) => {
        const newVolume = e.target.value;
        setVolume(newVolume);
        audioRef.current.volume = newVolume;
    };

    useEffect(() => {
        let timeiD = setTimeout(() => {
            audioRef.current.ontimeupdate = () => {
                seekBar.current.style.width = (Math.floor(audioRef.current.currentTime / audioRef.current.duration * 100)) + "%";
                setTime({
                    currentTime: {
                        second: Math.floor(audioRef.current.currentTime % 60),
                        minute: Math.floor(audioRef.current.currentTime / 60),
                    },
                    totalTime: {
                        second: Math.floor(audioRef.current.duration % 60),
                        minute: Math.floor(audioRef.current.duration / 60),
                    },
                })
            }
        }, 1000)

        return () => {
            clearTimeout(timeiD)
        }
    })

    const contextValue = {
        audioRef,
        seekBg,
        seekBar,
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
        changeVolume
    }

    return (
        <PlayerContext.Provider value={contextValue}>
            {props.children}
        </PlayerContext.Provider>
    )
}

export default PlayerContextProvider;