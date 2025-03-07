import styled from "styled-components";

export const PlayerContainer = styled.div`
    height: 10%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;
    border-top: 1px solid #fff;
    backdrop-filter: blur(10px);

    .song-details{
        width: 90%;
        overflow: hidden;
        margin-left: 4px;
        p{
            font-size: 12px;
        }
    }

    .others{
        display: flex;
        margin-right: 10px;
        align-items: center;
        gap: 10px;
    }
    .others>img{
        width: 13px;
    }
`

export const PlayPause = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-grow: 1;
    margin-top: 16px;

    .player{
        display: flex;
        gap: 35px;

        img{
            width: 13px;
        }
    }

    .time-line{
        display: flex;
        align-items: center;
        gap: 26px;
    }
    
    .time-line >p {
        padding-top: 10px;
        font-size: 13px;
    }

    .line{
        background-color: white;
        max-width: 300px;
        min-width: 40vw;
        height: 5px;
        border-radius: 20px;
        overflow: hidden;
    }

    .loader{
        height: 100%;
        width: 0;
        border-radius: 20px;
        background-color: red;
    }
`