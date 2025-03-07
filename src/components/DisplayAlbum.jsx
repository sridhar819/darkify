import React, { useContext } from 'react'
import { useLocation, useParams } from 'react-router-dom'

import styled from 'styled-components'
import { albumsData, assets, songsData } from '../assets/assets'
import { PlayerContext } from '../context/PlayerContext'

const DisplayAlbum = () => {
    const { playWithId } = useContext(PlayerContext)

    const { id } = useParams()
    const location = useLocation()

    const path = location.pathname.split('/')[1]

    const album = path === "album" ? albumsData[id] : songsData[id];


    return (
        <>
            <Div>
                <img width="160px" className='img-fluid' src={album.image} alt="" />
                <div >
                    <p>Playlist</p>
                    <h2>{album.name}</h2>
                    <p style={{ fontSize: "12px" }}>{album.desc}</p>
                    <div className='d-flex gap-2'>
                        <p >33,65,111 <b>likes</b></p>
                        |
                        <p className='pl-3'>about 2hr 35min</p>
                    </div>
                </div>
            </Div>
            <Table>
                <thead>
                    <tr>
                        <th>#Title</th>
                        <th>Album</th>
                        <th>Date Added </th>
                        <th><img width="20px" src={assets.clock_icon} alt="" /></th>
                    </tr>
                </thead>
                <tbody>
                    {songsData.map((each, index) => (
                        <tr key={index} onClick={() => playWithId(each.id)} >
                            <td className='d-flex gap-2 align-items-center'>{index + 1}
                                <img height={40} width="40px" src={each.image} alt="" />
                                <p style={{ fontSize: "12px" }}>{each.name}</p>
                            </td>
                            <td>
                                {album.name}
                            </td>
                            <td>3 days ago</td>
                            <td>
                                {each.duration}
                            </td>
                        </tr>
                    ))}
                </tbody>

            </Table>
        </>
    )
}

export default DisplayAlbum

const Div = styled.div`
    margin-top: 10px;
    display: flex;
    gap: 10px;

    p{
        margin: 0;
    }
`

const Table = styled.table`
margin-top: 10px;
border-collapse: collapse;
overflow: auto;

thead{
    border-bottom: 1px solid #fff;
}



td{
    padding: 10px;
}

tbody td{
    font-size: 12px;
}

tbody tr{
    cursor: pointer;
}
tbody tr:hover{
    background-color: #ffffff22;
}
    
`