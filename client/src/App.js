import styled from 'styled-components';
import Menu from './components/Menu';
import Navbar from './components/Navbar';

const Container = styled.div`
   display: flex;
   background-color: #0f0f0f;
   height: 100vh;
   color: #f1f1f1;
`;

const Main = styled.div`
  flex: 7;
`;

const Wrapper = styled.div``;

function App() {
  return (
    <Container>
       <Menu/>
       <Main>
          <Navbar/>
          <Wrapper>
          </Wrapper>
       </Main>
    </Container>
  );
}

export default App;
