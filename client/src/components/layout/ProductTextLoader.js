import React from "react"
import ContentLoader from "react-content-loader"

const ProductTextLoader = (props) => (
  <ContentLoader 
    style = {{marginTop:'120px', marginBottom:'300px'}}
    speed={2}
    width={415}
    height={350}
    viewBox="0 0 415 350"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="18" y="24" rx="0" ry="0" width="278" height="62" /> 
    <rect x="20" y="194" rx="0" ry="0" width="462" height="31" /> 
    <rect x="21" y="234" rx="0" ry="0" width="462" height="31" /> 
    <rect x="19" y="112" rx="0" ry="0" width="462" height="31" /> 
    <rect x="19" y="152" rx="0" ry="0" width="462" height="31" /> 
    <rect x="24" y="299" rx="0" ry="0" width="148" height="47" /> 
    <rect x="193" y="299" rx="0" ry="0" width="148" height="47" />
  </ContentLoader>
)

export default ProductTextLoader