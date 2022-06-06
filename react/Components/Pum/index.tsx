import React, { useEffect, useState } from 'react'
import { useCssHandles } from 'vtex.css-handles'
import { useProduct } from 'vtex.product-context'

type PUM = {
  classes: string
  specificationName: string
}

type Content = {
  value: number
  unit: string
}

const CSS_HANDLES = ['PUM']

const PUM = ({ classes, specificationName }: PUM) => {
  const handles = useCssHandles(CSS_HANDLES)
  const productContextValue = useProduct()
  const [content, setContent] = useState<Content>()

  
  useEffect(() => {
    const specifications =
      productContextValue?.product?.specificationGroups?.find(
        (e:any) => e.name === 'allSpecifications'
      )

    const contenido = specifications?.specifications?.find(
      (e:any) => e.name === specificationName
    )
    
    console.log(contenido)

    const valueUnit: string[] | undefined = contenido?.values[0]?.split(',')
    const sellingPrice =
      productContextValue?.selectedItem?.sellers[0]?.commertialOffer?.Price

    const unity:any = (valueUnit?.[0]?.split(":"))?.[1]
    const value:any = (valueUnit?.[1]?.split(":"))?.[1]
    const unitySanitized = unity?.replace(/(["])/g, '')
    const valueSanitized = value?.replace(/(["])/g, '')

    if (valueUnit && sellingPrice) {
      const value = valueSanitized
      const unit = unitySanitized
      setContent({ value: value, unit })
    }
  }, [productContextValue])


  return (
    <div>
      {content?.value && (
        <p className={`${handles.PUM} ${classes || ''}`}>
          <b>PUM: </b>{`$${content?.value} por ${content?.unit}`}
        </p>
      )}
    </div>
  )
}

PUM.schema = {
  title: 'Precio por Unidad de Medida',
  type: 'object',
  properties: {
    specificationName: {
      title: 'Nombre de la especificación',
      type: 'string',
    },
  },
}

export default PUM