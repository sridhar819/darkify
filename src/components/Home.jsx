import React, { useContext } from 'react'
import { CardView, Container } from './HomeStyle'
import Sidebar from './Sidebar'
import Player from './Player'
import Display from './Display'
import { PlayerContext } from '../context/PlayerContext'

const Home = () => {
    const { audioRef, track } = useContext(PlayerContext);

    return (
        <Container>
            <CardView>
                <Sidebar />
                <Display />
            </CardView>
            <Player />
            <audio ref={audioRef} src={track.file} preload='auto'></audio>
        </Container>
    )
}

export default Home