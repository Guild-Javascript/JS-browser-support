const button = document.querySelector('button');
const textParagraph = document.querySelector('p');

button.addEventListener('click', async () => {
  try {
    const text = textParagraph.textContent;
    console.log(text);
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