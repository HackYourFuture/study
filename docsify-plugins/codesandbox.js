/**
 * This plugin embeds a codesandbox instead of linking to it
 * 
 * Usage:
 * 
 * {% hyf-codesandbox src="https://codesandbox.io/s/charming-cdn-57lm0" %}
 */

const codesandboxBlockRegex = new RegExp('{% hyf-codesandbox([^(%})])*%}', 'gm');
const codesandboxLinkRegex = new RegExp('.*src="([^"]*)".*');

window.DocsifyHYFCodeSandboxPlugin = {
    create: () => {
        return function (hook) {
            hook.beforeEach(function (content) {
                const convertedContent = content.replace(codesandboxBlockRegex, (codesandboxBlock) => {
                    const link = codesandboxBlock.match(codesandboxLinkRegex)[1];

                    return `[codesandbox embed](${link} ':include :type=iframe width=100% height=600px')\n[open in new tab](${link})`;
                });

                return convertedContent;
            })
        }
    }
}