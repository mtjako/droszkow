import styled from "styled-components";
import Image from "next/image";

const Header = styled.h2`
  border-bottom: 4px solid #ccc;
  width: 100%;
  text-transform: uppercase;
  font-size: 22px;
`;

export const SectionHeader = ({ text }) => {
  return (
    <Header>{text}</Header>
  );
};
