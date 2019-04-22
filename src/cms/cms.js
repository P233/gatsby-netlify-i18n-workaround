import CMS from "netlify-cms"

import HomePagePreview from "./preview-templates/HomePagePreview"
import AboutPagePreview from "./preview-templates/AboutPagePreview"
import BlogPagePreview from "./preview-templates/BlogPagePreview"

CMS.registerPreviewTemplate("index-en", HomePagePreview)
CMS.registerPreviewTemplate("index-cn", HomePagePreview)

CMS.registerPreviewTemplate("about-en", AboutPagePreview)
CMS.registerPreviewTemplate("about-cn", AboutPagePreview)

CMS.registerPreviewTemplate("blog-en", BlogPagePreview)
CMS.registerPreviewTemplate("blog-cn", BlogPagePreview)
