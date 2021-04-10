import Storyblok from "../lib/storyblok";
import DynamicComponent from "../components/DynamicComponent";
import useStoryblok from "../lib/storyblok-hook";


export default function Home({ story, preview,dataList,dataAuthors }) {
  story = useStoryblok(story, preview);
  return (
    <>
      {story && story.content.body
        ? story.content.body.map((blok) => (
            <DynamicComponent blok={blok} key={blok._uid} dataList={dataList} dataAuthors={dataAuthors}/>
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

  if (context.preview) {
    params.version = "draft";
    params.cv = Date.now();
  }
  
  let { data } = await Storyblok.get(`cdn/stories/${slug}`, params);
  
  let dataList  = await Storyblok.get(`cdn/stories/?starts_with=post/`, params);
  let dataAuthors  = await Storyblok.get(`cdn/stories/?starts_with=authors/`, params);

  return {
    props: {
      story: data ? data.story : false,
      preview: context.preview || false,
      dataList: dataList.data ? dataList.data.stories : false,
      dataAuthors: dataAuthors.data ? dataAuthors.data.stories : false
    },
    revalidate: 10,
  };
}
