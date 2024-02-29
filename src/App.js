import './App.css';
import styled from 'styled-components';
import Header from './Components/Header';

function App() {
  return (
    <MainContainer className="app">
      <Header />
    </MainContainer>
  );
}

export default App;

const MainContainer = styled.div``;
