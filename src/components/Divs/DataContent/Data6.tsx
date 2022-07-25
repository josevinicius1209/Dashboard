import React from 'react'
import { PlansBox } from '../../Box/styles';
import { Header } from '../styles';
import { LittleTitle, SubTitle } from '../../Text/styles';
import { FaRegSun} from 'react-icons/fa'
import Seletor2 from '../../Selector/index2';
import Search from '../../Search';
import { SearchForm } from '../../Search/Styles';
import Barras from './Barras/index';

const Data6: React.FC = () => {
    return (
        <PlansBox>
            <Header>
                <LittleTitle>grafico 3</LittleTitle>    
            </Header>
            <Barras/>
        </PlansBox>
    );
}

export default Data6;