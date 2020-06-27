# Testing Gatsby + lingui@next

As of the end of June 2020, the [documentation for lingui@next](https://js-lingui-git-next.lingui-js.now.sh/index.html) is not updated to reflect the changes in the latest v3.0.0-x. So, this is my attempt to figure out how to make it work with [Gatsby's hello-world starter](https://github.com/gatsbyjs/gatsby-starter-hello-world) for future reference.   

## Lingui setup  

Install `@lingui/cli`, `@lingui/macro` and Babel core packages as a development dependencies and `@lingui/react` as a runtime dependency. (Here, I'm using the `@next` for `v3.0.0-x` ).

```bash
yarn add -D @lingui/cli@next @lingui/macro@next @babel/core
yarn add @lingui/react@next
```

Add lingui configuration to `package.json`:  
```json
{
  "lingui": {
    "catalogs": [
      {
        "path": "src/locales/{locale}/messages",
        "include": [
          "src/"
        ],
        "exclude": [
          "**/node_modules/**"
        ]
      }
    ],
    "extractBabelOptions": {
      "presets": [
        "babel-preset-gatsby"
      ]
    },
    "format": "po",
    "locales": [
      "en",
      "es"
    ],
    "sourceLocale": "en"
  }
}
```  

Create `babelrc.json` in the project root directory with the following contents to facilitate lingui's macros:  
```json
{
  "plugins": ["macros"]
}
```