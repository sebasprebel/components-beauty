import React from 'react'
import { useProduct } from 'vtex.product-context'
import { useCssHandles } from 'vtex.css-handles'

const CSS_HANDLES = ['spec__content']

const ProductSpecUse = () => {
  const minify = (s: string) => {
    return s
      ?.replace(/>[\r\n ]+</g, '><')
      ?.replace(/(<.*?>)|\s+/g, (_: string, $1: string) => $1 || ' ')
      ?.trim()
  }

  const handles = useCssHandles(CSS_HANDLES)
  const { product } = useProduct()
  const contentAttributes = product?.specificationGroups?.find(
    (specGroup: any) => specGroup?.name === 'allSpecifications'
  )

  const modeOfUse = contentAttributes?.specifications?.find(
    (specGroup: any) => specGroup?.name === 'Modo de Uso'
  )

  const modeOfUseContent = modeOfUse?.values

  return (
    <div>
      {modeOfUseContent ? (
        modeOfUseContent?.map((value: string, i: number) => {
          return (
            <div
              key={`modeOfUseContent_${i}`}
              dangerouslySetInnerHTML={{
                __html: minify(`${value}`),
              }}
              className={`${handles.spec__content}`}
            />
          )
        })
      ) : (
        <p>Este producto no tiene modo de uso especificado.</p>
      )}
    </div>
  )
}

ProductSpecUse.schema = {
  title: 'Especificación modo de uso',
  type: 'object',
}

export default ProductSpecUse
