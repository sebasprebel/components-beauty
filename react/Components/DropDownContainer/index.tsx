import React, {useState} from 'react'
import { useCssHandles } from 'vtex.css-handles'

type DropDownContainerProps = {
  title: string
  content: string
  children: React.ReactNode
}

const CSS_HANDLES = [
  'dropDown__container',
  'dropDown__title',
  'dropDown__content',
  'dropDown__button',
]

const DropDownContainer = ({

}: DropDownContainerProps) => {
  const handles = useCssHandles(CSS_HANDLES)
  const {dropDown__container,dropDown__title,dropDown__content, dropDown__button } = handles

  const [showMore, setShowMore] = useState<boolean>(false)
   const numberOfWordsBase = 10;
  const text = "Sin duda alguna nuestro make up es uno de los pasos más importantes en nuestra rutina diaria; desde el maquillaje para ojos hasta los accesorios que necesitas para verte fabulosa. ¿Lo mejor? Lo encuentras todo en un solo lugar."
  const numberOfWordsContent = text.split(" ").length
  const handleSetShowMore= ()=>{
    setShowMore(!showMore)
  }

  const comparison = numberOfWordsContent < numberOfWordsBase

  return (
    <div>
    <div className={`${dropDown__container}`} style={{height:`${comparison?"auto":showMore?"auto":"80px"}`}}>
        <h3 className={`${dropDown__title}`}> Conoce nuestro maquillaje</h3>
        <p className={`${dropDown__content}`}>
          {text}
        </p>
    </div>
    <div onClick={handleSetShowMore} className={`${dropDown__button}`}>{showMore?"Ver menos ▲":"Ver más ▼"}</div>
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
