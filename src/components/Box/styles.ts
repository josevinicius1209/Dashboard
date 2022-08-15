import styled from 'styled-components'



export const HistBox = styled.div`
    display: grid;
    grid-template-rows: 40px auto;
    width: 100%; 
    height: 100%;
    max-width: 1168px;
    background: #FFFFFF;
    border: 0.5px solid #E4E4E4;
    box-sizing: border-box;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.05);
    border-radius: 5px;
    padding: 15px;
    overflow: hidden;
    

    @media(max-width: 560px){
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        overflow: visible;
    }
`;

export const Box = styled.div`
    width: 100%; 
    height: 100%;
    background: #FFFFFF;
    border: 0.5px solid #E4E4E4;
    box-sizing: border-box;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.05);
    border-radius: 5px;
    padding: 15px;
    display: grid;
    grid-template-rows: 20px 30px auto 30px;
    max-width: 1168px;
    overflow: hidden;

    @media(max-width: 860px){
        max-height: auto;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        overflow: hidden;
        grid-gap: 5px;
    }
`;

export const PlansBox = styled.div`
    width: 100%; 
    height: 100%;
    background: #FFFFFF;
    border: 0.5px solid #E4E4E4;
    box-sizing: border-box;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.05);
    border-radius: 5px;
    padding: 15px;
    display: inherit;
    max-width: 1168px;
    overflow: hidden;

    @media(max-width: 860px){
        max-height: 700px;
    }
`;

export const Box2 = styled.div`
    width: 100%; 
    height: 100%;
    background: #FFFFFF;
    border: 0.5px solid #E4E4E4;
    box-sizing: border-box;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.05);
    border-radius: 5px;
    padding: 15px;
    display: grid;
    grid-template-rows: auto;
    max-width: 1168px;
    overflow: hidden;

    @media(max-width: 860px){
        height: 300px;
        display: flex;
        flex-direction: column;
        grid-gap: 5px;
        overflow: hidden;
    }
`;

export const Marketplaces = styled.div`
    width: 100%; 
    height: 100%;
    background: #FFFFFF;
    border: 0.5px solid #E4E4E4;
    box-sizing: border-box;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.05);
    border-radius: 5px;
    padding: 15px;
    display: flex;
    max-width: 1168px;
    overflow: hidden;
    justify-content: space-around;
`;

export const Data51 = styled.div`

    background: #FFFFFF;
    display: block; 
    
`

export const Data41 = styled.div`

    background: #FFFFFF;
    display: block; 
    margin-top: 50px;
    
`