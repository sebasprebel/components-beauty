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

  return (
    <div className={`relative flex justify-center w-100 ${handles["desktop__menu"]}`}>
      <nav className={`${handles["desktop__menu--nav"]}`}>
        <ul className={`${handles["desktop__menu--list"]} flex`}>
          {categories?.categories?.length > 0 ? categories?.categories?.map(({id, menuBanner, isNotCategoryItem, name, isHighlight, isLink, href}: any) => {
            return (
               <MenuItem
                key={id}
                id={id}
                menuBanner={menuBanner}
                name={name}
                isNotCategoryItem={isNotCategoryItem}
                isHighlight={isHighlight}
                isLink={isLink}
                href={href}
              />
            )
          }):null}
          
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
      title: 'Categorías en el menú',
      type: 'array',
      items: {
        type: 'object',
        properties: {
          name:{
            title: 'Nombre del ítem',
            type: 'string'
          },
          id: {
            title: 'ID de la categoría (Categoría de segundo nivel)',
            type: 'number',
          },
          isNotCategoryItem:{
            title: 'No es un ítem de categoría',
            type: 'boolean'
          },
          isHighlight:{
            title: 'El ítem es destacado',
            type: 'boolean'
          },
          isLink:{
            title: 'El ítem es un link',
            type: 'boolean'
          },
          href:{
            title: 'Ruta a redirigir',
            type: 'string'
          },
          menuBanner: {
            title: 'Banner del menú para la categoría',
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
                text:{
                  title: 'Texto',
                  type: 'string',
                }
              }, 
          },
        },
      },
    },
  },
}

export default DesktopMenu
