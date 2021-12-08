import React from "react"
import ContentLoader from "react-content-loader"

const MobileProductLoader = (props) => (
  <ContentLoader 
    speed={2}
    width={388}
    height={400}
    viewBox="0 0 388 400"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="7" y="14" rx="0" ry="0" width="370" height="380" />
  </ContentLoader>
)

export default MobileProductLoader