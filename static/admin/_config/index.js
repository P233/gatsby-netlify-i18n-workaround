const languageList = ["en", "cn"]

const generatePageConfig = (fileDirectory, label, name, fields) => {
  return languageList.map(langKey => ({
    file: `${fileDirectory}/index.${langKey}.md`,
    label: `${label} (${langKey.toUpperCase()})`,
    name: `${name}-${langKey}`,
    fields,
  }))
}

const generateBlogConfig = () => {
  return languageList.map(langKey => ({
    name: `blog-${langKey}`,
    label: `Blog (${langKey.toUpperCase()})`,
    folder: "src/pages/blog/",
    create: true,
    extension: `${langKey}.md`,
    format: "frontmatter",
    fields: require("./blog-fields"),
  }))
}

const configOutput = {
  backend: {
    name: "test-repo",
  },
  media_folder: "static/assets",
  public_folder: "assets",
  collections: [
    ...generateBlogConfig(),
    {
      name: "pages",
      label: "Pages",
      files: [
        ...generatePageConfig(
          "src/pages",
          "Home Page",
          "index",
          require("./home-page-fields")
        ),
        ...generatePageConfig(
          "src/pages/about",
          "About Page",
          "about",
          require("./about-page-fields")
        ),
      ],
    },
  ],
}

require("fs").writeFile(
  "static/admin/config.yml",
  JSON.stringify(configOutput, null, 2),
  err => {
    if (err) throw err
    console.log("Successfully generated the Netlify config.yml file.")
  }
)
