import React, {useState, useEffect}from 'react'
import { useRuntime } from 'vtex.render-runtime'
import { useQuery } from 'react-apollo';
import getDepartments from "../../Queries/getDepartments.gql"
import {
  useSearchPage,
} from 'vtex.search-page-context/SearchPageContext'
// import { Link } from 'vtex.render-runtime'
// import { useCssHandles } from 'vtex.css-handles'



// const CSS_HANDLES = [
//   'responsiveImageContainer',
//   'responsiveImageLink',
//   'responsiveImage',
// ]

const SearchInfo = () => {
  // const handles = useCssHandles(CSS_HANDLES)
  const [dataToShow,setDataToShow]=useState({
    name:"",
    metaTagDescription:"",
  })
  const { data } = useQuery(getDepartments)
  const {  searchQuery:{variables:{selectedFacets}} } = useSearchPage()
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
  
  console.log(dataToShow)

  return (
    <div>
      <h3>{dataToShow?.name}</h3>
      <p>{dataToShow?.metaTagDescription}</p>
    </div>
    
  )
  
}

SearchInfo.schema = {
  title: 'Search header',
  type: 'object',
}

export default SearchInfo
