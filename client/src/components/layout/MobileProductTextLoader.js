import React from "react"
import ContentLoader from "react-content-loader"

const MobileProductTextLoader = (props) => (
  <ContentLoader 
   style = {{marginTop:'50px'}}
    speed={2}
    width={388}
    height={300}
    viewBox="0 0 388 300"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
      <rect x="3" y="4" rx="0" ry="0" width="220" height="22" /> 
    <rect x="1" y="44" rx="0" ry="0" width="356" height="37" /> 
    <rect x="7" y="103" rx="0" ry="0" width="319" height="14" /> 
    <rect x="7" y="130" rx="0" ry="0" width="315" height="14" /> 
    <rect x="8" y="184" rx="0" ry="0" width="313" height="14" /> 
    <rect x="8" y="210" rx="0" ry="0" width="319" height="14" /> 
    <rect x="7" y="157" rx="0" ry="0" width="315" height="14" /> 
    <rect x="8" y="247" rx="0" ry="0" width="136" height="40" />
  </ContentLoader>
)

export default MobileProductTextLoader