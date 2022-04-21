
import React, {useEffect, useState} from 'react';
import colorSKU from "../../utils/colorSKU"
import { useRuntime } from 'vtex.render-runtime'
import {
  useSearchPage,
} from 'vtex.search-page-context/SearchPageContext'

const SKUColor = () => {
  const {  searchQuery } = useSearchPage()
  const { page} = useRuntime()
  const [filterColors,setFilterColors] =useState([])
  // const [filterColorsMobile,setFilterColorsMobile] =useState([])
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
        setFilterColors(Array.from(document?.querySelectorAll(".vtex-search-result-3-x-filter__container--specificationFilter_33 .vtex-checkbox__label")))
       
    },[searchQuery])

    console.log({filterColors})
    useEffect(()=>{
      setProductCardColors({size:Array.from(document?.querySelectorAll(".vtex-store-components-3-x-skuSelectorItemTextValue")).length,
         elements:Array.from(document?.querySelectorAll(".vtex-store-components-3-x-skuSelectorItemTextValue"))}) 
    },[])


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




