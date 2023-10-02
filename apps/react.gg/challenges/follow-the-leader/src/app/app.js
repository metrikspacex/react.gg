import styled from "styled-components";
import NxWelcome from "./nx-welcome";
const StyledApp = styled.div`
  // Your style here
`;
export function App() {
  return (
    <StyledApp>
      <NxWelcome title="follow-the-leader" />
    </StyledApp>
  );
}
export default App;
