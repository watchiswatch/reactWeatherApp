import styled from "styled-components";
import Header from "./Components/Header"
import Search from "./Components/Search";

function App() {
  return (
    <StyledBackground>
      <StyledContainer>
        <Header/>
        <Search/>
      </StyledContainer>
    </StyledBackground>
  );
}

export default App;

const StyledBackground = styled.div`
  background-color: #bada55;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledContainer = styled.div`
  background-color: #fafafa;
  height: 70vh;
  width: 70vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  
  border-radius: 18px;
`;