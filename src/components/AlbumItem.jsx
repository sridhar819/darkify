import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const AlbumItem = ({ details, path }) => {
    const { name, image, id, desc } = details

    const nav = useNavigate()


    return (
        <Card onClick={() => nav(`/${path}/${id}`)}>
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
     object-fit: fill;
   }

      &:hover{
        background-color: #ffffff26;
      }
`