/**
 * This plugin embeds a codepen instead of linking to it
 * 
 * Usage:
 * 
 * {% hyf-codepen src="https://codepen.io/s/charming-cdn-57lm0" %}
 */

const codepenBlockRegex = new RegExp('{% hyf-codepen([^(%})])*%}', 'gm');
const codepenLinkRegex = new RegExp('.*src="([^"]*)".*');

window.DocsifyHYFCodepenPlugin = {
    create: () => {
        return function (hook) {
            hook.beforeEach(function (content) {
                const convertedContent = content.replace(codepenBlockRegex, (codepenBlock) => {
                    const link = codepenBlock.match(codepenLinkRegex)[1];

                    return `[codepen embed](${link} ':include :type=iframe width=100% height=400px')\n[open in new tab](${link})`;
                });

                return convertedContent;
            })
        }
    }
}