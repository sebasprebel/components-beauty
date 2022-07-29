import React from 'react'
import { useCssHandles } from 'vtex.css-handles'

import MenuItem from './MenuItem'
import './styles.css'

const CSS_HANDLES = [
  'desktop__menu',
  'desktop__menu--nav',
  'desktop__menu--list',
]

const DesktopMenu = (navItems: any) => {
  const handles = useCssHandles(CSS_HANDLES)

  return (
    <div
      className={`relative flex justify-center w-100 ${handles.desktop__menu}`}
    >
      <nav className={`${handles['desktop__menu--nav']}`}>
        <ul className={`${handles['desktop__menu--list']} flex`}>
          {navItems?.navItems?.length > 0
            ? navItems?.navItems?.map(
                ({
                  id,
                  menuItems,
                  menuBanner,
                  name,
                  isHighlight,
                  isLink,
                  href,
                  highlightTitle,
                }: any) => {
                  return (
                    <MenuItem
                      key={id}
                      id={id}
                      menuBanner={menuBanner}
                      name={name}
                      isHighlight={isHighlight}
                      isLink={isLink}
                      href={href}
                      menuItems={menuItems}
                      highlightTitle={highlightTitle}
                    />
                  )
                }
              )
            : null}
        </ul>
      </nav>
    </div>
  )
}

DesktopMenu.schema = {
  title: 'Menu Desktop',
  type: 'object',
  properties: {
    navItems: {
      title: 'Ítems de navegación',
      type: 'array',
      items: {
        type: 'object',
        properties: {
          name: {
            title: 'Nombre del ítem de navegación',
            type: 'string',
          },
          href: {
            title: 'Link al que redirige el ítem',
            type: 'string',
          },
          isHighlight: {
            title: 'El ítem es destacado',
            type: 'boolean',
          },
          isLink: {
            title: 'El ítem redirige a una página',
            type: 'boolean',
          },
          highlightTitle: {
            title: 'El título del submenú es destacado',
            type: 'boolean',
          },
          menuItems: {
            title: 'Items del menú para mostrar(headers)',
            type: 'array',
            items: {
              type: 'object',
              properties: {
                name: {
                  title: 'Nombre del ítem',
                  type: 'string',
                },
                href: {
                  title: 'Link al que redirige el ítem',
                  type: 'string',
                },
                subItems: {
                  title: 'Sub ítems del menú (contenido de cada ítem del menú)',
                  type: 'array',
                  items: {
                    type: 'object',
                    properties: {
                      name: {
                        title: 'Nombre del sub ítem',
                        type: 'string',
                      },
                      href: {
                        title: 'Link al que redirige el sub ítem',
                        type: 'string',
                      },
                    },
                  },
                },
              },
            },
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
              text: {
                title: 'Texto del Banner',
                type: 'string',
              },
            },
          },
        },
      },
    },
  },
}

export default DesktopMenu
