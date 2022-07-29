import React from 'react'
import { Link } from 'vtex.render-runtime'
// import orderAlphabetic from "../../../utils/orderAlphabetic"
import { useCssHandles } from 'vtex.css-handles'
import './styles.css'

const CSS_HANDLES = [
  'subMenu__container',
  'arrow__container',
  'mobile__categories--title',
  'isActive',
  'hide',
  'mobile__see-all',
  'back-btn',
  'highlightTitle__mobile',
]

const SubMenu = ({
  subMenuToShow,
  name,
  href,
  handleShowSub,
  back,
  setBack,
  highlightTitle,
}: any) => {
  const handles = useCssHandles(CSS_HANDLES)

  const handleBack = () => {
    setBack(false)
  }

  return (
    <section
      style={{ display: `${back ? 'block' : 'none'}` }}
      className={`${handles.subMenu__container}`}
    >
      <div>
        <div className="flex">
          <button onClick={handleBack} className={`${handles['back-btn']}`} />
          <h3 className={`${handles['mobile__categories--title']}`}>{name} </h3>
        </div>

        <Link
          to={href}
          className={`${handles['mobile__see-all']} ${
            highlightTitle ? handles.highlightTitle__mobile : ''
          }`}
        >
          {name === 'Marcas' ? `Ver todas las ${name}` : `Ver todo ${name}`}
        </Link>
        {subMenuToShow?.menuItems?.map(
          ({ name: _name, id, subItems, href: _href }: any, i: number) => {
            return (
              <div key={`sub_menuItems_${i}`} className="flex justify-between">
                <li>
                  <Link to={_href || href}>{_name || name}</Link>
                </li>
                <button
                  data-id={id}
                  onClick={handleShowSub}
                  className={`${handles.arrow__container} ${
                    subItems?.length > 0 ? '' : handles.hide
                  } bn bg-transparent`}
                />
              </div>
            )
          }
        )}
      </div>
    </section>
  )
}

export default SubMenu
