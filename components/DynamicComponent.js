import SbEditable from "storyblok-react";
import Teaser from "./Teaser";
import { Hero } from "./Hero";
import { Pricing } from "./Pricing";
import { Contact } from "./Contact";
import { ArticlesList } from "./ArticlesList";
import { Schedule } from "./Schedule";
import { Timeline } from "./Timeline/Timeline";
import { Point } from "./Timeline/Point";

const Components = {
  teaser: Teaser,
  hero: Hero,
  pricing: Pricing,
  contact: Contact,
  articleslist: ArticlesList,
  schedule: Schedule,
  timeline: Timeline,
  point: Point,
};

const DynamicComponent = ({ blok,dataList,dataAuthors }) => {
  if (typeof Components[blok.component] !== "undefined") {
    const Component = Components[blok.component];
    return (
      <SbEditable content={blok} dataList={dataList} dataAuthors={dataAuthors}>
        <Component blok={blok} dataList={dataList} dataAuthors={dataAuthors}/>
      </SbEditable>
    );
  }

  return (
    <p>
      The component <strong>{blok.component}</strong> has not been created yet.
    </p>
  );
};

export default DynamicComponent;
