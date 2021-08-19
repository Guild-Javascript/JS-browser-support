/*
 // If using a project which used packages with unknown browser support/polyfills you could
 // use the following which will check the browserlist in package.json and download all
 // polyfills required for that declared browser support
 import 'core-js/stable';
 import 'regenerator-runtime/runtime';
*/

const button = document.querySelector('button');
const textParagraph = document.querySelector('p');

button.addEventListener('click', async () => {
  try {
    const text = textParagraph.textContent;
    const promise = new Promise();
    console.log(promise);
    if (navigator.clipboard) {
      const result = await navigator.clipboard.writeText(text);
      console.log(result);
    } else {
      alert('Feature not available, please copy manually!');
    }
  } catch (err) {
    console.log(err);
  }

  // navigator.clipboard.writeText(text).then(result => {
  //   console.log(result);
  // }).catch(err => {
  //   console.log(err);
  // });
  // do something...
});