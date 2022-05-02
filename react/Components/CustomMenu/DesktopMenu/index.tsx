import React from 'react'
import { useCssHandles } from 'vtex.css-handles'
import MenuItem from "./MenuItem"
import "./styles.css"

const CSS_HANDLES = [
  'desktop__menu',
  'desktop__menu--nav',
  "desktop__menu--list",
  'desktop__menu--highlight-item',
]


const DesktopMenu = (categories:any) => {
  const handles = useCssHandles(CSS_HANDLES)
  console.log(categories)
  return (
    <div className={`relative flex justify-center w-100 ${handles["desktop__menu"]}`}>
      <nav className={`${handles["desktop__menu--nav"]}`}>
        <ul className={`${handles["desktop__menu--list"]} flex`}>
          {categories?.categories?.length > 0 ? categories?.categories?.map(({id}: any) => {
            return (

              <MenuItem
                key={id}
                id={id}
              />
            )
          }):<p>Pruebita</p>}
        </ul>
      </nav>
        
    </div>

  )
}

//Falta organizar el schema
DesktopMenu.schema = {
  title: 'Menu Desktop',
  type: 'object',
  properties: {
    categories: {
      title: 'Departamentos en el menú',
      type: 'array',
      items: {
        type: 'object',
        properties: {
          id: {
            title: 'ID de la categoría (Categoría de segundo nivel)',
            type: 'number',
          },
          menuBanners: {
            title: 'Banners del menú para la categoría',
            type: 'array',
            items: {
              type: 'object',
              properties: {
                link: {
                  title: 'Link',
                  type: 'string',
                },
                image: {
                  title: 'imagen',
                  type: 'string',
                  widget: {
                    'ui:widget': 'image-uploader',
                  },
                },
              },
            },
          },
        },
      },
    },
  },
}

export default DesktopMenu
