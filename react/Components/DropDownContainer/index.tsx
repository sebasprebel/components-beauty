import React, { useState } from 'react'
import { useCssHandles } from 'vtex.css-handles'

const CSS_HANDLES = [
  'dropDown__container',
  'dropDown__title',
  'dropDown__content',
  'dropDown__button',
]

const DropDownContainer = ({ title, content }: any) => {
  const handles = useCssHandles(CSS_HANDLES)

  const [showMore, setShowMore] = useState<boolean>(false)
  const numberOfWordsBase = 15

  const numberOfWordsContent = content?.split(' ')?.length
  const handleSetShowMore = () => {
    setShowMore(!showMore)
  }

  const comparison = numberOfWordsContent < numberOfWordsBase

  return (
    <div>
      <div className={`${handles.dropDown__container}`}>
        <h3 className={`${handles.dropDown__title}`}>{title}</h3>
        <p
          className={`${handles.dropDown__content}`}
          style={{
            height: `${comparison ? 'auto' : showMore ? 'auto' : '15px'}`,
          }}
        >
          {content}
        </p>
      </div>
      <button
        onClick={handleSetShowMore}
        className={`${handles.dropDown__button} bn bg-transparent`}
        style={{ display: `${comparison ? 'none' : 'block'}` }}
      >
        {showMore ? 'Ver menos ▲' : 'Ver más ▼'}
      </button>
    </div>
  )
}

DropDownContainer.schema = {
  title: 'Contenedor despleglable',
  type: 'object',
  properties: {
    title: {
      title: 'Título',
      type: 'string',
    },
    content: {
      title: 'Contenido',
      type: 'string',
    },
  },
}

export default DropDownContainer
