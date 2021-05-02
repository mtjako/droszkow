import styled from "styled-components";
import Image from "next/image";
import { SectionHeader } from "./SectionHeader";

const Wrapper = styled.div`
  max-width: 1024px;
  padding: 24px;
  margin: 0 auto;
  display: grid;
  grid-column-gap: 24px;
  grid-row-gap: 12px;
  grid-template-columns: repeat(1, 1fr);
  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Title = styled.h3`
  padding: 16px 0;
`;

const Description = styled.p`
  opacity: 0.8;
  font-weight: 600;
  text-align: justify;
`;

const PriceList = styled.table`
  width: 100%;
  grid-column: span 1;
  @media (min-width: 600px) {
    grid-column: span 2;
  }
  @media (min-width: 900px) {
    grid-column: span 2;
  }
  border-collapse: collapse;
  align-self: center;
  tr {
    transition: border 0.25s linear 0.25s;
    border-bottom: 4px solid #ccc;
    &:last-of-type {
      border-bottom: none;
    }
    th {
      text-align: center;
      @media (min-width: 800px) {
        text-align: left;
      }
      padding: 4px 6px;
      @media (min-width: 500px) {
        padding: 8px 12px;
      }
      transition: border 0.25s linear 0.25s;
      border-left: 4px solid #ccc;
      &:first-of-type {
        border-left: none;
      }
    }
    td {
      text-align: center;
      @media (min-width: 800px) {
        text-align: left;
      }
      font-weight: bold;
      padding: 12px;
      font-size: 16px;
      transition: border 0.25s linear 0.25s;
      border-left: 4px solid #ccc;

      &:first-of-type {
        padding: 12px 12px 12px 0;
        border-left: none;
      }
      &:nth-child(2),
      &:nth-child(3) {
        opacity: 0.8;
      }
    }
  }
`;

const TextWrap = styled.div`
  width: 100%;
  grid-column: span 1;
  @media (min-width: 600px) {
    grid-column: span 2;
  }
  @media (min-width: 900px) {
    grid-column: span 1;
  }
`;

const ImageWrap = styled.div`
  grid-column: span 1;
  @media (min-width: 600px) {
    grid-column: span 2;
  }
  @media (min-width: 900px) {
    grid-column: span 3;
  }
`;

export const Pricing = ({ blok }) => {
  return (
    <Wrapper>
      <SectionHeader text="Świetlica Wiejska" />
      <ImageWrap>
        <Image
          src={blok.image.filename}
          width={976}
          height={288}
          className="Image"
          alt="świetlica wiejska"
        />
      </ImageWrap>

      <TextWrap>
        <Title>{blok.title}</Title>
        <Description>{blok.description}</Description>
      </TextWrap>
      <PriceList>
        <tr>
          {blok.pricelist.thead.map((item, i) => (
            <th className="hmeta" key={i}>
              {item.value}
            </th>
          ))}
        </tr>
        {blok.pricelist.tbody.map((item, i) => (
          <tr key={i}>
            {item.body.map((item, i) => (
              <th className="meta" key={i}>
                {item.value}
              </th>
            ))}
          </tr>
        ))}
      </PriceList>
    </Wrapper>
  );
};
