
import React from 'react';
import {Link} from "vtex.render-runtime"
import { useCssHandles } from 'vtex.css-handles'
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
   "banner-text",
   "banner-container",
   "banner-content"
]

const SubMenu = ({  name, menuItems,href,menuBanner}:any) => {
   const handles = useCssHandles(CSS_HANDLES)

 

  return (
      <div className={`${handles["desktop-submenu__container"]} dn absolute w-100`}>
      <section  className={`${handles["desktop-submenu__content"]} absolute w-100`}>
      <div className={`${handles["desktop-submenu__content--list"]}`}>
        <Link to={href} className={`${handles["desktop-submenu__link-see-all"]}`}>Ver todo {name}</Link>

        {menuItems?.map(({name, subItems, href}:any)=>{
          return(
            <div className={`${handles["desktop-submenu__content--card"]}`}>
              <Link to={href}>
                <h5 className={`${handles["desktop-submenu__subcategory--title"]}`}>{name}</h5>
              </Link>
             <SubSubMenu subItems={subItems}/>
            </div>
          )
        })}

      </div>
      <div className={`${handles["banner-container"]}`}>
        <a className={`${handles["banner-content"]}`} href={menuBanner?.link}>
        <img src={menuBanner?.image} alt="Banner image" />
        <p className={`${handles["banner-text"]}`}>{menuBanner?.text}</p>
        </a>
      </div>
        
    </section>
    </div>
  )
}


export default SubMenu
