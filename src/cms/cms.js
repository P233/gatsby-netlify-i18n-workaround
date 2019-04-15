import CMS from "netlify-cms"

import HomePagePreview from "./preview-templates/HomePagePreview"
import AboutPagePreview from "./preview-templates/AboutPagePreview"

CMS.registerPreviewTemplate("index-en", HomePagePreview)
CMS.registerPreviewTemplate("index-cn", HomePagePreview)

CMS.registerPreviewTemplate("about-en", AboutPagePreview)
CMS.registerPreviewTemplate("about-cn", AboutPagePreview)
