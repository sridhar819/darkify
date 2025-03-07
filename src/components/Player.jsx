import React, { useContext } from 'react'
import { PlayerContainer, PlayPause } from './Playerstyle'

import { assets, songsData } from '../assets/assets'
import { PlayerContext } from '../context/PlayerContext'

const Player = () => {

    const { seekBar, seekBg, playStatus, track, play, pause, time, volume, changeVolume } = useContext(PlayerContext);

    return (
        <PlayerContainer className='text-light'>
            <div className='d-none d-md-flex'>
                <img width="50px" height="60%" src={track.image} alt="music" />
                <div className='song-details'>
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
                    <p>{time.totalTime.minute}:{time.totalTime.second + "0"}</p>
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