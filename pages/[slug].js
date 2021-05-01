import Storyblok from "../lib/storyblok";
import useStoryblok from "../lib/storyblok-hook";
import DynamicComponent from "../components/DynamicComponent";
import Head from "next/head";

export default function Home({ story, preview }) {
  story = useStoryblok(story, preview);
  console.log(story);
  return (
    <>
      <Head>
        <title>Droszków - {story.name}</title>
        <link rel="icon" href="/favicon.png" />
        <meta
          property="og:url"
          content={`https://droszkow.pl/${story.full_slug}`}
        />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={story.name} />
        <meta property="og:image" content={'/heroimg.webp'} /> 
        <meta property="og:description" content="Oficjalna strona Droszkowa" />
        <meta name="description" content="Oficjalna strona Droszkowa" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <main>
      {story && story.content.body
          ? story.content.body.map((blok) => (
              <DynamicComponent blok={blok} key={blok._uid} />
            ))
          : null}
      </main>
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

  let { data } = await Storyblok.get(`cdn/stories/${slug}`, params);

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
  let { data } = await Storyblok.get("cdn/links/", params);
  let paths = [];
  Object.keys(data.links).forEach((linkKey) => {
    if (!data.links[linkKey].is_folder) {
      if (data.links[linkKey].slug !== "home") {
        paths.push({ params: { slug: data.links[linkKey].slug } });
      }
    }
  });

  return {
    paths: paths,
    fallback: true,
  };
}