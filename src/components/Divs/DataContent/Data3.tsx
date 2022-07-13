import React from 'react'
import { Box2 } from '../../Box/styles';
import { Header } from '../styles';
import { LittleTitle, SubTitle } from '../../Text/styles';
import { FaRegSun} from 'react-icons/fa'


const Data3: React.FC = () => {
    return (
        <Box2>
            <Header>
                <LittleTitle>Planos de ação d3</LittleTitle> 
                <FaRegSun size="20px" />
            </Header>
            <SubTitle>status do dia d3</SubTitle>
        </Box2>
    );
}

export default Data3;