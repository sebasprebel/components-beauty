import React from 'react';
// import { Link } from "vtex.render-runtime"
import { useQuery } from 'react-apollo'
// import { useCssHandles } from 'vtex.css-handles'
import getCategory from "../../../Queries/getCategory.gql"
// import SubMenu from "./SubMenu"
import "./styles.css"

// const CSS_HANDLES = [
//   'desktop-menu__item',
//   "highlight"
// ]

const MenuItem = ({id}: any) => {
  // const handles = useCssHandles(CSS_HANDLES)
  const test = parseInt(id)
  console.log(typeof test)
  const data = useQuery(getCategory, {
    variables: {
      id: parseInt(id)
    },
  })

  console.log(data)
  return (
    <>
     
          {/* <li data-id={id} className={`${handles["desktop-menu__item"]}`}>
          {name}
          <SubMenu children={children} name={name} href={href}/>
          </li>
       */}
    </>

  )
}


export default MenuItem
