import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import {margins} from "../styles/theme"

const Wrapper = styled.div`
  width: 100%;
  cursor: pointer;
  border: 2px solid ${({ theme }) => theme.grey100};
  box-shadow: 0px 50px 60px rgb(0 0 0 / 5%);
  border-radius: 6px;
  overflow: hidden;
  transition: all 0.25s linear;
`;

const WrapperImg = styled.div`
  position: relative;
  width: 100%;
  height: 192px;
`;

const WrapperTile = styled.div`
  padding: 24px;
`;

const Avatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: ${margins.margin100};
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

const WrapperMeta = styled.div`
  display: flex;
  padding: 0 24px 24px;
  position: relative;
  bottom: 0;
  div.text {
    width: calc(100% - 48px);
  }
`;

const WrapperText = styled.div`
  height: calc(100% - 192px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ArticleTile = ({ data, dataAuthors }) => {
  const date = `
  ${
    new Date(data.first_published_at).getDate() < 10
      ? "0" + new Date(data.first_published_at).getDate()
      : new Date(data.first_published_at).getDate()
  }.${
    new Date(data.first_published_at).getMonth() + 1 < 10
      ? "0" + (new Date(data.first_published_at).getMonth() + 1)
      : new Date(data.first_published_at).getMonth() + 1
  }.${new Date(data.first_published_at).getFullYear()}`;
  const theAuthor = dataAuthors.find((e) => (e = data.content.author));
  return (
    <Link href={`/${data.full_slug}`}>
      <Wrapper>
        <WrapperImg>
          {data.content.image?.filename ? (
            <Image
              src={data.content.image.filename}
              layout="fill"
              objectFit="cover"
              className="Image"
              alt={data.content.title}
            />
          ) : (
            <p>OBRAZEK TYTUŁOWY</p>
          )}
        </WrapperImg>
        <WrapperText>
          <WrapperTile>
            <p className="hmeta">{data.content.category}</p>
            <h3>{data.content.title}</h3>
          </WrapperTile>
          <WrapperMeta>
            <Avatar>
              <Image
                src={theAuthor.content.img.filename || "/user.svg"}
                width={40}
                height={40}
                className="avatar"
                alt="avatar autora"
              />
            </Avatar>
            <div className="text">
              <p className="meta">{theAuthor.name || "Author"}</p>
              <p className="meta">{date}</p>
            </div>
          </WrapperMeta>
        </WrapperText>
      </Wrapper>
    </Link>
  );
};
