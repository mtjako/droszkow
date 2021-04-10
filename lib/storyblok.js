import StoryblokClient from 'storyblok-js-client'
 
const Storyblok = new StoryblokClient({
    accessToken: process.env.MY_SECRET_TOKEN,
    cache: {
      clear: 'auto',
      type: 'memory'
    }
})
 
export default Storyblok