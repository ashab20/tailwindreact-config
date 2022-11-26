import React from 'react';
import MetaTags from 'react-meta-tags';


const Meta = ({title,description,content}) => {
  return (
    <MetaTags>
        <title>{title}</title>
        <meta name={description} content={content} />
        <meta property="og:title" content="MyApp" />
        <meta property="og:image" content="path/to/image.jpg" />
  </MetaTags>
  )
}

Meta.defaultProps = {
    title:'Home Page',
    description:'Description',
    content:''
}

export default Meta