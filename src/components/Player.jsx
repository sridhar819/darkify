import React, { useContext } from 'react'
import styled from "styled-components";
import { assets, songsData } from '../assets/assets'
import { PlayerContext } from '../context/PlayerContext'

const Player = () => {

    const { seekBar, seekBg, playStatus, track, play, pause, time, volume, changeVolume } = useContext(PlayerContext);

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
                    <img src={assets.prev_icon} alt="" />
                    {playStatus ?
                        <img onClick={pause} src={assets.pause_icon} alt="" /> :
                        <img onClick={play} src={assets.play_icon} alt="" />
                    }
                    <img src={assets.next_icon} alt="" />
                    <img src={assets.loop_icon} alt="" />
                </div>
                <div className="time-line">
                    <p>
                        {time.currentTime.minute < 10 ? "0" + time.currentTime.minute : time.currentTime.minute}
                        :
                        {time.currentTime.second < 10 ? "0" + time.currentTime.second : time.currentTime.second}</p>
                    <div ref={seekBg} className='line'>
                        <div ref={seekBar} className='loader'>

                        </div>
                    </div>
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

    .line{
        background-color: white;
        max-width: 300px;
        min-width: 40vw;
        height: 5px;
        border-radius: 20px;
        overflow: hidden;
    }

    .loader{
        height: 100%;
        width: 0;
        border-radius: 20px;
        background-color: red;
    }
`