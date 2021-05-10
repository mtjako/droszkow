import styled from "styled-components";
import {primary} from "../../styles/theme";


const Switch = styled.div`
  margin-left: 24px;
  width: 30px;
  height: 15px;
  transition-delay: 0.25s;
  transition: 0.5s;
  background-color: ${({ theme }) => theme.grey300};
  border-radius: 25px;
  cursor: pointer;
  position: relative;
`;

const SwitchDot = styled.div`
  transition: 0.5s;
  position: absolute;
  transform: translateY(-50%);
  top: 50%;
  left: ${({ theme }) => theme.dot};
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${primary.primary800};
`;

export const ModeSwitch = ({toggleTheme}) => {
  return (
    <Switch onClick={toggleTheme} >
      <SwitchDot />
    </Switch>
  );
};
