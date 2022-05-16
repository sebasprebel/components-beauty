import React,{useEffect} from 'react'
import HeaderBrands from "./HeaderBrands"
import LetterList from "./LetterList"
import getBrands from "../../Queries/getBrands.gql"
import { useQuery } from 'react-apollo'
import { useCssHandles } from 'vtex.css-handles'




const CSS_HANDLES = [
  'to-up-btn'
]

let alphabet = String.fromCharCode(...Array(123).keys()).slice(97).toUpperCase().split('')

const OurBrands = () => {
  const handles = useCssHandles(CSS_HANDLES)
  const {data} = useQuery(getBrands)
  
  const activeBrands = data?.brands?.filter((brand:any)=> brand?.active === true)

  const handleUp =()=>{
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  useEffect(()=>{
    let header:any = document?.querySelector(".vtex-sticky-layout-0-x-container")
    header.style.position = "static"
    return ( ()=>{
      header.style.position = "fixed"
   });
  },[])

  return (
    <>
    <HeaderBrands/>
    {alphabet.map((letter:any)=><LetterList letter={letter} list={activeBrands}/>)}
    <a href="#" onClick={handleUp} className={`${handles["to-up-btn"]}`}>
      <img src="/arquivos/up-arrow-white.svg"></img>
    </a>
    </>
   
  )
}

export default OurBrands
