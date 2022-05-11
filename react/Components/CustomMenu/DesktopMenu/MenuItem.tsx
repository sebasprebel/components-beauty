import React from 'react';
import { Link } from "vtex.render-runtime"
import { useQuery } from 'react-apollo'
import { useCssHandles } from 'vtex.css-handles'
import getDepartments from "../../../Queries/getDepartments.gql"
import getBrands from "../../../Queries/getBrands.gql"
import SubMenu from "./SubMenu"
import "./styles.css"

const CSS_HANDLES = [
  'desktop-menu__item',
  "highlight"
]

const MenuItem = ({id, menuBanner, subcategories,isNotCategoryItem, name, isLink, isHighlight, href}: any) => {
   const handles = useCssHandles(CSS_HANDLES)
   const {data} = useQuery(getDepartments)
   const brands = useQuery(getBrands)
   const categories = data?.categories[0]?.children
   const categoryToShow = categories?.find((category:any)=> category?.id === id)

   const brandsToShow = brands?.data?.brands.filter((brand:any)=>brand?.active === true)
   
  return (
    <>
     {isLink?
     <li className={`${handles["desktop-menu__item"]} ${isHighlight?handles["highlight"]:""}`}>
       <Link to={href}>{name}</Link>
     </li>
     :
     categoryToShow?
      <li data-id={id} className={`${handles["desktop-menu__item"]}`}>
          {name}
          <SubMenu
            menuBanner={menuBanner} 
            children={categoryToShow?.children} 
            name={categoryToShow?.name} 
            href={categoryToShow?.href}
            subcategories={subcategories}/>
            
      </li>:
      isNotCategoryItem?
      <li className={`${handles["desktop-menu__item"]}`}>
         {name}
          <SubMenu
            menuBanner={menuBanner} 
            children={brandsToShow} 
            name="Marcas"
            href="/marcas"
            notCategoriesMenu= {true}
            />
            
      </li>:null
     }
    </>

  )
}


export default MenuItem
