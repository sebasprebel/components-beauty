import React from 'react'
import PropTypes from 'prop-types'
import { useCssHandles } from 'vtex.css-handles'
import './styles.css'

type Props = {
  logo: string
  phone: string
  message: string
  width: number
  height: number
}

const CSS_HANDLES = ['wpp-btn__container']

const WhatsappButton = ({ logo, phone, message, width, height }: Props) => {
  const formattedMessage = message.replace(/ /g, '%20')
  const handles = useCssHandles(CSS_HANDLES)

  return (
    <>
      <div className={`${handles['wpp-btn__container']}`}>
        <a
          href={`https://api.whatsapp.com/send?phone=${phone}&text=${formattedMessage}`}
          target="_blank"
          rel="noreferrer noopener"
        >
          <img
            src={logo}
            width={width}
            height={height}
            alt="Logo de WhatsApp"
          />
        </a>
      </div>
    </>
  )
}

WhatsappButton.propTypes = {
  logo: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  message: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
}

WhatsappButton.defaultProps = {
  logo: '/arquivos/whatsapp-img1.png',
  phone: '573206734559',
  message: 'Hola, me gustaría recibir información.',
  width: 55,
  height: 55,
}

WhatsappButton.schema = {
  title: 'Botón de WhatsApp',
  type: 'object',
  properties: {
    logo: {
      title: 'Logo de WhatsApp que se relacione con la marca',
      type: 'string',
      widget: {
        'ui:widget': 'image-uploader',
      },
    },
    phone: {
      title: 'Teléfono',
      description: 'Agrega el número de teléfono',
      type: 'string',
    },
    message: {
      title: 'Mensaje',
      description: 'Agrega el mensaje que se verá para tu cliente',
      type: 'string',
      widget: {
        'ui:widget': 'textarea',
      },
    },
    width: {
      title: 'Ancho del botón',
      description: 'Ingrese el ancho que tendrá el botón',
      type: 'number',
    },
    height: {
      title: 'Alto del botón',
      description: 'Ingrese la altura que tendrá el botón',
      type: 'number',
    },
  },
}

export default WhatsappButton
