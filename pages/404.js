import styled from "styled-components";
import Image from "next/image";

const Wrapper = styled.div`
  max-width: 1024px;
  height: calc(100vh - 292px);
  padding: 24px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Custom404() {
  return (
    <Wrapper>
      <Image src="/404.svg" width={500} height={500} alt="404" />
    </Wrapper>
  );
}
