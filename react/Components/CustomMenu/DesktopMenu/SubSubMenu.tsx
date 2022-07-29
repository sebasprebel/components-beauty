import React from 'react'
import { Link } from 'vtex.render-runtime'
import { useCssHandles } from 'vtex.css-handles'
import './styles.css'

const CSS_HANDLES = ['desktop-submenu__subcategory--element']

const SubSubMenu = ({ subItems }: any) => {
  const handles = useCssHandles(CSS_HANDLES)

  return (
    <ul>
      {subItems?.map(({ name, href }: any) => {
        return (
          <li
            key={href}
            className={`${handles['desktop-submenu__subcategory--element']}`}
          >
            <Link to={href}>{name}</Link>
          </li>
        )
      })}
    </ul>
  )
}

export default SubSubMenu
