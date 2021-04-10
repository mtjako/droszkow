import styled from "styled-components";
import Image from "next/image";
import { SectionHeader } from "./SectionHeader";
import { ArticleTile } from "./ArticleTile";

const Wrapper = styled.div`
  max-width: 1024px;
  padding: 24px;
  margin: 0 auto;
`;

const ArticlesGrid = styled.div`
  margin-top: 24px;
  display: grid;
  grid-gap: 24px;
  grid-template-columns: repeat(1, 1fr);
  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const ArticlesList = ({dataList,dataAuthors}) => {
  const data = dataList.sort((a,b)=>Date.parse(b.first_published_at)-Date.parse(a.first_published_at))
  return (
    <Wrapper>
      <SectionHeader text="Aktualności" />
      {/* <ArticlesGrid>
        {data.map(article=><ArticleTile key={article.id} data={article} dataAuthors={dataAuthors}/>)}
      </ArticlesGrid> */}
    </Wrapper>
  );
};
