import styled from 'styled-components';

export const Title = styled.div`
    font-size: 25px;
    font-weight: 500;
    line-height: 26px;
    height: 45px;
    max-width: 1168px;
    align-self: center;

    @media(max-width: 860px){
        text-align: center;
        margin-top: 5%;
    }
`;

export const LittleTitle = styled.div`
    font-weight: 600;
    font-size: 14px;
    line-height: 21px;
    color: #333333;
    padding-right: 5px;
    
`;

export const SubTitle = styled.div`
    width: 175px;
    height: 11px;
    left: 1080px;
    top: 116px;
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 18px;
    color: #B0B0B0;
`;

export const LegendText = styled.div`
    font-family: Poppins;
    font-style: normal;
    font-weight: 300;
    font-size: 13px;
    line-height: 17px;
    color: #161616;
`;


