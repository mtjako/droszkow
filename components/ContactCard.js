import styled from "styled-components";
import Image from "next/image";
import {lightTheme} from "../styles/theme";

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: start;
`;

const Header = styled.div``;

const Meta = styled.div`
  margin-top: 8px;
  width: 100%;
  font-weight: 600;
  div {
    display: flex;
    align-items: center;
    p {
      padding: 4px 0;
    }
    img {
      width: 20px;
      height: 20px;
      margin: 0 8px 0 20px;
    }
  }
`;

const Avatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 8px;
  overflow: hidden;
  position: relative;
  &::after{
    position: absolute;
    top: 0;
    left: 0;
    content: '';
    width: 40px;
    height: 40px;
    border-radius: 50%;
    box-shadow: inset 0 0 0 2px ${({ theme }) => theme.grey900 + '44'};
  }
`;

export const ContactCard = ({ card }) => {
  return (
    <Wrapper>
      <Avatar>
        <Image
          src={card.avatar.filename || "/user.svg"}
          width={40}
          height={40}
          alt={card.name}
        />
      </Avatar>
      <Header>
        <p className="hmeta">{card.name}</p>
        <p className="meta">{card.rank}</p>
      </Header>
      <Meta>
        {card.email ? (
          <div>
            <img src="./icon-mail.svg" />
            <p className="meta">{card.email}</p>
          </div>
        ) : null}
        {card.phone ? (
          <div>
            <img src="./icon-phone-ring.svg" />
            <p className="meta">{card.phone}</p>
          </div>
        ) : null}
        {card.phone2 ? (
          <div>
            <img src="./icon-phone-ring.svg" />
            <p className="meta">{card.phone2}</p>
          </div>
        ) : null}
      </Meta>
    </Wrapper>
  );
};
