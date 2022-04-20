import React from 'react'
import { useCssHandles } from 'vtex.css-handles'
import { MenuItemProps} from "../../../typings/desktopMenu"
import { useQuery } from 'react-apollo';
import getDepartments from "../../../Queries/getDepartments.gql"
import getBrands from "../../../Queries/getBrands.gql"
import sliceArray from "../../../utils/sliceArray"
import MenuItem from "./MenuItem"
import "./styles.css"

const CSS_HANDLES = [
  'desktop__menu--nav',
  "desktop__menu--list",
  'desktop__menu--highlight-item',
]


const DesktopMenu = () => {
  const handles = useCssHandles(CSS_HANDLES)
  const { data } = useQuery(getDepartments)
  const brandsData = useQuery(getBrands)
  const categories = data?.categories[0]?.children
  const brands = brandsData?.data?.brands
  const activeBrands = brands?.filter((brand:any)=>brand.active === true)
  return (
    <div className="relative flex justify-center w-100">
      <nav className={`${handles["desktop__menu--nav"]}`}>
        <ul className={`${handles["desktop__menu--list"]} flex`}>
          {sliceArray(categories)?.map(({ name, href, id, children }: MenuItemProps) => {
            return (

              <MenuItem
                key={id}
                name={name}
                href={href}
                id={id}
                children={children}
              />
            )
          })}
          <MenuItem
            name="Marcas"
            href="/marcas"
            id={1000}
            children={activeBrands}
            notCategorieItem={true}
          />
          <MenuItem
            name="Sale"
            href="/sale"
            id={10001}
            isLinkItem={true}
            isHighlight={true}
          />
        </ul>
      </nav>
        
    </div>

  )
}

//Falta organizar el schema
DesktopMenu.schema = {
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

export default DesktopMenu
