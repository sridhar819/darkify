import styled from "styled-components";

export const SidebarContainer = styled.div`
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

export const IconsCard = styled.ul`
    list-style: none;
    padding: 0;
    display: flex;
    flex-direction: column;
`

export const EachIcon = styled.li`
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