import styled from "styled-components";
import Image from "next/image";
import {lightTheme} from "../styles/theme";

const Wrapper = styled.div`
  position: relative;
  margin-top: -64px;
  width: 100%;
  height: 100vh;
  @media (min-width: 550px) {
    height: 500px;
  }
`;

const HeaderWrapper = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
`;

const Header = styled.h1`
  width: 100%;
  display: block;
  max-width: 1024px;
  padding: 24px;
  margin: 0 auto;
  color: ${lightTheme.grey050};
`;

const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 60%,
      rgba(0, 0, 0, 0.75) 100%
    );
`;

export const Hero = ({ blok }) => {
  return (
    <Wrapper>
      <Image src={blok.Image.filename} layout="fill" objectFit="cover" className="Image" alt="panorama wsi"/>
      <Overlay/>
      <HeaderWrapper>
        <Header>{blok.Text}</Header>
      </HeaderWrapper>
    </Wrapper>
  );
};
