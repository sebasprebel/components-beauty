
import React from 'react';
import {Link} from "vtex.render-runtime"
// import orderAlphabetic from "../../../utils/orderAlphabetic"
import sliceArray from "../../../utils/sliceArray"
import { useCssHandles } from 'vtex.css-handles'
import "./styles.css"


const CSS_HANDLES = [
  "subMenu__container",
  'arrow__container',
  "highlight",
  "mobile__categories--title",
  "hide",
  "mobile__see-all",
  "back-btn"
]

const SubMenu2= ({ subMenu2ToShow, name, href, back2, setBack2}:any) => {

  const handles = useCssHandles(CSS_HANDLES)

  const handleBack2 = ()=>{
    setBack2(false)
  }

  return (

      <section style={{display:`${back2?"block":"none"}`}} className={`${handles["subMenu__container"]}`}>
      <div >
      <div className="flex">
          <button onClick={handleBack2} className={`${handles["back-btn"]}`}></button>
          <h3 className={`${handles["mobile__categories--title"]}`}>{name} </h3>
        </div>
        <Link to={href} className={`${handles["mobile__see-all"]}`}>Ver todo {name}</Link>
        {sliceArray(subMenu2ToShow?.children,4)?.map(({name, href}:any)=>{
          return(
            <li>
            <Link to={href}>{name}</Link>
          </li>
          )
        })}
      </div>
    </section>

  
    
    
  )
}

SubMenu2.schema = {
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

export default SubMenu2
