import React from 'react'

import styled from "styled-components";
import { assets } from '../assets/assets'

const Sidebar = () => {
    return (
        <SidebarContainer>
            <IconsCard>
                <EachIcon>
                    <img src={assets.home_icon} />
                    Home
                </EachIcon>
                <EachIcon>
                    <img src={assets.search_icon} />
                    Search
                </EachIcon>
                <EachIcon>
                    <img style={{ width: "40px" }} src={assets.stack_icon} />
                    Your Library
                    <div style={{ flexGrow: 1 }} className='d-flex justify-content-start gap-2 ml-3'>
                        <img width="15px" src={assets.arrow_icon} alt="" />
                        <img width="15px" src={assets.plus_icon} alt="" />
                    </div>
                </EachIcon>
            </IconsCard>
            <div className='bg-dark text-white p-3 m-2'>
                <h6 className='fs-6'>Create your first Playlist</h6>
                <p style={{ fontSize: "12px" }}>it's easy we will help you</p>
                <button type="button" className="btn btn-light rounded-5">Create playlist</button>
            </div>
            <div className='bg-dark text-white p-3 m-2'>
                <h6 className='fs-6'>Find some Podcasts to allow</h6>
                <p style={{ fontSize: "12px" }}>We'll keep you update on new episodes</p>
                <button type="button" className="btn btn-light rounded-5">Browse Podcasts</button>
            </div>
        </SidebarContainer>
    )
}

export default Sidebar


const SidebarContainer = styled.div`
    width: 25%;
    height: 100%;
    display: flex;
    flex-direction: column;
    color: white;
    
    padding: 1rem 0px;
    /* border-right: 1px solid #fff;
    border-bottom: 1px solid #fff; */
    background: linear-gradient(#121212,transparent);

    @media screen and (max-width:768px){
        display: none;
    }
`

const IconsCard = styled.ul`
    list-style: none;
    padding: 0;
    display: flex;
    flex-direction: column;
`

const EachIcon = styled.li`
    display: flex;
    align-items: center;
    column-gap: 10px;
    font-weight: 600;
    padding: 10px;

    >img{
        width: 10%;
        max-width: 25px;
        height: auto;
    }

    &:hover{
        transition: 1s;
        background-color:#020303;
        border-radius: 18px;
    }
`