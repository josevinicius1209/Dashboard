import React from 'react'
import GlobalStyle from './styles/global';
import  Sidebar  from './components/Sidebar/index';
import { Container, Header } from './components/Divs/styles';
import MainDiv from './components/Divs/Main';
import AppProvider from './context/Provider';
import { Topbar } from './components/Topbar/Topbar';

function App() {
  return (
    <AppProvider>
      <Container>
        <GlobalStyle />
        <Sidebar />
        <Topbar />
        <MainDiv/>
      </Container>
    </AppProvider>
    
  );
}

export default App;
