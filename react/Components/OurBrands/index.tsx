import React from 'react'
import HeaderBrands from "./HeaderBrands"
import LetterList from "./LetterList"
import getBrands from "../../Queries/getBrands.gql"
import { useQuery } from 'react-apollo'
// import { Link } from 'vtex.render-runtime'
// import { useCssHandles } from 'vtex.css-handles'




// const CSS_HANDLES = [
//   'cardLayout',
//   'cardLayout__content',
//   'cardLayout__image',
//   'cardLayout__secundary_image',
//   'cardLayout__text',
//   "highlight__item",
//   "highlight__link"
// ]
let alphabet = String.fromCharCode(...Array(123).keys()).slice(97).toUpperCase().split('')

const OurBrands = () => {
  // const handles = useCssHandles(CSS_HANDLES)
  const {data} = useQuery(getBrands)
  
  const activeBrands = data?.brands?.filter((brand:any)=> brand?.active === true)


  return (
    <>
    <HeaderBrands/>
    {alphabet.map((letter:any)=><LetterList letter={letter} list={activeBrands}/>)}
    
    </>
   
  )
}

export default OurBrands
