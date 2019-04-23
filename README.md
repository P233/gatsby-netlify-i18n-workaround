This is a multilingual workaround for Netlify CMS with Gatsby.

The ideas are:

1. Install [gatsby-plugin-i18n](https://github.com/angeloocana/gatsby-plugin-i18n) to create language routes for Gatsby.
2. Add `langKey` to a page or blog template graphql query to get the language corresponding data.
3. Create Netlify CMS collection fields partials that can be reused by a [script](https://github.com/P233/gatsby-netlify-i18n-workaround/blob/master/static/admin/_config/index.js) to generate collection config entries for each language.


Please feel free to submit a PR to improve this workaround.
