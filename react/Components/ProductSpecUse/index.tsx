
import React from 'react';
import { useProduct } from 'vtex.product-context'
import { useCssHandles } from 'vtex.css-handles'


const CSS_HANDLES = ['spec__content']

const ProductSpecUse = () => {

  const handles = useCssHandles(CSS_HANDLES)
  const {product:{specificationGroups}} = useProduct()
  const contentAttributes = specificationGroups?.find((specGroup:any)=>specGroup?.name=== "allSpecifications")
  const modeOfUse = contentAttributes?.specifications?.find((specGroup:any)=>specGroup?.name=== "Modo de Uso")
  const modeOfUseContent = modeOfUse?.values
  return (
     <div>
       {modeOfUseContent? modeOfUseContent?.map((value:any)=>{
         return(
          <div className={`${handles["spec__content"]}`}>
            {value && value}
          </div>
         )
       }):<p>Este producto no tiene modo de uso especificado.</p>}
     </div>
  )
}

ProductSpecUse.schema = {
  title: 'Especificación modo de uso',
  type: 'object'
}

export default ProductSpecUse
