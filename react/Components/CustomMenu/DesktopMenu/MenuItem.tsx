import React from 'react';
import { Link } from "vtex.render-runtime"
import { useCssHandles } from 'vtex.css-handles'
import { MenuItemProps } from "../../../typings/desktopMenu"
import SubMenu from "./SubMenu"
import "./styles.css"

const CSS_HANDLES = [
  'desktop-menu__item',
  "highlight"
]

const MenuItem = ({ name, id, isLinkItem, href, isHighlight, children, notCategorieItem}: MenuItemProps) => {
  const handles = useCssHandles(CSS_HANDLES)
  return (
    <>
      {isLinkItem ?
        <li className={`${handles["desktop-menu__item"]} ${isHighlight?handles["highlight"]:""}`}>
          <Link to={href}>{name}</Link>
        </li>
        :notCategorieItem?
          <li data-id={id} className={`${handles["desktop-menu__item"]}`}>
          {name}
          <SubMenu children={children} name={name} href={href} notCategoriesMenu={true}/>
          </li>
        :
          <li data-id={id} className={`${handles["desktop-menu__item"]}`}>
          {name}
          <SubMenu children={children} name={name} href={href}/>
          </li>
      } 
    </>

  )
}

MenuItem.schema = {
  title: 'Menú ítem',
  type: 'object',
  properties: {
    text: {
      title: 'Texto',
      description: '',
      type: 'string',
    }
  },
}

export default MenuItem
