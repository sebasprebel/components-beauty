import React from 'react';
import { Link } from "vtex.render-runtime"
import { useCssHandles } from 'vtex.css-handles'

import SubMenu from "./SubMenu"
import "./styles.css"

const CSS_HANDLES = [
  'desktop-menu__item',
  "highlight"
]

const MenuItem = ({id, menuBanner, menuItems, name, isHighlight,isLink, href, highlightTitle}: any) => {
   const handles = useCssHandles(CSS_HANDLES)

  return (
    <>
       {isLink?
        <li data-id={id} className={`${handles["desktop-menu__item"]} ${isHighlight ? handles["highlight"] :""}`}>
        <Link to={href}>{name}</Link>
        {menuItems?.length > 0 ?<SubMenu
          menuBanner={menuBanner} 
          name={name}
          highlightTitle={highlightTitle}
          href={href}
          menuItems={menuItems}/>: null}
    </li>
       :
       <li data-id={id} className={`${handles["desktop-menu__item"]} ${isHighlight ? handles["highlight"] :""}`}>
          {name}
          {menuItems?.length > 0 ?<SubMenu
            menuBanner={menuBanner} 
            name={name}
            highlightTitle={highlightTitle}
            href={href}
            menuItems={menuItems}/>: null}
      </li>
      }
    </>
  )
}


export default MenuItem
