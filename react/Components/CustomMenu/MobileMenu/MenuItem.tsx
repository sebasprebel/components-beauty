import React from 'react'
import {Link} from "vtex.render-runtime"
import { useCssHandles } from 'vtex.css-handles'
import "./styles.css"

const CSS_HANDLES = [
  'arrow__container',
  "highlight",
  "isActive",
  "highLight-mobile"
]

const MenuCategories = ({listOfCategories, handleShow}:any) => {
  const handles = useCssHandles(CSS_HANDLES)

  return (
    <ul>
     {listOfCategories?.map(({id,name,href,isHighlight, menuItems}:any)=>{
        return(
          <div className={"flex justify-between"}>
            <li key={id}>
              <Link to={href} className={`${isHighlight? handles["highLight-mobile"]:null}`}>{name}</Link>
            </li>
            <div data-id={id} onClick={handleShow} className={`${menuItems?.length > 0 ? handles["arrow__container"]:null}`}>
            </div>
          </div>
        )
     })}
    </ul>

  )
}


export default MenuCategories