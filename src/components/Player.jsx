import React, { useContext } from 'react'
import styled from "styled-components";
import { assets, songsData } from '../assets/assets'
import { PlayerContext } from '../context/PlayerContext'

const Player = () => {

    const { seekTime, changeSeek, prev, next, playStatus, track, play, pause, time, volume, changeVolume } = useContext(PlayerContext);
    return (
        <PlayerContainer className='text-light'>
            <div className='d-flex'>
                <img width="50px" height="60%" src={track.image} alt="music" />
                <div className='song-details d-none d-md-flex'>
                    <p className='m-0 mt-2 p-0'><b>{track.name}</b></p>
                    <p>{track.desc.slice(0, 16) + "..."}</p>
                </div>
            </div>
            <PlayPause>
                <div className="player">
                    <img src={assets.shuffle_icon} alt="" />
                    <img onClick={prev} src={assets.prev_icon} alt="" />
                    {playStatus ?
                        <img onClick={pause} src={assets.pause_icon} alt="" /> :
                        <img onClick={play} src={assets.play_icon} alt="" />
                    }
                    <img onClick={next} src={assets.next_icon} alt="" />
                    <img src={assets.loop_icon} alt="" />
                </div>
                <div className="time-line">
                    <p>
                        {time.currentTime.minute < 10 ? "0" + time.currentTime.minute : time.currentTime.minute}
                        :
                        {time.currentTime.second < 10 ? "0" + time.currentTime.second : time.currentTime.second}</p>
                    <input
                        type="range"
                        min="0"
                        max="100"
                        value={seekTime}
                        onChange={changeSeek}
                    />


                    <p>{time.totalTime.minute}:{time.totalTime.second < 10 ? "0" + time.totalTime.second : time.totalTime.second}</p>
                </div>

            </PlayPause>
            <div className='others d-none d-lg-flex'>
                <img src={assets.play_icon} alt="" />
                <img src={assets.mic_icon} alt="" />
                <img src={assets.queue_icon} alt="" />
                <img src={assets.speaker_icon} alt="" />
                <img src={assets.volume_icon} alt="" />
                <input type="range" min="0" max="1" step="0.01" value={volume} onChange={changeVolume} />
                <img src={assets.mini_player_icon} alt="" />
                <img src={assets.zoom_icon} alt="" />
            </div>
        </PlayerContainer>
    )
}

export default Player



const PlayerContainer = styled.div`
    height: 10%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;
    border-top: 1px solid #fff;
    backdrop-filter: blur(10px);

    .song-details{
        width: 90%;
        overflow: hidden;
        margin-left: 4px;
        p{
            font-size: 12px;
        }
    }

    .others{
        display: flex;
        margin-right: 10px;
        align-items: center;
        gap: 10px;
    }
    .others>img{
        width: 13px;
    }
`

const PlayPause = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-grow: 1;
    margin-top: 16px;

    .player{
        display: flex;
        gap: 35px;

        img{
            width: 13px;
        }
    }

    .time-line{
        display: flex;
        align-items: center;
        gap: 26px;
    }
    
    .time-line >p {
        padding-top: 10px;
        font-size: 13px;
    }

    input[type="range"] {
  -webkit-appearance: none;
  width: 100%;
  min-width: 300px;
  height: 5px;
  background: red;
  border-radius: 5px;
  outline: none;
  transition: 0.2s;
}

/* Track (background) */
input[type="range"]::-webkit-slider-runnable-track {
  height: 8px;
  background: linear-gradient(to right, #ff6600 var(--progress), #ddd var(--progress));
  border-radius: 5px;
}

/* Thumb (circle) */
input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 10px;
  height: 10px;
  background:#fff;
  border-radius: 50%;
  cursor: pointer;
  margin-top: -1px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  transition: 0.2s;
}



    
`