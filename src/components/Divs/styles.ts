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

//x x x x x x x x x x x x x x x x x x x x x x x x x x x x x
export const Principal = styled.div`
    padding-top: 110px;
    display: flex;
    flex-direction: column;
    margin: 30px 30px;
    justify-content: center;
    box-sizing: border-box;
    width: 100%;

    @media(max-width: 860px){
        margin: 0;
        display: flex;
        flex-direction: column;
 
    }
`;

//div que guarda os boxes
export const DataDiv = styled.div`
    height: 100%;
    display: flex;
    justify-content: flex-start;
    grid-gap: 10px;
    flex-wrap: wrap;
    width: 100%;

    @media(max-width: 860px){
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
    }
`;

//div que guarda a coluna direita de boxes:
export const RightDiv = styled.div`
    display: grid;
    grid-template-rows: 100px repeat(3, 220px);
    align-self: center;
    grid-gap: 10px;
    box-sizing: border-box;
    min-width: 600px;

    @media(max-width: 860px){
        margin: 0 20px;
        min-width: auto;
        grid-template-rows: 300px;
    }
`;

//div que guarda os boxes "Inspeções" e "Planos de ação" na coluna esquerda
export const SubRigtDiv = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 10px;
    max-width: 1168px;

    @media(max-width:860px){
        display: flex;
        flex-direction: column;
    }
`;

//div que guarda a coluna direita de boxes
export const LeftDiv = styled.div`
    display: grid;
    grid-template-rows: 300px 475px;
    grid-template-columns: 350px;
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

//uso para os títulos de cada box
export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%
`;