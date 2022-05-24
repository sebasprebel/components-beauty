import React, {useState, useEffect}from 'react'
import { useRuntime } from 'vtex.render-runtime'
import { useQuery } from 'react-apollo';
import getDepartments from "../../Queries/getDepartments.gql"
import {
  useSearchPage,
} from 'vtex.search-page-context/SearchPageContext'
// import { Link } from 'vtex.render-runtime'
import { useCssHandles } from 'vtex.css-handles'
import "./styles.css"



const CSS_HANDLES = [
  'search-info__container',
  'search-info__title',
  'search-info__content',
  'search-info__bullet',
  'search-info__bullets--container',
]

const SearchInfo = () => {
  const handles = useCssHandles(CSS_HANDLES)
  const [dataToShow,setDataToShow]=useState({
    name:"",
    metaTagDescription:"",
    children:[]
  })
  const { data } = useQuery(getDepartments)
  const {  searchQuery:{variables:{selectedFacets}}} = useSearchPage()
  const categories = data?.categories[0]?.children
  const subCategories = data?.categories[0]?.children?.map((categorie:any)=>{
    return(
      categorie?.children
    )
  }).flat()
  const facetsSelected = selectedFacets?.filter((facet:any)=>facet.key=== "c")
  const currentCategory = facetsSelected[facetsSelected.length-1]
  const {page} = useRuntime()

  useEffect(()=>{

  if(page === "store.search#category"){
    setDataToShow(categories?.filter((categorie:any)=>{

      return categorie?.name.toLowerCase()===currentCategory?.value.toLowerCase()
    })[0])
  }else{
    if(page === "store.search#subcategory"){
      setDataToShow(subCategories?.filter((categorie:any)=>categorie?.name.toLowerCase()===currentCategory?.value.toLowerCase())[0])
    }
  }

  },[selectedFacets])
  


  return (
    <div className={`${handles["search-info__container"]}`}>
      <h3 className={`${handles["search-info__title"]}`}>{dataToShow?.name}</h3>
      <p className={`${handles["search-info__content"]}`}>{dataToShow?.metaTagDescription}</p>
      <ul className={`${handles["search-info__bullets--container"]}`}>
        {dataToShow?.children?.map((chil:any)=>{
          return(
            <li className={`${handles["search-info__bullet"]}`}>
              <a href={chil.href}> {chil?.name}</a>
            </li>
          )
        })}
      </ul>
    </div>
    
  )
  
}

SearchInfo.schema = {
  title: 'Search header',
  type: 'object',
}

export default SearchInfo
