import styled from "styled-components"
import { albumsData, songsData } from "../assets/assets"
import AlbumItem from "./AlbumItem"



const DisplayHome = () => {
    return (
        <div>
            <h1 className="mt-3" style={{ fontSize: "20px" }}>Your Top Playlist</h1>
            <Container>
                {albumsData.map((item, index) => (
                    <AlbumItem path="album" key={index} details={item} />
                ))}
            </Container>
            <h1 className="mt-3" style={{ fontSize: "20px" }}>Recently played</h1>
            <Container>
                {songsData.map((item, index) => (
                    <AlbumItem path="songs" key={index} details={item} />
                ))}
            </Container>
        </div>
    )
}

export default DisplayHome


const Container = styled.div`
margin-top: 10px;
display: flex;
overflow: auto;
width: 100%;
column-gap: 10px;
    
`