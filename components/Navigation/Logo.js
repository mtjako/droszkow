import styled from "styled-components";
import Link from "next/link";

const Wrapper = styled.div`
  font-size: 20px;
  cursor: pointer;
  &::first-letter {
    color: #868f34;
  }
`;

export const Logo = () => (
  <Link href="/">
    <Wrapper>Droszków Online</Wrapper>
  </Link>
);
