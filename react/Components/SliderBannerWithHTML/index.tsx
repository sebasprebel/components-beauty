import React from 'react'
import { SliderLayout } from 'vtex.slider-layout'
import { useCssHandles } from 'vtex.css-handles'

import ResponsiveImage from '../ResponsiveImage'
import DangerHTML from '../DangerHTML'

const CSS_HANDLES = ['banner-button1', 'banner-button2', 'banner-button']

const SliderBannerWithHTML = ({ items, sliderProps, classes }: any) => {
  const handles = useCssHandles(CSS_HANDLES)

  return items ? (
    <section className={`${handles.highlightContent} ${classes || ''}`}>
      <SliderLayout {...sliderProps}>
        {items.map((item: any, index: any) => (
          <div key={`banner_${index}`} className="relative">
            <DangerHTML
              content={item?.content}
              fileJS={item?.fileJS}
              fileCSS={item?.fileCSS}
            />
            <ResponsiveImage
              desktopImage={item.desktopImage}
              mobileImage={item.mobileImage}
              link={item.link}
              external={item.external}
              breakpoint="768px"
              alt="Banner principal"
            />
          </div>
        ))}
      </SliderLayout>
    </section>
  ) : null
}

SliderBannerWithHTML.schema = {
  title: 'Slider banner con botones',
  type: 'object',
  properties: {
    items: {
      title: 'Imágenes',
      type: 'array',
      items: {
        type: 'object',
        properties: {
          __editorItemTitle: {
            title: 'Nombre del componente',
            type: 'string',
          },
          desktopImage: {
            title: 'Imagen desktop',
            type: 'string',
            widget: {
              'ui:widget': 'image-uploader',
            },
          },
          mobileImage: {
            title: 'Imagen mobile',
            type: 'string',
            widget: {
              'ui:widget': 'image-uploader',
            },
          },
          link: {
            title: 'Link del banner',
            type: 'string',
          },
          content: {
            title: 'HTML Code',
            description: 'HTML from code is risky',
            type: 'string',
            widget: { 'ui:widget': 'textarea' },
          },
          fileJS: {
            title: 'File JS',
            type: 'string',
            description: 'Archivo JS',
            widget: {
              'ui:widget': 'file',
            },
          },
          fileCSS: {
            title: 'File CSS',
            type: 'string',
            description: 'Archivo CSS',
            widget: {
              'ui:widget': 'file',
            },
          },
        },
      },
    },
  },
}

export default SliderBannerWithHTML
