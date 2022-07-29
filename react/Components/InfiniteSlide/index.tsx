import React from 'react'
import { useCssHandles } from 'vtex.css-handles'
import './styles.css'

export type InfiniteSlideProps = {
  text: string
  textColor: string
  backgroundColor: string
}

const CSS_HANDLES = [
  'infiniteSlide__container',
  'infiniteSlide__slide',
  'infiniteSlide__text',
]

const InfiniteSlide = ({
  text = 'LA MAGIA DE SER TU MISM@   ♥',
  textColor = '#FFF',
  backgroundColor = '#FFA9BE',
}: InfiniteSlideProps) => {
  const handles = useCssHandles(CSS_HANDLES)

  return (
    <div
      className={`${handles.infiniteSlide__container}`}
      style={{ backgroundColor: `${backgroundColor}` }}
    >
      <div className={`${handles.infiniteSlide__slide}`}>
        <p
          className={`${handles.infiniteSlide__text}`}
          style={{ color: `${textColor}` }}
        >
          {text}
        </p>
        <p
          className={`${handles.infiniteSlide__text}`}
          style={{ color: `${textColor}` }}
        >
          {text}
        </p>
        <p
          className={`${handles.infiniteSlide__text}`}
          style={{ color: `${textColor}` }}
        >
          {text}
        </p>
        <p
          className={`${handles.infiniteSlide__text}`}
          style={{ color: `${textColor}` }}
        >
          {text}
        </p>
        <p
          className={`${handles.infiniteSlide__text}`}
          style={{ color: `${textColor}` }}
        >
          {text}
        </p>
        <p
          className={`${handles.infiniteSlide__text}`}
          style={{ color: `${textColor}` }}
        >
          {text}
        </p>
        <p
          className={`${handles.infiniteSlide__text}`}
          style={{ color: `${textColor}` }}
        >
          {text}
        </p>
        <p
          className={`${handles.infiniteSlide__text}`}
          style={{ color: `${textColor}` }}
        >
          {text}
        </p>
      </div>
    </div>
  )
}

InfiniteSlide.schema = {
  title: 'Slide infinito automático',
  type: 'object',
  properties: {
    text: {
      title: 'Texto',
      description: 'Texto que aparecerá en el slide',
      type: 'string',
    },
    textColor: {
      title: 'Text color',
      description: 'Color del texto',
      type: 'string',
      widget: {
        'ui:widget': 'color',
      },
    },
    backgroundColor: {
      title: 'Background color',
      description: 'Color de fondo del slide',
      type: 'string',
      widget: {
        'ui:widget': 'color',
      },
    },
  },
}

export default InfiniteSlide
