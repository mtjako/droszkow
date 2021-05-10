import styled from "styled-components";
import {margins} from "../styles/theme"

const Header = styled.h2`
  width: 100%;
  margin-bottom: ${margins.margin200};
`;

export const SectionHeader = ({ text }) => {
  return (
    <Header>{text}</Header>
  );
};
