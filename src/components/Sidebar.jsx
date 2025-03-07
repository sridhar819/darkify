import React from 'react'
import { SidebarContainer, IconsCard, EachIcon } from './SidebarSTyle'
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