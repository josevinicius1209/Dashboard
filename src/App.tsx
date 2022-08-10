import GlobalStyle from "./styles/global";
import Sidebar from "./components/Sidebar/index";
import { Container } from "./components/Divs/styles";
import MainDiv from "./components/Divs/Main";
import AppProvider from "./context/Provider";
function App() {
  return (
    <AppProvider>
      <Container>
        <GlobalStyle />
        <Sidebar />
        <MainDiv />
      </Container>
    </AppProvider>
  );
}

export default App;
