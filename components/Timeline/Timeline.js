import styled from "styled-components";
import { Point } from "./Point";

const Wrapper = styled.ul`
  max-width: 1024px;
  padding: 24px;
  margin: 0 auto;
  h2{
      margin-bottom: 16px;
  }
`;

export const Timeline = ({blok}) => {
    console.log('Timeline: ', blok);
  return (
    <Wrapper>
        <h2>{blok.header}</h2>
        {blok.points.map(item=><Point data={item}/>)}
    </Wrapper>
  );
};
