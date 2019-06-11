import { configure, addParameters } from '@storybook/react';

addParameters({
  backgrounds: [
    { name: 'woork', value: '#ffffff', default: true },
    { name: 'twitter', value: '#00aced', },
    { name: 'facebook', value: '#3b5998' },
  ],
});


// automatically import all src files ending in *.stories.js
const req = require.context('../src', true, /\.stories\.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
