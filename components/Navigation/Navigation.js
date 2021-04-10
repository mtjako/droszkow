import styled from "styled-components";
import { Logo } from "./Logo";
import { ModeSwitch } from "./ModeSwitch";

const Nav = styled.nav`
  width: 100%;
  height: 64px;
  line-height: 64px;
  color: #eee;
  font-weight: bold;
  background-color: #000c;
  backdrop-filter: saturate(180%) blur(20px);
  position: sticky;
  top: 0;
  z-index: 10;
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Wrap = styled.div`
  display: flex;
  align-items: center;
`;

export const Navigation = ({ theme, toggleTheme }) => {
  return (
    <Nav>
      <Wrapper>
        <Wrap>
          <Logo />
          <ModeSwitch theme={theme} toggleTheme={toggleTheme} />
        </Wrap>
      </Wrapper>
    </Nav>
  );
};
