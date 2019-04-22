import React from "react"
import PropTypes from "prop-types"
import { BlogPostTemplate } from "../../templates/blog-post"

const BlogPostPreview = ({ entry, widgetFor }) => (
  <BlogPostTemplate
    title={entry.getIn(["data", "title"])}
    date={widgetFor("date")}
    content={widgetFor("body")}
  />
)

BlogPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default BlogPostPreview
