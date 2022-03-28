import React, { useEffect, useState } from 'react'
import { useCssHandles } from 'vtex.css-handles'
import { MenuItemProps } from "../../../typings/customMenu"
import { useQuery } from 'react-apollo';
import getDepartments from "../../../Queries/getDepartments.gql"
import sliceArray from "../../../utils/sliceArray"
import MenuItem from "./MenuItem"
import SubMenu from "./SubMenu"
import "./styles.css"

const CSS_HANDLES = [
  'desktop__menu--nav',
  "desktop__menu--list",
  'desktop__menu--highlight-item',
]

interface IcategorySelected {
  categoryNumber: number;
  isSomeCategorySelected: boolean;

}

const DesktopMenu = () => {
  const handles = useCssHandles(CSS_HANDLES)

  const [departments, setDepartments] = useState<any>([])
  const [categorySelected, setCategorySelected] = useState<IcategorySelected>({
    categoryNumber: 0,
    isSomeCategorySelected: false
  })
  const [subMenuToShow, setSubMenuToShow] = useState<any>({})
  const [isActive,setIsActive]= useState<boolean>(false)

  const { data } = useQuery(getDepartments)

  const handleClick = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setCategorySelected({
      categoryNumber: Number(e.target.dataset.id),
      isSomeCategorySelected: true
    })
    setIsActive(true)
  }

  const handleLeave = (): void => {
    setCategorySelected({ ...categorySelected, isSomeCategorySelected: false }) 
  }

  useEffect(() => {
    setDepartments(data.categories[0]?.children)
  }, [data])

  useEffect(() => {
    const subMenuSelected = data?.categories[0]?.children?.find((e: any) => e.id === categorySelected.categoryNumber)
    setSubMenuToShow(subMenuSelected)
  }, [categorySelected])

  return (
    <div className="relative flex justify-center w-100">
      <nav className={`${handles["desktop__menu--nav"]}`}>
        <ul className={`${handles["desktop__menu--list"]} flex`}>
          {sliceArray(departments)?.map(({ name, href, id }: MenuItemProps) => {
            return (

              <MenuItem
                name={name}
                href={href}
                id={id}
                handleClick={handleClick}
                isActive={isActive}
              />
            )
          })}
          <MenuItem
            name="Marcas"
            href="/marcas"
            id={1000}
            handleClick={handleClick}
            isActive={isActive}
          />
          <MenuItem
            name="Sale"
            href="/sale"
            id={10001}
            handleClick={handleClick}
            isLinkItem={true}
            isHighlight={true}
            isActive={isActive}
          />
        </ul>
      </nav>
      {categorySelected.isSomeCategorySelected && <SubMenu subMenuToShow={subMenuToShow} name={subMenuToShow?.name} href={subMenuToShow?.href} handleLeave={handleLeave} children={subMenuToShow?.children} />}
    </div>

  )
}

DesktopMenu.schema = {
  title: 'Menú custom',
  type: 'object',
  properties: {
    text: {
      title: 'Texto',
      description: 'Texto que aparecerá en el copyright',
      type: 'string',
    }
  },
}

export default DesktopMenu
