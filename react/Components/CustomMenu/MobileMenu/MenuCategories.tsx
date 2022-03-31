import React from 'react'
import {Link} from "vtex.render-runtime"
import slideArray from "../../../utils/sliceArray"
import { useCssHandles } from 'vtex.css-handles'
import "./styles.css"

const CSS_HANDLES = [
  'arrow__container',
  "highlight",
  "isActive"
]

const MenuCategories = ({listOfCategories, handleShow}:any) => {
  const handles = useCssHandles(CSS_HANDLES)
  return (
    <ul>
     {slideArray(listOfCategories,6)?.map((e:any)=>{
        return(
          <div className="flex justify-between">
            <li key={e.id} >
              <Link to={e.href}>{e.name}</Link>
            </li>
            <div data-id={e.id} onClick={handleShow} className={`${handles["arrow__container"]}`}>
            </div>
             
          </div>
          
          
        )
     })}
    </ul>

  )
}

//Falta organizar el schema
MenuCategories.schema = {
  title: 'Menú custom',
  type: 'object',
  properties: {
    text: {
      title: 'Texto',
      description: '',
      type: 'string',
    }
  },
}

export default MenuCategories
