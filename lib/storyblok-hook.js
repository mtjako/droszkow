import { useEffect, useState } from "react";
import Storyblok from "../lib/storyblok";

export default function useStoryblok(originalStory, preview) {
  let [story, setStory] = useState(originalStory);

  function initEventListeners() {
    if (window.storyblok) {
      window.storyblok.init();
      window.storyblok.on(["change", "published"], () => location.reload(true));
      window.storyblok.on("input", (event) => {
        if (event.story.content._uid === story.content._uid) {
          event.story.content = window.storyblok.addComments(
            event.story.content,
            event.story.id
          );
          setStory(event.story);
        }
      });
    }
  }

  function addBridge(callback) {
    const existingScript = document.getElementById("storyblokBridge");
    if (!existingScript) {
      const script = document.createElement("script");
      script.src = `https://app.storyblok.com/f/storyblok-latest.js?t=${Storyblok.accessToken}`;
      script.id = "storyblokBridge";
      document.body.appendChild(script);
      script.onload = () => {
        callback();
      };
    } else {
      callback();
    }
  }

  useEffect(() => {
    if (preview) {
      addBridge(initEventListeners);
    }
  });

  return story;
}
