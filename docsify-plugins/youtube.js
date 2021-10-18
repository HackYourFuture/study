/**
 * This plugin embeds a YouTube video instead of linking to it
 *
 * Usage:
 *
 * {% hyf-youtube src="https://www.youtube.com/watch?v=oHg5SJYRHA0" %}
 */

const youtubeBlockRegex = new RegExp("{% hyf-youtube([^(%})])*%}", "gm");
const youtubeLinkRegex = new RegExp('.*src="[^=]*=([^"]*)".*');

window.DocsifyHYFYoutubePlugin = {
  create: () => {
    return function (hook) {
      hook.beforeEach(function (content) {
        const convertedContent = content.replace(
          youtubeBlockRegex,
          (youtubeBlock) => {
            const link = youtubeBlock.match(youtubeLinkRegex)[1];

            return `[youtube link](https://www.youtube.com/embed/${link} ':include :type=iframe allow=fullscreen; width=100% height=400px')`;
          }
        );

        return convertedContent;
      });
    };
  },
};
