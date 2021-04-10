import Storyblok from "../lib/storyblok";
import useStoryblok from "../lib/storyblok-hook";
import DynamicComponent from "../components/DynamicComponent";

export default function Home({ story, preview }) {
  story = useStoryblok(story, preview);
  return (
    <>
      <div>
        <h1>{story ? story.name : "My Site"}</h1>
      </div>
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
    fallback: false,
  };
}