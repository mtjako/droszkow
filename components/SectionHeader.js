import styled from "styled-components";
import Image from "next/image";

const Header = styled.h2`
  width: 100%;
`;

export const SectionHeader = ({ text }) => {
  return (
    <Header>{text}</Header>
  );
};
