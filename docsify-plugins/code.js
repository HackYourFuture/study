/**
 * This plugin adds a JSTutor link to example code in markdown
 * 
 * For example:
 * 
 * ```javascript
 * const wowString = 'cool stuff'
 * ```
 * 
 * Will generate a link underneath for students to open it up in the jsTutor website
 */

const codeBlockRegex = new RegExp('```js([^(```)])*```', 'gm');

window.DocsifyHYFCodePlugin = {
    create: () => {
        return function (hook) {
            hook.beforeEach(function (content) {
                const convertedContent = content.replace(codeBlockRegex, (codeblock) => {
                    const actualCode = codeblock.substring(6, codeblock.length - 3);

                    return codeblock + `\n[view in jsTutor](http://www.pythontutor.com/visualize.html#code=${encodeURIComponent(actualCode)})`;
                    
                });

                return convertedContent;
            })
        }
    }
}