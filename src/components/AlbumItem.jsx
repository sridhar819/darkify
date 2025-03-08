import React, { useContext } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { PlayerContext } from '../context/PlayerContext'

const AlbumItem = ({ details, path }) => {
    const { name, image, id, desc } = details
    const { playWithId } = useContext(PlayerContext)



    const navigate = useNavigate();

    const handleClick = () => {
        if (path === "songs") {
            playWithId(id);
        } else {
            navigate(`/${path}/${id}`);
        }
    };


    return (
        <Card onClick={handleClick}>
            <img className='img-fluid' src={image} alt="" />
            <p><b>{name}</b></p>
            <p>{desc}</p>
        </Card>
    )
}

export default AlbumItem


const Card = styled.div`
      
      min-width: 180px;

      p{
        margin: 0;
        font-size: 13px;
      }
      
   img{
     max-height: 200px;
     min-width: 180px;
     min-height: 200px;
     object-fit: cover;
   }

      &:hover{
        background-color: #ffffff26;
      }
`