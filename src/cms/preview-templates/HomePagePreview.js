import React from "react"
import PropTypes from "prop-types"
import { HomePageTemplate } from "../../templates/home-page"

const HomePagePreview = ({ entry }) => {
  const data = entry.getIn(["data"]).toJS()

  if (data) {
    return (
      <HomePageTemplate
        heading={data.heading}
        redirectButtonText={data.redirectButtonText}
        langKey={data.langKey}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

HomePagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
}

export default HomePagePreview
