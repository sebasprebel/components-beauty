
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
   "not-categorie-element"
]

const SubMenu = ({  name, href, children, notCategoriesMenu}:SubMenuProps) => {
   const handles = useCssHandles(CSS_HANDLES)
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
        sliceArray(children,4)?.map(({name, children, href}:SubMenuProps)=>{
          return(
            <div className={`${handles["desktop-submenu__content--card"]}`}>
              <Link to={href}>
                <h5 className={`${handles["desktop-submenu__subcategory--title"]}`}>{name}</h5>
              </Link>
             <SubSubMenu children={children}/>
            </div>
          )
        })
        }
      </div>
    </section>
    {/* <div className={`${handles["desktop-submenu__overflow-layer"]}`} ></div> */}
    </div>
  
    
    
  )
}

SubMenu.schema = {
  title: 'Submenú',
  type: 'object',
  properties: {
    text: {
      title: 'Texto',
      description: 't',
      type: 'string',
    }
  },
}

export default SubMenu
