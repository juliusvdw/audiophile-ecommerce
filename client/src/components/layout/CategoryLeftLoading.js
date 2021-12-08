import React from 'react';
import ContentLoader, {Amazon} from 'react-content-loader'

const CategoryLeftLoading = (props) => {
  return (
    <ContentLoader 
    style = {{marginTop:'120px', marginBottom:'300px'}}
    speed={2}
    width={1200}
    height={480}
    viewBox="0 0 1200 460"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="25" y="4" rx="8" ry="8" width="542" height="550" />
  </ContentLoader>
  )
}

export default CategoryLeftLoading;
