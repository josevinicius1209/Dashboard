import styled from 'styled-components'

export const Container = styled.div`
    background-color: #fafafa;
    display: flex;
    width: 100%;
    box-sizing: border-box;

    @media(max-width: 860px){
        display: flex;
        flex-direction: column;
        background-color: 'purple';

    }
`;

export const Principal = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-sizing: border-box;
    width: 100%;

    @media(max-width: 860px){
        margin: 0;
        display: flex;
        flex-direction: column;
 
    }
`;


export const DataDiv = styled.div`
    padding-left: 20px;
    height: 100%;
    padding-top: 20px;
    display: flex;
    justify-content: center;
    grid-gap: 10px;
    flex-wrap: wrap;
    width: 100%;

    @media(max-width: 860px){
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
    }
`;

export const RightDiv = styled.div`
    display: grid;
    grid-template-rows: 10vh 75vh;
    grid-template-columns: 60vw;
    align-self: center;
    grid-gap: 10px;
    box-sizing: border-box;
    min-width: 30vw;

    @media(max-width: 860px){
        margin: 0 20px;
        min-width: auto;
        grid-template-rows: 300px;
    }
`;

export const SubRigtDiv = styled.div`
    display: grid;
    grid-template-columns: 30vw 30vw;
    grid-template-rows: 25vh;
    grid-gap: 10px;
    max-width: 1168px;

    @media(max-width:860px){
        display: flex;
        flex-direction: column;
    }
`;

export const LeftDiv = styled.div`
    display: grid;
    grid-template-rows: 25vh 60vh;
    grid-template-columns: 20vw;
    grid-gap: 10px;
    box-sizing: border-box;
    align-self: center;
    overflow: hidden;
    align-content: center;
    align-items: center;

    @media(max-width:860px){
        min-width: 300px;
        width: 60%;
        margin: auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-bottom: 20px;
    }
`;

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`;

export const HeaderBlue = styled.div`
    display: block;
    justify-content: space-between;
    width: 100%;
`;
