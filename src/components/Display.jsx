import React from 'react'
import { DisplayContainer } from './DisplayStyle'
import { Route, Routes } from 'react-router-dom'
import DisplayHome from './DisplayHome'
import Navbar from './Navbar'
import DisplayAlbum from './DisplayAlbum'

const Display = () => {
    return (
        <DisplayContainer>
            <Navbar />
            <Routes>
                <Route path="/" element={<DisplayHome />} />
                <Route path="/album/:id" element={<DisplayAlbum />} />
                <Route path="/songs/:id" element={<DisplayAlbum />} />
            </Routes>
        </DisplayContainer>
    )
}

export default Display