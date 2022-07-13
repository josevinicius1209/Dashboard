import React from 'react'
import { Box2 } from '../../Box/styles';
import { Header } from '../styles';
import { LittleTitle, SubTitle } from '../../Text/styles';
import { FaRegSun} from 'react-icons/fa'


const Data2: React.FC = () => {
    return (
        <Box2>
            <Header>
                <LittleTitle>Inspeções d2</LittleTitle>  
                <FaRegSun size="20px" />
            </Header>
            <SubTitle>status do dia d2</SubTitle>   
        </Box2>
    );
}

export default Data2;