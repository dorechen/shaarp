Woork's UI Components library, made with React
===

This is just the beginning, check back later

Try it:
`yarn add @woorkio/shaarp`

Development
==

Needs a global install of @pika/pack: `yarn global add @pika/pack`

Then build: `pack build`

## To Manually Publish to NPM:
- up the version with `yarn version`
- push to Github `git push`
- run pika pack, `pack build`
- go into the built folder, `cd pkg/`
- run `npm publish` 

## To Build Storybook:
- `yarn build:story`
- commit and push to Github

Tools under consideration:
==

- Pika's Pack (https://github.com/pikapkg/pack)
- Commitizen http://commitizen.github.io/cz-cli/
- Semantic release https://github.com/semantic-release/semantic-release/blob/master/docs/usage/getting-started.md#getting-started

