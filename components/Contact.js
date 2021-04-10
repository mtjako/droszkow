import styled from "styled-components";
import Image from "next/image";
import { SectionHeader } from "./SectionHeader";
import { ContactCard } from "./ContactCard";

const Wrapper = styled.div`
  max-width: 1024px;
  padding: 24px;
  margin: 0 auto;
`;

const CardGrid = styled.div`
  display: grid;
  grid-gap: 24px;
  margin-top: 24px;
  grid-template-columns: repeat(1, 1fr);
  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 1050px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const Contact = ({ blok }) => {
  return (
    <Wrapper>
      <SectionHeader text="Kontakt" />
      <CardGrid>
        {blok.card.map((card) => (
          <ContactCard key={card._uid} card={card} />
        ))}
      </CardGrid>
    </Wrapper>
  );
};
