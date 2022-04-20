import React from 'react'
// import {

//   useSearchPage,
// } from 'vtex.search-page-context/SearchPageContext'
// import { Link } from 'vtex.render-runtime'
// import { useCssHandles } from 'vtex.css-handles'



// const CSS_HANDLES = [
//   'responsiveImageContainer',
//   'responsiveImageLink',
//   'responsiveImage',
// ]

const SearchInfo = () => {
  // const handles = useCssHandles(CSS_HANDLES)
  // const { searchQuery } = useSearchPage()

  return (
    <p></p>
  )
  
}

SearchInfo.schema = {
  title: 'Imagen responsive',
  type: 'object',
  properties: {
    mobileImage: {
      title: 'Imagen para mobile',
      type: 'string',
      widget: {
        'ui:widget': 'image-uploader',
      },
    },
    desktopImage: {
      title: 'Imagen para desktop',
      type: 'string',
      widget: {
        'ui:widget': 'image-uploader',
      },
    },
    link: {
      title: 'Link para la imagen (Opcional)',
      type: 'string',
    },
    external: {
      title: 'Link por fuera de la tienda',
      type: 'boolean',
    },
    alt: {
      title: 'Titulo de la imagen',
      type: 'string',
    },
  },
}

export default SearchInfo
