import React from 'react'
import { Box } from '../../Box/styles';
import { Header } from '../styles';
import { LittleTitle } from '../../Text/styles';
import Seletor from '../../Selector/index';

const Data4: React.FC = () => {
    return (
        <Box>
            <Header>
                <LittleTitle>Offer</LittleTitle> 
                <Seletor /> 
                <Seletor /> 
            </Header>
        </Box>
    );
}

export default Data4;