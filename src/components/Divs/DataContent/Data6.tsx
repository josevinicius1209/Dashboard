import React from 'react'
import { PlansBox } from '../../Box/styles';
import { Header } from '../styles';
import { LittleTitle, SubTitle } from '../../Text/styles';
import { FaRegSun} from 'react-icons/fa'
import Seletor2 from '../../Selector/index2';
import Search from '../../Search';
import { SearchForm } from '../../Search/Styles';

const Data6: React.FC = () => {
    return (
        <PlansBox>
            <Header>
                <LittleTitle>Planos de ação d6</LittleTitle>    
                <FaRegSun size="20px" />
            </Header>
            <SubTitle>atualizações d6</SubTitle>
            <div>
                <SearchForm>
                    <Search>Pesquise d6</Search>
                </SearchForm>
                <Seletor2 />
            </div>
        </PlansBox>
    );
}

export default Data6;