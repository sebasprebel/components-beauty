import React, { useRef } from 'react'
import { Link } from 'vtex.render-runtime'
import { useCssHandles } from 'vtex.css-handles'

type ResponsiveImageProps = {
  mobileImage: string
  desktopImage: string
  breakpoint: string
  link: string
  external: boolean
  alt: string
  maxSize?: string
  elementSizes?: {
    mobile: Size
    desktop: Size
  }
}

type Size = {
  height: string
  width: string
}

const CSS_HANDLES = [
  'responsiveImageContainer',
  'responsiveImageLink',
  'responsiveImage',
]

const ResponsiveImage = ({
  mobileImage,
  desktopImage,
  breakpoint = '768px',
  maxSize = '1420',
  link,
  external,
  alt = '',
  elementSizes = {
    mobile: {
      height: '450px',
      width: '350px',
    },
    desktop: {
      height: '450px',
      width: '1024px',
    },
  },
}: ResponsiveImageProps) => {
  const handles = useCssHandles(CSS_HANDLES)
  const ref = useRef<HTMLDivElement>(null)

  const getWidth = React.useMemo(() => {
    return (
      Math.round(ref.current?.clientWidth ?? 0) ??
      breakpoint.replace(/px|rem|pt/, '')
    )
  }, [ref, breakpoint])

  const PictureElement = () => {
    return (
      <picture className="db">
        <source
          media={`(min-width: ${breakpoint})`}
          srcSet={`${desktopImage}?width=${maxSize}&aspect=true`}
          {...elementSizes?.mobile}
        />
        <img
          srcSet={`${mobileImage}?width=${getWidth}&aspect=true`}
          alt={alt}
          className={`${handles.responsiveImage} db w-100 h-auto`}
          {...elementSizes?.desktop}
        />
      </picture>
    )
  }

  return (
    <div className={handles.responsiveImageContainer} ref={ref}>
      {link ? (
        <Link
          {...(external ? { target: '_blank' } : null)}
          to={link}
          className={`${handles.responsiveImageLink} db`}
          rel="noreferrer"
        >
          <PictureElement />
        </Link>
      ) : (
        <PictureElement />
      )}
    </div>
  )
}

ResponsiveImage.schema = {
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

export default ResponsiveImage
