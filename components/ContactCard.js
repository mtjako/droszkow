import styled from "styled-components";
import Image from "next/image";

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: start;
`;

const Header = styled.div`
  width: calc(100% - 48px);
  font-weight: bold;
  .name {
  }
  .rank {
    opacity: 0.8;
  }
`;

const Meta = styled.div`
  margin-top: 8px;
  width: 100%;
  opacity: 0.64;
  font-weight: 600;
  p {
    display: flex;
    align-items: center;
    padding: 4px 0;
    &::before {
      content: "";
      display: block;
      width: 20px;
      height: 20px;
      margin: 0 8px 0 20px;
      background-repeat: no-repeat;
      background-size: 20px;
    }
    &.phone::before {
      background-image: url("./icon-phone-ring.svg");
    }
    &.email::before {
      background-image: url("./icon-mail.svg");
    }
  }
`;

const Avatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 8px;
  border: 4px solid #222;
  overflow: hidden;
  background-color: #ccc;
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
        <p className="name">{card.name}</p>
        <p className="rank">{card.rank}</p>
      </Header>
      <Meta>
        {card.email ? <p className="email">{card.email}</p> : null}
        {card.phone ? <p className="phone">{card.phone}</p> : null}
        {card.phone2 ? <p className="phone">{card.phone2}</p> : null}
      </Meta>
    </Wrapper>
  );
};
