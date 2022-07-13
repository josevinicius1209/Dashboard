import React from 'react'
import { Box } from '../../Box/styles';
import { Header } from '../styles';
import { LittleTitle } from '../../Text/styles';
import Seletor from '../../Selector/index';
import { SearchForm } from '../../Search/Styles';
import Search from '../../Search';

const Data4: React.FC = () => {
    return (
        <Box>
            <Header>
                <LittleTitle>Inspeções agendadas d4</LittleTitle> 
                <Seletor /> 
            </Header>
            <div />
            <div>
                <SearchForm>
                    <Search>
                        Pesquise d4
                    </Search>
                </SearchForm> 
            </div>
        </Box>
    );
}

export default Data4;