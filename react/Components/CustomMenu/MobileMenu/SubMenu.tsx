
import React from 'react';
import {Link} from "vtex.render-runtime"
// import orderAlphabetic from "../../../utils/orderAlphabetic"
import sliceArray from "../../../utils/sliceArray"
import { useCssHandles } from 'vtex.css-handles'
import "./styles.css"

const CSS_HANDLES = [
  "subMenu__container",
  'arrow__container',
  "mobile__categories--title",
  "isActive",
  "hide",
  "mobile__see-all",
  "back-btn"
]


const SubMenu = ({ subMenuToShow, name, href,handleShowSub, back, setBack}:any) => {
  const handles = useCssHandles(CSS_HANDLES)


  const handleBack = ()=>{
    setBack(false)
  }

  return (
      <section style={{display:`${back?"block":"none"}`}} className={`${handles["subMenu__container"]}`}>
      <div>
        <div className="flex">
          <button onClick={handleBack} className={`${handles["back-btn"]}`}></button>
          <h3 className={`${handles["mobile__categories--title"]}`}>{name} </h3>
        </div>
        
        <Link to={href} className={`${handles["mobile__see-all"]}`}>Ver todo {name}</Link>
        {sliceArray(subMenuToShow?.children,4)?.map(({name, id, children, href}:any)=>{
          return(
            <div className="flex justify-between">
                <li>
                  <Link to={href}>{name}</Link>
                </li>
                <div data-id={id} onClick={handleShowSub} className={`${handles["arrow__container"]} ${children?.length > 0? "":handles["hide"]}`}></div>
            </div>
            
          )
        })}
      </div>
    </section>

  
    
    
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
