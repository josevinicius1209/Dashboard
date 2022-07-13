import React from 'react'
import { Box2Solo } from '../../Box/styles';
import { Header } from '../styles';
import { LittleTitle, SubTitle } from '../../Text/styles';
import { FaRegSun} from 'react-icons/fa'



const Data5: React.FC = () => {
    return (
        <Box2Solo>
            <Header>
                <LittleTitle>Data 5</LittleTitle>    
                <FaRegSun size="20px" />
            </Header>
            <SubTitle>visão geral D5</SubTitle>
        </Box2Solo>
    );
}

export default Data5;