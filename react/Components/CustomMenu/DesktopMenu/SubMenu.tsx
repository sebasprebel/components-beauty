
import React from 'react';
import {Link} from "vtex.render-runtime"
import { SubMenuProps} from "../../../typings/desktopMenu"
import { useCssHandles } from 'vtex.css-handles'
import sliceArray from "../../../utils/sliceArray"
import orderAlphabetic from "../../../utils/orderAlphabetic"
import SubSubMenu from "./SubSubMenu"
import "./styles.css"

 const CSS_HANDLES = [
   'desktop-submenu__container',
   'desktop-submenu__content',
   "desktop-submenu__link-see-all",
   "desktop-submenu__content--list",
   "desktop-submenu__subcategory--title",
   "desktop-submenu__content--card",
   "desktop-submenu__subcategory--element",
   "desktop-submenu__overflow-layer",
   "not-categorie-element",
   "banner-text"
]

const SubMenu = ({  name, subcategories,href, children, notCategoriesMenu, menuBanner}:any) => {
   const handles = useCssHandles(CSS_HANDLES)

   const subcategoriesToShow = children?.filter((element:any)=>{
     return(
      subcategories?.find((sub:any)=>sub?.id === element?.id)
     )
   })?.sort((a:any,b:any)=>a?.children?.length - b?.children?.length)
    const subSubcategoriesIds = subcategories?.map((test:any)=>test.subSubCategories).flat()
    subcategoriesToShow?.forEach((test2:any)=> {
     return(
       test2.children = test2?.children.filter((test3:any)=>{
         return(
          subSubcategoriesIds.find((test4:any)=>test4 === test3?.id)
         )
       })
     )
   })

   console.log(subcategoriesToShow)

 

  return (
      <div className={`${handles["desktop-submenu__container"]} dn absolute w-100`}>
      <section  className={`${handles["desktop-submenu__content"]} absolute w-100`}>
      <div className={`${handles["desktop-submenu__content--list"]}`}>
        <Link to={href} className={`${handles["desktop-submenu__link-see-all"]}`}>Ver todo {name}</Link>
        
        {notCategoriesMenu?
           orderAlphabetic(sliceArray(children,30))?.map((brand:any)=>{
            return(
              <div className={`${handles["desktop-submenu__content--card"]}`}>
                <Link to={`/${brand.slug}`}>
                  <h5 className={`${handles["not-categorie-element"]}`}>{brand.name}</h5>
                </Link>
              </div>
            )
          })
        :
        subcategoriesToShow?.map(({name, children, href}:SubMenuProps)=>{
          return(
            <div className={`${handles["desktop-submenu__content--card"]}`}>
              <Link to={href}>
                {children.length > 0 ?<h5 className={`${handles["desktop-submenu__subcategory--title"]}`}>{name}</h5>: <li className={`${handles["desktop-submenu__subcategory--element"]}`}>{name}</li>}
              </Link>
             <SubSubMenu children={children}/>
            </div>
          )
        })
        }
      </div>
      <div>
        <a href={menuBanner?.link}>
        <img src={menuBanner?.image} alt="Banner image" />
        <p className={`${handles["banner-text"]}`}>{menuBanner?.text}</p>
        </a>
      
      </div>
        
    </section>
    </div>
  )
}


export default SubMenu
