import './App.css';
import styled from 'styled-components';
import Header from './Components/Header';
import Body from './Components/Body';
import Footer from './Components/Footer';

function App() {
  return (
    <MainContainer className="app">
      <Header />
      <Body />
      <Footer />
    </MainContainer>
  );
}

export default App;

const MainContainer = styled.div``;
