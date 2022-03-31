import React from 'react';
import { Link } from "vtex.render-runtime"
import { useCssHandles } from 'vtex.css-handles'
import { MenuItemProps } from "../../../typings/customMenu"
import "./styles.css"

const CSS_HANDLES = [
  'desktop-menu__item',
  "highlight",
  "isActive"
]

const MenuItem = ({ name, id, handleClick, isLinkItem, href, isHighlight}: MenuItemProps) => {
  const handles = useCssHandles(CSS_HANDLES)

  return (
    <>
      {isLinkItem ?
        <li className={`${handles["desktop-menu__item"]} ${isHighlight?handles["highlight"]:""}`}>
          <Link to={href}>{name}</Link>

        </li>
        :
        <li data-id={id} onClick={handleClick} className={`${handles["desktop-menu__item"]}`}>
          {name}
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
