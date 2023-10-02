import styled from "styled-components";
import NxWelcome from "./nx-welcome";
const StyledApp = styled.div`
  // Your style here
`;
export function App() {
  return (
    <StyledApp>
      <NxWelcome title="children-props" />
    </StyledApp>
  );
}
export default App;
