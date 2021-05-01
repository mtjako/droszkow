import Storyblok from "../../lib/storyblok";
import useStoryblok from "../../lib/storyblok-hook";
import DynamicComponent from "../../components/DynamicComponent";
import styled from "styled-components";
import Image from "next/image";
import Head from "next/head";

const Wrapper = styled.div`
  width: 100%;
  max-width: 1024px;
  margin: 64px auto 0;
  padding: 0 24px;
`;

const PublishedAt = styled.p`
  text-align: center;
  font-weight: 700;
  font-size: 18px;
  opacity: 0.8;
`;

const Title = styled.h1`
  font-size: 44px;
  text-align: center;
  padding: 16px 0 32px;
`;

const WrapperImg = styled.div`
  position: relative;
  width: 100%;
  height: 500px;
  border: 4px solid #222;
  display: flex;
  justify-content: center;
  align-items: center;
  p{
    font-weight: bold;
    font-size: 44px;
  }
`;

const Content = styled.div`
  font-size: 20px;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.5;
  margin-bottom: 64px;
  ul,
  ol {
    padding-left: 24px;
  }
  img {
    width: 100%;
  }
  & > p {
    padding: 16px 0 32px;
  }
  li::marker {
    color: #999;
  }
`;

export default function Home({ story, preview }) {
  story = useStoryblok(story, preview);
  const date = `
  ${
    new Date(story.first_published_at).getDate() < 10
      ? "0" + new Date(story.first_published_at).getDate()
      : new Date(story.first_published_at).getDate()
  }.${
    new Date(story.first_published_at).getMonth() + 1 < 10
      ? "0" + (new Date(story.first_published_at).getMonth() + 1)
      : new Date(story.first_published_at).getMonth() + 1
  }.${new Date(story.first_published_at).getFullYear()}`;
  return (
    <>
      <Head>
        <title>Droszków - {story.content.title}</title>
        <link rel="icon" href="/favicon.png" />
        <meta
          property="og:url"
          content={`https://droszkow.pl/${story.full_slug}`}
        />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={story.content.title} />
        <meta property="og:image" content={story.content.image ? story.content.image.filename : ''} /> 
        <meta property="og:description" content="Oficjalna strona Droszkowa" />
        <meta name="description" content="Oficjalna strona Droszkowa" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Wrapper>
        <PublishedAt>{story.first_published_at ? date : "DATA"}</PublishedAt>
        <Title>{story.content.title || 'TYTUŁ'}</Title>
        <WrapperImg>
          {story.content.image?.filename ?
          <Image
            src={story.content.image.filename}
            layout="fill"
            objectFit="cover"
          />:
          <p>OBRAZEK TYTUŁOWY</p>}
        </WrapperImg>
        <Content
          dangerouslySetInnerHTML={{
            __html: story.content.long_text ? Storyblok.richTextResolver.render(story.content.long_text) : '<p>Treść posta...</p>',
          }}
        />
      </Wrapper>
    </>
  );
}

export async function getStaticProps(context) {
  let slug = context.params.slug;
  let params = {
    version: "published", // or 'published'
  };

  if (context.preview) {
    params.version = "draft";
    params.cv = Date.now();
  }

  let { data } = await Storyblok.get(`cdn/stories/post/${slug}`, params);

  return {
    props: {
      story: data ? data.story : false,
      preview: context.preview || false,
    },
    revalidate: 10,
  };
}

export async function getStaticPaths() {
  let params = {
    version: "published", // or 'published'
  };
  let { data } = await Storyblok.get("cdn/links/?starts_with=post/", params);
  let paths = [];
  Object.keys(data.links).forEach((linkKey) => {
    if (!data.links[linkKey].is_folder) {
      if (data.links[linkKey].slug !== "home") {
        paths.push({ params: { slug: data.links[linkKey].slug.substring(5) } });
      }
    }
  });

  return {
    paths: paths,
    fallback: false,
  };
}
