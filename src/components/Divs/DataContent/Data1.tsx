import React from 'react'
import { HistBox } from '../../Box/styles';
import { Header } from '../styles';
import { LittleTitle } from '../../Text/styles';
import Seletor from '../../Selector/index';
import AppProvider from '../../../context/Provider';

const Data1: React.FC = () => {
    return (
        <HistBox>
            <AppProvider>
                <Header>
                    <LittleTitle>Histórico de eventos d1</LittleTitle>
                    <Seletor />
                </Header>
            </AppProvider>
        </HistBox>
    );
}

export default Data1;