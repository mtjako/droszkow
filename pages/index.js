import Storyblok from "../lib/storyblok";
import DynamicComponent from "../components/DynamicComponent";
import useStoryblok from "../lib/storyblok-hook";
import Head from "next/head";

export default function Home({ story, preview, dataList, dataAuthors }) {
  story = useStoryblok(story, preview);
  return (
    <>
      <Head>
        <title>Droszków</title>
        <link rel="icon" href="/favicon.png" />
        <meta property="og:url" content={`https://droszkow.pl`} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Oficjalna strona Droszkowa" />
        <meta property="og:image" content="https://droszkow.pl/heroimg.webp" />
        <meta property="og:description" content="Oficjalna strona Droszkowa" />
        <meta name="description" content="Oficjalna strona Droszkowa" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {story && story.content.body
        ? story.content.body.map((blok) => (
            <DynamicComponent
              blok={blok}
              key={blok._uid}
              dataList={dataList}
              dataAuthors={dataAuthors}
            />
          ))
        : null}
    </>
  );
}

export async function getStaticProps(context) {
  let slug = "home";
  let params = {
    version: "published", // or 'published'
  };
  let paramsDataList = {
    version: "published", // or 'published'
    per_page: 6,
  };

  if (context.preview) {
    params.version = "draft";
    params.cv = Date.now();
  }

  let { data } = await Storyblok.get(`cdn/stories/${slug}`, params);

  let dataList = await Storyblok.get(
    `cdn/stories/?starts_with=post/`,
    paramsDataList
  );
  let dataAuthors = await Storyblok.get(
    `cdn/stories/?starts_with=authors/`,
    params
  );

  return {
    props: {
      story: data ? data.story : false,
      preview: context.preview || false,
      dataList: dataList.data ? dataList.data.stories : false,
      dataAuthors: dataAuthors.data ? dataAuthors.data.stories : false,
    },
    revalidate: 10,
  };
}
