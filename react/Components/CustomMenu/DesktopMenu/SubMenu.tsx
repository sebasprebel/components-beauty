
import React from 'react';
import {Link} from "vtex.render-runtime"
import { SubCategoriesProps,submenuItemsProps} from "../../../typings/customMenu"
import { useCssHandles } from 'vtex.css-handles'
import orderAlphabetic from "../../../utils/orderAlphabetic"
import sliceArray from "../../../utils/sliceArray"
import "./styles.css"

 const CSS_HANDLES = [
   'desktop-submenu__container',
   'desktop-submenu__content',
   "desktop-submenu__link-see-all",
   "desktop-submenu__content--list",
   "desktop-submenu__subcategory--title",
   "desktop-submenu__content--card",
   "desktop-submenu__subcategory--element",
   "desktop-submenu__overflow-layer"
]

const SubMenu = ({ subMenuToShow, name, href, handleLeave}:SubCategoriesProps) => {
   const handles = useCssHandles(CSS_HANDLES)
  return (
      <div className={`${handles["desktop-submenu__container"]} absolute w-100`}>
      <section  className={`${handles["desktop-submenu__content"]} absolute w-100`}>
      <div className={`${handles["desktop-submenu__content--list"]}`}>
        <Link to={href} className={`${handles["desktop-submenu__link-see-all"]}`}>Ver todo {name}</Link>
        {sliceArray(subMenuToShow?.children,4)?.map(({name, children, href}:SubCategoriesProps)=>{
          return(
            <div className={`${handles["desktop-submenu__content--card"]}`}>
              <Link to={href}>
                <h5 className={`${handles["desktop-submenu__subcategory--title"]}`}>{name}</h5>
              </Link>
              <ul>
                {sliceArray(orderAlphabetic(children),5)?.map(({name, href}:submenuItemsProps)=>{
                  return(
                    <li className={`${handles["desktop-submenu__subcategory--element"]}`}>
                      <Link to={href}>{name}</Link>
                    </li>
                  )
                })}
              </ul>
            </div>
          )
        })}
      </div>
    </section>
    <div className={`${handles["desktop-submenu__overflow-layer"]}`} onClick={handleLeave}></div>
    </div>
  
    
    
  )
}

SubMenu.schema = {
  title: 'Copyright custom',
  type: 'object',
  properties: {
    text: {
      title: 'Texto',
      description: 'Texto que aparecerá en el copyright',
      type: 'string',
    }
  },
}

export default SubMenu
