import styled from "styled-components";
import Image from "next/image";
import { SectionHeader } from "./SectionHeader";

const Wrapper = styled.div`
  max-width: 1024px;
  padding: 24px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  .Image {
    width: 100%;
  }
`;

const Title = styled.p`
  font-size: 24px;
  padding: 16px 0;
  font-weight: bold;
`;

const Description = styled.p`
  opacity: 0.8;
  font-weight: 600;
`;

const PriceList = styled.table`
    width: calc(100% - 364px);
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
      font-weight: bold;
      padding: 8px 12px;
      font-size: 14px;
      text-transform: uppercase;
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
    width: 300px;
    margin-right: 64px;
`;

export const Pricing = ({ blok }) => {
  return (
    <Wrapper>
              <SectionHeader text="Świetlica Wiejska"/>
             
      <Image
        src={blok.image.filename}
        width={976}
        height={288}
        className="Image"
        alt="świetlica wiejska"
      />
      <TextWrap>
        <Title>{blok.title}</Title>
        <Description>{blok.description}</Description>
      </TextWrap>
      <PriceList>
        <tr>
          {blok.pricelist.thead.map((item, i) => (
            <th key={i}>{item.value}</th>
          ))}
        </tr>
        {blok.pricelist.tbody.map((item, i) => (
          <tr key={i}>
            {item.body.map((item, i) => (
              <th key={i}>{item.value}</th>
            ))}
          </tr>
        ))}
      </PriceList>
    </Wrapper>
  );
};
