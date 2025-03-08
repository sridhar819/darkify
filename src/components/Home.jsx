import React, { useContext } from 'react'
import styled from 'styled-components'
import dark from '../assets/dark.jpg'
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


const Container = styled.div`
     height: 100vh;
     background:linear-gradient(#000000,#000000), url(${dark});
     color: white;
     background-size: cover;
     background-attachment: scroll;
`

const CardView = styled.div`
    display: flex;
    backdrop-filter: grayscale(100%);
    backdrop-filter: blur(5px);
    height: 90%;
`