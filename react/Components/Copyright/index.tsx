import React from 'react'
import { useCssHandles } from 'vtex.css-handles'
import './styles.css'

export type CopyrightProps = {
  text: string
}

const CSS_HANDLES = ['copyright__text']

const Copyright = ({
  text = 'Beautyholics Derechos reservados',
}: CopyrightProps) => {
  const handles = useCssHandles(CSS_HANDLES)

  const date = new Date()
  const actualYear = date.getFullYear()

  return (
    <p className={`${handles.copyright__text}`}>
      {text} {actualYear}
    </p>
  )
}

Copyright.schema = {
  title: 'Copyright custom',
  type: 'object',
  properties: {
    text: {
      title: 'Texto',
      description: 'Texto que aparecerá en el copyright',
      type: 'string',
    },
  },
}

export default Copyright
