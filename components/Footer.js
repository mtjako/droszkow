import styled from "styled-components";

const Wrapper = styled.footer`
  width: 100%;
  height: 64px;
  background-color: #000c;
  color: #fff;
  line-height: 64px;
`;

const InsideWrapper = styled.div`
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  justify-content: space-between;
  &>div{
    display:flex;
  }
`;

const Overlay = styled.div`
  background-image: url("/houses-bottom.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position-y: 4px;
  width: 100%;
  height: 100px;
  max-width: 976px;
  margin: 64px auto 0;
`;

const Copyright = styled.p`
  font-weight: bold;
`;

const SocialBtn = styled.a`
  display: block;
  border: none;
  padding: none;
  width: 64px;
  height: 64px;
  background-color: transparent;
  background-image: url("${({ icon }) => "/" + icon + ".svg"}");
  background-size: 24px;
  background-position: center;
  background-repeat: no-repeat;
  color: transparent;
  overflow: hidden;

  &:focus {
    border: 1px solid #fff;
  }
`;

export const Footer = () => {
  return (
    <>
      <Overlay />
      <Wrapper>
        <InsideWrapper>
        <Copyright>&copy; {new Date().getFullYear()} Droszków Online</Copyright>
        <div>
        <SocialBtn
            icon="facebook"
            href="https://www.facebook.com/DroszkowOnline"
            target="_blank"
            rel="noopener noreferrer"
          >
            facebook
          </SocialBtn>
        <SocialBtn
            icon="youtube"
            href="https://www.youtube.com/channel/UCee1SDn405CDuhJbnGmzGkA"
            target="_blank"
            rel="noopener noreferrer"
          >
            youtube
          </SocialBtn>

        </div>
        </InsideWrapper>
      </Wrapper>
    </>
  );
};
