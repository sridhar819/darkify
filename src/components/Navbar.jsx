import styled from "styled-components"
import { assets } from "../assets/assets"
import { useNavigate } from "react-router-dom"

const Navbar = () => {
    const nav = useNavigate()

    return (
        <>
            <Container>
                <div className="arrow">
                    <img onClick={() => nav(-1)} src={assets.arrow_left} alt="" />
                    <img onClick={() => nav(1)} src={assets.arrow_right} alt="" />
                </div>
                <div className="d-flex align-items-center gap-2">
                    <button className="btn btn-light rounded-5" type="button">Explorer Premium</button>
                    <button className="btn btn-dark rounded-5" type="button">Install App</button>
                    <p >S</p>
                </div>
            </Container>
            <div className="d-flex gap-3">
                <button className="btn btn-dark rounded-5 px-4" type="button">All</button>
                <button className="btn btn-dark rounded-5 px-3" type="button">Music</button>
                <button className="btn btn-dark rounded-5" type="button">Podcasts</button>
            </div>
        </>
    )
}

export default Navbar


const Container = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
position: sticky;
top: 0;
left: 0;
background-color: black;
margin-bottom: 10px;

.arrow{
    display: flex;
    gap: 10px;
    align-items: center;

    img{
        width: 20px;
        cursor: pointer;
    }
}
 
p{
    height: 40px;
    width: 40px;
    font-weight: bold;
    border: 1px solid white;
    display: grid;
    margin-top: 10px;
    place-items: center;
    background-color: red;
    border-radius:50%;
}
    
`