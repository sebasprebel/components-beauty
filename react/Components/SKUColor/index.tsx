
import React, {useEffect, useState} from 'react';
import colorSKU from "../../utils/colorSKU"
import { useRuntime } from 'vtex.render-runtime'

const SKUColor = () => {
  const { deviceInfo } = useRuntime()
  const [filterColors,setFilterColors] =useState([])
  const [filterColorsMobile,setFilterColorsMobile] =useState([])
  const [productCardColors,setProductCardColors] =useState({
    elements: [],
    size:0
  })


  typeof document === 'undefined'?
    null
    :
    useEffect(()=>{
      const pageProduct =Array.from(document?.querySelectorAll(".prebel-components-0-x-containerLayout--detail-product__info--container .vtex-store-components-3-x-skuSelectorItemTextValue"))
      pageProduct.length > 0
      ?
        null
      :
        deviceInfo.type === "desktop"
      ?
          filterColors.length===0?
          setFilterColors(Array.from(document?.querySelectorAll(".vtex-search-result-3-x-filter__container--specificationFilter_33 .vtex-checkbox__label")))
        :
          null
      :
      filterColorsMobile.length===0?
      setFilterColorsMobile(Array.from(document?.querySelectorAll(".vtex-search-result-3-x-accordionFilterOpen--gama-colores .vtex-checkbox__label")))
    :
      null
    },[filterColors,filterColorsMobile])

    useEffect(()=>{
      setProductCardColors({size:Array.from(document?.querySelectorAll(".vtex-store-components-3-x-skuSelectorItemTextValue")).length,
         elements:Array.from(document?.querySelectorAll(".vtex-store-components-3-x-skuSelectorItemTextValue"))})
     
    },[productCardColors.size])


    filterColors.forEach((e:any)=>{
      colorSKU(e)
    })
    filterColorsMobile.forEach((e:any)=>{
      colorSKU(e)
    })
    productCardColors.elements?.forEach((e:any)=>{
      colorSKU(e)
    })
  
  return (<></>)
}

export default SKUColor




