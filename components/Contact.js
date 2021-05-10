import styled from "styled-components";
import { SectionHeader } from "./SectionHeader";
import { ContactCard } from "./ContactCard";
import {margins} from "../styles/theme"

const Wrapper = styled.div`
  max-width: 1024px;
  padding: 24px;
  margin: 0 auto;
`;

const CardGrid = styled.div`
  display: grid;
  grid-gap: ${margins.margin400};
  grid-template-columns: repeat(1, 1fr);
  @media (min-width: 700px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
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
