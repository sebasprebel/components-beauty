
import React, {useEffect, useState} from 'react';
import colorSKU from "../../utils/colorSKU"
import { useRuntime } from 'vtex.render-runtime'
import {
  useSearchPage,
} from 'vtex.search-page-context/SearchPageContext'

const SKUColor = () => {
  const {  searchQuery } = useSearchPage()
  const { page, deviceInfo, route:{canonicalPath}} = useRuntime()
  const [filterColors,setFilterColors] =useState([])
  //  const [filterOpened,setFilterOpened] =useState(false)
  const [productCardColors,setProductCardColors] =useState({
    elements: [],
    size:0
  })

  typeof document === 'undefined'?
    null
  :
    useEffect(()=>{
      page === "store.product"
      ?
        null
      :
      deviceInfo.type ==="desktop"
      ?
        setFilterColors(Array.from(document?.querySelectorAll(".vtex-search-result-3-x-filter__container--specificationFilter_33 .vtex-checkbox__label")))
      :
        setFilterColors(Array.from(document?.querySelectorAll(".vtex-search-result-3-x-accordionFilterOpen--gama-colores .vtex-checkbox__label")))
       
    },[searchQuery])

    useEffect(()=>{
console.log(canonicalPath)

      setProductCardColors({size:Array.from(document?.querySelectorAll(".vtex-store-components-3-x-skuSelectorItemTextValue")).length,
         elements:Array.from(document?.querySelectorAll(".vtex-store-components-3-x-skuSelectorItemTextValue"))}) 
    },[canonicalPath])


    filterColors.forEach((e:any)=>{
      colorSKU(e)
    })
    // filterColorsMobile.forEach((e:any)=>{
    //   colorSKU(e)
    // })
    productCardColors.elements?.forEach((e:any)=>{
      colorSKU(e)
    })
  
  return (<></>)
}

export default SKUColor




