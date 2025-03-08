import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import DisplayHome from './DisplayHome'
import Navbar from './Navbar'
import DisplayAlbum from './DisplayAlbum'
import styled from "styled-components";




const Display = () => {
    return (
        <DisplayContainer>
            <Navbar />
            <Routes>
                <Route path="/" element={<DisplayHome />} />
                <Route path="/album/:id" element={<DisplayAlbum />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </DisplayContainer>
    )
}

export default Display


const DisplayContainer = styled.div`
    color: white;
    flex-grow: 1;
    width: 75%;
    padding:0px 10px;
    display: flex;
    flex-direction: column;
    overflow: auto;
    position: relative;
    background-size: cover;
`