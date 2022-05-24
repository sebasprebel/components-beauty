import * as React from 'react'
import { useCssHandles } from 'vtex.css-handles'
interface ContainerSectionProps {
  classes?: string
  title?: string
  content: string
  fileJS: string
  fileCSS: string
}
const CSS_HANDLES = ['containerSection']
const DangetHTML: StorefrontFunctionComponent<ContainerSectionProps> = ({
  classes = '',
  content = '',
  fileJS = '',
  fileCSS = '',
}) => {
  const handles = useCssHandles(CSS_HANDLES)
  const minify = (s: string) => {
    return s
      .replace(/>[\r\n ]+</g, '><')
      .replace(/(<.*?>)|\s+/g, (_: string, $1: string) => $1 || ' ')
      .trim()
  }

  return content ? (
    <>
      <div
        className={`${handles.containerSection} ${classes}`}
        dangerouslySetInnerHTML={{
          __html: minify(content),
        }}
      />
      <script src={`${fileJS}`}></script>
      <link rel="stylesheet" href={`${fileCSS}`} />
    </>
  ) : null
}
DangetHTML.schema = {
  title: 'HTML Content',
  type: 'object',
  properties: {
    content: {
      title: 'HTML Code',
      description: 'HTML from code is risky',
      type: 'string',
      widget: { 'ui:widget': 'textarea' },
    },
    title: {
      title: 'Title section',
      type: 'string',
    },
    classes: {
      title: 'Tachyons Clases',
      type: 'string',
    },
    fileJS: {
      title: 'File JS',
      type: 'string',
      description: 'Archivo JS',
      widget: {
        'ui:widget': 'file',
      }
    },
    fileCSS: {
      title: 'File CSS',
      type: 'string',
      description: 'Archivo CSS',
      widget: {
        'ui:widget': 'file',
      }
    }
  },
}
export default DangetHTML