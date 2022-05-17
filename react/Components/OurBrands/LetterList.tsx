import React from 'react'
import { useCssHandles } from 'vtex.css-handles'




const CSS_HANDLES = [
  'brandList__container',
  'brandList__letter',
  'brandList__list',
]


const LetterList = ({letter, list}:any) => {
  const handles = useCssHandles(CSS_HANDLES)
  const filterBrandsByLetter = (letter:string, list:any)=>{
    return(
      list?.filter((brand:any)=> brand?.name?.startsWith(`${letter}`))
    )
  }
  const filteredList =filterBrandsByLetter(letter, list)
  return (
    <>
     {filteredList?.length > 0 && filteredList ?
      <div className={`${handles["brandList__container"]}`} id={`${letter}`}>
      <p className={`${handles["brandList__letter"]}`}>{letter}</p>
       <ul className={`${handles["brandList__list"]}`}>
         {filteredList?.map((element:any)=><li><a href={`/${element.slug}`}>{element.name}</a></li>)}
       </ul>
    </div>:null
     }</>
  )
}

export default LetterList