import React,{useState, useEffect} from 'react'
import { useCssHandles } from 'vtex.css-handles'
import MenuItem from "./MenuItem"
import SubMenu from "./SubMenu"
import SubMenu2 from "./SubMenu2"


const CSS_HANDLES = [
  "mobile__menu-container",
  'mobile__categories--title',
  "isActive"
]

interface IcategorySelected {
  categoryNumber: number;
  isSomeCategorySelected: boolean;
}

interface ISubCategorySelected {
  subCategoryNumber: number;
  isSomeSubCategorySelected: boolean;
}

const MobileMenu = (navItems:any) => {

  const handles = useCssHandles(CSS_HANDLES)
  const [categorySelected, setCategorySelected] = useState<IcategorySelected>({
    categoryNumber: 0,
    isSomeCategorySelected: false
  })
  const [subCategorySelected, setSubCategorySelected] = useState<ISubCategorySelected>({
    subCategoryNumber: 0,
    isSomeSubCategorySelected: false
  })
  const [subMenuToShow, setSubMenuToShow] = useState<any>({})
  const [subMenu2ToShow, setSubMenu2ToShow] = useState<any>({})
  const [back, setBack] = useState<boolean>(false)
  const [back2, setBack2] = useState<boolean>(false)


  useEffect(() => {
    const subMenuSelected = navItems?.navItems?.find((element: any) => element.id === categorySelected.categoryNumber)
    setSubMenuToShow(subMenuSelected)
  }, [categorySelected])

  useEffect(() => {
    const subMenu2Selected = subMenuToShow?.menuItems?.find((element: any) => element.id === subCategorySelected.subCategoryNumber)
    setSubMenu2ToShow(subMenu2Selected)
  }, [subCategorySelected,subMenuToShow])

  const handleShow = (e: React.ChangeEvent<HTMLInputElement>): void => {
    e.preventDefault()
    setCategorySelected({
      categoryNumber: Number(e.target.dataset.id),
      isSomeCategorySelected: true
    })
    setBack(true)
  }

  const handleShowSub = (e: React.ChangeEvent<HTMLInputElement>): void => {
    e.preventDefault()
    setSubCategorySelected({
      subCategoryNumber: Number(e.currentTarget.dataset.id),
      isSomeSubCategorySelected: true
    })
    setBack2(true)
  }

  return (
    <section className={`w-100 ${handles["mobile__menu-container"]}`}>
      <h3 className={`${handles["mobile__categories--title"]}`}>Categorías</h3>
      <MenuItem listOfCategories={navItems?.navItems} handleShow={handleShow}/>
      {categorySelected.isSomeCategorySelected && <SubMenu subMenuToShow={subMenuToShow} name={subMenuToShow?.name} href={subMenuToShow?.href} children={subMenuToShow?.menuItems} handleShowSub={handleShowSub} back={back} setBack={setBack} highlightTitle={subMenuToShow?.highlightTitle}/>}

      {subCategorySelected.isSomeSubCategorySelected && <SubMenu2 subMenu2ToShow={subMenu2ToShow} name={subMenu2ToShow?.name} href={subMenu2ToShow?.href}  children={subMenu2ToShow?.subItems} back2={back2} setBack2={setBack2}/>}
    </section>
  )
}

MobileMenu.schema = {
  title: 'Menu Mobile',
  type: 'object',
  properties: {
    navItems: {
      title: 'Ítems de navegación',
      type: 'array',
      items: {
        type: 'object',
        properties: {
          name:{
            title: 'Nombre del ítem de navegación',
            type: 'string'
          },
          href:{
            title: 'Link al que redirige el ítem',
            type: 'string'
          },
          isHighlight:{
            title: 'El ítem es destacado',
            type: 'boolean'
          },
          isLink:{
            title: 'El ítem redirige a una página',
            type: 'boolean'
          },
          highlightTitle:{
            title: 'El título del submenú es destacado',
            type: 'boolean'
          },
          menuItems:{
            title:"Items del menú para mostrar(headers)",
            type: 'array',
            items:{
              type: 'object',
              properties: {
                name:{
                  title: 'Nombre del ítem',
                  type: 'string',
                },
                href:{
                  title: 'Link al que redirige el ítem',
                  type: 'string',
                },
                subItems:{
                  title: 'Sub ítems del menú (contenido de cada ítem del menú)',
                  type: "array",
                  items:{
                    type: 'object',
                    properties: {
                      name:{
                        title: 'Nombre del sub ítem',
                        type: 'string',
                      },
                      href:{
                        title: 'Link al que redirige el sub ítem',
                        type: 'string',
                      },
                    }
                  }
                }
            }
          }
          },
          menuBanner: {
            title: 'Banner del menú',
            type: 'object',
              properties: {
                link: {
                  title: 'Link al que redirige el Banner',
                  type: 'string',
                },
                image: {
                  title: 'imagen',
                  type: 'string',
                  widget: {
                    'ui:widget': 'image-uploader',
                  },
                },
                text:{
                  title: 'Texto del Banner',
                  type: 'string',
                }
              }, 
          },
        },
      },
    },
  },
}

export default MobileMenu