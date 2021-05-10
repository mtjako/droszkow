import styled from "styled-components";
import Link from "next/link";
import {primary} from "../../styles/theme";


const Wrapper = styled.div`
  font-size: 20px;
  cursor: pointer;
  &::first-letter {
    color: ${primary.primary600};
  }
`;

export const Logo = () => (
  <Link href="/">
    <Wrapper>Droszków Online</Wrapper>
  </Link>
);
