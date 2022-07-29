import React, { useEffect, useState } from 'react'
import { useProduct } from 'vtex.product-context'
import { useSearchPage } from 'vtex.search-page-context/SearchPageContext'

const SKUColor = () => {
  const searchContext = useSearchPage()
  const { product } = useProduct()

  const [filterColors, setFilterColors] = useState([])
  const [productCardColors, setProductCardColors] = useState([])
  const [productColors, setProductColors] = useState([])

  useEffect(() => {
    const productColorsList = product?.skuSpecifications?.filter(
      (e: any) => e?.field?.name === 'Tonos'
    )[0]?.values

    const listOfCardColors = searchContext?.searchQuery?.products?.map(
      (e: any) => {
        return e?.properties?.find((p: any) => p?.name === 'Tonos')?.values
      }
    )

    const cardColors = listOfCardColors?.flat()

    if (productColorsList) {
      setProductColors(
        productColorsList?.map((e: any) => [
          e?.name,
          e?.name?.replace(/([.,#+~ñ[\](){}])/g, '-')?.toLowerCase(),
        ])
      )
    }

    if (cardColors) {
      setProductCardColors(
        cardColors?.map((e: any) => [
          e,
          e?.replace(/([.,#+~ñ[\](){}])/g, '-')?.toLowerCase(),
        ])
      )
    }

    const colorsFilter = searchContext?.filters?.find(
      (e: any) => e?.key === 'gama-colores'
    )

    if (colorsFilter) {
      setFilterColors(
        colorsFilter?.facets
          ?.map((e: any) => e?.name)
          ?.filter((e: any) => !!e)
          ?.map((e: any) => [
            e,
            e?.replace(/([.,#+~ñ[\](){}])/g, '-')?.toLowerCase(),
          ])
      )
    }
  }, [searchContext, product])

  return (
    <>
      <style>
        {filterColors?.map((e: any) => {
          if (e[0]?.startsWith('#')) {
            return `.vtex-search-result-3-x-filterItem--${e[1]} .vtex-checkbox__label{
            background:${e[0]};
            }
  
            .vtex-search-result-3-x-filterAccordionItemBox--${e[1]} .vtex-checkbox__label{
              background:${e[0]};
              }
            
          `
          }

          return `.vtex-search-result-3-x-filterItem--${e[1]} .vtex-checkbox__label{
            background:url(/arquivos/${e[0]}.jpg) center no-repeat;
            background-size: cover;
            }
  
            .vtex-search-result-3-x-filterAccordionItemBox--${e[1]} .vtex-checkbox__label{
              background:url(/arquivos/${e[0]}.jpg) center no-repeat;
              background-size: cover;
              }
            
          `
        })}
      </style>

      <style id="otro">
        {productCardColors?.map((e: any) => {
          if (e[0]?.startsWith('#')) {
            return ` .vtex-store-components-3-x-skuSelectorItem-${e[1]} .vtex-store-components-3-x-skuSelectorItemTextValue{
              background:${e[0]};
              }
          `
          }

          return ` .vtex-store-components-3-x-skuSelectorItem-${e[1]} . vtex-store-components-3-x-skuSelectorItemTextValue{
          background:url(/arquivos/${e[0]}.jpg) center no-repeat;
          background-size: cover;
            }
        `
        })}
      </style>
      <style id="otro">
        {productColors?.map((e: any) => {
          if (e[0]?.startsWith('#')) {
            return ` .vtex-store-components-3-x-skuSelectorItem-${e[1]} .vtex-store-components-3-x-skuSelectorItemTextValue{
              background:${e[0]};
              }
          `
          }

          return ` .vtex-store-components-3-x-skuSelectorItem-${e[1]} .vtex-store-components-3-x-skuSelectorItemTextValue{
            background:url(/arquivos/${e[0]}.jpg) center no-repeat;
            background-size: cover;
              }
          `
        })}
      </style>
    </>
  )
}

export default SKUColor
