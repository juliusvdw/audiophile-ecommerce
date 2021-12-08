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
    <rect x="26" y="25" rx="0" ry="0" width="278" height="62" /> 
    <rect x="26" y="226" rx="0" ry="0" width="215" height="20" /> 
    <rect x="26" y="299" rx="0" ry="0" width="149" height="47" /> 
    <rect x="26" y="193" rx="0" ry="0" width="462" height="20" /> 
    <rect x="26" y="158" rx="0" ry="0" width="462" height="20" /> 
    <rect x="26" y="124" rx="0" ry="0" width="462" height="20" /> 
    <rect x="26" y="267" rx="0" ry="0" width="68" height="13" />
  </ContentLoader>
)

export default ProductTextLoader