import React from 'react'
import PropTypes from 'prop-types'

type Props = {
  logo: string
  phone: string
  message: string
  width: number
  height: number
}

const WhatsappButton = ({ logo, phone, message, width, height }: Props) => {
  const formattedMessage = message.replace(/ /g, "%20")

  return <>
    <div className="fixed bottom-2 right-2 flex flexColumn z-max">
      <a
        href={`https://web.whatsapp.com/send?phone=${phone}&amp;amp;text=${formattedMessage}`}
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
}

WhatsappButton.propTypes = {
  logo: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  message: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number
}

WhatsappButton.defaultProps = {
  logo: "/arquivos/whatsapp-img1.png",
  phone: "573206734559",
  message: "Hola, me gustaría recibir información.",
  width: 60,
  height: 60
}

WhatsappButton.schema = {
  title: "Botón de WhatsApp",
  type: "object",
  properties: {
    logo: {
      title: "Logo de WhatsApp que se relacione con la marca",
      type: "string",
      widget: {
        "ui:widget": "image-uploader"
      }
    },
    phone: {
      title: "Teléfono",
      description: "Agrega el número de teléfono",
      type: "string"
    },
    message: {
      title: "Mensaje",
      description: "Agrega el mensaje que se verá para tu cliente",
      type: "string",
      widget: {
        "ui:widget": "textarea"
      }
    },
    width: {
      title: "Ancho del botón",
      description: "Ingrese el ancho que tendrá el botón",
      type: "number"
    },
    height: {
      title: "Alto del botón",
      description: "Ingrese la altura que tendrá el botón",
      type: "number"
    }
  }
}

export default WhatsappButton;